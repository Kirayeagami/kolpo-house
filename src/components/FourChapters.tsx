import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FourChapters: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const chapters = business.chapters;
  const current = chapters[activeChapterIndex];
  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(3, { threshold: 0.15 });

  // Auto-sliding carousel (every 5 seconds, pauses when hovered)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveChapterIndex((prev) => (prev < chapters.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, chapters.length]);

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev > 0 ? prev - 1 : chapters.length - 1));
  };

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev < chapters.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="story"
      aria-label="Chapter 02: The Kolpo House Story"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Header Strip */}
        <div
          style={{ transitionDelay: getItemDelay(0, 140) }}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}
        >
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>THE FOUR PILLARS</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                THE KOLPO HOUSE STORY
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex flex-col items-end text-right font-mono">
              <span className="text-[9px] tracking-widest uppercase text-kh-ink-muted">
                STUDIO PILLAR
              </span>
              <span className="text-xs text-kh-ink font-semibold">
                {current.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-border hover:border-kh-ink hover:bg-kh-surface flex items-center justify-center text-kh-ink transition-colors cursor-pointer"
                aria-label="Previous Chapter"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-ink bg-kh-ink hover:bg-kh-accent hover:border-kh-accent text-kh-bg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Chapter"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Rail Selector (Item 1) */}
        <div
          style={{ transitionDelay: getItemDelay(1, 140) }}
          className={getItemClasses(1)}
        >
          <div
            role="tablist"
            aria-label="Four Chapters Selector"
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5"
          >
            {chapters.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.num}
                  role="tab"
                  id={`chapter-tab-${idx}`}
                  aria-controls={`chapter-panel-${idx}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive
                      ? 'border-kh-ink bg-kh-surface/70 shadow-xs'
                      : 'border-kh-border/30 bg-kh-paper/40 hover:border-kh-border hover:bg-kh-surface/40'
                    }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-kh-ink-muted mb-0.5 sm:mb-1">
                    <span className="uppercase font-semibold tracking-wider">{ch.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />}
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-kh-ink-secondary truncate">
                    {/* {ch.title} */}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-kh-ink" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="w-full h-[2px] bg-kh-border/20 mt-2 sm:mt-2.5 overflow-hidden rounded-full">
            <div
              className="h-full bg-kh-ink transition-all duration-300"
              style={{
                width: `${((activeChapterIndex + 1) / chapters.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Chapter Detail Stage (Item 2) */}
        <div
          role="tabpanel"
          key={current.num}
          id={`chapter-panel-${activeChapterIndex}`}
          aria-labelledby={`chapter-tab-${activeChapterIndex}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          style={{ transitionDelay: getItemDelay(2, 140) }}
          className={`p-5 sm:p-6 md:p-8 rounded-2xl border border-kh-border/30 bg-kh-surface/40 backdrop-blur-xs grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 lg:gap-8 items-start ${getItemClasses(2)}`}
        >
          <div className="md:col-span-7 space-y-2.5 sm:space-y-3.5">
            <div className="inline-block text-[9px] sm:text-[10px] font-mono tracking-[0.24em] text-kh-ink-muted uppercase px-2.5 py-0.5 rounded-full border border-kh-border/30 bg-kh-paper">
              {current.name}
            </div>

            <div className="editorial-mask">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-kh-ink leading-tight">
                {current.title}
              </h3>
            </div>

            <p className="font-display text-base sm:text-lg md:text-xl text-kh-ink italic font-light leading-snug">
              {current.quote}
            </p>

            <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
              {current.summary}
            </p>
          </div>

          <div className="md:col-span-5 p-4 sm:p-5 rounded-xl border border-kh-border/25 bg-kh-paper/80 space-y-2.5 sm:space-y-3">
            <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-kh-ink font-semibold pb-1.5 border-b border-kh-border/20">
              CORE DELIVERABLES & PRACTICES:
            </div>

            <ul className="space-y-2 sm:space-y-2.5">
              {current.outputs.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-kh-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kh-accent mt-0.5 shrink-0" />
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
