import React, { useState } from 'react';
import { FAQS } from '../data/hyroxData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { COACH_INFO } from '../data/hyroxData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleWhatsAppAsk = () => {
    const text = encodeURIComponent(
      `Hi Coach Ryan! I have a question about HYROX training in Penang that isn't in the FAQ.`
    );
    window.open(`https://wa.me/${COACH_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-mono text-xs uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS (常见问题)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-condensed font-black uppercase text-white tracking-tight">
            EVERYTHING YOU NEED TO <span className="text-yellow-400">KNOW BEFORE STARTING</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Got questions about fitness requirements, training locations in Penang, or RM packages? Here are direct answers.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-200 ${
                  isOpen ? 'bg-zinc-900/90 border-yellow-400' : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-condensed font-bold text-lg sm:text-xl uppercase text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 shrink-0 ${isOpen ? 'text-yellow-400 bg-black' : 'text-zinc-500 bg-zinc-800'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-zinc-800/80 pt-4 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Box */}
        <div className="mt-12 bg-zinc-950 border border-zinc-800 p-6 text-center space-y-3">
          <div className="text-white font-condensed font-black text-xl uppercase tracking-wide">
            STILL HAVE A QUESTION FOR COACH RYAN?
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
            Directly message Coach Ryan on WhatsApp to ask about your specific background, scheduling, or custom packages.
          </p>
          <button
            onClick={handleWhatsAppAsk}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-condensed font-black text-base uppercase tracking-wider transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>ASK ON WHATSAPP (+60 12-488 3928)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
