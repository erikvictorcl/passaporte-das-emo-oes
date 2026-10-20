import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'O material é digital?',
      answer: 'Sim, o material é 100% digital. Você terá acesso aos arquivos em alta definição imediatamente após a confirmação do pagamento, podendo usar no computador, tablet, celular ou imprimir para entregar ao paciente.',
    },
    {
      question: 'Como receberei meu acesso?',
      answer: 'Assim que a compra for confirmada, você receberá um e-mail e mensagem no WhatsApp com o link exclusivo para acessar e baixar todo o acervo do Passaporte das Emoções.',
    },
    {
      question: 'Posso usar dentro e fora da sessão?',
      answer: 'Sim. O material é pensado exatamente para ser entregue ao paciente como atividade terapêutica, tanto durante o atendimento quanto como tarefa para casa.',
    },
    {
      question: 'Qual é o diferencial do Passaporte das Emoções?',
      answer: 'Não é mais uma atividade genérica: o Passaporte apresenta mais de 200 emoções de forma leve e criativa, ajudando a criança a transformar o que ela sente em palavras e registros de autoconhecimento, no tempo dela.',
    },
    {
      question: 'Para quem este material é indicado?',
      answer: 'É indicado para psicólogos infantis e profissionais que atendem crianças, oferecendo um material pronto e profissional para conduzir a sessão com clareza e fortalecer o vínculo.',
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Você conta com 7 dias de garantia incondicional. Durante esse prazo, você pode explorar todo o material com calma. Se não estiver satisfeito, basta solicitar o reembolso integral.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      aria-label="Perguntas Frequentes"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#A31D36] uppercase bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#D0BEA2]">
            Tire Suas Dúvidas
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E2530] tracking-tight">
            DÚVIDAS <span className="text-[#781428]">FREQUENTES</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5A6578]">
            Respostas para as perguntas mais comuns sobre o formato e acesso.
          </p>
        </div>

        {/* Accordion List - initially collapsed */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF6EE] rounded-[14px] border border-[#D0BEA2] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left py-4 px-5 sm:px-6 flex items-center justify-between gap-4 font-semibold text-[#1E2530] text-sm sm:text-base hover:text-[#781428] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A31D36] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#781428]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6578] leading-relaxed border-t border-[#FAF8F5]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
