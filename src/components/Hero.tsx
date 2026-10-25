import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onPreviewOpen?: (mapTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const scrollToOffers = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('ofertas');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Linha 1: 3 Passaportes centralizados em destaque na frente do notebook
  const row1Cards = [
    {
      id: 'hero-card-2',
      title: 'Passaporte das Emoções - Edição 2',
      src: '/images/jornal-2-180.webp',
      srcSet: '/images/jornal-2-180.webp 180w, /images/jornal-2-260.webp 260w, /images/jornal-2-420.webp 420w, /images/jornal-2-600.webp 600w, /images/jornal-2-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 2',
      rotation: '-rotate-[2.5deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[22]',
      scale: 'scale-[0.98]',
    },
    {
      id: 'hero-card-3',
      title: 'Passaporte das Emoções - Edição 3',
      src: '/images/jornal-3-180.webp',
      srcSet: '/images/jornal-3-180.webp 180w, /images/jornal-3-260.webp 260w, /images/jornal-3-420.webp 420w, /images/jornal-3-600.webp 600w, /images/jornal-3-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 3',
      rotation: 'rotate-0',
      translateY: '-translate-y-1 sm:-translate-y-2',
      zIndex: 'z-[30]', // Destaque central da linha 1
      scale: 'scale-[1.04] sm:scale-[1.06]',
    },
    {
      id: 'hero-card-4',
      title: 'Passaporte das Emoções - Edição 4',
      src: '/images/jornal-4-180.webp',
      srcSet: '/images/jornal-4-180.webp 180w, /images/jornal-4-260.webp 260w, /images/jornal-4-420.webp 420w, /images/jornal-4-600.webp 600w, /images/jornal-4-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 4',
      rotation: 'rotate-[2.5deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[22]',
      scale: 'scale-[0.98]',
    },
  ];

  // Linha 2: Segunda linha abaixo com 3 passaportes juntos (os 2 que estavam cortados no Hero + 1 do carrossel)
  const row2Cards = [
    {
      id: 'hero-card-1',
      title: 'Passaporte das Emoções - Edição 1',
      src: '/images/jornal-1-180.webp',
      srcSet: '/images/jornal-1-180.webp 180w, /images/jornal-1-260.webp 260w, /images/jornal-1-420.webp 420w, /images/jornal-1-600.webp 600w, /images/jornal-1-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 1',
      rotation: '-rotate-[2deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[32]',
      scale: 'scale-[0.98]',
    },
    {
      id: 'hero-card-6',
      title: 'Passaporte das Emoções - Edição 6',
      src: '/images/jornal-6-180.webp',
      srcSet: '/images/jornal-6-180.webp 180w, /images/jornal-6-260.webp 260w, /images/jornal-6-420.webp 420w, /images/jornal-6-600.webp 600w, /images/jornal-6-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 6 (do Carrossel)',
      rotation: 'rotate-0',
      translateY: '-translate-y-1 sm:-translate-y-2',
      zIndex: 'z-[40]', // Destaque central da linha 2
      scale: 'scale-[1.04] sm:scale-[1.06]',
    },
    {
      id: 'hero-card-5',
      title: 'Passaporte das Emoções - Edição 5',
      src: '/images/jornal-5-180.webp',
      srcSet: '/images/jornal-5-180.webp 180w, /images/jornal-5-260.webp 260w, /images/jornal-5-420.webp 420w, /images/jornal-5-600.webp 600w, /images/jornal-5-1491.webp 1491w',
      alt: 'Passaporte das Emoções - Folha 5',
      rotation: 'rotate-[2deg]',
      translateY: 'translate-y-1 sm:translate-y-1.5',
      zIndex: 'z-[32]',
      scale: 'scale-[0.98]',
    },
  ];

  // Passaportes laterais (Extrema esquerda e extrema direita, entre a Linha 1 e a Linha 2)
  const flankCardLeft = {
    id: 'hero-card-7',
    title: 'Passaporte das Emoções - Edição 7',
    src: '/images/jornal-7-180.webp',
    srcSet: '/images/jornal-7-180.webp 180w, /images/jornal-7-260.webp 260w, /images/jornal-7-420.webp 420w, /images/jornal-7-600.webp 600w, /images/jornal-7-1491.webp 1491w',
    alt: 'Passaporte das Emoções - Folha 7',
  };

  const flankCardRight = {
    id: 'hero-card-8',
    title: 'Passaporte das Emoções - Edição 8',
    src: '/images/jornal-8-180.webp',
    srcSet: '/images/jornal-8-180.webp 180w, /images/jornal-8-260.webp 260w, /images/jornal-8-420.webp 420w, /images/jornal-8-600.webp 600w, /images/jornal-8-1491.webp 1491w',
    alt: 'Passaporte das Emoções - Folha 8',
  };

  return (
    <header id="hero-section" className="pt-8 pb-12 sm:pt-12 sm:pb-16 md:pb-20 px-3 sm:px-6 overflow-hidden relative">
      <div className="max-w-[1140px] mx-auto relative z-10">
        {/* Main Central Card Container */}
        <div 
          id="hero-card"
          className="bg-[#F5EFE6] rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border border-[#E5DACB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 sm:p-10 md:p-12 text-center transition-all duration-300 relative overflow-hidden"
        >

          {/* Avião de papel lúdico no canto superior direito do card, totalmente afastado do título e NUNCA sobrepondo nem acima da palavra 'Emoções' */}
          <div 
            className="absolute top-3 sm:top-5 md:top-6 right-3 sm:right-6 md:right-8 z-10 pointer-events-none select-none"
            aria-hidden="true"
          >
            <svg 
              className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 drop-shadow-sm transform -rotate-6" 
              viewBox="0 0 72 72" 
              fill="none"
            >
              {/* Asa Principal Superior */}
              <polygon 
                points="8,40 64,12 28,62" 
                fill="#FAF6EE" 
                stroke="#781428" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
              />
              
              {/* Faceta dobrada inferior com preenchimento vinho suave */}
              <polygon 
                points="64,12 28,62 36,49" 
                fill="#FCE8EC" 
                stroke="#781428" 
                strokeWidth="2" 
                strokeLinejoin="round" 
              />
              
              {/* Linhas de hachura do sombreado lateral */}
              <g stroke="#781428" strokeWidth="1.6" strokeLinecap="round">
                <line x1="56" y1="20" x2="52" y2="26" />
                <line x1="49" y1="28" x2="45" y2="34" />
                <line x1="42" y1="36" x2="38" y2="43" />
                <line x1="35" y1="45" x2="31" y2="52" />
              </g>

              {/* Asa lateral oposta visível em perspectiva */}
              <polygon 
                points="64,12 36,49 48,55" 
                fill="#FAF6EE" 
                stroke="#781428" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
              />

              {/* Quilha dobrada de papel */}
              <polygon 
                points="28,62 36,49 39,53" 
                fill="#F7C2CC" 
                stroke="#781428" 
                strokeWidth="1.8" 
                strokeLinejoin="round" 
              />

              {/* Vinco central dorsal */}
              <line 
                x1="64" y1="12" 
                x2="28" y2="62" 
                stroke="#781428" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          {/* 2. Main Title (H1) com o Passaporte das Emoções */}
          <div className="relative isolate max-w-4xl mx-auto pt-4 sm:pt-6 md:pt-8 z-10">
            <h1 
              id="hero-heading"
              className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-black text-[#111827] tracking-tight leading-[1.16] drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              Trabalhe as{' '}
              <span className="text-[#781428] relative inline-block">
                Emoções
              </span>{' '}
              com o{' '}
              <span className="font-black inline-flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                <span className="text-[#A31D36]">Passaporte</span>{' '}
                <span className="relative inline-block">
                  <span className="text-[#111827]">das</span>{' '}
                  <span className="text-[#781428]">Emoções</span>
                  {/* Traço artístico sutil e refinado sob 'das Emoções' */}
                  <svg 
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 text-[#781428]/35" 
                    viewBox="0 0 200 8" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path 
                      d="M3 5 Q 50 1 100 4.5 Q 150 7 197 3" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtítulo valorizado: '+200 emoções' com forte destaque visual e hierarquia refinada */}
          <div 
            id="hero-subtitle"
            className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center select-none z-10"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-xs border border-[#E2D2C0] shadow-[0_8px_24px_rgba(120,20,40,0.08)] rounded-full px-3.5 sm:px-5 md:px-6 py-1.5 sm:py-2 transition-all hover:shadow-[0_10px_28px_rgba(120,20,40,0.12)]">
              {/* Badge de Destaque Vibrante para '+200 emoções' */}
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#781428] via-[#8C1B33] to-[#9E1F38] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-black text-sm sm:text-base md:text-lg tracking-tight shadow-[0_2px_8px_rgba(120,20,40,0.3)]">
                <span className="text-[#FDE047] font-black text-base sm:text-lg md:text-xl leading-none">+</span>
                <span>200 emoções</span>
              </span>

              {/* 'trabalhadas' com tamanho aumentado conforme solicitado pelo usuário */}
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#2C3338] tracking-tight pr-1.5 sm:pr-3">
                trabalhadas
              </span>
            </div>
          </div>

          {/* 4. UNIFIED PRODUCT MOCKUP COMPOSITION */}
          {/* Laptop with open screen + smartphone at side, with 5 horizontal maps positioned prominently in front */}
          <div 
            id="hero-mockup-container"
            className="mt-8 sm:mt-11 mb-6 sm:mb-9 relative w-full max-w-[1040px] mx-auto select-none"
          >
            {/* Ambient Soft Glow Behind Mockup */}
            <div 
              className="absolute inset-x-8 top-12 bottom-6 bg-gradient-to-b from-[#FCE8EC]/90 via-[#FDF2F4]/40 to-transparent -z-10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center">
              
              {/* BACK LAYER: CENTRAL LAPTOP + SMARTPHONE */}
              <div className="relative w-full flex justify-center items-end px-2">
                
                {/* 1. CENTRAL NOTEBOOK (AT THE BACK WITH SCREEN + HORIZONTAL MACBOOK KEYBOARD BASE) */}
                <div className="relative z-10 w-full max-w-[320px] sm:max-w-[490px] md:max-w-[600px] lg:max-w-[660px]">
                  
                  {/* Laptop Lid / Screen */}
                  <div className="bg-[#141518] rounded-t-[10px] sm:rounded-t-[14px] pt-2 sm:pt-2.5 px-1 sm:px-1.5 md:px-2 shadow-[0_16px_40px_rgba(0,0,0,0.32)] border-t border-x border-[#2C3038] relative">
                    {/* Camera dot */}
                    <div className="absolute top-0.5 sm:top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#23262D] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Screen View */}
                    <div className="bg-[#0A0B0D] rounded-t-xs sm:rounded-t-sm overflow-hidden aspect-[1672/941] w-full border border-black/60 relative">
                      <img 
                        src="/images/hero-laptop-480.webp" 
                        srcSet="/images/hero-laptop-480.webp 480w, /images/hero-laptop-640.webp 640w, /images/hero-laptop-960.webp 960w, /images/hero-laptop-1280.webp 1280w, /images/hero-laptop-1672.webp 1672w"
                        sizes="(max-width: 640px) 265px, (max-width: 768px) 480px, 650px"
                        width={1672}
                        height={941}
                        alt="Visualização do Passaporte das Emoções no computador" 
                        className="w-full h-full object-cover select-none block"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>

                    {/* Bottom Bezel with MacBook Air branding (matching reference image) */}
                    <div className="pt-1 sm:pt-1.5 pb-0.5 flex justify-center items-center" aria-hidden="true">
                      <span className="text-[7px] sm:text-[8.5px] font-medium tracking-widest text-[#7E838F] font-sans">
                        MacBook Air
                      </span>
                    </div>
                  </div>

                  {/* Dark Hinge */}
                  <div className="w-[85%] mx-auto h-1 sm:h-1.5 bg-[#121316] rounded-t-sm shadow-inner" aria-hidden="true" />

                  {/* Laptop Aluminum Unibody Base (Horizontal, frontal perspective matching reference) */}
                  <div className="relative w-[102.5%] -ml-[1.25%] bg-gradient-to-b from-[#2B2F38] via-[#22252D] to-[#181A20] rounded-b-md sm:rounded-b-lg border-t border-[#3B404D] shadow-[0_16px_36px_rgba(0,0,0,0.32)] pt-1 sm:pt-1.5 pb-1.5 sm:pb-2.5 px-2.5 sm:px-5 flex flex-col items-center" aria-hidden="true">
                    
                    {/* Horizontal Keyboard Well (flat frontal chiclet strip) */}
                    <div className="w-full max-w-[560px] bg-[#0E0F12] rounded-[2px] sm:rounded-[4px] p-0.5 sm:p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.9)] border border-[#1A1C22]">
                      <div className="flex flex-col gap-[1px] sm:gap-[1.5px]">
                        
                        {/* Row 1: Function / Esc keys */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-1.5">
                          <div className="bg-[#18191E] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[4px] text-[#7E838F] scale-75">esc</span>
                          </div>
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`fn-${i}`} className="bg-[#18191E] rounded-[1px] border-b border-black" />
                          ))}
                          <div className="bg-[#121316] rounded-[1px] border-b border-black" />
                        </div>

                        {/* Row 2: Numbers row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'].map((k, i) => (
                            <div key={`n-${i}`} className="bg-[#18191E] rounded-[1px] border-b border-black shadow-xs flex items-center justify-center text-[4px] sm:text-[6px] text-[#9EA3B0] font-mono leading-none">
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 3: QWERTY row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇥', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                            <div key={`q-${i}`} className="bg-[#18191E] rounded-[1px] border-b border-black shadow-xs flex items-center justify-center text-[4px] sm:text-[6px] text-[#9EA3B0] font-mono leading-none">
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 4: ASDF row */}
                        <div className="grid grid-cols-13 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '⏎'].map((k, i) => (
                            <div key={`a-${i}`} className={`bg-[#18191E] rounded-[1px] border-b border-black shadow-xs flex items-center justify-center text-[4px] sm:text-[6px] text-[#9EA3B0] font-mono leading-none ${i === 0 || i === 12 ? 'col-span-1.5 bg-[#141518]' : ''}`}>
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 5: ZXCV row */}
                        <div className="grid grid-cols-12 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧'].map((k, i) => (
                            <div key={`z-${i}`} className={`bg-[#18191E] rounded-[1px] border-b border-black shadow-xs flex items-center justify-center text-[4px] sm:text-[6px] text-[#9EA3B0] font-mono leading-none ${i === 0 || i === 11 ? 'bg-[#141518]' : ''}`}>
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 6: Spacebar and modifier row */}
                        <div className="flex gap-[1px] sm:gap-[1.5px] h-1 sm:h-2 justify-center">
                          <div className="w-3 sm:w-6 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            fn
                          </div>
                          <div className="w-3 sm:w-6 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            ⌃
                          </div>
                          <div className="w-3 sm:w-6 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            ⌥
                          </div>
                          <div className="w-4 sm:w-7 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            ⌘
                          </div>
                          {/* Wide Horizontal Spacebar */}
                          <div className="flex-1 max-w-[140px] sm:max-w-[210px] bg-[#1C1E23] rounded-[1px] border-b border-black shadow-xs" />
                          <div className="w-4 sm:w-7 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            ⌘
                          </div>
                          <div className="w-3 sm:w-6 bg-[#141518] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#7E838F]">
                            ⌥
                          </div>
                          <div className="w-5 sm:w-8 grid grid-cols-2 gap-[1px]">
                            <div className="bg-[#141518] rounded-[1px] border-b border-black" />
                            <div className="bg-[#141518] rounded-[1px] border-b border-black" />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Compact Glass Trackpad */}
                    <div className="w-24 sm:w-40 h-1.5 sm:h-2.5 bg-white/[0.04] rounded-[2px] sm:rounded-[3px] mt-1 sm:mt-1.5 border border-white/10 shadow-inner" />

                    {/* Front Edge Lip Notch */}
                    <div className="w-8 sm:w-14 h-0.5 sm:h-1 bg-black/50 rounded-full mt-0.5 sm:mt-1 opacity-70" />
                  </div>
                </div>

                {/* 2. SMARTPHONE (OVERLAPPING LEFT SIDE - REALISTIC, MEIO QUADRADINHO, SEM DETALHES SOBRE A TELA) */}
                <div 
                  id="hero-smartphone-mockup"
                  className="absolute left-0.5 sm:left-3 md:left-6 bottom-3 sm:bottom-6 z-20 w-16 sm:w-24 md:w-28 lg:w-32 rounded-[9px] sm:rounded-[13px] md:rounded-[15px] bg-[#1A1C20] p-[2px] sm:p-[2.5px] shadow-[0_18px_38px_rgba(0,0,0,0.38),0_4px_12px_rgba(0,0,0,0.22)] border border-[#383C45] transform -rotate-[3deg] hover:rotate-0 transition-transform duration-300 select-none overflow-hidden"
                >
                  <div className="w-full bg-black rounded-[7px] sm:rounded-[11px] md:rounded-[13px] overflow-hidden aspect-[941/1672] relative">
                    <img 
                      src="/images/hero-phone-420.webp" 
                      srcSet="/images/hero-phone-160.webp 160w, /images/hero-phone-240.webp 240w, /images/hero-phone-420.webp 420w, /images/hero-phone-941.webp 941w"
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 128px"
                      width={941}
                      height={1672}
                      alt="Visualização mobile do Passaporte das Emoções no celular" 
                      className="w-full h-full object-cover select-none block bg-white"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                </div>

              </div>

              {/* FOREGROUND LAYER: PASSAPORTES EM COMPOSIÇÃO COM ASAS LATERAIS */}
              <div 
                id="hero-cards-showcase-wrapper" 
                className="relative w-full max-w-[1040px] mx-auto select-none pointer-events-none"
              >
                {/* Lateral Wing Esquerda: Passaporte 7 na extrema esquerda, entre a Linha 1 e Linha 2 (pode ficar cortado na borda) */}
                <div 
                  id="hero-card-7-flank"
                  className="absolute -left-6 min-[360px]:-left-8 min-[400px]:-left-10 sm:-left-12 md:-left-8 lg:-left-4 xl:left-2 top-[46%] sm:top-[48%] -translate-y-1/2 z-[25] pointer-events-none select-none -rotate-[4deg] w-[108px] min-[360px]:w-[124px] min-[390px]:w-[140px] min-[440px]:w-[158px] sm:w-[214px] md:w-[256px] lg:w-[290px] xl:w-[320px] aspect-[1491/1055] rounded-[4px] sm:rounded-[8px] overflow-hidden bg-[#FAF6EE] shadow-[0_12px_28px_rgba(18,25,35,0.25)] border border-black/8"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(120, 20, 40, 0.2))',
                  }}
                >
                  <img
                    src={flankCardLeft.src}
                    srcSet={flankCardLeft.srcSet}
                    sizes="(max-width: 640px) 158px, (max-width: 1024px) 256px, 320px"
                    width={1491}
                    height={1055}
                    alt={flankCardLeft.alt}
                    className="w-full h-full object-cover object-top select-none block bg-[#FAF6EE]"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Lateral Wing Direita: Passaporte 8 na extrema direita, entre a Linha 1 e Linha 2 (pode ficar cortado na borda) */}
                <div 
                  id="hero-card-8-flank"
                  className="absolute -right-6 min-[360px]:-right-8 min-[400px]:-right-10 sm:-right-12 md:-right-8 lg:-right-4 xl:right-2 top-[46%] sm:top-[48%] -translate-y-1/2 z-[25] pointer-events-none select-none rotate-[4deg] w-[108px] min-[360px]:w-[124px] min-[390px]:w-[140px] min-[440px]:w-[158px] sm:w-[214px] md:w-[256px] lg:w-[290px] xl:w-[320px] aspect-[1491/1055] rounded-[4px] sm:rounded-[8px] overflow-hidden bg-[#FAF6EE] shadow-[0_12px_28px_rgba(18,25,35,0.25)] border border-black/8"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(120, 20, 40, 0.2))',
                  }}
                >
                  <img
                    src={flankCardRight.src}
                    srcSet={flankCardRight.srcSet}
                    sizes="(max-width: 640px) 158px, (max-width: 1024px) 256px, 320px"
                    width={1491}
                    height={1055}
                    alt={flankCardRight.alt}
                    className="w-full h-full object-cover object-top select-none block bg-[#FAF6EE]"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Linha 1: 3 passaportes na frente da base do notebook */}
                <div 
                  id="hero-cards-showcase-row-1"
                  className="relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 z-20 w-full flex items-end justify-center -space-x-5 min-[360px]:-space-x-7 min-[390px]:-space-x-8 min-[440px]:-space-x-10 sm:-space-x-14 md:-space-x-18 lg:-space-x-22 xl:-space-x-26 px-1 mx-auto select-none pointer-events-none"
                >
                  {row1Cards.map((card, idx) => (
                    <div
                      key={card.id}
                      id={card.id}
                      className={`relative shrink-0 w-[108px] min-[360px]:w-[124px] min-[390px]:w-[140px] min-[440px]:w-[158px] sm:w-[214px] md:w-[256px] lg:w-[290px] xl:w-[320px] aspect-[1491/1055] rounded-[4px] sm:rounded-[8px] overflow-hidden bg-[#FAF6EE] shadow-[0_12px_28px_rgba(18,25,35,0.25)] border border-black/8 ${card.rotation} ${card.translateY} ${card.zIndex} ${card.scale}`}
                      style={{
                        filter: 'drop-shadow(0 6px 16px rgba(120, 20, 40, 0.18))',
                      }}
                    >
                      <img
                        src={card.src}
                        srcSet={card.srcSet}
                        sizes="(max-width: 640px) 158px, (max-width: 1024px) 256px, 320px"
                        width={1491}
                        height={1055}
                        alt={card.alt}
                        className="w-full h-full object-cover object-top select-none block bg-[#FAF6EE]"
                        loading="eager"
                        fetchPriority={idx === 1 ? 'high' : 'low'}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>

                {/* Linha 2: Mais uma linha abaixo com 3 passaportes juntos (os 2 cortados que já estavam no hero + 1 do carrossel) */}
                <div 
                  id="hero-cards-showcase-row-2"
                  className="relative -mt-3.5 sm:-mt-5 md:-mt-7 lg:-mt-9 z-30 w-full flex items-end justify-center -space-x-5 min-[360px]:-space-x-7 min-[390px]:-space-x-8 min-[440px]:-space-x-10 sm:-space-x-14 md:-space-x-18 lg:-space-x-22 xl:-space-x-26 px-1 mx-auto select-none pointer-events-none"
                >
                  {row2Cards.map((card, idx) => (
                    <div
                      key={card.id}
                      id={card.id}
                      className={`relative shrink-0 w-[108px] min-[360px]:w-[124px] min-[390px]:w-[140px] min-[440px]:w-[158px] sm:w-[214px] md:w-[256px] lg:w-[290px] xl:w-[320px] aspect-[1491/1055] rounded-[4px] sm:rounded-[8px] overflow-hidden bg-[#FAF6EE] shadow-[0_14px_32px_rgba(18,25,35,0.28)] border border-black/8 ${card.rotation} ${card.translateY} ${card.zIndex} ${card.scale}`}
                      style={{
                        filter: 'drop-shadow(0 6px 16px rgba(120, 20, 40, 0.2))',
                      }}
                    >
                      <img
                        src={card.src}
                        srcSet={card.srcSet}
                        sizes="(max-width: 640px) 158px, (max-width: 1024px) 256px, 320px"
                        width={1491}
                        height={1055}
                        alt={card.alt}
                        className="w-full h-full object-cover object-top select-none block bg-[#FAF6EE]"
                        loading="eager"
                        fetchPriority={idx === 1 ? 'high' : 'low'}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* 5. MAIN CALL TO ACTION (CTA) */}
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <button
              id="hero-cta-button"
              type="button"
              onClick={scrollToOffers}
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-[11px] shadow-[0_6px_20px_rgba(22,163,74,0.35)] hover:shadow-[0_10px_26px_rgba(22,163,74,0.45)] transition-all duration-200 w-full sm:w-auto min-w-[280px] cursor-pointer group"
            >
              {/* Faixa branca de luz a cada 2s */}
              <span 
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-btn-shine" 
                aria-hidden="true"
              />
              <span className="relative z-10">Quero os Passaportes</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Microcopy below CTA */}
            <div 
              id="hero-microcopy"
              className="mt-4 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-xs sm:text-[13px] font-medium text-[#475569]"
            >
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Acesso digital
              </span>
              <span className="text-[#F0BDC7] hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Material pronto
              </span>
              <span className="text-[#F0BDC7] hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Dentro e fora da sessão
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
