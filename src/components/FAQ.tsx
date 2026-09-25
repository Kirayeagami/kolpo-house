import React, { useState } from 'react';
import { business } from '../config/business';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FAQ: React.FC = () => {
  const faqs = business.faqs;
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const { ref, isInView, getItemClasses } = useScrollAnimation(2);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      ref={ref}
      id="faq"
      aria-label="Chapter 12: Practical Dialogues & FAQ"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg"
    >
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>QUESTIONS & ANSWERS</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                isInView ? 'is-revealed' : ''
              }`}>
                FREQUENT INQUIRIES
              </h2>
            </div>
          </div>

          <div className="max-w-sm text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            Clarity from the very beginning. Here is how we think, price, and collaborate on ambitious engagements.
          </div>
        </div>

        {/* Accordion Stack */}
        <div className={`space-y-2.5 ${getItemClasses(1)}`}>
          {faqs.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="rounded-xl border border-kh-border/25 bg-kh-paper overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-kh-surface/30 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-display text-base sm:text-lg md:text-xl text-kh-ink leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-kh-border/30 flex items-center justify-center text-kh-ink shrink-0 transition-colors ${
                      isOpen ? 'bg-kh-ink text-kh-bg' : ''
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-7 pb-6 sm:pb-8 pt-2 text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light border-t border-kh-border/10 animate-fade-in"
                  >
                    {item.a}
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
