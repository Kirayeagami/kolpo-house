import React, { useState, useEffect } from 'react';
import { studioAssets } from '../config/assets';
import { Compass, MessageCircle, FileText, Globe, ArrowUpRight, Check, Eye } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

interface ServicesShowcaseProps {
  onOpenContact: () => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenContact }) => {
  const [activeService, setActiveService] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { ref, isInView, getItemClasses } = useScrollAnimation(3);

  const services = [
    {
      ...studioAssets.serviceStrategy,
      icon: <Compass className="w-4 h-4 text-[#A9B18B]" />,
      themeBg: 'bg-[#151D2A] text-[#F3F1EB]',
      accentColor: 'text-[#A9B18B]',
      borderHover: 'hover:border-[#A9B18B]/60',
      bullets: ['Communication Goals', 'Audience Behaviour', 'Content Pillars', 'Platform Role & Strategy'],
    },
    {
      ...studioAssets.serviceBrandComm,
      icon: <MessageCircle className="w-4 h-4 text-[#D8B4F8]" />,
      themeBg: 'bg-[#21162E] text-[#F3F1EB]',
      accentColor: 'text-[#D8B4F8]',
      borderHover: 'hover:border-[#D8B4F8]/60',
      bullets: ['Tone of Voice Systems', 'Brand Language & Naming', 'Storytelling Frameworks', 'Everyday Touchpoints'],
    },
    {
      ...studioAssets.serviceContent,
      icon: <FileText className="w-4 h-4 text-[#93C5FD]" />,
      themeBg: 'bg-[#14233C] text-[#F3F1EB]',
      accentColor: 'text-[#93C5FD]',
      borderHover: 'hover:border-[#93C5FD]/60',
      bullets: ['Purposeful Reels & Static Art', 'Concept Scripting & Direction', 'Carousel Narratives', 'Brand Campaigns'],
    },
    {
      ...studioAssets.serviceDigitalMarketing,
      icon: <Globe className="w-4 h-4 text-[#E9D5FF]" />,
      themeBg: 'bg-[#271C38] text-[#F3F1EB]',
      accentColor: 'text-[#E9D5FF]',
      borderHover: 'hover:border-[#E9D5FF]/60',
      bullets: ['Active Social Management', 'Platform Execution', 'Audience Adaptation', 'Performance Evolution'],
    },
  ];

  // Auto-slide experience (Section 10 & 18)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, services.length]);

  const active = services[activeService];

  return (
    <section
      ref={ref}
      id="services"
      aria-label="Chapter 06: The Four Studio Services"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg relative overflow-hidden"
    >
      {/* Organic Living Bougainvillea Ambient Accent (ERA Variant 04) */}
      <BougainvilleaVideo
        variant="04"
        mode="decorative"
        position="top-left"
        className="w-72 sm:w-96 md:w-[28rem] opacity-65 dark:opacity-50"
      />

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
        {/* Header Strip */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(
            0
          )}`}
        >
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>OUR SERVICES</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                isInView ? 'is-revealed' : ''
              }`}>
                FOUR DISCIPLINES. <br />
                <span className="italic font-light text-kh-accent">ONE SINGULAR DIRECTION.</span>
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            We reject fragmented marketing tactics. Each service functions as part of a single, coherent voice for your brand.
          </div>
        </div>

        {/* 4 Interactive Service Selector Tabs */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 ${getItemClasses(1)}`}
          role="tablist"
          aria-label="Studio Services Tabs"
        >
          {services.map((item, idx) => {
            const isSelected = activeService === idx;
            return (
              <button
                key={item.num}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setActiveService(idx);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className={`p-2.5 sm:p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-kh-ink bg-kh-paper shadow-xs scale-[1.01]'
                    : 'border-kh-border/30 bg-kh-paper/40 hover:bg-kh-paper hover:border-kh-ink/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-kh-ink-muted">
                    STUDIO
                  </span>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base text-kh-ink leading-tight font-medium">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Stage */}
        <div
          className={`rounded-2xl border border-kh-border/30 overflow-hidden shadow-md transition-all duration-500 ${active.themeBg} ${getItemClasses(
            2
          )}`}
          onMouseEnter={() => setIsAutoPlaying(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-7 p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-semibold tracking-widest px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 uppercase">
                  Studio Discipline
                </span>
                <span className={`text-xs font-mono tracking-widest uppercase ${active.accentColor}`}>
                  Kolpo House Studio
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                  {active.title}
                </h3>
                <p className={`font-serif italic text-sm sm:text-base md:text-lg ${active.accentColor}`}>
                  “{active.tagline}”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light max-w-xl">
                {active.description}
              </p>

              {/* Key Highlights */}
              <div className="pt-2 border-t border-white/15">
                <div className="text-[9px] font-mono tracking-widest uppercase text-white/60 mb-2">
                  CORE FOCUS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {active.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${active.accentColor}`} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-full bg-white text-[#161715] text-xs font-mono tracking-widest uppercase font-semibold hover:bg-white/90 transition-colors shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>Discuss With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setPreviewImage(active.src)}
                  className="px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Original Card</span>
                </button>
              </div>
            </div>

            {/* Right Photographic Visual Column */}
            <div className="md:col-span-5 p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <div
                onClick={() => setPreviewImage(active.src)}
                className="relative max-w-[220px] sm:max-w-[260px] md:max-w-xs w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-white/20 group cursor-pointer card-image-hover"
              >
                <img
                  src={active.src}
                  alt={`${active.title} Card Reference`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <Eye className="w-3 h-3" />
                  <span>Tap to Enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to View Original Service Card */}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
          className="kh-popup-backdrop fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/85 p-0 sm:p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="kh-popup-panel relative max-w-md w-full overflow-hidden bg-kh-bg shadow-2xl border border-white/20"
          >
            <img
              src={previewImage}
              alt="Service Reference Card"
              className="w-full h-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono tracking-wider uppercase hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
