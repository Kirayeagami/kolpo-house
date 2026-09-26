import React, { useState } from 'react';
import { business } from '../config/business';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface VisualWorldsProps {
  onOpenContact: () => void;
}

export const VisualWorlds: React.FC<VisualWorldsProps> = ({ onOpenContact }) => {
  const [activeWorldIndex, setActiveWorldIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const worlds = business.visualWorlds;
  const current = worlds[activeWorldIndex];
  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(3, { threshold: 0.15 });

  // Auto-slide visual worlds every 5 seconds
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveWorldIndex((prev) => (prev < worlds.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, worlds.length]);

  const handlePrev = () => {
    setActiveWorldIndex((prev) => (prev > 0 ? prev - 1 : worlds.length - 1));
  };

  const handleNext = () => {
    setActiveWorldIndex((prev) => (prev < worlds.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="worlds"
      aria-label="Chapter 05: Four Visual Worlds"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/30"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Header (Item 0) */}
        <div
          style={{ transitionDelay: getItemDelay(0, 140) }}
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}
        >
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>CREATIVE DOMAINS</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                isInView ? 'is-revealed' : ''
              }`}>
                FOUR VISUAL WORLDS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right font-mono hidden sm:block">
              <span className="text-[9px] tracking-widest uppercase text-kh-ink-muted block">
                CREATIVE DOMAIN
              </span>
              <span className="font-display text-base text-kh-ink font-semibold">
                {current.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-border hover:border-kh-ink hover:bg-kh-paper flex items-center justify-center text-kh-ink transition-colors cursor-pointer"
                aria-label="Previous Visual World"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-kh-ink bg-kh-ink hover:bg-kh-accent hover:border-kh-accent text-kh-bg flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Visual World"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* World Selection Tabs (Item 1) */}
        <div
          style={{ transitionDelay: getItemDelay(1, 140) }}
          className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 ${getItemClasses(1)}`}
        >
          {worlds.map((w, i) => {
            const isActive = activeWorldIndex === i;
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => setActiveWorldIndex(i)}
                className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'border-kh-ink bg-kh-paper shadow-xs'
                    : 'border-kh-border/20 bg-kh-surface/40 hover:border-kh-border hover:bg-kh-paper/50'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-kh-ink-muted mb-0.5 sm:mb-1">
                  <span className="uppercase font-semibold tracking-wider">{w.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-kh-ink" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active World Stage (Item 2) */}
        <div
          key={current.id}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ transitionDelay: getItemDelay(2, 140) }}
          className={`p-5 sm:p-6 md:p-8 rounded-2xl border border-kh-border/30 bg-kh-paper grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-stretch shadow-xs ${getItemClasses(2)}`}
        >
          {/* Left: World Description & Deliverables */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-3.5 sm:space-y-4">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-[0.24em] text-kh-ink-muted uppercase pb-2 border-b border-kh-border/20">
                <span>{current.name}</span>
              </div>

              <div className="editorial-mask">
                <h3 className={`font-display text-2xl sm:text-3xl text-kh-ink leading-tight editorial-headline-reveal ${
                  isInView ? 'is-revealed' : ''
                }`}>
                  {current.name}
                </h3>
              </div>

              <p className="font-display text-base sm:text-lg text-kh-ink italic font-light leading-snug">
                {current.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
                {current.description}
              </p>
            </div>

            <div className="pt-3 border-t border-kh-border/20 space-y-2 sm:space-y-2.5">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.24em] uppercase text-kh-ink font-semibold">
                PRACTICE DELIVERABLES:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-kh-ink">
                {current.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-kh-accent shrink-0" />
                    <span className="truncate">{d}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1.5 sm:pt-2">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-kh-ink hover:text-kh-accent border-b border-kh-ink pb-0.5 transition-colors cursor-pointer"
                >
                  <span>DISCUSS A {current.name} PROJECT WITH US</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Atmospheric Domain Visual Frame */}
          <div className="md:col-span-5 flex flex-col items-center justify-center rounded-xl border border-kh-border/30 bg-kh-surface/50 text-center relative overflow-hidden min-h-[180px] sm:min-h-[220px] md:min-h-[240px] group shadow-xs">
            {/* Visual World Reference Graphic Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={
                  current.num === '01'
                    ? '/assets/kh-graphic-s1.jpg'
                    : current.num === '02'
                    ? '/assets/kh-graphic-deep-blue.jpg'
                    : current.num === '03'
                    ? '/assets/kh-graphic-s2.jpg'
                    : '/assets/kolkata-cafe-sketches.jpg'
                }
                alt={`${current.name} Visual Reference`}
                className="w-full h-full object-cover card-image-hover group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kh-ink/80 via-kh-ink/40 to-transparent" />
            </div>

            <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-white/80 z-10">
              <span>KOLPO HOUSE / {current.name}</span>
            </div>

            <div className="my-auto z-10 px-6 py-8 text-white space-y-2">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight block">
                {current.mark}
              </span>
              <span className="text-xs font-serif italic text-white/90 block">
                “{current.tagline}”
              </span>
            </div>

            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-white/70 z-10">
              <span>FORM FOLLOWS INTENTION</span>
              <span>{current.name} DOMAIN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
