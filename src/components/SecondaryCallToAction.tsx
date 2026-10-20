import React from 'react';

interface SecondaryCallToActionProps {
  onCtaClick?: () => void;
}

export const SecondaryCallToAction: React.FC<SecondaryCallToActionProps> = () => {
  return (
    <section 
      id="chamada-secundaria"
      aria-label="Convite para ver as ofertas especiais"
      className="pt-14 pb-2 sm:pt-20 sm:pb-3 px-4 sm:px-6 bg-transparent text-center"
    >
      <div className="max-w-[760px] mx-auto flex flex-col items-center">
        {/* Eyebrow in italic */}
        <p className="text-sm sm:text-base md:text-lg italic font-semibold text-[#781428] tracking-tight">
          Já imaginou ter tudo isso em suas mãos?
        </p>

        {/* Main Title */}
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
          Comece a transformar seus atendimentos{' '}
          <span className="text-[#A31D36] block sm:inline">agora mesmo</span>
        </h2>
      </div>
    </section>
  );
};
