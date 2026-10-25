import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export interface TestimonialImageItem {
  id: string;
  directUrl: string;
  srcSet: string;
  zoomUrl: string;
  originalLink: string;
  alt: string;
  label: string;
}

export const testimonialList: TestimonialImageItem[] = [
  {
    id: 'dep-1',
    directUrl: '/images/dep-1-360.webp',
    srcSet: '/images/dep-1-360.webp 360w, /images/dep-1-560.webp 560w, /images/dep-1-840.webp 840w',
    zoomUrl: 'https://i.imgur.com/OM1rMNh.jpeg',
    originalLink: 'https://imgur.com/a/oBfUgKX',
    alt: 'Depoimento real de profissional sobre o Passaporte das Emoções',
    label: 'Depoimento 1',
  },
  {
    id: 'dep-2',
    directUrl: '/images/dep-2-360.webp',
    srcSet: '/images/dep-2-360.webp 360w, /images/dep-2-560.webp 560w, /images/dep-2-840.webp 840w',
    zoomUrl: 'https://i.imgur.com/r8X9ONn.jpeg',
    originalLink: 'https://imgur.com/a/LlrH1D9',
    alt: 'Depoimento real elogiando a leveza e criatividade do material no atendimento infantil',
    label: 'Depoimento 2',
  },
  {
    id: 'dep-3',
    directUrl: '/images/dep-3-360.webp',
    srcSet: '/images/dep-3-360.webp 360w, /images/dep-3-560.webp 560w, /images/dep-3-840.webp 840w',
    zoomUrl: 'https://i.imgur.com/3FKnH6e.jpeg',
    originalLink: 'https://imgur.com/a/58UJeXK',
    alt: 'Feedback espontâneo sobre o vínculo e expressão emocional das crianças',
    label: 'Depoimento 3',
  },
  {
    id: 'dep-4',
    directUrl: '/images/dep-4-360.webp',
    srcSet: '/images/dep-4-360.webp 360w, /images/dep-4-560.webp 560w, /images/dep-4-840.webp 840w',
    zoomUrl: 'https://i.imgur.com/XcHINYk.jpeg',
    originalLink: 'https://imgur.com/a/ogCJU3Z',
    alt: 'Relato real sobre a praticidade das atividades prontas na sessão',
    label: 'Depoimento 4',
  },
  {
    id: 'dep-5',
    directUrl: '/images/dep-5-360.webp',
    srcSet: '/images/dep-5-360.webp 360w, /images/dep-5-560.webp 560w, /images/dep-5-840.webp 840w',
    zoomUrl: 'https://i.imgur.com/Sk2Xhkj.jpeg',
    originalLink: 'https://imgur.com/a/pD2TD0g',
    alt: 'Depoimento real recomendando o Passaporte das Emoções',
    label: 'Depoimento 5',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialList.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonialList.length - 1 ? 0 : prev + 1));
  }, []);

  // Touch swipe handlers
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section 
      id="depoimentos"
      aria-label="Depoimentos reais de alunos e profissionais"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-transparent overflow-hidden select-none"
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FCEBED] text-[#781428] px-3.5 py-1.5 rounded-full border border-[#F7C2CC] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="text-base leading-none">💬</span>
            <span>PROVA SOCIAL REAL</span>
          </div>

          <h2 className="title-3d-float-3 text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
            Quem já viu, <span className="text-[#781428]">aprovou</span>
          </h2>

          {/* Rating Badge */}
          <div className="mt-3.5 inline-flex items-center gap-1.5 bg-[#FAF6EE] px-4 py-1.5 rounded-full border border-[#D0BEA2] shadow-xs text-xs sm:text-sm font-bold text-[#1E2530]">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[#781428] ml-1">4.9/5</span>
            <span className="text-[#5A6578] font-normal">&bull; Satisfação comprovada</span>
          </div>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div 
          className="relative w-full max-w-[960px] mx-auto h-[510px] min-[400px]:h-[560px] sm:h-[600px] md:h-[630px] flex items-center justify-center touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Botão Anterior (Design Circular Escuro Fiel à Referência) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#273244] hover:bg-[#1B2433] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.32)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Botão Próximo (Design Circular Escuro Fiel à Referência) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#273244] hover:bg-[#1B2433] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.32)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Stack (Center active, left and right visible behind with click-to-activate) */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonialList.map((item, index) => {
              const total = testimonialList.length;
              let diff = (index - currentIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              // Hide cards that are beyond left/right
              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              let transformClass = '';
              let zIndexClass = 'z-10';
              let opacityClass = 'opacity-35 hover:opacity-70 cursor-pointer filter brightness-95';

              if (isCenter) {
                transformClass = 'translate-x-0 scale-100';
                zIndexClass = 'z-30';
                opacityClass = 'opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.22)] cursor-default filter brightness-100';
              } else if (isLeft) {
                transformClass = '-translate-x-[52%] sm:-translate-x-[64%] md:-translate-x-[72%] scale-[0.82] sm:scale-[0.85]';
                zIndexClass = 'z-10';
              } else if (isRight) {
                transformClass = 'translate-x-[52%] sm:translate-x-[64%] md:translate-x-[72%] scale-[0.82] sm:scale-[0.85]';
                zIndexClass = 'z-10';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) {
                      handlePrev();
                    } else if (isRight) {
                      handleNext();
                    }
                  }}
                  role={isCenter ? 'group' : 'button'}
                  tabIndex={isCenter ? -1 : 0}
                  aria-label={
                    isCenter 
                      ? 'Depoimento em destaque' 
                      : isLeft 
                      ? 'Clique para ir ao depoimento anterior.' 
                      : 'Clique para ir ao próximo depoimento.'
                  }
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-out origin-center w-[250px] min-[400px]:w-[275px] sm:w-[305px] md:w-[325px] ${transformClass} ${zIndexClass} ${opacityClass}`}
                >
                  {/* Smartphone Frame Container */}
                  <div className="relative aspect-[941/1672] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#FAF6EE] border border-[#F7C2CC]/70 shadow-lg">
                    <img
                      src={item.directUrl}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 275px, 325px"
                      width={941}
                      height={1672}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== item.zoomUrl) {
                          target.removeAttribute('srcset');
                          target.src = item.zoomUrl;
                        }
                      }}
                      className="w-full h-full object-contain block bg-[#FAF6EE]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dots Pagination */}
        <div className="mt-5 flex flex-col items-center justify-center gap-2.5">
          <div className="flex items-center justify-center gap-0.5">
            {testimonialList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className="p-2 flex items-center justify-center cursor-pointer group"
                aria-label={`Ir para depoimento ${dotIdx + 1}`}
              >
                <span
                  className={`block h-2.5 rounded-full transition-all ${
                    currentIndex === dotIdx ? 'w-8 bg-[#781428]' : 'w-2.5 bg-[#DDA0AA] group-hover:bg-[#C97A8B]'
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="text-xs text-[#475569] flex items-center gap-1.5">
            <span aria-hidden="true">👆</span>
            <span>Clique nos depoimentos laterais ou nas setas para navegar</span>
          </p>
        </div>

      </div>

    </section>
  );
};
