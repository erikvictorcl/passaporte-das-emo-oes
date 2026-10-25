import React, { useEffect, useRef, useState } from 'react';

// Data limite fixa da oferta (Brasília: -03:00)
const TARGET_DEADLINE = '2026-10-25T23:59:59-03:00';

export const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number } | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // 1. Contagem regressiva real até o encerramento
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(TARGET_DEADLINE).getTime();
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft(null);
        return;
      }

      setIsExpired(false);
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ hours: totalHours, minutes });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 10000);

    return () => clearInterval(timer);
  }, []);

  // 2. Barrinha de progresso na borda inferior da faixa (acompanha o usuário e a rolagem)
  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateScrollProgress = () => {
      if (!trackRef.current || !thumbRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const trackWidth = trackRect.width || trackRef.current.offsetWidth || 0;
      if (trackWidth <= 0) return;

      // 18% da largura da trilha
      const thumbWidth = trackWidth * 0.18;
      const maxTranslate = Math.max(0, trackWidth - thumbWidth);

      // Elementos que podem estar rolando a página
      const docEl = document.documentElement;
      const body = document.body;
      const scrollingEl = document.scrollingElement || docEl || body;
      const root = document.getElementById('root');

      // Scroll atual (tenta todas as propriedades disponíveis)
      const winY = window.pageYOffset || window.scrollY || 0;
      const docY = docEl ? docEl.scrollTop : 0;
      const bodyY = body ? body.scrollTop : 0;
      const scrollerY = scrollingEl ? scrollingEl.scrollTop : 0;
      const rootY = root ? root.scrollTop : 0;

      const currentScroll = Math.max(winY, docY, bodyY, scrollerY, rootY);

      // Altura total do documento e altura da tela
      const scrollHeight = Math.max(
        docEl ? docEl.scrollHeight : 0,
        body ? body.scrollHeight : 0,
        scrollingEl ? scrollingEl.scrollHeight : 0,
        root ? root.scrollHeight : 0
      );

      const clientHeight = window.innerHeight || (docEl ? docEl.clientHeight : 0) || (body ? body.clientHeight : 0);

      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, currentScroll / maxScroll)) : 0;

      const posicao = progress * maxTranslate;

      thumbRef.current.style.transform = `translate3d(${posicao}px, 0, 0)`;
      (thumbRef.current.style as any).webkitTransform = `translate3d(${posicao}px, 0, 0)`;
    };

    const onScrollOrResize = () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = window.requestAnimationFrame(updateScrollProgress);
    };

    // Escuta scroll em todas as fases e fontes (document capture, window, touch, wheel)
    document.addEventListener('scroll', onScrollOrResize, { passive: true, capture: true });
    window.addEventListener('scroll', onScrollOrResize, { passive: true, capture: true });
    window.addEventListener('touchmove', onScrollOrResize, { passive: true });
    window.addEventListener('wheel', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('load', onScrollOrResize, { passive: true });
    window.addEventListener('orientationchange', onScrollOrResize, { passive: true });

    // Atualização imediata
    updateScrollProgress();
    const raf1 = window.requestAnimationFrame(updateScrollProgress);
    const timeout1 = setTimeout(updateScrollProgress, 100);
    const timeout2 = setTimeout(updateScrollProgress, 500);

    // ResizeObserver para recalcular quando imagens e seções carregarem
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        onScrollOrResize();
      });
      resizeObserver.observe(document.documentElement);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    return () => {
      document.removeEventListener('scroll', onScrollOrResize, { capture: true });
      window.removeEventListener('scroll', onScrollOrResize, { capture: true });
      window.removeEventListener('touchmove', onScrollOrResize);
      window.removeEventListener('wheel', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('load', onScrollOrResize);
      window.removeEventListener('orientationchange', onScrollOrResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.cancelAnimationFrame(raf1);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <>
      {/* 1. FAIXA SUPERIOR DE AVISO (FICA NO TOPO DA PÁGINA, NÃO SEGUE O ROLAMENTO) */}
      <aside 
        id="top-notification-bar"
        aria-label="Aviso de encerramento da oferta"
        className="w-full bg-[#560D1B] text-white pt-2 sm:pt-2.5 pb-2.5 sm:pb-3 px-0 text-center shadow-xs"
      >
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-x-2 sm:gap-x-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide uppercase leading-tight whitespace-nowrap px-2.5 sm:px-4">
          {isExpired || !timeLeft ? (
            <p>
              <span>OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO!</span>
            </p>
          ) : (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
              <span>
                OFERTA ENCERRA HOJE • <span className="text-white font-black">25/10</span>
              </span>

              {/* Pílula com fundo BRANCO (#fff), texto em VINHO em negrito */}
              <span 
                className="inline-flex items-center px-2.5 py-[3px] sm:py-1 rounded-[8px] sm:rounded-[10px] bg-white text-[#560D1B] text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs font-bold tracking-normal normal-case shadow-xs tabular-nums"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                Faltam {timeLeft.hours}h {timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}min
              </span>
            </div>
          )}
        </div>
      </aside>

      {/* 2. BARRINHA DE PROGRESSO QUE SEGUE O ROLAMENTO (STICKY NO TOPO DA TELA) */}
      <div 
        ref={trackRef} 
        aria-hidden="true"
        className="sticky top-0 z-50 w-full h-[4px] bg-[#3a0a14] pointer-events-none select-none"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          backgroundColor: '#3a0a14',
          zIndex: 9999,
          overflow: 'hidden',
        }}
      >
        <div 
          ref={thumbRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '18%',
            backgroundColor: '#f3e6d3',
            borderRadius: '9999px',
            transform: 'translate3d(0px, 0, 0)',
            WebkitTransform: 'translate3d(0px, 0, 0)',
            transition: 'none',
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
};
