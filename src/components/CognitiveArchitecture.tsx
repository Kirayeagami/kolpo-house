import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import { ArrowRight, Compass } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

export const CognitiveArchitecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const steps = business.cognitiveFramework;
  const current = steps[activeStep];
  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(2, { threshold: 0.15 });

  // Auto-cycling stepper through WHO, WHY, WHAT, HOW
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [isPaused, steps.length]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="cognitive"
      aria-label="Chapter 03: Cognitive Architecture"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/20 relative overflow-hidden"
    >
      {/* Organic Living Bougainvillea Ambient Accent (ERA Variant 03) */}
      <BougainvilleaVideo
        variant="03"
        mode="decorative"
        position="custom"
        className="-bottom-14 -left-12 sm:-bottom-20 sm:-left-16 w-56 sm:w-72 md:w-96 aspect-square opacity-45 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
        {/* Header */}
        <div
          style={{ transitionDelay: getItemDelay(0, 140) }}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}
        >
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>STRATEGIC THINKING</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                STRATEGY BEFORE EXECUTION
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-kh-ink-muted uppercase tracking-widest text-[10px] sm:text-xs">
              {current.key} FRAMEWORK
            </span>
            <div className="w-20 sm:w-24 h-[2px] bg-kh-border/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-kh-ink transition-all duration-300"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Interactive Grid: Stepper + Dissection Panel */}
        <div
          style={{ transitionDelay: getItemDelay(1, 140) }}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-start ${getItemClasses(1)}`}
        >
          {/* Left Column: 4 Strategic Keys without decorative numbers */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 sm:gap-2.5">
            {steps.map((st, i) => {
              const isSelected = activeStep === i;
              return (
                <button
                  key={st.key}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${isSelected
                    ? 'border-kh-ink bg-kh-paper shadow-xs lg:translate-x-1'
                    : 'border-kh-border/20 bg-kh-surface/40 hover:border-kh-border hover:bg-kh-paper/60'
                    }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <div
                      className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-200 ${isSelected
                        ? 'bg-kh-ink scale-110'
                        : 'bg-kh-border/40'
                        }`}
                    />
                    <div>
                      <div className="font-display text-lg sm:text-xl lg:text-2xl text-kh-ink leading-none">
                        {st.key}
                      </div>
                      <div className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-kh-ink-muted mt-0.5 sm:mt-1 truncate max-w-[120px] sm:max-w-none">
                        {/* {st.subtitle} */}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 hidden lg:block transition-transform duration-300 shrink-0 ${isSelected
                      ? 'text-kh-ink translate-x-0.5'
                      : 'text-kh-ink-muted opacity-30'
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Strategic Implication Panel */}
          <div
            className="lg:col-span-7 flex flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              key={current.key}
              className="h-auto p-5 sm:p-7 md:p-8 rounded-2xl border border-kh-border/30 bg-kh-paper flex flex-col space-y-4 sm:space-y-5 transition-all duration-300 ease-out"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.24em] text-kh-ink-muted uppercase pb-2 sm:pb-2.5 border-b border-kh-border/20">
                  <span>{current.key} FRAMEWORK</span>
                  <span>KOLKATA, INDIA</span>
                </div>

                <div className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-kh-accent font-semibold">
                  {current.subtitle}
                </div>

                <div className="editorial-mask">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-kh-ink leading-snug">
                    {current.question}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-kh-ink-secondary leading-relaxed font-light">
                  {current.description}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-kh-border/20 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-kh-ink">
                  <Compass className="w-4 h-4 text-kh-accent shrink-0" />
                  <span className="text-[11px] sm:text-xs">
                    Discipline Status:{' '}
                    <span className="font-semibold uppercase text-kh-ink">
                      {current.status}
                    </span>
                  </span>
                </div>

                <span className="text-[9px] tracking-widest uppercase text-kh-ink-muted hidden sm:inline-block">
                  KOLPO HOUSE METHOD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
