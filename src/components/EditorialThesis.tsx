import React from 'react';
import { business } from '../config/business';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

export const EditorialThesis: React.FC = () => {
  const { editorialThesis } = business;
  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(3, { threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="philosophy"
      aria-label="Editorial Thesis: The Anatomy of Resonance"
      className="scroll-mt-24 sm:scroll-mt-28 relative py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/30 paper-texture overflow-hidden"
    >
      {/* Organic Living Bougainvillea Ambient Accent (ERA Variant 02) */}
      <BougainvilleaVideo
        variant="02"
        mode="decorative"
        position="custom"
        className="-bottom-14 -right-14 sm:-bottom-20 sm:-right-20 md:-bottom-24 md:-right-24 w-60 sm:w-80 md:w-96 aspect-square z-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center justify-between pb-3 sm:pb-5 border-b border-kh-border/20 text-[10px] sm:text-[11px] font-mono tracking-[0.24em] uppercase text-kh-ink-muted">
          <div className="flex items-center gap-2 text-kh-ink">
            <span className="w-2 h-2 rounded-full bg-kh-ink" />
            <span className="font-semibold tracking-widest">EDITORIAL THESIS</span>
          </div>
          <div className="truncate max-w-[200px] sm:max-w-none text-kh-ink-muted">{editorialThesis.title}</div>
        </div>

        {/* Phase Statements with Bidirectional Reverse Animation */}
        <div className="space-y-6 sm:space-y-10 pt-6 sm:pt-8">
          {/* Phase I (Item 0) */}
          <div
            style={{ transitionDelay: getItemDelay(0, 160) }}
            className={`flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-6 ${getItemClasses(0)}`}
          >
            <div className="font-mono text-xs tracking-widest text-kh-ink-muted uppercase shrink-0 font-medium">
              ATTENTION
            </div>
            <div className="editorial-mask max-w-4xl">
              <h2
                style={{ transitionDelay: getItemDelay(0, 160) }}
                className={`font-display responsive-section-heading text-kh-ink tracking-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                  }`}
              >
                {editorialThesis.phaseOne}
              </h2>
            </div>
          </div>

          {/* Phase II (Item 1) */}
          <div
            style={{ transitionDelay: getItemDelay(1, 160) }}
            className={`flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-6 pl-0 md:pl-12 ${getItemClasses(1)}`}
          >
            <div className="font-mono text-xs tracking-widest text-kh-ink-muted uppercase shrink-0 font-medium">
              DIRECTION
            </div>
            <div className="editorial-mask max-w-4xl">
              <h2
                style={{ transitionDelay: getItemDelay(1, 160) }}
                className={`font-display responsive-section-heading text-kh-ink italic tracking-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                  }`}
              >
                {editorialThesis.phaseTwo}
              </h2>
            </div>
          </div>

          {/* The First Principle (Item 2) */}
          <div
            style={{ transitionDelay: getItemDelay(2, 160) }}
            className={`pt-6 sm:pt-8 border-t border-kh-border/20 ${getItemClasses(2)}`}
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4 text-[10px] sm:text-[11px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted">
              <span
                className={`h-[1px] bg-kh-ink transition-all duration-700 ease-out ${isInView ? 'w-8' : 'w-0'
                  }`}
              />
              <span className="font-semibold text-kh-ink">THE FIRST PRINCIPLE</span>
            </div>

            <div className="editorial-mask">
              <div
                style={{ transitionDelay: getItemDelay(2, 160) }}
                className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-kh-ink leading-[0.94] tracking-tight mb-4 sm:mb-6 editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                  }`}
              >
                {editorialThesis.firstPrinciple}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start">
              <p className="md:col-span-8 text-sm sm:text-base md:text-lg text-kh-ink-secondary leading-relaxed font-light">
                {editorialThesis.description}
              </p>
              <div className="md:col-span-4 p-3.5 sm:p-4 rounded-xl border border-kh-border/30 bg-kh-paper/80 backdrop-blur-xs text-xs font-mono text-kh-ink-muted leading-relaxed">
                <span className="text-kh-ink font-semibold block mb-1 uppercase">
                  DIAGNOSTIC MANDATE:
                </span>
                We do not produce disposable content for algorithmic vanity. Every asset is grounded in verified brand positioning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
