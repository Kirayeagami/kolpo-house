import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

export const ProcessJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stages = business.processStages;
  const current = stages[activeStageIndex];
  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(3, { threshold: 0.15 });

  // Auto-advancing 5-stage timeline
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, stages.length]);

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : stages.length - 1));
  };

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="process"
      aria-label="Chapter 04: Spatial Methodology (The Process Journey)"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg relative overflow-hidden"
    >
      {/* Organic Living Bougainvillea Ambient Accent (ERA Variant 05) */}
      <BougainvilleaVideo
        variant="05"
        mode="decorative"
        position="custom"
        className="-bottom-16 -left-16 sm:-bottom-20 sm:-left-20 w-56 sm:w-80 md:w-96 aspect-square opacity-55 dark:opacity-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
        {/* Header (Item 0) */}
        <div
          style={{ transitionDelay: getItemDelay(0, 140) }}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}
        >
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>HOW WE WORK</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                THE PROCESS JOURNEY
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right font-mono hidden sm:block">
              <span className="text-[9px] tracking-widest uppercase text-kh-ink-muted block">
                STUDIO METHOD
              </span>
              <span className="font-display text-base text-kh-ink font-medium">
                {current.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-border hover:border-kh-ink hover:bg-kh-surface flex items-center justify-center text-kh-ink transition-colors cursor-pointer"
                aria-label="Previous Process Stage"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-ink bg-kh-ink hover:bg-kh-accent hover:border-kh-accent text-kh-bg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Process Stage"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Stage Horizontal Stepper (Item 1) — Complete text without truncation */}
        <div
          style={{ transitionDelay: getItemDelay(1, 140) }}
          className={getItemClasses(1)}
        >
          <div
            role="tablist"
            aria-label="Process Stages Stepper"
            className="flex sm:grid sm:grid-cols-5 gap-2 md:gap-2.5 overflow-x-auto no-scrollbar pb-1"
          >
            {stages.map((st, i) => {
              const isActive = activeStageIndex === i;
              return (
                <button
                  key={st.num}
                  role="tab"
                  id={`process-tab-${i}`}
                  aria-controls={`process-panel-${i}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStageIndex(i)}
                  className={`min-w-[140px] sm:min-w-0 flex-1 shrink-0 text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive
                    ? 'border-kh-ink bg-kh-surface shadow-xs'
                    : 'border-kh-border/20 bg-kh-paper/40 hover:border-kh-border hover:bg-kh-surface/40'
                    }`}
                >
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-kh-ink-muted mb-1">
                    <span className="uppercase font-semibold tracking-wider">{st.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-kh-ink" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="w-full h-[2px] bg-kh-border/20 mt-2 sm:mt-2.5 overflow-hidden rounded-full">
            <div
              className="h-full bg-kh-ink transition-all duration-300"
              style={{
                width: `${((activeStageIndex + 1) / stages.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Stage Content Card (Item 2) */}
        <div
          role="tabpanel"
          key={current.num}
          id={`process-panel-${activeStageIndex}`}
          aria-labelledby={`process-tab-${activeStageIndex}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          style={{ transitionDelay: getItemDelay(2, 140) }}
          className={`p-5 sm:p-6 md:p-8 rounded-2xl border border-kh-border/30 bg-kh-paper grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-8 items-start ${getItemClasses(2)}`}
        >
          <div className="md:col-span-7 space-y-2.5 sm:space-y-3.5">
            {/* <div className="inline-block text-[9px] sm:text-[10px] font-mono tracking-[0.24em] text-kh-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-kh-border/30 bg-kh-surface">
              STAGE METHOD // {current.subtitle}
            </div> */}

            <div className="editorial-mask">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-kh-ink leading-tight">
                {current.name}
              </h3>
            </div>

            <p className="font-display text-base sm:text-lg md:text-xl text-kh-ink italic font-light leading-snug">
              {current.quote}
            </p>

            <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
              {current.description}
            </p>
          </div>

          <div className="md:col-span-5 p-4 sm:p-5 rounded-xl border border-kh-border/25 bg-kh-surface/50 space-y-2.5 sm:space-y-3">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-kh-ink font-semibold pb-1.5 border-b border-kh-border/20">
              KEY OUTPUTS & DELIVERABLES:
            </div>

            <ul className="space-y-2 sm:space-y-2.5">
              {current.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-kh-ink">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kh-accent mt-0.5 shrink-0" />
                  <span className="font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
