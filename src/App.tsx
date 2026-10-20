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

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const proceedToCheckout = (_planName?: string) => {
    window.location.href = 'https://pay.wiapy.com/8DCci2o90bBY';
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Pacote Básico') {
      setIsUpgradeModalOpen(true);
      return;
    }
    proceedToCheckout(planName);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#EDE6D8] bg-textured-blue text-[#1E2530] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. FAIXA SUPERIOR */}
      <TopBar />

      <main id="conteudo-principal" className="flex-1 flex flex-col">
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
            onSelectBonusPackage={() => setIsUpgradeModalOpen(false)}
            onContinueBasicPackage={() => setIsUpgradeModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
