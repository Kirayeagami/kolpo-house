import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CreativeCreed: React.FC = () => {
  const [typedQuote, setTypedQuote] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const { ref, isInView, getItemClasses } = useScrollAnimation(3);

  const fullQuote = '“There is no universal formula for building a good brand.”';

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullQuote.length) {
        setTypedQuote(fullQuote.slice(0, idx));
        idx++;
      } else {
        setTypingComplete(true);
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [hasTriggered]);

  const pillars = [
    {
      num: '01',
      title: 'PEOPLE',
      description: 'The real human care, honesty, and skill behind your work.',
      floatClass: 'animate-float'
    },
    {
      num: '02',
      title: 'PERSONALITY',
      description: 'Your unique warmth, voice, and unmistakable way of talking.',
      floatClass: 'animate-float-delayed'
    },
    {
      num: '03',
      title: 'AMBITION',
      description: 'The meaningful change and lasting good you want to create.',
      floatClass: 'animate-float'
    },
    {
      num: '04',
      title: 'STORY',
      description: 'Your genuine background and journey that no one can fake.',
      floatClass: 'animate-float-delayed'
    }
  ];

  return (
    <section
      ref={ref}
      id="belief"
      aria-label="Chapter 09: Core Creative Creed"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg paper-texture relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6 relative z-10">
        {/* Eyebrow & Thesis Quote */}
        <div className={`space-y-2.5 sm:space-y-3 max-w-3xl mx-auto flex flex-col justify-center ${getItemClasses(0)}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-kh-border/40 bg-kh-surface text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted self-center">
            <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
            <span>CORE CREATIVE CREED</span>
          </div>

          <h2 className="font-display responsive-section-heading text-kh-ink italic font-normal leading-tight">
            {typedQuote || (hasTriggered ? '' : fullQuote)}
            {hasTriggered && !typingComplete && (
              <span className="typing-cursor text-kh-accent" />
            )}
          </h2>
          <p className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-kh-ink-muted">
            Every enduring enterprise has its own irreducible DNA:
          </p>
        </div>

        {/* 4 DNA Pillar Cards (Content-Driven Auto-Height) */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 text-left ${getItemClasses(1)}`}>
          {pillars.map((p) => (
            <div
              key={p.num}
              className={`p-3.5 sm:p-4 rounded-xl border border-kh-border/25 bg-kh-paper flex flex-col space-y-2 h-auto min-h-0 hover:border-kh-ink/40 transition-colors shadow-xs ${p.floatClass}`}
            >
              <div className="flex items-center gap-1.5 text-kh-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-kh-accent" />
                <span className="font-mono text-[9px] tracking-widest uppercase font-semibold">PILLAR</span>
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg text-kh-ink mb-0.5">
                  {p.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-kh-ink-secondary leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Monumental Declaration */}
        <div className={`pt-4 sm:pt-6 border-t border-kh-border/20 max-w-4xl mx-auto space-y-2.5 ${getItemClasses(2)}`}>
          <div className="font-display text-2xl sm:text-3xl md:text-4xl text-kh-ink leading-tight tracking-tight">
            WE BELIEVE BRANDS SHOULD FEEL LIKE THEMSELVES.
          </div>
          <p className="text-xs sm:text-sm text-kh-ink-secondary max-w-xl mx-auto leading-relaxed font-light">
            When a business stops imitating its competitors and speaks from its own innate authority, it becomes unshakeable. That is the only kind of brand we build.
          </p>
        </div>
      </div>
    </section>
  );
};
