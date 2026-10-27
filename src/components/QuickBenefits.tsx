import React from 'react';

export const QuickBenefits: React.FC = () => {
  const balloons = [
    {
      id: 1,
      title: 'Mais encanto na sessão',
      description: 'A criança recebe um passaporte e um certificado de explorador das emoções',
      alignRight: false,
      alignClass: 'self-start ml-[2%] min-[380px]:ml-[3%]',
      animClass: 'balloon-float-1',
    },
    {
      id: 2,
      title: 'Seu pequeno paciente',
      description: 'Desbravando as próprias emoções e se divertindo a cada jornada',
      alignRight: true,
      alignClass: 'self-end mr-[2%] min-[380px]:mr-[3%]',
      animClass: 'balloon-float-2',
    },
    {
      id: 3,
      title: 'Mais vínculo e conexão',
      description: 'Com a criança, que se abre com mais naturalidade',
      alignRight: false,
      alignClass: 'self-start ml-[3%] min-[380px]:ml-[4%]',
      animClass: 'balloon-float-3',
    },
    {
      id: 4,
      title: 'Mais praticidade',
      description: 'Escolha a jornada, imprima ou use na tela e comece na hora',
      alignRight: true,
      alignClass: 'self-end mr-[3%] min-[380px]:mr-[4%]',
      animClass: 'balloon-float-4',
    },
  ];

  return (
    <section 
      id="beneficios" 
      aria-label="Benefícios do Passaporte das Emoções"
      className="py-10 min-[380px]:py-12 px-3 min-[380px]:px-4 bg-transparent relative overflow-hidden select-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* KEYFRAMES DE FLUTUAÇÃO INFINITA (SUAVE, SEM SINCRONIA, RESPEITANDO PREFERS-REDUCED-MOTION) */}
      <style>{`
        @keyframes balloonFloat1 {
          0%, 100% { transform: translate3d(0, 0px, 0) rotate(0deg); }
          50% { transform: translate3d(0, -9px, 0) rotate(1.1deg); }
        }
        @keyframes balloonFloat2 {
          0%, 100% { transform: translate3d(0, 0px, 0) rotate(1.2deg); }
          50% { transform: translate3d(0, -11px, 0) rotate(-1deg); }
        }
        @keyframes balloonFloat3 {
          0%, 100% { transform: translate3d(0, 0px, 0) rotate(-1deg); }
          50% { transform: translate3d(0, -8px, 0) rotate(0.9deg); }
        }
        @keyframes balloonFloat4 {
          0%, 100% { transform: translate3d(0, 0px, 0) rotate(0.8deg); }
          50% { transform: translate3d(0, -10px, 0) rotate(-1.2deg); }
        }

        .balloon-float-1 {
          animation: balloonFloat1 5.2s ease-in-out -0.8s infinite;
          will-change: transform;
        }
        .balloon-float-2 {
          animation: balloonFloat2 6.4s ease-in-out -2.4s infinite;
          will-change: transform;
        }
        .balloon-float-3 {
          animation: balloonFloat3 4.6s ease-in-out -3.7s infinite;
          will-change: transform;
        }
        .balloon-float-4 {
          animation: balloonFloat4 5.9s ease-in-out -1.5s infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .balloon-float-1,
          .balloon-float-2,
          .balloon-float-3,
          .balloon-float-4 {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="max-w-[430px] mx-auto relative pointer-events-none">
        
        {/* TÍTULO SERIFADO CENTRALIZADO (PRIMEIRO ELEMENTO DA SEÇÃO) */}
        <div className="text-center mb-7 min-[380px]:mb-9 px-1">
          <h2 className="font-serif font-black text-[21px] min-[380px]:text-[23px] min-[410px]:text-[25px] text-[#1E2530] leading-[1.25] tracking-tight max-w-[345px] mx-auto">
            Você ganha sessões mais leves. A criança ganha uma{' '}
            <span className="text-[#781428]">viagem pelas emoções</span>
          </h2>
        </div>

        {/* 1 COLUNA: OS 4 BALÕES EMPILHADOS NA VERTICAL COM ESPAÇAMENTO GENEROSO */}
        <div className="flex flex-col gap-7 min-[380px]:gap-8 pb-4">
          {balloons.map((balloon) => {
            const isRight = balloon.alignRight;

            return (
              <div
                key={balloon.id}
                className={`w-[89%] min-[400px]:w-[87%] ${balloon.alignClass} ${balloon.animClass} relative flex flex-col justify-center pointer-events-none select-none`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'pan-y',
                }}
              >
                {/* CORPO DO BALÃO EM NUVEM AMPLO E ESPAÇOSO (ENQUADRA PERFEITAMENTE O BALÃO SEM ACHATAR) */}
                <div className="relative min-h-[132px] min-[380px]:min-h-[144px] flex items-center justify-center px-7 min-[380px]:px-8 py-5 min-[380px]:py-6">
                  {/* SVG DO BALÃO DE PENSAMENTO: LÓBULOS ALTOS, ARREDONDADOS E VOLUMOSOS COM SOMBRA OFFSET 3D */}
                  <svg
                    viewBox="0 0 350 165"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full pointer-events-none -z-10"
                    style={{
                      filter: 'drop-shadow(0 6px 14px rgba(30, 37, 48, 0.08))',
                    }}
                  >
                    {/* Camada inferior offset (silhueta de profundidade estilo quadrinhos / sticker) */}
                    <path
                      d="M 82,146 C 52,146 28,132 24,110 C 6,102 2,75 18,55 C 16,33 40,16 70,16 C 84,4 118,2 144,14 C 162,2 204,2 226,16 C 248,6 284,12 298,28 C 324,28 348,46 346,72 C 354,94 346,122 324,136 C 326,154 300,165 274,163 C 252,168 220,168 198,156 C 176,168 134,168 114,156 C 100,163 88,158 82,146 Z"
                      fill="#475569"
                      opacity="0.25"
                      transform="translate(2, 3.8)"
                    />
                    {/* Nuvem branca principal com contorno suave */}
                    <path
                      d="M 82,146 C 52,146 28,132 24,110 C 6,102 2,75 18,55 C 16,33 40,16 70,16 C 84,4 118,2 144,14 C 162,2 204,2 226,16 C 248,6 284,12 298,28 C 324,28 348,46 346,72 C 354,94 346,122 324,136 C 326,154 300,165 274,163 C 252,168 220,168 198,156 C 176,168 134,168 114,156 C 100,163 88,158 82,146 Z"
                      fill="#FFFFFF"
                      stroke="#E5DDD2"
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* CONTEÚDO DO BALÃO CENTRALIZADO, COM ESPAÇO CONFORTÁVEL EM TODAS AS BORDAS */}
                  <div className="relative z-10 w-full max-w-[265px] min-[380px]:max-w-[280px] flex flex-col justify-center text-left">
                    {/* Linha do título em negrito com o ícone de check verde ao lado */}
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4.5 h-4.5 min-[380px]:w-5 min-[380px]:h-5 rounded-full flex items-center justify-center shrink-0 bg-[#DCFCE7] text-[#16A34A] border border-[#86EFAC]/70 shadow-2xs"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-2.5 h-2.5 min-[380px]:w-3 min-[380px]:h-3"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                      </span>

                      <h3 className="font-extrabold text-[15px] min-[380px]:text-[16px] text-[#1E2530] leading-snug tracking-tight">
                        {balloon.title}
                      </h3>
                    </div>

                    {/* Frase explicativa separada, em peso normal, em outra linha */}
                    <p className="text-[12.5px] min-[380px]:text-[13px] leading-relaxed text-[#4B5563] mt-1.5 pl-6.5 min-[380px]:pl-7">
                      {balloon.description}
                    </p>
                  </div>
                </div>

                {/* AS TRÊS MINI-NUVENS DECRESCENTES DO PENSAMENTO (CONFORME IMAGEM DE REFERÊNCIA) */}
                <div
                  className={`absolute -bottom-3.5 min-[380px]:-bottom-4 ${
                    isRight ? 'left-6 min-[380px]:left-8' : 'right-6 min-[380px]:right-8'
                  } flex flex-col items-center gap-1 pointer-events-none select-none ${
                    isRight ? '' : 'scale-x-[-1]'
                  }`}
                  aria-hidden="true"
                >
                  {/* Mini-nuvem 1 (Grande, mais próxima do balão) */}
                  <svg
                    viewBox="0 0 32 23"
                    className="w-[22px] h-[16px] min-[380px]:w-[24px] min-[380px]:h-[17.5px]"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(30, 37, 48, 0.08))' }}
                  >
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#475569"
                      opacity="0.25"
                      transform="translate(1, 1.8)"
                    />
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#FFFFFF"
                      stroke="#E5DDD2"
                      strokeWidth="1.2"
                    />
                  </svg>

                  {/* Mini-nuvem 2 (Média, intermediária e deslocada na diagonal) */}
                  <svg
                    viewBox="0 0 32 23"
                    className="w-[15px] h-[11px] min-[380px]:w-[16px] min-[380px]:h-[12px] -translate-x-1.5"
                    style={{ filter: 'drop-shadow(0 2px 3px rgba(30, 37, 48, 0.08))' }}
                  >
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#475569"
                      opacity="0.25"
                      transform="translate(1, 1.8)"
                    />
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#FFFFFF"
                      stroke="#E5DDD2"
                      strokeWidth="1.2"
                    />
                  </svg>

                  {/* Mini-nuvem 3 (Pequena, ponta do rastro) */}
                  <svg
                    viewBox="0 0 32 23"
                    className="w-[10px] h-[7.5px] min-[380px]:w-[11px] min-[380px]:h-[8px] -translate-x-3"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(30, 37, 48, 0.08))' }}
                  >
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#475569"
                      opacity="0.25"
                      transform="translate(1, 1.8)"
                    />
                    <path
                      d="M 8,20 C 4,20 1,17 1,14 C 0,10 2,7 5,6 C 4,3 7,1 11,1 C 14,1 16,3 18,5 C 20,2 24,3 26,6 C 29,7 31,10 30,13 C 32,16 30,19 26,20 C 24,22 20,21 18,20 C 15,22 11,22 8,20 Z"
                      fill="#FFFFFF"
                      stroke="#E5DDD2"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

