import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBonusPackage: () => void;
  onContinueBasicPackage: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onSelectBonusPackage,
  onContinueBasicPackage,
}) => {
  const upgradePrice = '14,90';

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const excludedBonuses = [
    'Capa do Passaporte + Certificado de Explorador das Emoções',
    'Folha de Carimbos e Adesivos Recortáveis',
    'Mapa-múndi das Emoções',
    'Guia para psicólogos',
  ];

  return (
    <div
      id="upgrade-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-popup-title"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="upgrade-popup-container"
        className="relative w-full max-w-[660px] max-h-[94vh] overflow-y-auto bg-[#FAF6EE] rounded-[20px] sm:rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.32)] border border-[#D0BEA2] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CABEÇALHO BORDÔ */}
        <div className="relative bg-[#560D1B] text-white px-5 sm:px-8 py-4 sm:py-5 text-center flex items-center justify-center border-b border-[#E5A93C]/30">
          <h2
            id="upgrade-popup-title"
            className="text-base sm:text-xl md:text-[22px] font-extrabold tracking-tight leading-snug pr-6 sm:pr-0"
          >
            🎁 ESPERE! Vai deixar esses bônus incríveis?
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar popup"
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* CONTEÚDO DO POPUP */}
        <div className="p-5 sm:p-7 md:p-8 space-y-5 sm:space-y-6">
          {/* TÍTULO DA LISTA DE BÔNUS NÃO INCLUÍDOS */}
          <p className="text-center text-sm sm:text-base md:text-lg font-extrabold tracking-wide uppercase text-[#1E2530]">
            O PACOTE BÁSICO <span className="text-[#DC2626]">NÃO INCLUI:</span>
          </p>

          {/* CAIXA VERMELHA MUITO CLARA COM OS 4 BÔNUS */}
          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[14px] sm:rounded-[16px] p-4 sm:p-5 space-y-3 sm:space-y-3.5">
            {excludedBonuses.map((bonus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-left"
              >
                <span className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="text-sm sm:text-[15px] md:text-base font-semibold text-[#1E2530] leading-snug">
                  {bonus}
                </span>
              </div>
            ))}
          </div>

          {/* CAIXA VERDE-CLARA DE DESTAQUE DO PACOTE BÔNUS */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px] sm:rounded-[16px] p-4 sm:p-6 text-center">
            <p className="text-sm sm:text-base md:text-[17px] font-bold text-[#1E2530]">
              Por apenas R$ {upgradePrice}, destrave o
            </p>
            <p className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#15803D] tracking-tight uppercase my-1 sm:my-1.5 leading-none">
              PACOTE BÔNUS
            </p>
            <p className="text-sm sm:text-base md:text-[17px] font-bold text-[#1E2530]">
              com todos os 4 Bônus Exclusivos
            </p>
          </div>

          {/* BOTÕES DE AÇÃO */}
          <div className="space-y-3 pt-1">
            {/* BOTÃO PRINCIPAL — PACOTE BÔNUS */}
            <button
              type="button"
              onClick={onSelectBonusPackage}
              className="relative overflow-hidden w-full py-3.5 sm:py-4 px-5 bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base md:text-lg rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(22,163,74,0.32)] hover:shadow-[0_12px_28px_rgba(22,163,74,0.42)] transition-all cursor-pointer text-center"
            >
              {/* Faixa branca de luz a cada 2s */}
              <span 
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-btn-shine" 
                aria-hidden="true"
              />
              <span className="relative z-10">SIM! Quero o Pacote Bônus por R$ {upgradePrice}</span>
            </button>

            {/* BOTÃO SECUNDÁRIO — PACOTE BÁSICO */}
            <button
              type="button"
              onClick={onContinueBasicPackage}
              className="w-full py-3 sm:py-3.5 px-5 bg-[#FAF6EE] hover:bg-[#F2ECE0] active:scale-[0.99] text-[#475569] hover:text-[#1E2530] font-semibold text-xs sm:text-sm md:text-[15px] rounded-[12px] sm:rounded-[14px] border border-[#D0BEA2] transition-all cursor-pointer text-center"
            >
              Continuar apenas com o Pacote Básico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
