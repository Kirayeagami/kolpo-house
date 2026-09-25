import React, { useEffect, useState } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'reveal' | 'tagline' | 'exit' | 'done'>('enter');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timer = setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 80);
      return () => clearTimeout(timer);
    }

    // Step 1: Reveal logo & brand name in monumental format
    const timer1 = setTimeout(() => {
      setPhase('reveal');
    }, 200);

    // Step 2: Form tagline "From vision to expression."
    const timer2 = setTimeout(() => {
      setPhase('tagline');
    }, 1100);

    // Step 3: Begin smooth exit transition
    const timer3 = setTimeout(() => {
      setPhase('exit');
    }, 2800);

    // Step 4: Complete and transition smoothly to Hero
    const timer4 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3680);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('kh-intro-seen', 'true');
    setPhase('exit');
    setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 880);
  };

  if (phase === 'done') return null;

  return (
    <div
      onClick={handleSkip}
      className={`kh-intro fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-[#161715] select-none cursor-pointer overflow-hidden ${
        phase === 'exit' ? 'kh-intro--exit pointer-events-none' : ''
      }`}
      aria-label="KOLPO HOUSE cinematic introduction. Tap to enter."
    >
      <div className="kh-intro__slice kh-intro__slice--left" aria-hidden="true" />
      <div className="kh-intro__slice kh-intro__slice--right" aria-hidden="true" />

      {/* Abstract Fluid Curved Lines Moving Slowly Behind (Section 4) */}
      <svg
        className="kh-intro__lines absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 450 C 300 200, 700 700, 1540 350"
          stroke="currentColor"
          strokeWidth="1.2"
          className="transition-all duration-3000"
        />
        <path
          d="M-100 500 C 400 250, 800 650, 1540 400"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 4"
        />
        <path
          d="M-100 400 C 250 150, 650 750, 1540 300"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <path
          d="M-100 550 C 500 300, 900 600, 1540 450"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="kh-intro__content relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Authentic Hand-Drawn Monogram Mark */}
        <div
          className={`transition-all duration-900 ease-out flex flex-col items-center ${
            phase !== 'enter'
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-90'
          }`}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#161715]/20 flex items-center justify-center bg-[#F3F1EB]/80 shadow-xs mb-2 backdrop-blur-xs">
            {/* Elegant Calligraphic KH Monogram */}
            <span className="font-serif italic font-normal text-2xl sm:text-3xl text-[#161715] tracking-tighter">
              kh
            </span>
          </div>
        </div>

        {/* Brand Name Extremely Large: KOLPO HOUSE */}
        <div className="space-y-1">
          <div className="overflow-hidden">
            <h1
              className={`font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-[#161715] transition-all duration-1000 ease-out ${
                phase !== 'enter'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              KOLPO
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={`font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-[#161715]/85 italic font-light transition-all duration-1000 delay-150 ease-out ${
                phase !== 'enter'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              HOUSE
            </h1>
          </div>
        </div>

        {/* Tagline gently forming: "From vision to expression." */}
        <div className="overflow-hidden min-h-[2.5rem] flex items-center justify-center">
          <p
            className={`font-serif italic text-base sm:text-xl md:text-2xl text-[#5E605A] transition-all duration-1000 ease-out ${
              phase === 'tagline' || phase === 'exit'
                ? 'opacity-100 translate-y-0 filter-none'
                : 'opacity-0 translate-y-4 blur-[2px]'
            }`}
          >
            “From vision to expression.”
          </p>
        </div>

        {/* Subtle Fluid Progress Indicator & Skip Cue */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <div className="w-20 sm:w-28 h-[1px] bg-[#161715]/15 overflow-hidden">
            <div
              className={`h-full bg-[#161715] transition-all duration-2600 ease-linear ${
                phase !== 'enter' ? 'w-full' : 'w-0'
              }`}
            />
          </div>
          <span className="text-[9px] font-mono tracking-[0.24em] uppercase text-[#85867F] opacity-70">
            TAP ANYWHERE TO ENTER
          </span>
        </div>
      </div>
    </div>
  );
};
