import React from 'react';
import { Check } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefitCards = [
    // 2 cards sobre o material e benefícios para o paciente
    {
      id: 'benefit-assuntos-1',
      text: '+200 emoções para a criança reconhecer e nomear o que sente',
    },
    {
      id: 'benefit-assuntos-2',
      text: 'Espaço acolhedor para desabafar e se expressar com leveza',
    },
    // 2 cards apontando vantagens para o profissional/família
    {
      id: 'benefit-vantagem-1',
      text: 'Mais clareza nas sessões e fortalecimento do vínculo',
    },
    {
      id: 'benefit-vantagem-2',
      text: 'Material pronto para aplicar, sem precisar criar nada do zero',
    },
  ];

  return (
    <section 
      id="beneficios" 
      aria-label="Benefícios do Passaporte das Emoções"
      className="py-6 sm:py-10 md:py-14 px-3 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* CARD PRINCIPAL FLUTUANTE DA SEÇÃO COM BORDAS BEM ARREDONDADAS */}
        <div 
          id="benefits-main-card"
          className="bg-[#F5EFE6] rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border border-[#E5DACB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 sm:p-10 md:p-14 relative overflow-hidden transition-all duration-300"
        >
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12 relative z-10">
            <h2 
              id="heading-assuntos-abordados"
              className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight"
            >
              Com esse material você <span className="text-[#781428]">tem acesso a:</span>
            </h2>
            {/* Centered Accent Bar */}
            <div className="w-12 h-1 bg-[#781428] mx-auto mt-3.5 sm:mt-4 rounded-full" />
          </div>

          {/* CONTAINER DOS CARDS COM A ÁRVORE PIXELADA */}
          <div className="relative py-2 sm:py-4">
            
            {/* ÁRVORE EM DESIGN PIXELADO */}
            <div 
              className="absolute -top-6 min-[400px]:-top-10 sm:-top-14 md:-top-16 -bottom-6 min-[400px]:-bottom-10 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none flex items-center justify-center w-[340px] min-[400px]:w-[420px] sm:w-[560px] md:w-[720px] lg:w-[840px] h-[calc(100%+48px)] min-[400px]:h-[calc(100%+80px)] sm:h-[calc(100%+112px)] md:h-[calc(100%+128px)]" 
              aria-hidden="true"
            >
              <img 
                src="/images/tall-pixel-tree-420-red.webp" 
                srcSet="/images/tall-pixel-tree-420-red.webp 420w, /images/tall-pixel-tree-768-red.webp 768w"
                sizes="(max-width: 640px) 420px, 768px"
                width={768}
                height={1376}
                alt=""
                className="w-full h-full object-fill sm:object-contain opacity-75 sm:opacity-80 md:opacity-85"
                style={{
                  imageRendering: 'pixelated',
                }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* OS 4 CARDS EM PRIMEIRO PLANO COM BORDAS BEM ARREDONDADAS */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 md:gap-x-14 lg:gap-x-18 md:gap-y-6">
              {benefitCards.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-[#FAF7F2] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 border border-[#E5DACB] shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:border-[#781428]/40 hover:shadow-[0_8px_24px_rgba(120,20,40,0.1)] transition-all duration-200 flex items-center gap-4 sm:gap-5"
                >
                  {/* Soft Green Rounded Box with Green Check */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Text com fonte e tamanho legíveis */}
                  <p className="text-sm sm:text-base font-semibold text-[#1E2530] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Big Rounded Banner */}
          <div 
            id="benefits-highlight-box"
            className="mt-8 sm:mt-10 bg-[#781428] text-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 text-center shadow-[0_12px_30px_rgba(120,20,40,0.25)] border border-[#A31D36]/40 relative z-10"
          >
            <p className="text-sm sm:text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              Não é mais uma atividade genérica: o passaporte ajuda a criança a transformar o que sente em palavras
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
