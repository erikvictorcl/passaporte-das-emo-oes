import React from 'react';
import { MindMapItem } from '../types';
import { WaveDivider } from './WaveDivider';

interface MindMapsShowcaseProps {
  onSelectMap?: (map: MindMapItem) => void;
}

export interface ShowcaseMindMapItem extends MindMapItem {
  sheetNumber?: string;
  badgeLabel?: string;
  srcSet?: string;
}

// 8 Optimized Local WebP URLs (Directly generated from the provided Imgur links)
const imgurJornal1 = '/images/jornal-1-260.webp';
const imgurJornal2 = '/images/jornal-2-260.webp';
const imgurJornal3 = '/images/jornal-3-260.webp';
const imgurJornal4 = '/images/jornal-4-260.webp';
const imgurJornal5 = '/images/jornal-5-260.webp';
const imgurJornal6 = '/images/jornal-6-260.webp';
const imgurJornal7 = '/images/jornal-7-260.webp';
const imgurJornal8 = '/images/jornal-8-260.webp';

// All 8 individual Passaportes das Emoções
export const sampleMindMaps: ShowcaseMindMapItem[] = [
  {
    id: 'showcase-1',
    title: 'Passaporte das Emoções — Edição 1',
    category: 'Expressão Emocional',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Atividade para reconhecer momentos felizes, conquistas e estimular bons sentimentos na criança.',
    branches: ['Reconhecer o que Sente', 'Onde Sinto no Corpo', 'Momentos Especiais'],
    previewUrl: imgurJornal1,
    srcSet: '/images/jornal-1-180.webp 180w, /images/jornal-1-260.webp 260w, /images/jornal-1-420.webp 420w, /images/jornal-1-600.webp 600w, /images/jornal-1-1491.webp 1491w',
    accentColor: '#781428',
  },
  {
    id: 'showcase-2',
    title: 'Passaporte das Emoções — Edição 2',
    category: 'Acolhimento Infantil',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Espaço seguro para a criança desabafar, dar nome às emoções e se sentir compreendida.',
    branches: ['Dar Nome ao que Sente', 'Espaço para Desabafar', 'O que Me Acalma'],
    previewUrl: imgurJornal2,
    srcSet: '/images/jornal-2-180.webp 180w, /images/jornal-2-260.webp 260w, /images/jornal-2-420.webp 420w, /images/jornal-2-600.webp 600w, /images/jornal-2-1491.webp 1491w',
    accentColor: '#A31D36',
  },
  {
    id: 'showcase-3',
    title: 'Passaporte das Emoções — Edição 3',
    category: 'Regulação Emocional',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Ajuda a criança a entender sentimentos difíceis e transformar a frustração em palavras.',
    branches: ['Gatilhos Emocionais', 'Expressão Segura', 'Como Voltar à Calma'],
    previewUrl: imgurJornal3,
    srcSet: '/images/jornal-3-180.webp 180w, /images/jornal-3-260.webp 260w, /images/jornal-3-420.webp 420w, /images/jornal-3-600.webp 600w, /images/jornal-3-1491.webp 1491w',
    accentColor: '#781428',
  },
  {
    id: 'showcase-4',
    title: 'Passaporte das Emoções — Edição 4',
    category: 'Segurança Afetiva',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Exploração leve e criativa dos sentimentos infantis e recursos internos de proteção.',
    branches: ['O que Me Preocupa', 'Rede de Apoio', 'Descobrindo a Coragem'],
    previewUrl: imgurJornal4,
    srcSet: '/images/jornal-4-180.webp 180w, /images/jornal-4-260.webp 260w, /images/jornal-4-420.webp 420w, /images/jornal-4-600.webp 600w, /images/jornal-4-1491.webp 1491w',
    accentColor: '#781428',
  },
  {
    id: 'showcase-5',
    title: 'Passaporte das Emoções — Edição 5',
    category: 'Autoconhecimento',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Atividade prática para organizar pensamentos e sentimentos dentro e fora da sessão.',
    branches: ['Pensamentos Lá Dentro', 'Sinais do Corpo', 'Respiração e Presença'],
    previewUrl: imgurJornal5,
    srcSet: '/images/jornal-5-180.webp 180w, /images/jornal-5-260.webp 260w, /images/jornal-5-420.webp 420w, /images/jornal-5-600.webp 600w, /images/jornal-5-1491.webp 1491w',
    accentColor: '#A31D36',
  },
  {
    id: 'showcase-6',
    title: 'Passaporte das Emoções — Edição 6',
    category: 'Bem-Estar Infantil',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Estimula a percepção de serenidade, segurança e autorregulação no processo terapêutico.',
    branches: ['Meu Lugar Seguro', 'O que Traz Paz', 'Vínculo Terapêutico'],
    previewUrl: imgurJornal6,
    srcSet: '/images/jornal-6-180.webp 180w, /images/jornal-6-260.webp 260w, /images/jornal-6-420.webp 420w, /images/jornal-6-600.webp 600w, /images/jornal-6-1491.webp 1491w',
    accentColor: '#781428',
  },
  {
    id: 'showcase-7',
    title: 'Passaporte das Emoções — Edição 7',
    category: 'Expressão e Vínculo',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Facilita a comunicação da criança no tempo dela, fortalecendo o vínculo com o psicólogo.',
    branches: ['No Tempo da Criança', 'Expressão sem Julgamento', 'Autoconfiança'],
    previewUrl: imgurJornal7,
    srcSet: '/images/jornal-7-180.webp 180w, /images/jornal-7-260.webp 260w, /images/jornal-7-420.webp 420w, /images/jornal-7-600.webp 600w, /images/jornal-7-1491.webp 1491w',
    accentColor: '#A31D36',
  },
  {
    id: 'showcase-8',
    title: 'Passaporte das Emoções — Edição 8',
    category: 'Comunicação e Afeto',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Ferramenta interativa para expressar emoções cotidianas e fortalecer a autoconfiança da criança.',
    branches: ['Sentimentos e Afeto', 'Diálogo Aberto', 'Crescimento Emocional'],
    previewUrl: imgurJornal8,
    srcSet: '/images/jornal-8-180.webp 180w, /images/jornal-8-260.webp 260w, /images/jornal-8-420.webp 420w, /images/jornal-8-600.webp 600w, /images/jornal-8-1491.webp 1491w',
    accentColor: '#781428',
  },
];

// ROW 1 & ROW 2 using all 8 individual passaportes
export const row1Maps: ShowcaseMindMapItem[] = sampleMindMaps;
export const row2Maps: ShowcaseMindMapItem[] = [
  sampleMindMaps[4],
  sampleMindMaps[5],
  sampleMindMaps[6],
  sampleMindMaps[7],
  sampleMindMaps[0],
  sampleMindMaps[1],
  sampleMindMaps[2],
  sampleMindMaps[3],
];

export const MindMapsShowcase: React.FC<MindMapsShowcaseProps> = ({ onSelectMap }) => {
  return (
    <section 
      id="mapas-por-dentro"
      aria-label="Vitrine do Passaporte das Emoções"
      className="pt-10 sm:pt-14 md:pt-18 pb-0 bg-transparent overflow-hidden relative select-none"
    >
      {/* Header Section (Matching Image Reference with Brand Colors) */}
      <div className="max-w-[800px] mx-auto text-center px-4 sm:px-6 mb-8 sm:mb-10 md:mb-12">
        <h2 className="title-3d-float-1 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
          Veja os <span className="text-[#781428]">Passaportes</span> por Dentro
        </h2>
        
        {/* Accent Bar Underline */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#781428] rounded-full mx-auto mt-3 sm:mt-3.5" />
      </div>

      {/* FAIXA BORDÔ COM ONDULAÇÃO UNIFORME E DIVISÓRIAS ONDULADAS INTEGRADAS */}
      <div className="relative w-full bg-[#781428] my-10 sm:my-14 md:my-16 select-none">
        {/* Divisória ondulada suave no topo do banner bordô, projetando-se para cima */}
        <WaveDivider fillColor="#781428" position="top" />

        {/* Conteúdo com overflow-hidden para os cartões rolarem continuamente sem estourar a tela */}
        <div className="animate-snake-banner py-10 sm:py-16 md:py-20 lg:py-22 relative w-full overflow-hidden">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            
            {/* FILEIRA 1: Movimento contínuo para a DIREITA com ondulação uniforme */}
            <div className="relative w-full overflow-visible py-2 sm:py-3">
              <div className="animate-marquee-right flex gap-4 sm:gap-6 md:gap-7 items-center">
                {/* First Set */}
                {row1Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r1-set1-${map.id}-${idx}`}
                    map={map}
                    waveClass="animate-snake-card-1"
                    animationDelay={`${(idx % row1Maps.length) * -0.5}s`}
                  />
                ))}
                {/* Duplicated Set for Seamless Infinite Loop */}
                {row1Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r1-set2-${map.id}-${idx}`}
                    map={map}
                    aria-hidden={true}
                    waveClass="animate-snake-card-1"
                    animationDelay={`${((idx + row1Maps.length) % (row1Maps.length * 2)) * -0.5}s`}
                  />
                ))}
              </div>
            </div>

            {/* FILEIRA 2: Movimento contínuo para a ESQUERDA com ondulação uniforme */}
            <div className="relative w-full overflow-visible py-2 sm:py-3">
              <div className="animate-marquee-left flex gap-4 sm:gap-6 md:gap-7 items-center">
                {/* First Set */}
                {row2Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r2-set1-${map.id}-${idx}`}
                    map={map}
                    waveClass="animate-snake-card-2"
                    animationDelay={`${(idx % row2Maps.length) * -0.5}s`}
                  />
                ))}
                {/* Duplicated Set for Seamless Infinite Loop */}
                {row2Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r2-set2-${map.id}-${idx}`}
                    map={map}
                    aria-hidden={true}
                    waveClass="animate-snake-card-2"
                    animationDelay={`${((idx + row2Maps.length) % (row2Maps.length * 2)) * -0.5}s`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Divisória ondulada suave na base do banner bordô, projetando-se para baixo */}
        <WaveDivider fillColor="#781428" position="bottom" />
      </div>
    </section>
  );
};

// Subcomponent: Pure Mind Map Sheet in Horizontal Proportion (Original Aspect Ratio) with Snake Wave
interface CleanMindMapCardProps {
  map: ShowcaseMindMapItem;
  'aria-hidden'?: boolean;
  waveClass?: string;
  animationDelay?: string;
}

const CleanMindMapCard: React.FC<CleanMindMapCardProps> = ({ 
  map, 
  'aria-hidden': ariaHidden,
  waveClass = '',
  animationDelay = '0s',
}) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className={`shrink-0 ${waveClass}`}
      style={{
        animationDelay,
      }}
    >
      <div className="w-[260px] min-[400px]:w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[1491/1055] bg-[#FAF6EE] rounded-md sm:rounded-lg border border-[#FAF6EE]/40 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.28)] flex items-center justify-center p-0.5 sm:p-1 select-none pointer-events-none hover:shadow-[0_16px_42px_rgba(0,0,0,0.35)] transition-shadow">
        <div className="w-full h-full rounded-[3px] sm:rounded-md overflow-hidden bg-[#FAF6EE] flex items-center justify-center">
          <img 
            src={map.previewUrl} 
            srcSet={map.srcSet}
            sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 480px"
            width={1491}
            height={1055}
            alt={ariaHidden ? '' : `Passaporte das Emoções - ${map.title}`}
            className="w-full h-full object-cover object-top select-none block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};
