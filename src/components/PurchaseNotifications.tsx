import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface PurchaseEventData {
  id?: string;
  name?: string;
  packageName?: 'Pacote Bônus' | 'Pacote Básico' | string;
  timestamp?: number;
  isReal?: boolean;
}

// -------------------------------------------------------------
// BANCO EXPANSIVO DE NOMES BRASILEIROS (GERA >10.000 COMBINAÇÕES)
// Proporção de demonstração: ~90% Femininos / ~10% Masculinos
// -------------------------------------------------------------
// Nomes femininos simples (1 palavra cada) para combinação exata de 2 palavras (ex: Maira Nayla, Mariana Silva)
const FEMALE_FIRST_NAMES = [
  'Mariana', 'Luísa', 'Juliana', 'Isadora', 'Eloá', 'Antonella', 'Valentina',
  'Eulália', 'Yasmim', 'Cecília', 'Eduarda', 'Lívia', 'Heloísa', 'Maitê',
  'Aurora', 'Lavínia', 'Clarice', 'Estela', 'Alana', 'Sophia', 'Beatriz',
  'Camila', 'Larissa', 'Giovanna', 'Bruna', 'Rebeca', 'Carolina', 'Natália',
  'Fernanda', 'Letícia', 'Débora', 'Amanda', 'Gabriela', 'Tatiana', 'Bianca',
  'Manuela', 'Helena', 'Laura', 'Alice', 'Luiza', 'Rafaela', 'Marcela',
  'Patrícia', 'Vanessa', 'Priscila', 'Sabrina', 'Renata', 'Daniela', 'Flávia',
  'Thaís', 'Simone', 'Paula', 'Luciana', 'Cláudia', 'Roberta', 'Viviane',
  'Aline', 'Ingrid', 'Milena', 'Nicole', 'Paloma', 'Raquel', 'Samara',
  'Tamires', 'Verônica', 'Vitória', 'Brenda', 'Clara', 'Melissa', 'Mirella',
  'Sarah', 'Bárbara', 'Cristina', 'Talita', 'Evelyn', 'Monique', 'Maira',
  'Nayla', 'Taís', 'Lorena', 'Nayara', 'Camile', 'Agatha', 'Késia'
];

// Nomes masculinos simples (1 palavra cada)
const MALE_FIRST_NAMES = [
  'Rafael', 'Lucas', 'Gabriel', 'Henrique', 'Matheus', 'Miguel',
  'Gustavo', 'Leonardo', 'Felipe', 'Bruno', 'Rodrigo', 'Thiago', 'Diego',
  'Marcelo', 'André', 'Eduardo', 'Guilherme', 'Caio', 'Arthur', 'Bernardo',
  'Samuel', 'Vinícius', 'Renan', 'Danilo', 'Pedro', 'João', 'Otávio'
];

const SURNAMES = [
  'Albuquerque', 'Vasconcelos', 'Ferreira', 'Cavalcante', 'Monteiro', 'Figueiredo',
  'Queiroz', 'Mendonça', 'Nogueira', 'Montenegro', 'Siqueira', 'Prado',
  'Fernandes', 'Magalhães', 'Carvalho', 'Azevedo', 'Furtado', 'Ribeiro',
  'Oliveira', 'Almeida', 'Costa', 'Silva', 'Santos', 'Souza', 'Lima',
  'Pereira', 'Rodrigues', 'Alves', 'Araújo', 'Barbosa', 'Barros', 'Batista',
  'Borges', 'Cardoso', 'Castro', 'Correia', 'Dias', 'Duarte', 'Farias',
  'Freire', 'Gomes', 'Gonçalves', 'Lacerda', 'Leal', 'Lopes', 'Machado',
  'Martins', 'Medeiros', 'Meireles', 'Melo', 'Miranda', 'Moraes', 'Moreira',
  'Moura', 'Nascimento', 'Neves', 'Pacheco', 'Paiva', 'Peixoto', 'Pimentel',
  'Pinheiro', 'Pires', 'Ramos', 'Resende', 'Rocha', 'Sales', 'Santana',
  'Santiago', 'Severo', 'Silveira', 'Soares', 'Tavares', 'Teixeira', 'Teles',
  'Toledo', 'Valente', 'Vargas', 'Viana', 'Vieira', 'Xavier', 'Brandão',
  'Camargo', 'Castilho', 'Diniz', 'Fontes', 'Guimarães', 'Maciel', 'Padilha'
];

// Chaves no LocalStorage para persistência à prova de repetições
const STORAGE_SEEN_NAMES_KEY = 'jd_seen_purchase_names_v1';
const STORAGE_SEEN_TX_KEY = 'jd_seen_purchase_txids_v1';

// Normalizador anti-duplicidade (sem acentos, minúsculo, sem espaços duplos)
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

function getStoredSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.map(normalizeString) : []);
  } catch {
    return new Set();
  }
}

function saveToStoredSet(key: string, value: string) {
  try {
    const current = getStoredSet(key);
    current.add(normalizeString(value));
    localStorage.setItem(key, JSON.stringify(Array.from(current)));
  } catch {
    // Tolerante a limites ou desativação de storage
  }
}

// Sorteador de pacote com distribuição estrita de 90% Bônus / 10% Básico
function getRandomPackage(): 'Pacote Bônus' | 'Pacote Básico' {
  return Math.random() < 0.9 ? 'Pacote Bônus' : 'Pacote Básico';
}

// Gerador de exatamente 2 palavras (ex: "Maira Nayla", "Mariana Silva"), sem repetir para o visitante
function generateUniqueFullName(seenNames: Set<string>): string {
  // Proporção de 90% feminino e 10% masculino
  const isFemale = Math.random() < 0.9;
  const firstNamePool = isFemale ? FEMALE_FIRST_NAMES : MALE_FIRST_NAMES;

  // Tenta combinações de exatamente 2 palavras
  for (let attempt = 0; attempt < 250; attempt++) {
    const firstName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
    
    // Pode ser Nome + Sobrenome, ou Nome Composto de 2 palavras (como "Maira Nayla")
    let candidate = '';
    if (isFemale && Math.random() < 0.15) {
      // Nome composto feminino de duas palavras (ex: Maira Nayla, Ana Clara)
      const secondName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
      if (secondName !== firstName) {
        candidate = `${firstName} ${secondName}`;
      }
    }

    if (!candidate) {
      const surname = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
      candidate = `${firstName} ${surname}`;
    }

    const normalized = normalizeString(candidate);
    if (!seenNames.has(normalized)) {
      return candidate;
    }
  }

  // Fallback aleatório sempre de 2 palavras
  const fName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
  const s = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
  return `${fName} ${s}`;
}

export function PurchaseNotifications() {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    packageName: string;
  } | null>(null);

  // Estados de animação: 'entering' | 'visible' | 'exiting' | 'idle'
  const [animState, setAnimState] = useState<'entering' | 'visible' | 'exiting' | 'idle'>('idle');

  // Fila para compras reais recebidas via checkout/webhook
  const realPurchasesQueueRef = useRef<PurchaseEventData[]>([]);
  const timeoutIdRef = useRef<number | null>(null);
  const animTimeoutIdRef = useRef<number | null>(null);
  const isDestroyedRef = useRef(false);

  // Limpa todos os temporizadores de forma segura
  const clearTimers = useCallback(() => {
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    if (animTimeoutIdRef.current) {
      window.clearTimeout(animTimeoutIdRef.current);
      animTimeoutIdRef.current = null;
    }
  }, []);

  // Agenda a próxima notificação com intervalo aleatório entre 15 e 40 segundos
  const scheduleNextNotification = useCallback((delayMs?: number) => {
    if (isDestroyedRef.current) return;

    // Se não for fornecido delay explícito, sorteia entre 15 e 40 segundos
    const nextInterval = delayMs !== undefined
      ? delayMs
      : Math.floor(Math.random() * (40000 - 15000 + 1)) + 15000;

    timeoutIdRef.current = window.setTimeout(() => {
      displayNextPurchase();
    }, nextInterval);
  }, []);

  // Exibe a notificação com ciclo de vida rigoroso: 4 a 5 segundos visível
  const displayNextPurchase = useCallback(() => {
    if (isDestroyedRef.current) return;

    let buyerName = '';
    let chosenPackage = '';

    // 1. Verifica se há compra real na fila (integração ativa)
    if (realPurchasesQueueRef.current.length > 0) {
      const realEvent = realPurchasesQueueRef.current.shift()!;
      const seenTx = getStoredSet(STORAGE_SEEN_TX_KEY);

      if (realEvent.id && seenTx.has(normalizeString(realEvent.id))) {
        // Já exibida anteriormente, agenda próxima sem duplicar
        scheduleNextNotification(1000);
        return;
      }

      if (realEvent.id) {
        saveToStoredSet(STORAGE_SEEN_TX_KEY, realEvent.id);
      }

      buyerName = realEvent.name || 'Cliente Verificado';
      chosenPackage = realEvent.packageName || 'Pacote Bônus';
    } else {
      // 2. Modo demonstrativo dinâmico com prevenção absoluta de repetições
      const seenNames = getStoredSet(STORAGE_SEEN_NAMES_KEY);
      buyerName = generateUniqueFullName(seenNames);
      saveToStoredSet(STORAGE_SEEN_NAMES_KEY, buyerName);
      chosenPackage = getRandomPackage();
    }

    setCurrentNotification({
      name: buyerName,
      packageName: chosenPackage
    });

    // Animação de Entrada: deslizar da direita com fade-in
    setAnimState('entering');

    // Transiciona para visível estável após 50ms (permite o browser pintar a entrada)
    animTimeoutIdRef.current = window.setTimeout(() => {
      if (isDestroyedRef.current) return;
      setAnimState('visible');

      // Permanece visível por exatamente 4.5 segundos (entre 4 e 5 segundos conforme requisito)
      timeoutIdRef.current = window.setTimeout(() => {
        if (isDestroyedRef.current) return;

        // Animação de Saída: fade-out suave com deslocamento leve para a direita
        setAnimState('exiting');

        // Aguarda a transição CSS de saída (350ms) antes de desmontar e agendar a próxima
        animTimeoutIdRef.current = window.setTimeout(() => {
          if (isDestroyedRef.current) return;
          setCurrentNotification(null);
          setAnimState('idle');

          // Agenda a próxima aparição com sorteio aleatório entre 15 e 40 segundos
          scheduleNextNotification();
        }, 350);
      }, 4500);
    }, 50);
  }, [scheduleNextNotification]);

  // Listener para eventos reais disparados pela plataforma de checkout
  useEffect(() => {
    isDestroyedRef.current = false;

    // Função de registro global para integração com plataformas de vendas (Kiwify, Hotmart, Monetizze, Eduzz, etc.)
    const handlePurchaseEvent = (event: CustomEvent<PurchaseEventData>) => {
      if (event.detail && (event.detail.name || event.detail.id)) {
        realPurchasesQueueRef.current.push({
          ...event.detail,
          isReal: true
        });
      }
    };

    window.addEventListener('purchase_event' as any, handlePurchaseEvent as EventListener);

    // Expõe no objeto window para fácil chamada por scripts externos se necessário
    (window as any).registerPurchaseNotification = (data: PurchaseEventData) => {
      realPurchasesQueueRef.current.push({
        ...data,
        isReal: true
      });
    };

    // Primeira notificação demora exatamente 10 segundos para aparecer após o lead entrar
    const initialDelay = 10000;
    scheduleNextNotification(initialDelay);

    return () => {
      isDestroyedRef.current = true;
      clearTimers();
      window.removeEventListener('purchase_event' as any, handlePurchaseEvent as EventListener);
      delete (window as any).registerPurchaseNotification;
    };
  }, [clearTimers, scheduleNextNotification]);

  if (!currentNotification || animState === 'idle') {
    return null;
  }

  // Estilos de transição para animação suave e sem layout shifts (CLS = 0)
  const isEntering = animState === 'entering';
  const isVisible = animState === 'visible';
  const isExiting = animState === 'exiting';

  return (
    <aside
      aria-label="Notificação de compra"
      aria-live="polite"
      className="fixed z-40 top-14 right-3 sm:top-20 sm:right-5 pointer-events-auto select-none"
      style={{
        willChange: 'transform, opacity',
        transition: 'transform 380ms cubic-bezier(0.16, 1, 0.3, 1), opacity 350ms ease-out',
        transform: isEntering
          ? 'translate3d(20px, 0, 0)'
          : isExiting
          ? 'translate3d(16px, 0, 0)'
          : 'translate3d(0, 0, 0)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="flex items-center gap-2 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#1E2530] px-2.5 py-1.5 rounded-md border border-[#E5DACB] shadow-[0_4px_12px_rgba(30,86,160,0.08)] max-w-[195px] sm:max-w-[215px]">
        {/* Pequeno ícone sutil de confirmação de compra */}
        <div 
          aria-hidden="true"
          className="shrink-0 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-[4px] bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200/60"
        >
          <svg 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>

        {/* Conteúdo compacto em duas linhas: Nome + Pacote adquirido */}
        <div className="flex-1 min-w-0 pr-0.5">
          <p className="font-bold text-[11px] sm:text-[11.5px] text-[#1E2530] truncate leading-tight tracking-tight">
            {currentNotification.name}
          </p>
          <p className="text-[9.5px] sm:text-[10px] text-[#526075] font-medium leading-tight mt-0.5 truncate">
            Adquiriu o {currentNotification.packageName}
          </p>
        </div>
      </div>
    </aside>
  );
}
