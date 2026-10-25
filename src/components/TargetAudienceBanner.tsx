import React, { memo } from 'react';
import { WaveDivider } from './WaveDivider';

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
      className="relative w-full bg-[#781428] py-3 sm:py-3.5 my-10 sm:my-14 select-none"
    >
      {/* 1. ONDA SUPERIOR: parte integrante da seção vinho, projetando-se para cima */}
      <WaveDivider fillColor="#781428" position="top" />

      {/* 2. CONTEÚDO COM OVERFLOW-HIDDEN PARA O CARROSSEL */}
      <div className="relative w-full overflow-hidden">
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

      {/* 3. ONDA INFERIOR: parte integrante da seção vinho, projetando-se para baixo */}
      <WaveDivider fillColor="#781428" position="bottom" />
    </div>
  );
});
