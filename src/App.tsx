import React, { useState, useEffect, startTransition, lazy, Suspense } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { TargetAudienceBanner } from './components/TargetAudienceBanner';
import { QuickBenefits } from './components/QuickBenefits';
import { MindMapsShowcase } from './components/MindMapsShowcase';
import { IntermediateCTA } from './components/IntermediateCTA';
import { WhatItDelivers } from './components/WhatItDelivers';
import { PricingOffers } from './components/PricingOffers';
import { AccessSteps } from './components/AccessSteps';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { PuzzleBackground } from './components/PuzzleBackground';
import { MindMapItem } from './types';

const MapPreviewModal = lazy(() =>
  import('./components/MapPreviewModal').then((m) => ({ default: m.MapPreviewModal }))
);

const UpgradeModal = lazy(() =>
  import('./components/UpgradeModal').then((m) => ({ default: m.UpgradeModal }))
);

export default function App() {
  const [selectedMap, setSelectedMap] = useState<MindMapItem | null>(null);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Preload UpgradeModal chunk in idle time so opening it is instant
  useEffect(() => {
    const preload = () => {
      import('./components/UpgradeModal');
    };
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(preload, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(preload, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // 3) Revelação suave por rolagem em todas as seções (IntersectionObserver)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const mainEl = document.getElementById('conteudo-principal');
    if (!mainEl) return;

    // Seleciona blocos de conteúdo internos (títulos, subtítulos, cards, passos, depoimentos, caixas)
    const elements = mainEl.querySelectorAll<HTMLElement>(
      'section:not(#beneficios) h1, ' +
      'section:not(#beneficios) h2, ' +
      'section:not(#beneficios) > div > div:first-child, ' +
      'section:not(#beneficios) .grid > div, ' +
      'section:not(#beneficios) .space-y-4 > p, ' +
      'section:not(#beneficios) #passos .space-y-3 > div, ' +
      'section:not(#beneficios) #depoimentos .grid > div, ' +
      'section:not(#beneficios) #garantia > div > div'
    );

    const targets: HTMLElement[] = [];

    elements.forEach((el) => {
      // Regra de Ouro: nunca aplicar em elementos fixos, faixa do topo, botões de compra, links do checkout ou iframes
      if (
        el.closest('#top-notification-bar') ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'A' ||
        el.querySelector('button, a[href*="wiapy"], iframe')
      ) {
        return;
      }

      el.classList.add('reveal-on-scroll');

      // Stagger sequencial de até 150ms entre blocos irmãos
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) => c.classList.contains('reveal-on-scroll'));
        const index = siblings.indexOf(el);
        if (index === 1) el.classList.add('reveal-stagger-1');
        else if (index === 2) el.classList.add('reveal-stagger-2');
        else if (index >= 3) el.classList.add('reveal-stagger-3');
      }

      targets.push(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const proceedToCheckout = (planName?: string) => {
    if (planName === 'Pacote Básico') {
      window.location.href = 'https://pay.wiapy.com/x6RdhmP0BDIZ';
      return;
    }
    window.location.href = 'https://pay.wiapy.com/MHeOiJKlOXoP';
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Pacote Básico') {
      setIsUpgradeModalOpen(true);
      return;
    }
    proceedToCheckout(planName);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#EDE6D8] bg-textured-blue text-[#1E2530] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. FAIXA SUPERIOR */}
      <TopBar />

      <main id="conteudo-principal" className="flex-1 flex flex-col relative overflow-x-hidden">
        {/* 4) QUEBRA-CABEÇAS DISCRETOS NO FUNDO DA PÁGINA (LATERAIS 0-12% E 88-100%) */}
        <PuzzleBackground />

        {/* 2. HERO */}
        <Hero 
          onCtaClick={scrollToOffers}
        />

        {/* FAIXA DE PÚBLICO-ALVO (EM LINHA RETA, SEM BORDAS ARREDONDADAS, CENTRALIZADA ENTRE HERO E PRÓXIMA SEÇÃO) */}
        <TargetAudienceBanner />

        {/* 3. BENEFÍCIOS RÁPIDOS & BOX DE DESTAQUE */}
        <QuickBenefits />

        {/* 4. APRESENTAÇÃO DOS MAPAS MENTAIS POR DENTRO */}
        <MindMapsShowcase />

        {/* 5. CTA INTERMEDIÁRIO */}
        <IntermediateCTA 
          onCtaClick={scrollToOffers}
        />

        {/* 6. CONTEÚDO / O QUE O MATERIAL ENTREGA & FAIXA DE DESTAQUE */}
        <WhatItDelivers />

        {/* 7. SEÇÃO DE OFERTAS (PACOTE BÁSICO & PACOTE COMPLETO) */}
        <PricingOffers 
          onSelectPlan={handleSelectPlan}
        />

        {/* 9. COMO O CLIENTE RECEBERÁ O ACESSO */}
        <AccessSteps />

        {/* 10. DEPOIMENTOS */}
        <Testimonials />

        {/* 11. GARANTIA */}
        <Guarantee />
      </main>

      {/* Rodapé institucional discreto */}
      <footer className="border-t border-[#D0BEA2] py-8 px-4 sm:px-6 bg-[#FAF6EE] text-center text-xs text-[#475569]">
        <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Passaporte das Emoções. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#526075]">
            Material terapêutico infantil para uso dentro e fora da sessão.
          </p>
        </div>
      </footer>

      {/* Modal de Pré-visualização dos Mapas */}
      {selectedMap && (
        <Suspense fallback={null}>
          <MapPreviewModal 
            map={selectedMap}
            onClose={() => setSelectedMap(null)}
            onSelectPlan={scrollToOffers}
          />
        </Suspense>
      )}

      {/* Popup de Upgrade para o Pacote Bônus */}
      {isUpgradeModalOpen && (
        <Suspense fallback={null}>
          <UpgradeModal
            isOpen={isUpgradeModalOpen}
            onClose={() => setIsUpgradeModalOpen(false)}
            onSelectBonusPackage={() => {
              setIsUpgradeModalOpen(false);
              window.location.href = 'https://pay.wiapy.com/TtbTafg3_XD';
            }}
            onContinueBasicPackage={() => {
              setIsUpgradeModalOpen(false);
              window.location.href = 'https://pay.wiapy.com/x6RdhmP0BDIZ';
            }}
          />
        </Suspense>
      )}
    </div>
  );
}
