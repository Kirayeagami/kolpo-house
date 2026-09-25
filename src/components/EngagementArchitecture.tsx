import React from 'react';
import { business } from '../config/business';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface EngagementArchitectureProps {
  onOpenContact: () => void;
}

export const EngagementArchitecture: React.FC<EngagementArchitectureProps> = ({
  onOpenContact,
}) => {
  const engagements = business.engagements;
  const { ref, isInView, getItemClasses } = useScrollAnimation(1 + engagements.length);

  return (
    <section
      ref={ref}
      id="engagement"
      aria-label="Chapter 08: Engagement Architecture"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>ENGAGEMENT ARCHITECTURE</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                isInView ? 'is-revealed' : ''
              }`}>
                BUILT AROUND YOUR BRAND
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            We do not force ambitious brands into rigid corporate retainer boxes. Our partnership models scale flexibly around the specific commercial horizons of your business.
          </div>
        </div>

        {/* 5 Engagement Cards */}
        <div className="space-y-2.5 sm:space-y-3">
          {engagements.map((eng, idx) => (
            <div
              key={eng.num}
              className={`p-4 sm:p-5 md:p-6 rounded-2xl border border-kh-border/25 bg-kh-paper hover:border-kh-ink/40 hover:shadow-xs transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-5 group ${getItemClasses(
                1 + idx
              )}`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="w-2 h-2 rounded-full bg-kh-accent shrink-0 md:mt-1.5" />

                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-kh-ink group-hover:text-kh-accent transition-colors">
                    {eng.title}
                  </h3>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-kh-ink-muted">
                    {eng.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-kh-ink-secondary font-light max-w-xl pt-1">
                    {eng.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 lg:text-right">
                <div className="text-xs font-mono text-kh-ink-muted max-w-xs">
                  {eng.scope}
                </div>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-kh-border/40 hover:border-kh-ink hover:bg-kh-ink hover:text-kh-bg text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
