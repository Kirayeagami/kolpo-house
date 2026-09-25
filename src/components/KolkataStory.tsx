import React, { useState } from 'react';
import { studioAssets } from '../config/assets';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, X, ArrowUpRight, Camera } from 'lucide-react';

interface KolkataStoryProps {
  onOpenContact: () => void;
}

export const KolkataStory: React.FC<KolkataStoryProps> = ({ onOpenContact }) => {
  const images = studioAssets.kolkataArchive;
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CULTURE' | 'STREETS' | 'CRAFT'>('ALL');
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null);

  const { ref, isInView, getItemDelay, getItemClasses } = useScrollAnimation(images.length);

  const filteredImages = activeFilter === 'ALL'
    ? images
    : images.filter((img) => {
        if (activeFilter === 'CULTURE') {
          return ['MASTER AT WORK', 'LITERATURE & RHYTHM', 'CINEMATIC HERITAGE', 'SKETCHES & DOODLES'].includes(img.tag);
        }
        if (activeFilter === 'STREETS') {
          return ['BOIPARA CULTURE', 'ARCHITECTURE', 'RIVERFRONT NOTES', 'LIVING COMMERCE'].includes(img.tag);
        }
        if (activeFilter === 'CRAFT') {
          return ['TACTILE CRAFT', 'DOMESTIC TRANQUILITY', 'ICONOGRAPHY', 'SHOHORER NOTEBOOK'].includes(img.tag);
        }
        return true;
      });

  return (
    <section
      ref={ref}
      id="kolkata"
      aria-label="Chapter: Notes From Kolkata & Visual Story Archive"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg paper-texture relative"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-accent" />
              <span>NOTES FROM KOLKATA</span>
            </div>
            <h2 className="font-display responsive-section-heading text-kh-ink leading-tight">
              EVERY CITY HAS A RHYTHM. <br />
              <span className="italic font-light text-kh-accent">
                Kolkata turns ordinary moments into stories.
              </span>
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            We are rooted in the cultural, literary, and artistic rhythm of this city. Our work draws directly from its enduring taste for craft, conversation, and patience.
          </div>
        </div>

        {/* Filter Pills */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 ${getItemClasses(1)}`}
          role="group"
          aria-label="Filter Kolkata visual archive"
        >
          <div className="flex flex-wrap items-center gap-2">
            {(['ALL', 'CULTURE', 'STREETS', 'CRAFT'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-kh-ink text-kh-bg shadow-xs font-semibold'
                    : 'border border-kh-border/30 bg-kh-paper/60 text-kh-ink-muted hover:border-kh-ink hover:text-kh-ink'
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
            <Camera className="w-3.5 h-3.5 text-kh-accent" />
            <span>KOLPO HOUSE — NOTES & ARCHIVE</span>
          </div>
        </div>

        {/* Image Grid with Responsive Proportions & Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              style={{ transitionDelay: getItemDelay(idx, 80) }}
              className={`group cursor-pointer rounded-2xl border border-kh-border/30 bg-kh-paper overflow-hidden hover:border-kh-ink/50 hover:shadow-md transition-fluid flex flex-col justify-between ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(img);
                }
              }}
              aria-label={`View ${img.title}`}
            >
              {/* Image Frame with Adaptive Contrast Layer */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-kh-surface">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className={`w-full h-full object-cover card-image-scale card-image-hover transition-transform duration-700 ease-out ${
                    isInView ? 'is-revealed' : ''
                  }`}
                />

                {/* Top Readability Contrast Gradient for Badges */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none" />

                {/* Hover Darkening Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kh-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* High-Contrast Readability Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-kh-paper/95 text-kh-ink border border-kh-border/40 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase shadow-xs font-semibold">
                  {img.tag}
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/95 text-kh-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Caption & Context Block */}
              <div className="p-5 sm:p-6 space-y-1.5">
                <h3 className="font-display text-lg sm:text-xl text-kh-ink group-hover:text-kh-accent transition-colors leading-tight">
                  {img.title}
                </h3>
                <p className="text-xs text-kh-ink-secondary font-light leading-relaxed">
                  {img.caption}
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono tracking-widest text-kh-ink-muted uppercase border-t border-kh-border/15 mt-3">
                  <span>KOLKATA, INDIA</span>
                  <span className="group-hover:translate-x-1 transition-transform font-medium">INSPECT BRIEF →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Poetic Closing Callout */}
        <div className="p-8 sm:p-12 rounded-3xl border border-kh-border/30 bg-kh-surface/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-kh-ink-muted">
              STUDIO ATMOSPHERE & DIALOGUE
            </span>
            <h4 className="font-display text-xl sm:text-2xl text-kh-ink">
              “Every house has a story. Ours began with an idea.”
            </h4>
            <p className="text-xs sm:text-sm text-kh-ink-secondary font-light leading-relaxed">
              We welcome founders, curators, and ambitious teams to write to our studio in Kolkata.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-full bg-kh-ink text-kh-bg text-xs font-mono tracking-widest uppercase font-semibold hover:bg-kh-accent transition-colors shadow-xs cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full-Screen Photo Inspection Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl bg-kh-bg border border-kh-border/40 p-4 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-kh-border/20 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-kh-border/30 bg-kh-surface text-kh-ink font-semibold">
                  {selectedImage.tag}
                </span>
                <span className="text-xs font-mono text-kh-ink-muted uppercase">
                  NOTES FROM KOLKATA
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-full border border-kh-border/40 hover:bg-kh-surface text-kh-ink transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black/5 border border-kh-border/20 flex items-center justify-center max-h-[60vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl text-kh-ink">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-kh-ink-secondary font-light leading-relaxed">
                {selectedImage.caption}
              </p>
              <div className="pt-2 text-[11px] font-mono text-kh-ink-muted">
                KOLPO HOUSE VISUAL ARCHIVE • KOLKATA, INDIA
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
