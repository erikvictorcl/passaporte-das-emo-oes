import React, { useEffect, useRef } from 'react';

const MAX_PIECES = 4; // Fluxo moderado e limpo (máximo 4 peças simultâneas)
const TEXT_TAGS = new Set([
  'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 
  'LI', 'SPAN', 'A', 'BUTTON', 'LABEL', 'STRONG', 'B', 'EM', 'INPUT', 'TEXTAREA'
]);

// Variações de formatos das peças (Top, Right, Bottom, Left)
// V1 = Exatamente o formato da imagem de referência (1 pino no topo, 3 encaixes para dentro)
const PIECE_PATHS = {
  // V1: Topo Pino, Direita Encaixe, Baixo Encaixe, Esquerda Encaixe
  v1: "M 31,25 L 38,25 C 40,25 43,23 44,20 C 41,14 38,7 50,7 C 62,7 59,14 56,20 C 57,23 60,25 62,25 L 69,25 C 73,25 75,27 75,31 L 75,38 C 75,40 73,43 70,44 C 64,41 57,38 57,50 C 57,62 64,59 70,56 C 73,57 75,60 75,62 L 75,69 C 75,73 73,75 69,75 L 62,75 C 60,75 57,73 56,70 C 59,64 62,57 50,57 C 38,57 41,64 44,70 C 43,73 40,75 38,75 L 31,75 C 27,75 25,73 25,69 L 25,62 C 25,60 27,57 30,56 C 36,59 43,62 43,50 C 43,38 36,41 30,44 C 27,43 25,40 25,38 L 25,31 C 25,27 27,25 31,25 Z",
  // V2: Topo Pino, Direita Pino, Baixo Encaixe, Esquerda Encaixe
  v2: "M 31,25 L 38,25 C 40,25 43,23 44,20 C 41,14 38,7 50,7 C 62,7 59,14 56,20 C 57,23 60,25 62,25 L 69,25 C 73,25 75,27 75,31 L 75,38 C 75,40 77,43 80,44 C 86,41 93,38 93,50 C 93,62 86,59 80,56 C 77,57 75,60 75,62 L 75,69 C 75,73 73,75 69,75 L 62,75 C 60,75 57,73 56,70 C 59,64 62,57 50,57 C 38,57 41,64 44,70 C 43,73 40,75 38,75 L 31,75 C 27,75 25,73 25,69 L 25,62 C 25,60 27,57 30,56 C 36,59 43,62 43,50 C 43,38 36,41 30,44 C 27,43 25,40 25,38 L 25,31 C 25,27 27,25 31,25 Z",
  // V3: Topo Pino, Direita Encaixe, Baixo Pino, Esquerda Encaixe
  v3: "M 31,25 L 38,25 C 40,25 43,23 44,20 C 41,14 38,7 50,7 C 62,7 59,14 56,20 C 57,23 60,25 62,25 L 69,25 C 73,25 75,27 75,31 L 75,38 C 75,40 73,43 70,44 C 64,41 57,38 57,50 C 57,62 64,59 70,56 C 73,57 75,60 75,62 L 75,69 C 75,73 73,75 69,75 L 62,75 C 60,75 57,77 56,80 C 59,86 62,93 50,93 C 38,93 41,86 44,80 C 43,77 40,75 38,75 L 31,75 C 27,75 25,73 25,69 L 25,62 C 25,60 27,57 30,56 C 36,59 43,62 43,50 C 43,38 36,41 30,44 C 27,43 25,40 25,38 L 25,31 C 25,27 27,25 31,25 Z",
  // V4: Topo Encaixe, Direita Pino, Baixo Encaixe, Esquerda Pino
  v4: "M 31,25 L 38,25 C 40,25 43,27 44,30 C 41,36 38,43 50,43 C 62,43 59,36 56,30 C 57,27 60,25 62,25 L 69,25 C 73,25 75,27 75,31 L 75,38 C 75,40 77,43 80,44 C 86,41 93,38 93,50 C 93,62 86,59 80,56 C 77,57 75,60 75,62 L 75,69 C 75,73 73,75 69,75 L 62,75 C 60,75 57,73 56,70 C 59,64 62,57 50,57 C 38,57 41,64 44,70 C 43,73 40,75 38,75 L 31,75 C 27,75 25,73 25,69 L 25,62 C 25,60 23,57 20,56 C 14,59 7,62 7,50 C 7,38 14,41 20,44 C 23,43 25,40 25,38 L 25,31 C 25,27 27,25 31,25 Z",
};

interface ActivePieceMeta {
  slotIndex: number;
  x: number;
  y: number;
  size: number;
  timerId: number;
}

export const PuzzleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const useElementsRef = useRef<(SVGUseElement | null)[]>([]);
  const activePiecesRef = useRef<ActivePieceMeta[]>([]);
  const isReducedMotionRef = useRef(false);

  useEffect(() => {
    // 1. Verificação de acessibilidade: prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    if (isReducedMotionRef.current) {
      return () => {
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    }

    let spawnTimerId: number | null = null;
    let isPaused = false;

    // Helper: testa se um ponto da tela está em cima de texto/botão
    const isPointOverText = (x: number, y: number): boolean => {
      if (typeof document.elementsFromPoint !== 'function') return false;
      const clampedX = Math.max(0, Math.min(window.innerWidth - 1, x));
      const clampedY = Math.max(0, Math.min(window.innerHeight - 1, y));
      const elements = document.elementsFromPoint(clampedX, clampedY);

      for (const el of elements) {
        if (el.closest('#puzzle-background-container')) continue;
        if (TEXT_TAGS.has(el.tagName)) return true;
        if (el.getAttribute('role') === 'button') return true;
      }
      return false;
    };

    // Helper: testa os 4 cantos e o centro da peça
    const isPositionSafe = (x: number, y: number, size: number): boolean => {
      const points = [
        [x + size * 0.5, y + size * 0.5], // Centro
        [x + 4, y + 4],                   // Canto superior esquerdo
        [x + size - 4, y + 4],            // Canto superior direito
        [x + 4, y + size - 4],            // Canto inferior esquerdo
        [x + size - 4, y + size - 4],     // Canto inferior direito
      ];
      return points.every(([px, py]) => !isPointOverText(px, py));
    };

    // Helper: evita nascer a menos de 75px de outra peça ativa
    const isFarFromActivePieces = (x: number, y: number, size: number): boolean => {
      const centerX = x + size / 2;
      const centerY = y + size / 2;
      return activePiecesRef.current.every((p) => {
        const otherCenterX = p.x + p.size / 2;
        const otherCenterY = p.y + p.size / 2;
        const dx = centerX - otherCenterX;
        const dy = centerY - otherCenterY;
        return Math.sqrt(dx * dx + dy * dy) >= 75;
      });
    };

    // Helper: detecta se o fundo é escuro/vinho para usar a versão rosada/clara
    const isDarkBackgroundAt = (x: number, y: number): boolean => {
      if (typeof document.elementsFromPoint !== 'function') return false;
      const clampedX = Math.max(0, Math.min(window.innerWidth - 1, x));
      const clampedY = Math.max(0, Math.min(window.innerHeight - 1, y));
      const elements = document.elementsFromPoint(clampedX, clampedY);

      for (const el of elements) {
        if (el.closest('#puzzle-background-container')) continue;
        const className = el.className || '';
        if (typeof className === 'string' && (className.includes('560D1B') || className.includes('3a0a14') || className.includes('4A0B17'))) {
          return true;
        }
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg.startsWith('rgb')) {
          const parts = bg.match(/\d+/g);
          if (parts && parts.length >= 3) {
            const r = parseInt(parts[0], 10);
            const g = parseInt(parts[1], 10);
            const b = parseInt(parts[2], 10);
            const a = parts.length > 3 ? parseFloat(parts[3]) : 1;
            if (a > 0.4) {
              const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
              if (luminance < 95) return true;
            }
          }
        }
      }
      return false;
    };

    // Função de nascimento de uma peça
    const spawnPiece = () => {
      if (isPaused || document.hidden || isReducedMotionRef.current) return;
      if (activePiecesRef.current.length >= MAX_PIECES) return;

      // Encontrar primeiro slot livre
      const activeSlotIndices = new Set(activePiecesRef.current.map((p) => p.slotIndex));
      let availableSlot = -1;
      for (let i = 0; i < MAX_PIECES; i++) {
        if (!activeSlotIndices.has(i)) {
          availableSlot = i;
          break;
        }
      }
      if (availableSlot === -1) return;

      const slotEl = slotsRef.current[availableSlot];
      const useEl = useElementsRef.current[availableSlot];
      if (!slotEl || !useEl) return;

      const winW = window.innerWidth;
      const winH = window.innerHeight;

      // Tamanho variado entre 28px e 52px (nítido, detalhado e elegante)
      const size = Math.floor(28 + Math.random() * 24);

      // Margem lateral para não encavalar no texto central
      const contentMargin = Math.max(0, (winW - 1140) / 2);
      const leftBoundary = Math.max(winW * 0.14, contentMargin);
      const rightBoundary = Math.min(winW * 0.86, winW - contentMargin - size);

      let chosenX = 0;
      let chosenY = 0;
      let foundSafe = false;

      // Até 8 tentativas para encontrar um ponto seguro sem texto
      for (let attempt = 0; attempt < 8; attempt++) {
        const isLeft = Math.random() < 0.5;
        let testX: number;
        if (isLeft) {
          testX = Math.floor(-size * 0.2 + Math.random() * (leftBoundary + size * 0.2));
        } else {
          testX = Math.floor(rightBoundary + Math.random() * (winW - rightBoundary - size * 0.7));
        }

        const testY = Math.floor(20 + Math.random() * (winH - size - 40));

        if (isFarFromActivePieces(testX, testY, size) && isPositionSafe(testX, testY, size)) {
          chosenX = testX;
          chosenY = testY;
          foundSafe = true;
          break;
        }
      }

      if (!foundSafe) return; // Pula este nascimento e tenta no próximo tick com calma

      // Parâmetros de animação suaves
      const isDark = isDarkBackgroundAt(chosenX + size / 2, chosenY + size / 2);
      // Variações 1 a 4 (de posições diferentes)
      const variantIdx = Math.floor(1 + Math.random() * 4);
      const symbolId = isDark ? `#puzzle-piece-light-${variantIdx}` : `#puzzle-piece-wine-${variantIdx}`;

      const rotation = -35 + Math.random() * 70; // -35° a 35°
      const rotDelta = -15 + Math.random() * 30;  // rotação sutil
      const moveDistance = 8 + Math.random() * 8; // movimento calmo de 8px a 16px
      const moveAngle = Math.random() * Math.PI * 2;
      const dx = Math.cos(moveAngle) * moveDistance;
      const dy = Math.sin(moveAngle) * moveDistance;

      const peakOpacity = (0.32 + Math.random() * 0.12).toFixed(2); // 0.32 a 0.44
      // Duração estendida para 3,6s a 4,6s (efeito suave, sem correria)
      const lifeTime = Math.floor(3600 + Math.random() * 1000);

      // Configuração direta das propriedades CSS do slot
      slotEl.style.left = `${chosenX}px`;
      slotEl.style.top = `${chosenY}px`;
      slotEl.style.width = `${size}px`;
      slotEl.style.height = `${size}px`;
      slotEl.style.setProperty('--rot-start', `${rotation.toFixed(1)}deg`);
      slotEl.style.setProperty('--rot-delta', `${rotDelta.toFixed(1)}deg`);
      slotEl.style.setProperty('--dx', `${dx.toFixed(1)}px`);
      slotEl.style.setProperty('--dy', `${dy.toFixed(1)}px`);
      slotEl.style.setProperty('--peak-opacity', peakOpacity);
      slotEl.style.animationDuration = `${lifeTime}ms`;

      // Atualiza o SVG <use>
      useEl.setAttribute('href', symbolId);

      // Reinicia animação CSS
      slotEl.classList.remove('is-active');
      void slotEl.offsetWidth; // Força reflow para reiniciar keyframe
      slotEl.classList.add('is-active');

      // Agenda finalização e liberação do slot
      const timerId = window.setTimeout(() => {
        slotEl.classList.remove('is-active');
        activePiecesRef.current = activePiecesRef.current.filter((p) => p.slotIndex !== availableSlot);
      }, lifeTime);

      activePiecesRef.current.push({
        slotIndex: availableSlot,
        x: chosenX,
        y: chosenY,
        size,
        timerId,
      });
    };

    // Temporizador com fluxo reduzido (nascimento a cada 1,1s a 1,9s)
    const scheduleNext = () => {
      const nextDelay = 1100 + Math.random() * 800;
      spawnTimerId = window.setTimeout(() => {
        spawnPiece();
        scheduleNext();
      }, nextDelay);
    };

    // Iniciar com apenas 2 peças com espaçamento calmo ao carregar
    const initStaggered = [
      window.setTimeout(spawnPiece, 200),
      window.setTimeout(spawnPiece, 1000),
    ];

    scheduleNext();

    // Pausar quando aba fica invisível e retomar ao voltar
    const handleVisibility = () => {
      if (document.hidden) {
        isPaused = true;
        if (spawnTimerId) window.clearTimeout(spawnTimerId);
      } else {
        isPaused = false;
        spawnPiece();
        scheduleNext();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (spawnTimerId) window.clearTimeout(spawnTimerId);
      initStaggered.forEach((id) => window.clearTimeout(id));
      activePiecesRef.current.forEach((p) => window.clearTimeout(p.timerId));
      activePiecesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="puzzle-background-container"
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-[1]"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {/* Definições SVG inline reutilizáveis (<symbol> + <use>) com as peças em tom VINHO e formato clássico/3D do sticker */}
      <svg className="hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Peças Vinho para Fundo Claro (Páginas 1 a 4) */}
          {([1, 2, 3, 4] as const).map((idx) => {
            const key = `v${idx}` as keyof typeof PIECE_PATHS;
            const pathData = PIECE_PATHS[key];
            return (
              <symbol key={`puzzle-piece-wine-${idx}`} id={`puzzle-piece-wine-${idx}`} viewBox="0 0 100 100">
                {/* 1. Camada de extrusão 3D na borda inferior-direita (como na imagem de referência) */}
                <path
                  d={pathData}
                  fill="#23040a"
                  stroke="#23040a"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform="translate(2.5, 3.5)"
                />
                {/* 2. Face frontal sólida no tom vinho oficial (#560D1B) com contorno escuro nítido (#380710) */}
                <path
                  d={pathData}
                  fill="#560D1B"
                  stroke="#380710"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* 3. Brilho sutil na borda superior-esquerda (estilo adesivo/ilustração) */}
                <path
                  d="M 32,29 C 35,27 43,23 46,16"
                  fill="none"
                  stroke="rgba(255, 235, 220, 0.35)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </symbol>
            );
          })}

          {/* Peças Rosadas / Vinho Claro para sobreposição visível em faixas escuras */}
          {([1, 2, 3, 4] as const).map((idx) => {
            const key = `v${idx}` as keyof typeof PIECE_PATHS;
            const pathData = PIECE_PATHS[key];
            return (
              <symbol key={`puzzle-piece-light-${idx}`} id={`puzzle-piece-light-${idx}`} viewBox="0 0 100 100">
                {/* Extrusão 3D escura */}
                <path
                  d={pathData}
                  fill="#480915"
                  stroke="#480915"
                  strokeWidth="4.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  transform="translate(2.5, 3.5)"
                />
                {/* Face frontal rosada/vinho viva */}
                <path
                  d={pathData}
                  fill="#b5485c"
                  stroke="#7a1a2b"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Brilho superior */}
                <path
                  d="M 32,29 C 35,27 43,23 46,16"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </symbol>
            );
          })}
        </defs>
      </svg>

      {/* Pool fixo de 4 slots reutilizáveis (zero alocações no scroll, 60fps) */}
      {Array.from({ length: MAX_PIECES }).map((_, idx) => (
        <div
          key={`puzzle-slot-${idx}`}
          ref={(el) => {
            slotsRef.current[idx] = el;
          }}
          className="puzzle-slot-piece"
          aria-hidden="true"
        >
          <svg className="w-full h-full drop-shadow-[0_2px_4px_rgba(35,4,10,0.22)]">
            <use
              ref={(el) => {
                useElementsRef.current[idx] = el;
              }}
              href="#puzzle-piece-wine-1"
            />
          </svg>
        </div>
      ))}

      {/* Fallback de peças estáticas discretas caso prefers-reduced-motion esteja ativo */}
      <div
        className="puzzle-reduced-static hidden absolute left-[2%] top-[30%] w-[38px] h-[38px] rotate-[-12deg]"
        aria-hidden="true"
      >
        <svg className="w-full h-full opacity-20">
          <use href="#puzzle-piece-wine-1" />
        </svg>
      </div>
      <div
        className="puzzle-reduced-static hidden absolute right-[3%] top-[55%] w-[44px] h-[44px] rotate-[18deg]"
        aria-hidden="true"
      >
        <svg className="w-full h-full opacity-20">
          <use href="#puzzle-piece-wine-2" />
        </svg>
      </div>
    </div>
  );
};
