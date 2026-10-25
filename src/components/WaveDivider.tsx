import React from 'react';

interface WaveDividerProps {
  fillColor?: string; // Cor da onda (ex: #781428 para a faixa vinho, ou #EDE6D8 para o bege de fundo)
  position?: 'top' | 'bottom';
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#781428',
  position = 'top',
  className = '',
}) => {
  const isBottom = position === 'bottom';

  // Altura aumentada (viewBox 0 0 1200 44, amplitude de 20px, com sobreposição de 6px para dentro da seção)
  // Onda superior: fecha em L 1200,50 L 0,50 Z (base 100% sólida estendendo 6px para dentro da seção vinho)
  const topPath = 'M 0,20 C 150,6 350,34 600,20 C 850,6 1050,34 1200,20 L 1200,50 L 0,50 Z';

  // Onda inferior: fecha em M 0,-6 L 1200,-6 L 1200,20 ... Z (topo 100% sólido estendendo 6px para dentro da seção vinho)
  const bottomPath = 'M 0,-6 L 1200,-6 L 1200,20 C 1050,34 850,6 600,20 C 350,34 150,6 0,20 Z';

  const pathD = isBottom ? bottomPath : topPath;

  // Posicionamento absoluto como parte integrante da seção vinho:
  // position='top': top-0 com transform -translate-y-[99%] projetando-se para CIMA da seção
  // position='bottom': bottom-0 com transform translate-y-[99%] projetando-se para BAIXO da seção
  const positionClasses = isBottom
    ? 'absolute bottom-0 left-0 w-full translate-y-[99%]'
    : 'absolute top-0 left-0 w-full -translate-y-[99%]';

  return (
    <div
      className={`${positionClasses} h-9 sm:h-11 md:h-12 overflow-hidden leading-none pointer-events-none select-none z-10 block ${className}`}
      aria-hidden="true"
    >
      {/* SVG Duplo (200% de largura) com deslocamento contínuo em loop infinito via transform: translateX */}
      <div className="w-[200%] h-full flex animate-wave-flow will-change-transform leading-none [backface-visibility:hidden]">
        <svg
          viewBox="0 0 1200 44"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="w-1/2 h-full shrink-0 block"
        >
          <path d={pathD} fill={fillColor} />
        </svg>
        <svg
          viewBox="0 0 1200 44"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="w-1/2 h-full shrink-0 block"
        >
          <path d={pathD} fill={fillColor} />
        </svg>
      </div>
    </div>
  );
};
