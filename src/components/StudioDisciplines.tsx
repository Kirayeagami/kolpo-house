import React from 'react';
import { business } from '../config/business';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const StudioDisciplines: React.FC = () => {
  const disciplines = business.disciplines;
  const { ref, isInView, getItemClasses } = useScrollAnimation(3);

  return (
    <section
      ref={ref}
      id="studio"
      aria-label="Chapter 09: Inside the Studio & Disciplines"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/20"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>HOW WE OPERATE</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                FOUR DISCIPLINES. ONE STUDIO.
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            We operate as an autonomous, tightly knit studio in Kolkata. We do not maintain bloated agency bureaucracy; our senior strategists and engineers work directly on your brand.
          </div>
        </div>

        {/* Photographic Study + 4 Operational Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Left Column: Paper Study Photographic Composition */}
          <div className={`md:col-span-4 rounded-2xl overflow-hidden border border-kh-border/30 bg-kh-paper shadow-xs ${getItemClasses(1)}`}>
            <div className="relative aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/5] overflow-hidden">
              <img
                src="/assets/paper-study.jpg"
                alt="Tactile Paper Study in Kolpo House Studio"
                className="w-full h-full object-cover filter saturate-[0.9] card-image-hover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kh-ink/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-kh-paper">
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-75 block">
                  CRAFT & MATERIALITY
                </span>
                <span className="font-display text-base sm:text-lg font-light leading-snug">
                  Form follows intention.
                </span>
              </div>
            </div>
            <div className="p-3.5 sm:p-4 text-xs font-mono text-kh-ink-muted leading-relaxed">
              <span className="text-kh-ink font-semibold block mb-0.5">
                KOLKATA, INDIA
              </span>
              Operating at the intersection of creative strategy, tactile craft, and modern web architecture.
            </div>
          </div>

          {/* Right Column: 4 Disciplines */}
          <div className={`md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 ${getItemClasses(2)}`}>
            {disciplines.map((d) => (
              <div
                key={d.num}
                className="p-4 sm:p-5 rounded-2xl border border-kh-border/25 bg-kh-paper flex flex-col justify-between space-y-2.5 hover:border-kh-ink/40 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-kh-ink-muted pb-1.5 border-b border-kh-border/20 mb-2">
                    <span className="uppercase tracking-wider">STUDIO DISCIPLINE</span>
                    <span className="text-kh-accent font-semibold">{d.subtitle}</span>
                  </div>

                  <h3 className="font-display text-2xl text-kh-ink mb-2">
                    {d.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light mb-4">
                    {d.description}
                  </p>

                  <div className="p-3 rounded-lg bg-kh-surface text-[11px] font-mono text-kh-ink-secondary mb-4">
                    <span className="font-semibold text-kh-ink block mb-0.5 uppercase">
                      COLLABORATIVE SYNERGY:
                    </span>
                    {d.synergy}
                  </div>
                </div>

                <div className="pt-3 border-t border-kh-border/20">
                  <div className="text-[9px] font-mono tracking-widest uppercase text-kh-ink font-semibold mb-2">
                    AREAS OF FOCUS:
                  </div>
                  <ul className="space-y-1.5">
                    {d.focus.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-kh-ink font-light">
                        <Check className="w-3.5 h-3.5 text-kh-accent shrink-0" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
