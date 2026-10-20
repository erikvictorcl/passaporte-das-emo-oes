import React, { memo } from 'react';

export const TargetAudienceBanner: React.FC = memo(() => {
  const audiences = [
    'Psicólogos(as)',
    'Psicopedagogos(as)',
    'Terapeutas Ocupacionais',
    'Educadores(as)',
    'Pais e Mães',
  ];

  const renderBannerSegment = (isAriaHidden = false) => (
    <div 
      className="flex items-center gap-3.5 sm:gap-5 shrink-0 pr-10 sm:pr-14 text-sm sm:text-[15px] md:text-base tracking-wide whitespace-nowrap select-none"
      aria-hidden={isAriaHidden}
    >
      {/* Título com destaque vibrante em amarelo/âmbar suave */}
      <span className="font-extrabold uppercase text-xs sm:text-[13.5px] md:text-sm tracking-wider text-[#FFD166]">
        FEITO PARA QUEM CUIDA DO DESENVOLVIMENTO INFANTIL:
      </span>

      {/* Profissões e responsáveis em branco com separadores em vinho claro */}
      {audiences.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-white font-bold">
            {item}
          </span>
          <span className="text-[#F0BDC7] text-xs sm:text-sm" aria-hidden="true">
            •
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div 
      id="faixa-publico-alvo"
      role="region"
      aria-label="Público-alvo do Passaporte das Emoções"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#781428] via-[#A31D36] to-[#781428] border-y border-[#B32042]/50 shadow-[0_4px_20px_rgba(120,20,40,0.22)] py-3.5 sm:py-4 select-none"
      style={{ contain: 'paint' }}
    >
      {/* Sombras suaves nas laterais para entrada e saída suave */}
      <div 
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#781428] to-transparent z-10" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#781428] to-transparent z-10" 
        aria-hidden="true"
      />

      {/* Carrossel contínuo acelerado por GPU */}
      <div className="flex w-max animate-banner-carousel items-center">
        {renderBannerSegment(false)}
        {renderBannerSegment(false)}
        {renderBannerSegment(true)}
        {renderBannerSegment(true)}
      </div>
    </div>
  );
});
