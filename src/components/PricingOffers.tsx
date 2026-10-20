import React from 'react';
import { Check, X, Shield, Clock, Download, Infinity as InfinityIcon } from 'lucide-react';

interface PricingOffersProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingOffers: React.FC<PricingOffersProps> = ({ onSelectPlan }) => {
  return (
    <section 
      id="ofertas"
      aria-label="Tabela de Ofertas do Produto"
      className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#1E2530] tracking-tight">
            Escolha a melhor <span className="text-[#781428]">opção para você</span>
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-[#1E2530]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF6EE] rounded-full border border-[#D0BEA2] shadow-2xs">
              <Check className="w-4 h-4 text-[#16A34A] stroke-[2.8]" />
              <span>Acesso imediato ao e-mail</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF6EE] rounded-full border border-[#D0BEA2] shadow-2xs">
              <Shield className="w-4 h-4 text-[#16A34A] stroke-[2.2]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (Matching Reference Design with Brand Colors) */}
        <div 
          id="planos-precos"
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch max-w-[880px] mx-auto scroll-mt-20"
        >
          
          {/* 1. PACOTE BÁSICO */}
          <div 
            id="plano-basico"
            className="bg-[#FAF6EE] rounded-[24px] sm:rounded-[28px] border border-[#D0BEA2] p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(120,20,40,0.07)] hover:border-[#F7C2CC] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2530] tracking-tight mb-2">
                  - Básico
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#526075] line-through">
                  R$ 37,90
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#15803D] tracking-tight mt-0.5">
                  R$ 10
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#475569] mt-0.5">
                  único
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#DCFCE7] text-[#15803D] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#86EFAC]/70 shadow-2xs">
                    ECONOMIZE R$ 27,90
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#FCEBED] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#1E2530] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    +200 Passaportes das Emoções para Atendimento
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#1E2530] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    Prontos para aplicar dentro e fora da sessão
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#781428] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    Acesso vitalício ao material principal
                  </span>
                </div>
              </div>

              {/* Not Included Header & Items */}
              <div className="mt-7 pt-5 border-t border-[#FCEBED]">
                <p className="text-[11px] font-extrabold text-[#526075] uppercase tracking-wider mb-3">
                  NÃO INCLUSOS NESTE PACOTE:
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#5A6578] line-through">
                    <X className="w-4 h-4 text-[#9E606D] shrink-0 stroke-[2.2]" />
                    <span>Todos os 4 Bônus Exclusivos</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#5A6578] line-through">
                    <X className="w-4 h-4 text-[#9E606D] shrink-0 stroke-[2.2]" />
                    <span>Cartões e Dinâmicas de Vínculo Infantil</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#5A6578] line-through">
                    <X className="w-4 h-4 text-[#9E606D] shrink-0 stroke-[2.2]" />
                    <span>Atualizações contínuas de conteúdo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Delivery Badge + Button */}
            <div className="mt-8 pt-4">
              {/* Delivery Notification Box */}
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-[12px] sm:rounded-[14px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#15803D] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#15803D] italic leading-tight">
                  Receba o link de download instantâneo no seu e-mail e WhatsApp.
                </p>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => onSelectPlan?.('Pacote Básico')}
                className="relative overflow-hidden w-full py-3.5 sm:py-4 px-6 bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-[14px] sm:rounded-[16px] shadow-[0_8px_24px_rgba(22,163,74,0.32)] hover:shadow-[0_12px_28px_rgba(22,163,74,0.42)] transition-all cursor-pointer text-center"
              >
                {/* Faixa branca de luz a cada 2s */}
                <span 
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-btn-shine" 
                  aria-hidden="true"
                />
                <span className="relative z-10">Quero o básico</span>
              </button>
            </div>
          </div>

          {/* 2. PACOTE COMPLETO (Highlighted Card) */}
          <div 
            id="plano-completo"
            className="bg-[#FAF6EE] rounded-[24px] sm:rounded-[28px] border-2 sm:border-[2.5px] border-[#781428] p-6 sm:p-7 md:p-8 shadow-[0_12px_40px_rgba(120,20,40,0.18)] transition-all flex flex-col justify-between relative"
          >
            <div>
              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2530] tracking-tight mb-2">
                  Completo
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#526075] line-through">
                  R$ 127,00
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#15803D] tracking-tight mt-0.5">
                  R$ 19,90
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#475569] mt-0.5">
                  único
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#DCFCE7] text-[#15803D] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#86EFAC]/70 shadow-2xs">
                    ECONOMIZE R$ 107,10
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#FCEBED] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#16A34A] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    +200 Passaportes das Emoções + Todos os Bônus Exclusivos!
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#16A34A] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    Prontos para aplicar dentro e fora da sessão
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#781428] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    Acesso vitalício ao material principal e bônus
                  </span>
                </div>
              </div>

              {/* Exclusive Bonuses Container Box */}
              <div className="mt-6 p-3.5 sm:p-4 bg-[#FDF2F4] border border-[#F7C2CC] rounded-[18px]">
                <p className="text-xs sm:text-[13px] font-black text-[#781428] uppercase tracking-wide flex items-center gap-1.5 mb-3">
                  <span className="text-sm">🎁</span>
                  <span>BÔNUS EXCLUSIVOS (VALOR: R$ 97,24 POR R$ 0,00):</span>
                </p>

                <div className="space-y-2">
                  <div className="bg-[#FAF6EE] rounded-[12px] p-2.5 sm:p-3 border border-[#FCE8EC] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="passaporte">🎓</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Capa do Passaporte + Certificado de Explorador das Emoções
                    </span>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-[12px] p-2.5 sm:p-3 border border-[#FCE8EC] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="adesivos">🏷️</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Folha de Carimbos e Adesivos Recortáveis
                    </span>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-[12px] p-2.5 sm:p-3 border border-[#FCE8EC] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="mapa">🗺️</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Mapa-múndi das Emoções
                    </span>
                  </div>

                  <div className="bg-[#FAF6EE] rounded-[12px] p-2.5 sm:p-3 border border-[#FCE8EC] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="guia">📘</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Guia para psicólogos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Delivery Badge + Button + Limited Time Guarantee */}
            <div className="mt-8 pt-4">
              {/* Delivery Notification Box */}
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-[12px] sm:rounded-[14px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#16A34A] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#15803D] italic leading-tight">
                  Receba o link de download instantâneo no seu e-mail e WhatsApp.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="https://pay.wiapy.com/MHeOiJKlOXoP"
                target="_self"
                className="relative overflow-hidden block w-full py-3.5 sm:py-4 px-6 bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-[14px] sm:rounded-[16px] shadow-[0_8px_24px_rgba(22,163,74,0.35)] hover:shadow-[0_12px_30px_rgba(22,163,74,0.45)] transition-all cursor-pointer text-center no-underline"
              >
                {/* Faixa branca de luz a cada 2s */}
                <span 
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-btn-shine" 
                  aria-hidden="true"
                />
                <span className="relative z-10">Quero o Completo</span>
              </a>

              {/* Limited Time Notice */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#475569] uppercase">
                <Clock className="w-3.5 h-3.5 text-[#475569]" />
                <span>OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

