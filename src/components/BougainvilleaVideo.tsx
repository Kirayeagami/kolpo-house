import React, { useRef, useEffect, useState } from 'react';

export type FlowerVariant = '01' | '02' | '03' | '04' | '05' | '06' | '07';
export type FlowerPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'edge-right'
  | 'edge-left'
  | 'center'
  | 'custom';

export interface BougainvilleaVideoProps {
  variant?: FlowerVariant;
  mode?: 'decorative' | 'frame';
  position?: FlowerPosition;
  className?: string;
  parallaxSpeed?: number;
  opacity?: number;
  aspectRatio?: string;
  showEditorialHeader?: boolean;
  supportingText?: string;
  ariaLabel?: string;
}

const variantAssets: Record<
  FlowerVariant,
  {
    webm: string;
    mov: string;
    poster: string;
    remoteWebm: string;
    remoteMov: string;
    remotePoster: string;
  }
> = {
  '01': {
    webm: '/assets/bougainvillea-flowers_01.webm',
    mov: '/assets/bougainvillea-flowers_01.mov',
    poster: '/assets/bougainvillea-flowers_01.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_01.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_01.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe9f3a19844a4b0caed_bougainvillea-flowers_01.avif',
  },
  '02': {
    webm: '/assets/bougainvillea-flowers_02.webm',
    mov: '/assets/bougainvillea-flowers_02.mov',
    poster: '/assets/bougainvillea-flowers_02.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_02.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_02.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe941e5e917a8f84c4a_bougainvillea-flowers_02.avif',
  },
  '03': {
    webm: '/assets/bougainvillea-flowers_03.webm',
    mov: '/assets/bougainvillea-flowers_03.mov',
    poster: '/assets/bougainvillea-flowers_03.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_03.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_03.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe988f8dc3c9bb1647a_bougainvillea-flowers_03.avif',
  },
  '04': {
    webm: '/assets/bougainvillea-flowers_04.webm',
    mov: '/assets/bougainvillea-flowers_04.mov',
    poster: '/assets/bougainvillea-flowers_04.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_04.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_04.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe98eb07b9ca5b07e84_bougainvillea-flowers_04.avif',
  },
  '05': {
    webm: '/assets/bougainvillea-flowers_05.webm',
    mov: '/assets/bougainvillea-flowers_05.mov',
    poster: '/assets/bougainvillea-flowers_05.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_05.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_05.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe9a4873ec6185f295d_bougainvillea-flowers_05.avif',
  },
  '06': {
    webm: '/assets/bougainvillea-flowers_06.webm',
    mov: '/assets/bougainvillea-flowers_06.mov',
    poster: '/assets/bougainvillea-flowers_06.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_06.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_06.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe968be0cc0c1f5fef2_bougainvillea-flowers_06.avif',
  },
  '07': {
    webm: '/assets/bougainvillea-flowers_07.webm',
    mov: '/assets/bougainvillea-flowers_07.mov',
    poster: '/assets/bougainvillea-flowers_07.avif',
    remoteWebm: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_07.webm',
    remoteMov: 'https://assets.era-residence.com/flowers/bougainvillea-flowers_07.mov',
    remotePoster:
      'https://cdn.prod.website-files.com/6a068da7ad91b057365bf967/6a4afbe9f3a19844a4b0caf0_bougainvillea-flowers_07.avif',
  },
};

const positionClasses: Record<FlowerPosition, string> = {
  'top-right': '-top-12 -right-12 sm:-top-20 sm:-right-20 md:-top-24 md:-right-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'top-left': '-top-12 -left-12 sm:-top-20 sm:-left-20 md:-top-24 md:-left-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'bottom-right': '-bottom-12 -right-12 sm:-bottom-20 sm:-right-20 md:-bottom-24 md:-right-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'bottom-left': '-bottom-12 -left-12 sm:-bottom-20 sm:-left-20 md:-bottom-24 md:-left-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'edge-right': 'top-1/2 -translate-y-1/2 -right-14 sm:-right-20 md:-right-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'edge-left': 'top-1/2 -translate-y-1/2 -left-14 sm:-left-20 md:-left-24 w-60 sm:w-72 md:w-96 lg:w-[30rem] aspect-square',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 aspect-square',
  'custom': '',
};

export const BougainvilleaVideo: React.FC<BougainvilleaVideoProps> = ({
  variant = '04',
  mode = 'frame',
  position = 'top-right',
  className = '',
  parallaxSpeed = 0.05,
  opacity,
  aspectRatio = 'aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.35/1]',
  showEditorialHeader = true,
  supportingText = 'Like bougainvillea spilling over sunlit Kolkata balconies, enduring brands flourish with quiet, organic distinction.',
  ariaLabel = 'Cinematic Bougainvillea flowers moving gently',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  const media = variantAssets[variant] || variantAssets['04'];

  // IntersectionObserver to control play/pause
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
      { threshold: 0.1, rootMargin: '60px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Viewport-aware playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy or low-power mode
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  // Subtle scroll parallax for decorative mode (desktop only)
  useEffect(() => {
    if (mode !== 'decorative' || parallaxSpeed === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const delta = (center - windowHeight / 2) * parallaxSpeed;
        setParallaxY(Math.max(-20, Math.min(20, delta)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode, parallaxSpeed]);

  // Decorative ambient layer mode
  if (mode === 'decorative') {
    const posClass = positionClasses[position] || positionClasses['top-right'];
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{
          transform: parallaxY !== 0 ? `translate3d(0, ${parallaxY}px, 0)` : undefined,
          opacity: opacity !== undefined ? opacity : undefined,
        }}
        className={`flower-decor pointer-events-none select-none z-0 transition-transform duration-300 ease-out ${posClass} ${className}`}
      >
        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          poster={media.poster}
          className={`flower-video-decor ${isInView ? 'is-revealed' : ''}`}
          tabIndex={-1}
        >
          <source src={media.webm} type="video/webm" />
          <source src={media.remoteWebm} type="video/webm" />
          <source src={media.mov} type="video/quicktime" />
          <source src={media.remoteMov} type="video/quicktime" />
        </video>
      </div>
    );
  }

  // Standalone framed architectural media moment mode
  return (
    <section
      ref={containerRef}
      aria-label="Bougainvillea Living Detail"
      className={`py-8 sm:py-12 md:py-14 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {showEditorialHeader && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20">
            <div>
              <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-kh-accent animate-pulse" />
                <span>LIVING DETAIL // ORGANIC CADENCE</span>
              </div>
              <div className="editorial-mask">
                <h2
                  className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                    isInView ? 'is-revealed' : ''
                  }`}
                >
                  BOUGAINVILLEA / LIVING DETAIL
                </h2>
              </div>
            </div>

            <div className="text-[11px] font-mono tracking-widest uppercase text-kh-ink-muted">
              CALM • DELIBERATE • ORGANIC
            </div>
          </div>
        )}

        {/* Cinematic Video Viewport */}
        <div
          className={`bougainvillea-wrapper group relative w-full ${aspectRatio} rounded-2xl overflow-hidden border border-kh-border/25 bg-kh-surface/30 shadow-xs`}
        >
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            poster={media.poster}
            className={`bougainvillea-video ${isInView ? 'is-revealed' : ''}`}
            aria-label={ariaLabel}
          >
            <source src={media.webm} type="video/webm" />
            <source src={media.remoteWebm} type="video/webm" />
            <source src={media.mov} type="video/quicktime" />
            <source src={media.remoteMov} type="video/quicktime" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-kh-bg/25 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-kh-paper/85 backdrop-blur-md border border-kh-border/30 text-[9px] font-mono tracking-widest uppercase text-kh-ink-secondary pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-kh-accent animate-pulse" />
            <span>KOLPO HOUSE / LIVING ARCHITECTURE</span>
          </div>
        </div>

        {supportingText && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs font-light text-kh-ink-secondary">
            <p className="max-w-2xl font-sans italic leading-relaxed">
              “{supportingText}”
            </p>
            <span className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted shrink-0">
              KOLKATA • NATURAL TEXTURE
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
