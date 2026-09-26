import React, { useRef, useEffect, useState } from 'react';
import { BougainvilleaVideo, FlowerVariant } from './BougainvilleaVideo';

export interface SkyMediaProps {
  src?: string;
  alt?: string;
  eyebrow?: string;
  title?: string;
  caption?: string;
  aspectRatio?: string;
  withFlowerAccent?: boolean;
  flowerVariant?: FlowerVariant;
  className?: string;
}

export const SkyMedia: React.FC<SkyMediaProps> = ({
  src = '/assets/kolkata-flower-market.jpg',
  alt = 'Kolkata Riverfront Sky & Architectural Space',
  eyebrow = 'ENVIRONMENTAL SPACE // ARCHITECTURAL HORIZONS',
  title = 'EXPANSIVE CALM & NEGATIVE SPACE',
  caption = 'Like the open skies above the Hooghly riverfront, enduring brands are defined by the space they dare to leave unfilled.',
  aspectRatio = 'aspect-[21/9] sm:aspect-[24/9] md:aspect-[2.6/1]',
  withFlowerAccent = true,
  flowerVariant = '04',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '80px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Subtle image parallax
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const delta = (center - windowHeight / 2) * 0.04;
        setParallaxY(Math.max(-14, Math.min(14, delta)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Environmental Sky and Architectural Space"
      className={`py-8 sm:py-12 md:py-14 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto space-y-3.5 sm:space-y-4">
        {/* Minimalist Top Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2.5 sm:pb-3 border-b border-kh-border/20">
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>{eyebrow}</span>
            </div>
            <div className="editorial-mask">
              <h2
                className={`font-display text-xl sm:text-2xl md:text-3xl text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                  }`}
              >
                {title}
              </h2>
            </div>
          </div>

          <div className="text-[11px] font-mono tracking-widest uppercase text-kh-ink-muted">
            KOLKATA • NATURAL HORIZONS
          </div>
        </div>

        {/* Expansive Architectural Landscape Container */}
        <div
          className={`sky-media-container relative w-full ${aspectRatio} rounded-2xl overflow-hidden border border-kh-border/25 bg-kh-surface shadow-xs min-h-[200px] sm:min-h-[260px] md:min-h-[320px]`}
        >
          {/* Parallax Landscape Image */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
              transform:
                parallaxY !== 0
                  ? `translate3d(0, ${parallaxY}px, 0) scale(1.03)`
                  : undefined,
            }}
            className={`sky-media-img ${isInView ? 'is-revealed' : ''}`}
          />

          {/* Gentle Theme-Harmonizing Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-kh-ink/65 via-kh-ink/20 to-transparent pointer-events-none" />

          {/* Optional Living Flower Accent (ERA-style organic overlap) */}
          {withFlowerAccent && (
            <BougainvilleaVideo
              variant={flowerVariant}
              mode="decorative"
              position="custom"
              className="-top-14 -left-14 sm:-top-20 sm:-right-20 w-72 sm:w-96 md:w-[30rem] aspect-square opacity-85 sm:opacity-90 pointer-events-none"
            />
          )}

          {/* Minimalist Inset Metadata */}
          <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-white/85 z-10 pointer-events-none">
            <span>KOLPO HOUSE // HORIZON STUDY</span>
            <span>INTENTIONAL STILLNESS</span>
          </div>

          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-white/80 z-10 pointer-events-none">
            <span>CALM ATMOSPHERE</span>
            <span>RIVERFRONT SPACE</span>
          </div>
        </div>

        {/* Minimal Supporting Caption */}
        {caption && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs font-light text-kh-ink-secondary">
            <p className="max-w-2xl font-sans italic leading-relaxed">
              “{caption}”
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted shrink-0">
              FORM FOLLOWS INTENTION
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
