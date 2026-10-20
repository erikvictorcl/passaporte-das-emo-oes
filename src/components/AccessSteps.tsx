import React from 'react';
import { CreditCard, Send, Download, Printer } from 'lucide-react';

export const AccessSteps: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: CreditCard,
      text: 'Compra rápida e 100% segura',
    },
    {
      number: '2',
      icon: Send,
      text: 'Acesso imediato aos arquivos por e-mail',
    },
    {
      number: '3',
      icon: Download,
      text: 'Download dos PDFs em altíssima resolução',
    },
    {
      number: '4',
      icon: Printer,
      text: 'Impressão facilitada em A4 e aplicação em sessão de atendimentos',
    },
  ];

  return (
    <section 
      id="como-recebera"
      aria-label="Como você vai receber o acesso"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Heading with Underline Accent */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
            Como você vai <span className="text-[#781428]">receber o acesso</span>
          </h2>
          {/* Accent Underline Bar */}
          <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#F59E0B] rounded-full mx-auto mt-2.5 sm:mt-3" />
        </div>

        {/* 4 Steps Stacked Horizontal Cards */}
        <div className="space-y-3.5 sm:space-y-4 max-w-[700px] mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF6EE] rounded-[18px] sm:rounded-[22px] p-4 sm:p-5 px-5 sm:px-6 border border-[#D0BEA2] hover:border-[#781428]/40 shadow-xs transition-all flex items-center gap-3.5 sm:gap-4 text-left"
              >
                {/* Step Number Circle */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#781428] text-white font-extrabold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm">
                  {step.number}
                </div>

                {/* Step Icon + Description */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#15803D] shrink-0 stroke-[2.2]" aria-hidden="true" />
                  <p className="text-sm sm:text-base md:text-[17px] font-semibold text-[#1E2530] leading-snug">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

