import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section 
      id="garantia"
      aria-label="Garantia Incondicional de 7 dias"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-transparent"
    >
      {/* Container externo do balão: ampliado e com destaque ainda maior em altura */}
      <div className="w-full max-w-[760px] sm:max-w-[860px] md:max-w-[940px] mx-auto flex flex-col items-center">
        
        {/* Balão de pensamentos muito mais alto e espaçoso */}
        <div className="relative w-full">
          
          {/* Ilustração vetorial do balão de pensamentos com altura ampliada e corpo volumoso */}
          <svg
            viewBox="0 0 880 675"
            className="w-full h-auto drop-shadow-[0_18px_45px_rgba(120,20,40,0.13)] filter"
            fill="#FAF7F2"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            {/* Nuvem principal com altura significativamente expandida (corpo alto e amplo) */}
            <path
              d="M 440,30 A 85 85 0 0 1 582 49 A 78 78 0 0 1 702 103 A 67 67 0 0 1 782 184 A 59 59 0 0 1 810 280 A 59 59 0 0 1 782 376 A 67 67 0 0 1 702 457 A 78 78 0 0 1 582 511 A 85 85 0 0 1 440 530 A 85 85 0 0 1 298 511 A 78 78 0 0 1 178 457 A 67 67 0 0 1 98 376 A 59 59 0 0 1 70 280 A 59 59 0 0 1 98 184 A 67 67 0 0 1 178 103 A 78 78 0 0 1 298 49 A 85 85 0 0 1 440 30 Z"
              stroke="#F0BDC7"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            {/* Bolinhas clássicas da cauda do balão de pensamentos */}
            <circle cx="215" cy="570" r="25" stroke="#F0BDC7" strokeWidth="3.2" />
            <circle cx="160" cy="615" r="17" stroke="#F0BDC7" strokeWidth="3.2" />
            <circle cx="118" cy="650" r="10" stroke="#F0BDC7" strokeWidth="3.2" />
          </svg>

          {/* Área de conteúdo centralizada com ampla altura e folga em relação a todas as bordas */}
          <div className="absolute top-[12%] bottom-[24%] left-[14%] right-[14%] flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 select-text pointer-events-auto">
            
            {/* Título com Garantia Incondicional e 'de 7 Dias' acompanhado do selo minimalista com check */}
            <h2 className="title-3d-float-1 text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-black text-[#781428] tracking-tight leading-snug">
              <span>Garantia Incondicional</span>
              <span className="flex items-center justify-center gap-2 mt-1 sm:mt-2 text-[#781428]">
                <span>de 7 Dias</span>
                {/* Selo clássico de escudo minimalista com check dentro, posicionado logo após 7 dias */}
                <ShieldCheck 
                  className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#781428] shrink-0" 
                  strokeWidth={2.4} 
                  aria-label="Selo clássico de garantia com escudo e check"
                />
              </span>
            </h2>

            {/* Letras menores em negrito (font-bold) com espaçamento vertical generoso */}
            <p className="mt-3 sm:mt-5 text-[11px] sm:text-sm md:text-base font-bold text-[#334155] leading-relaxed max-w-[280px] sm:max-w-[420px] md:max-w-[500px]">
              Se não amar o material, devolvemos 100% do seu dinheiro. Risco zero.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
