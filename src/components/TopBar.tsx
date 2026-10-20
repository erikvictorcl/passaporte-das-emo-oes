import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <aside 
      id="top-notification-bar"
      aria-label="Aviso de oferta especial por tempo limitado"
      className="w-full bg-[#560D1B] text-white py-2.5 sm:py-3 px-4 text-center border-b border-[#3D0813] shadow-xs"
    >
      <p className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide uppercase flex items-center justify-center gap-1.5 sm:gap-2 leading-tight">
        <span className="text-sm sm:text-base leading-none" role="img" aria-label="fogo">🔥</span>
        <span>OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO!</span>
      </p>
    </aside>
  );
};
