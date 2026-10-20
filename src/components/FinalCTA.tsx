import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="cta-final-secao"
      aria-label="Chamada final e rodapé"
      className="bg-[#781428] text-white border-t border-[#560D1B]"
    >
      {/* Big Bordeaux CTA Section */}
      <div className="py-16 sm:py-24 px-4 sm:px-6 text-center max-w-[900px] mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#FAF8F5]/80 uppercase bg-white/10 px-3.5 py-1 rounded-full border border-white/15 mb-4">
          Material Exclusivo &bull; Acesso Imediato
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-[#FAF8F5] leading-tight max-w-2xl mx-auto">
          Transforme o que a criança sente em palavras, no tempo dela.
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#F0BDC7] max-w-xl mx-auto leading-relaxed">
          Mais de 200 emoções apresentadas de forma leve e criativa para seus atendimentos infantis.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="https://pay.wiapy.com/MHeOiJKlOXoP"
            target="_self"
            className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-[11px] shadow-[0_8px_25px_rgba(22,163,74,0.35)] hover:shadow-[0_12px_30px_rgba(22,163,74,0.45)] transition-all duration-200 cursor-pointer w-full sm:w-auto min-w-[280px] group no-underline text-center"
          >
            {/* Faixa branca de luz a cada 2s */}
            <span 
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-btn-shine" 
              aria-hidden="true"
            />
            <span className="relative z-10">Quero o Passaporte das Emoções</span>
            <ArrowRight className="relative z-10 w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
          </a>

          {/* Micro assurances */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#F0BDC7] font-medium">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#FAF8F5]" />
              Formato 100% digital
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#FAF8F5]" />
              +200 emoções trabalhadas
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#FAF8F5]" />
              Garantia de 7 dias
            </span>
          </div>
        </div>
      </div>

      {/* Discrete Legal and Copyright Footer */}
      <div className="border-t border-[#560D1B]/80 py-8 px-4 sm:px-6 bg-[#560D1B]/40 text-center text-xs text-[#FAF8F5]/60">
        <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="tracking-wide">
            &copy; {new Date().getFullYear()} Passaporte das Emoções. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#FAF8F5]/50">
            Material terapêutico infantil para uso dentro e fora da sessão.
          </p>
        </div>
      </div>
    </footer>
  );
};
