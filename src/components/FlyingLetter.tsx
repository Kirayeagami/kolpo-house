import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FlyingLetterProps {
  isFlying: boolean;
  onFlyComplete: () => void;
  senderName?: string;
  senderEmail?: string;
  message?: string;
}

export const FlyingLetter: React.FC<FlyingLetterProps> = ({
  isFlying,
  onFlyComplete,
  senderName = 'Friend of Kolpo House',
  senderEmail = '',
  message = 'Your letter is on its way.',
}) => {
  const [animationStep, setAnimationStep] = useState<'folding' | 'envelope' | 'sealing' | 'flying' | 'delivered'>('folding');

  useEffect(() => {
    if (!isFlying) {
      setAnimationStep('folding');
      return;
    }

    // Step 1: Form folds into a paper letter (0 -> 600ms)
    setAnimationStep('folding');

    // Step 2: Envelope appears, letter slides in (600ms -> 1300ms)
    const timer1 = setTimeout(() => {
      setAnimationStep('envelope');
    }, 600);

    // Step 3: Envelope flap seals with kh wax stamp (1300ms -> 2000ms)
    const timer2 = setTimeout(() => {
      setAnimationStep('sealing');
    }, 1300);

    // Step 4: Envelope flies gently across the screen with trail (2000ms -> 3200ms)
    const timer3 = setTimeout(() => {
      setAnimationStep('flying');
    }, 2000);

    // Step 5: Delivered confirmation (3200ms)
    const timer4 = setTimeout(() => {
      setAnimationStep('delivered');
    }, 3200);

    // Step 6: Complete
    const timer5 = setTimeout(() => {
      onFlyComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [isFlying, onFlyComplete]);

  if (!isFlying) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Dispatching letter to KOLPO HOUSE"
    >
      {/* Background Dotted Flight Trail Animation */}
      {animationStep === 'flying' && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none stroke-[#A99678]/40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 200 600 Q 500 300, 1200 150"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-dash"
          />
        </svg>
      )}

      {/* Main Animation Container */}
      <div className="relative flex flex-col items-center justify-center max-w-lg w-full">
        {/* Stage 1 & 2: Folding Letter & Envelope Assembly */}
        <div
          className={`transition-all duration-1000 ease-out ${
            animationStep === 'flying'
              ? 'translate-x-[120vw] -translate-y-48 rotate-12 scale-50 opacity-0'
              : 'translate-x-0 translate-y-0 scale-100 opacity-100'
          }`}
        >
          {/* Envelope with Airmail Border */}
          <div className="airmail-border shadow-2xl rounded-2xl overflow-hidden max-w-sm sm:max-w-md w-[90vw] sm:w-[420px] bg-[#FAF8F5] border border-stone-300">
            <div className="p-6 sm:p-8 space-y-4 relative">
              {/* Postage Stamp Top Right */}
              <div className="absolute top-4 right-4 flex flex-col items-center">
                <div className="w-14 h-16 border-2 border-dashed border-[#A99678] bg-[#F3EFEA] flex flex-col items-center justify-center p-1 shadow-xs">
                  <span className="text-[8px] font-mono tracking-widest text-[#7D8668] uppercase font-bold">
                    AIRMAIL
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#7D8668] flex items-center justify-center my-0.5">
                    <span className="font-serif text-[10px] font-bold">kh</span>
                  </div>
                  <span className="text-[7px] font-mono text-[#5E605A]">KOLKATA</span>
                </div>

                {/* Circular Postmark Cancellation */}
                <div className="w-16 h-16 rounded-full border border-red-800/40 absolute -top-1 -right-1 flex items-center justify-center rotate-[-15deg] pointer-events-none">
                  <span className="text-[7px] font-mono tracking-tighter text-red-800/70 font-bold uppercase text-center leading-none">
                    KOLKATA G.P.O.
                    <br />
                    PRIORITY
                    <br />
                    DISPATCH
                  </span>
                </div>
              </div>

              {/* Sender & Address Details */}
              <div className="space-y-3 pr-16 pt-1">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#85867F] block">
                    FROM:
                  </span>
                  <p className="text-sm font-serif font-bold text-[#1E201E]">
                    {senderName}
                  </p>
                  {senderEmail && (
                    <p className="text-xs font-mono text-[#5E605A]">
                      {senderEmail}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#7D8668] block font-bold">
                    DELIVER TO:
                  </span>
                  <p className="text-sm font-serif font-bold text-[#161715]">
                    KOLPO HOUSE STUDIO
                  </p>
                  <p className="text-xs font-mono text-[#5E605A]">
                    Kolkata, India
                  </p>
                </div>
              </div>

              {/* Wax Seal Centerpiece (Appears when sealing) */}
              <div className="pt-4 flex items-center justify-center">
                <div
                  className={`w-14 h-14 rounded-full bg-[#8B2626] text-[#F3EFEA] border-2 border-[#5C1A1A] flex flex-col items-center justify-center shadow-lg transition-all duration-700 ${
                    animationStep === 'sealing' || animationStep === 'flying' || animationStep === 'delivered'
                      ? 'scale-100 opacity-100 rotate-0'
                      : 'scale-0 opacity-0 -rotate-45'
                  }`}
                >
                  <span className="font-serif italic font-normal text-xl leading-none">
                    kh
                  </span>
                  <span className="text-[7px] font-mono tracking-tighter uppercase font-bold opacity-80">
                    SEALED
                  </span>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-3 border-t border-dashed border-stone-300 flex items-center justify-between text-[10px] font-mono text-[#5E605A]">
                <span className="inline-flex items-center gap-1">
                  <Send className="w-3 h-3 text-[#7D8668] animate-pulse" />
                  <span>
                    {animationStep === 'folding'
                      ? 'FOLDING LETTER...'
                      : animationStep === 'envelope'
                      ? 'SLIDING INTO ENVELOPE...'
                      : animationStep === 'sealing'
                      ? 'SEALING WITH KH STAMP...'
                      : 'IN FLIGHT ACROSS KOLKATA'}
                  </span>
                </span>
                <span className="tracking-widest uppercase">AIRMAIL DISPATCH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivered Success Announcement */}
        {animationStep === 'delivered' && (
          <div className="mt-8 p-6 rounded-2xl bg-[#161715] text-[#F3F1EB] border border-white/15 shadow-2xl flex flex-col items-center text-center space-y-3 animate-fade-in max-w-md">
            <div className="w-12 h-12 rounded-full bg-[#A9B18B]/20 text-[#A9B18B] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-2xl text-white">
              “{message}”
            </h4>
            <p className="text-xs font-mono text-[#B8B9B1] leading-relaxed">
              Your message has been sealed and dispatched to Kolpo House studio in Kolkata. We respond with care within 24 hours.
            </p>
            <button
              type="button"
              onClick={onFlyComplete}
              className="mt-2 px-6 py-2 rounded-full border border-white/30 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
