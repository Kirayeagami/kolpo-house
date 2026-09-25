import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  reentrant?: boolean;
}

const DELAY_CLASSES = [
  'delay-0',
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-500',
  'delay-700',
  'delay-1000',
] as const;

export function useScrollAnimation(totalItems: number = 1, options: ScrollAnimationOptions = {}) {
  const { threshold = 0.08, rootMargin = '0px 0px -30px 0px', reentrant = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    // Detect scroll direction without unnecessary state thrashing
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) >= 8) {
        const newDirection = diff > 0 ? 'down' : 'up';
        setScrollDirection((prev) => (prev !== newDirection ? newDirection : prev));
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (reentrant) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, reentrant]);

  /**
   * Calculates bidirectional delay:
   * When scrolling down: A -> B -> C -> D (index * step ms)
   * When scrolling up:   D -> C -> B -> A ((totalItems - 1 - index) * step ms)
   */
  const getItemDelay = (index: number, stepMs: number = 100): string => {
    if (scrollDirection === 'down') {
      return `${index * stepMs}ms`;
    } else {
      const reversedIndex = Math.max(0, totalItems - 1 - index);
      return `${reversedIndex * stepMs}ms`;
    }
  };

  /**
   * Helper class string for smooth transition and transform with dynamic reverse delay
   */
  const getItemClasses = (index: number, customExtra: string = ''): string => {
    const effectiveIndex = scrollDirection === 'down' ? index : Math.max(0, totalItems - 1 - index);
    const delayClass = DELAY_CLASSES[Math.min(effectiveIndex, DELAY_CLASSES.length - 1)] || 'delay-0';

    if (isInView) {
      return `transition-fluid ${delayClass} opacity-100 translate-y-0 filter-none ${customExtra}`;
    } else {
      const offset = scrollDirection === 'down' ? 'translate-y-6' : '-translate-y-6';
      return `transition-fluid ${delayClass} opacity-0 ${offset} blur-[1px] ${customExtra}`;
    }
  };

  const getItemStyle = (index: number, stepMs: number = 100): React.CSSProperties => {
    return {
      transitionDelay: getItemDelay(index, stepMs),
    };
  };

  return {
    ref,
    isInView,
    scrollDirection,
    getItemDelay,
    getItemClasses,
    getItemStyle,
  };
}
