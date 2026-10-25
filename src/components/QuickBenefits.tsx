import React, { useEffect, useRef, useState } from 'react';

export const QuickBenefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Estados de revelação para cada um dos blocos (IntersectionObserver)
  // 0: Título
  // 1: Parágrafo 1
  // 2: Parágrafo 2
  // 3: Parágrafo 3
  // 4: Subtítulo Benefícios
  // 5: Benefício 1
  // 6: Benefício 2
  // 7: Benefício 3
  const [revealed, setRevealed] = useState<boolean[]>(() => Array(8).fill(false));

  const blockRefs = useRef<(HTMLElement | null)[]>([]);

  const benefitsList = [
    'Acesso vitalício (acesse quando quiser)',
    'Atualizações semanais do material',
    'Sem senha nem e-mail para entrar',
  ];

  // 1. INTERSECTION OBSERVER para revelar blocos uma única vez
  useEffect(() => {
    // Checa preferência de movimento reduzido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setRevealed(Array(8).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-block-idx'));
            if (!isNaN(index)) {
              setRevealed((prev) => {
                if (prev[index]) return prev;
                const next = [...prev];
                next[index] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2. SCROLL TRACKING com requestAnimationFrame & transform: translateY
  useEffect(() => {
    let animationFrameId: number;
    let isTicking = false;

    const updateScrollProgress = () => {
      isTicking = false;

      if (!cardRef.current || !trackRef.current || !thumbRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Inicia quando o topo da seção entra na metade inferior da tela
      // e finaliza quando o fundo do card sai pelo topo
      const startTrigger = windowHeight * 0.75;
      const endTrigger = windowHeight * 0.25;

      const totalDistance = rect.height + (startTrigger - endTrigger);
      const currentProgress = (startTrigger - rect.top) / totalDistance;

      const clamped = Math.max(0, Math.min(1, currentProgress));

      const trackHeight = trackRef.current.clientHeight;
      const thumbHeight = thumbRef.current.clientHeight;
      const maxTranslate = Math.max(0, trackHeight - thumbHeight);

      const targetY = clamped * maxTranslate;

      thumbRef.current.style.transform = `translate3d(0, ${targetY}px, 0)`;
    };

    const onScroll = () => {
      if (!isTicking) {
        isTicking = true;
        animationFrameId = window.requestAnimationFrame(updateScrollProgress);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // Execução inicial
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Helper para os marcadores laterais dos 5 pontos-chave
  // 0: Título, 1: P1, 2: P2, 3: P3, 4: Benefícios
  const isMilestoneActive = (milestoneIdx: number) => {
    if (milestoneIdx === 0) return revealed[0];
    if (milestoneIdx === 1) return revealed[1];
    if (milestoneIdx === 2) return revealed[2];
    if (milestoneIdx === 3) return revealed[3];
    return revealed[4] || revealed[5];
  };

  return (
    <section 
      ref={sectionRef}
      id="beneficios" 
      aria-label="Leia antes de adquirir o material"
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 bg-transparent relative overflow-hidden"
    >
      {/* ESTILOS CSS PUROS PARA ANIMAÇÕES COM TRANSFORM E OPACITY */}
      <style>{`
        @keyframes floatEmotionSlow1 {
          0% { transform: translate3d(0, 30px, 0); opacity: 0; }
          25% { opacity: 0.12; }
          75% { opacity: 0.12; }
          100% { transform: translate3d(0, -90px, 0); opacity: 0; }
        }
        @keyframes floatEmotionSlow2 {
          0% { transform: translate3d(0, 40px, 0); opacity: 0; }
          25% { opacity: 0.14; }
          75% { opacity: 0.14; }
          100% { transform: translate3d(0, -110px, 0); opacity: 0; }
        }
        @keyframes floatEmotionSlow3 {
          0% { transform: translate3d(0, 25px, 0); opacity: 0; }
          25% { opacity: 0.10; }
          75% { opacity: 0.10; }
          100% { transform: translate3d(0, -85px, 0); opacity: 0; }
        }
        @keyframes checkJump {
          0% { transform: scale(0.75); }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        .check-jump-anim {
          animation: checkJump 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .emotion-floating,
          .check-jump-anim {
            animation: none !important;
          }
          .motion-safe-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* EMOÇÕES FLUTUANDO (BEM SUTIS, 10% A 14% OPACIDADE, LATERAIS) */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        {/* Emoção 1: Feliz (Lateral Esquerda Topo) */}
        <div 
          className="emotion-floating absolute left-2 sm:left-6 top-[15%] text-[#781428]"
          style={{ animation: 'floatEmotionSlow1 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Emoção 2: Calma / Serene (Lateral Direita Centro) */}
        <div 
          className="emotion-floating absolute right-3 sm:right-8 top-[38%] text-[#781428]"
          style={{ animation: 'floatEmotionSlow2 15s cubic-bezier(0.4, 0, 0.2, 1) 3s infinite' }}
        >
          <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15h8" strokeLinecap="round" />
            <path d="M8 9.5c.5-.5 1.5-.5 2 0M14 9.5c.5-.5 1.5-.5 2 0" strokeLinecap="round" />
          </svg>
        </div>

        {/* Emoção 3: Surpresa (Lateral Esquerda Fundo) */}
        <div 
          className="emotion-floating absolute left-3 sm:left-8 top-[65%] text-[#781428]"
          style={{ animation: 'floatEmotionSlow3 14s cubic-bezier(0.4, 0, 0.2, 1) 1.5s infinite' }}
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="15" r="2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Emoção 4: Empatia / Acolhimento (Lateral Direita Topo) */}
        <div 
          className="emotion-floating absolute right-2 sm:right-7 top-[18%] text-[#781428]"
          style={{ animation: 'floatEmotionSlow1 16s cubic-bezier(0.4, 0, 0.2, 1) 5s infinite' }}
        >
          <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14.5c1 1 2 1.5 4 1.5s3-.5 4-1.5" strokeLinecap="round" />
            <circle cx="9" cy="9.5" r="1" fill="currentColor" />
            <circle cx="15" cy="9.5" r="1" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-[880px] mx-auto relative">
        
        {/* CARD PRINCIPAL COM RESERVA DE ESPAÇO PARA BARRA LATERAL */}
        <div 
          ref={cardRef}
          className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 pr-9 sm:pr-14 md:pr-16 border border-[#E0D3C1] shadow-[0_10px_35px_rgba(30,37,48,0.08)]"
        >
          
          {/* BARRA DE ROLAGEM PERSONALIZADA (LATERAL DIREITA) */}
          <div 
            className="absolute right-3 sm:right-5 top-10 bottom-10 w-2.5 sm:w-3 flex flex-col items-center pointer-events-none select-none"
            aria-hidden="true"
          >
            {/* Trilha da Barra */}
            <div 
              ref={trackRef}
              className="relative w-1 sm:w-1.5 h-full bg-[#E0D3C1]/50 rounded-full"
            >
              {/* Polegar (Thumb) Vinho que desliza apenas com transform: translateY */}
              <div 
                ref={thumbRef}
                className="absolute top-0 left-0 w-full h-10 sm:h-12 bg-[#781428] rounded-full shadow-[0_2px_8px_rgba(120,20,40,0.35)] will-change-transform"
                style={{ transform: 'translate3d(0, 0px, 0)' }}
              />

              {/* 5 Pontinhos/Marcadores que acendem com o scroll */}
              {[0, 1, 2, 3, 4].map((idx) => {
                const active = isMilestoneActive(idx);
                return (
                  <div 
                    key={idx}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-500 ease-out flex items-center justify-center"
                    style={{
                      top: `${idx * 25}%`,
                      transform: `translate(-50%, -50%) scale(${active ? 1.25 : 0.85})`,
                      backgroundColor: active ? '#781428' : '#D1C4B2',
                      boxShadow: active ? '0 0 6px rgba(120, 20, 40, 0.45)' : 'none',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* BLOCO 0: TÍTULO DA SEÇÃO */}
          <div 
            ref={(el) => { blockRefs.current[0] = el; }}
            data-block-idx="0"
            className="text-center mb-6 sm:mb-8 transition-all duration-700 ease-out will-change-transform"
            style={{
              opacity: revealed[0] ? 1 : 0,
              transform: revealed[0] ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
            }}
          >
            <h2 
              id="heading-leia-antes"
              className="title-3d-float-2 text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight"
            >
              Leia antes de <span className="text-[#781428]">adquirir o material.</span>
            </h2>
            {/* Traço decorativo: desenha crescendo do centro para as pontas via transform: scaleX */}
            <div 
              className="w-14 h-1 bg-[#781428] mx-auto mt-3 rounded-full transition-transform duration-700 ease-out origin-center will-change-transform" 
              style={{
                transform: revealed[0] ? 'scaleX(1)' : 'scaleX(0)',
                transitionDelay: '250ms',
              }}
            />
          </div>

          {/* PARÁGRAFOS CORRIDOS */}
          <div className="space-y-4 text-base sm:text-[17px] md:text-[18px] text-[#334155] leading-relaxed">
            
            {/* BLOCO 1: PARÁGRAFO 1 */}
            <p 
              ref={(el) => { blockRefs.current[1] = el; }}
              data-block-idx="1"
              className="transition-all duration-700 ease-out will-change-transform"
              style={{
                opacity: revealed[1] ? 1 : 0,
                transform: revealed[1] ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
              }}
            >
              Com o{' '}
              {/* Marca-texto animado em 'Passaporte das Emoções' */}
              <span className="relative inline-block px-1 py-0.5 rounded font-bold text-[#1E2530]">
                <span 
                  className="absolute inset-0 bg-[#781428]/12 rounded transition-transform duration-700 ease-out origin-left pointer-events-none will-change-transform"
                  style={{
                    transform: revealed[1] ? 'scaleX(1)' : 'scaleX(0)',
                    transitionDelay: '300ms',
                  }}
                />
                <span className="relative">Passaporte das Emoções</span>
              </span>{' '}
              você tem acesso a mais de 200 emoções para trabalhar com as crianças. Cada folha trabalha uma emoção diferente (tanto positivas quanto negativas). O material foi pensado para o seu paciente se expressar de forma mais leve e criativa. É só escolher e imprimir, sem ficar horas criando atividades do zero.
            </p>
            
            {/* BLOCO 2: PARÁGRAFO 2 */}
            <p 
              ref={(el) => { blockRefs.current[2] = el; }}
              data-block-idx="2"
              className="transition-all duration-700 ease-out will-change-transform"
              style={{
                opacity: revealed[2] ? 1 : 0,
                transform: revealed[2] ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
              }}
            >
              O material vem organizado por pastas com temas, e as emoções já estão nomeadas para você, o que traz mais clareza e controle ao planejar os atendimentos. Sem burocracia: não precisa de e-mail nem de senha para entrar.
            </p>
            
            {/* BLOCO 3: PARÁGRAFO 3 */}
            <p 
              ref={(el) => { blockRefs.current[3] = el; }}
              data-block-idx="3"
              className="text-center text-base sm:text-[18px] md:text-[19px] text-[#1E2530] pt-2 transition-all duration-700 ease-out will-change-transform"
              style={{
                opacity: revealed[3] ? 1 : 0,
                transform: revealed[3] ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
              }}
            >
              {/* Marca-texto animado na frase em negrito */}
              <span className="relative inline-block px-1.5 py-0.5 rounded">
                <span 
                  className="absolute inset-0 bg-[#781428]/12 rounded transition-transform duration-700 ease-out origin-left pointer-events-none will-change-transform"
                  style={{
                    transform: revealed[3] ? 'scaleX(1)' : 'scaleX(0)',
                    transitionDelay: '350ms',
                  }}
                />
                <span className="relative">
                  O pagamento é feito apenas uma vez.{' '}
                  <strong className="font-bold text-[#1E2530]">Não é uma assinatura.</strong>
                </span>
              </span>
            </p>
          </div>

          {/* BENEFÍCIOS EM GARANTIR O MATERIAL */}
          <div className="mt-6 sm:mt-8 pt-2">
            
            {/* BLOCO 4: SUBTÍTULO DOS BENEFÍCIOS */}
            <h3 
              ref={(el) => { blockRefs.current[4] = el; }}
              data-block-idx="4"
              className="text-base sm:text-[18px] md:text-[19px] font-bold text-[#1E2530] mb-3.5 text-center sm:text-left transition-all duration-700 ease-out will-change-transform"
              style={{
                opacity: revealed[4] ? 1 : 0,
                transform: revealed[4] ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
              }}
            >
              Benefícios em garantir o material
            </h3>

            {/* LISTA LIMPA COM CHECKS EM SEQUÊNCIA E PULINHO SUAVE */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {benefitsList.map((benefit, index) => {
                const itemIdx = 5 + index;
                const isItemRevealed = revealed[itemIdx] || revealed[4];

                return (
                  <li 
                    key={index}
                    ref={(el) => { blockRefs.current[itemIdx] = el; }}
                    data-block-idx={itemIdx}
                    className="flex items-center gap-2.5 transition-all duration-600 ease-out will-change-transform"
                    style={{
                      opacity: isItemRevealed ? 1 : 0,
                      transform: isItemRevealed ? 'translate3d(0, 0, 0)' : 'translate3d(-12px, 0, 0)',
                      transitionDelay: `${index * 140}ms`,
                    }}
                  >
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-[#16A34A] shrink-0 ${
                        isItemRevealed ? 'check-jump-anim' : ''
                      }`}
                      style={{
                        animationDelay: `${index * 140 + 150}ms`,
                      }}
                      viewBox="0 0 20 20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      aria-hidden="true"
                    >
                      <polyline points="4 11 8 15 16 6" />
                    </svg>
                    <span className="text-sm sm:text-[15px] font-bold text-[#1E2530] leading-snug">
                      {benefit}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
