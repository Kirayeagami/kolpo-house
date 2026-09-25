import React, { useState } from 'react';
import { business, ProjectBlueprint } from '../config/business';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectBlueprint) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Brand' | 'Creative' | 'Digital'>('All');
  const blueprints = business.blueprints;

  const filteredBlueprints =
    selectedFilter === 'All'
      ? blueprints
      : blueprints.filter((b) => b.category === selectedFilter);

  const { ref, isInView, getItemClasses } = useScrollAnimation(2 + filteredBlueprints.length);

  return (
    <section
      ref={ref}
      id="work"
      aria-label="Chapter 06: Curated Archive & Selected Work"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-bg relative overflow-hidden"
    >
      {/* Organic Living Bougainvillea Ambient Accent (ERA Variant 06) */}
      <BougainvilleaVideo
        variant="06"
        mode="decorative"
        position="custom"
        className="-bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-56 sm:w-72 md:w-80 aspect-square opacity-50 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>CURATED ARCHIVE</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                SELECTED WORK & BLUEPRINTS
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            We preserve strict confidentiality for our enterprise clients. Below, explore our public strategic blueprints, design systems, and creative architectures.
          </div>
        </div>

        {/* Filter Controls */}
        <div
          className={`flex flex-wrap items-center gap-2 ${getItemClasses(1)}`}
          role="group"
          aria-label="Filter Curated Archive by Category"
        >
          {(['All', 'Brand', 'Creative', 'Digital'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer ${selectedFilter === filter
                ? 'bg-kh-ink text-kh-bg shadow-xs font-semibold'
                : 'border border-kh-border/30 bg-kh-paper/60 text-kh-ink-muted hover:border-kh-ink hover:text-kh-ink'
                }`}
              aria-pressed={selectedFilter === filter}
            >
              {filter}
            </button>
          ))}
          <span className="text-[11px] font-mono text-kh-ink-muted ml-auto hidden sm:inline-block">
            {filteredBlueprints.length} {filteredBlueprints.length === 1 ? 'Blueprint' : 'Blueprints'} Available
          </span>
        </div>

        {/* Blueprint Grid (Proportional 2-Column Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {filteredBlueprints.map((bp, idx) => (
            <div
              key={bp.id}
              onClick={() => onSelectProject(bp)}
              className={`p-4 sm:p-5 md:p-6 rounded-2xl border border-kh-border/25 bg-kh-paper hover:border-kh-ink/50 hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-3 shadow-xs ${getItemClasses(
                2 + idx
              )}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(bp);
                }
              }}
              aria-label={`Inspect ${bp.title}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-kh-accent tracking-widest font-semibold">
                    {bp.code}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border border-kh-border/20 bg-kh-surface text-kh-ink-secondary">
                    {bp.category}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-kh-ink-muted block mb-1">
                    {bp.type}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-kh-ink group-hover:text-kh-accent transition-colors leading-snug">
                    {bp.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-kh-ink-secondary font-light leading-relaxed">
                  {bp.tagline}
                </p>

                {/* Deliverables preview pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {bp.deliverables.slice(0, 3).map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-kh-surface/70 text-kh-ink-muted"
                    >
                      {d}
                    </span>
                  ))}
                  {bp.deliverables.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-kh-ink-muted">
                      +{bp.deliverables.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-kh-border/20 flex items-center justify-between text-xs font-mono">
                <span className="uppercase tracking-widest text-kh-ink group-hover:text-kh-accent font-medium">
                  READ THE BRIEF
                </span>
                <div className="w-8 h-8 rounded-full border border-kh-border/40 group-hover:border-kh-ink group-hover:bg-kh-ink group-hover:text-kh-bg flex items-center justify-center text-kh-ink transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
