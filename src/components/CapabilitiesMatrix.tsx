import React, { useState } from 'react';
import { business } from '../config/business';
import {
  ChevronDown,
  CheckCircle,
  Compass,
  PenTool,
  FileText,
  Instagram,
  Search,
  Globe,
  BarChart3
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CapabilitiesMatrix: React.FC = () => {
  const capabilities = business.capabilities;
  const categories = [
    'All',
    'Strategy',
    'Brand',
    'Content',
    'Social Media',
    'Search',
    'Digital',
    'Growth'
  ] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView, getItemClasses } = useScrollAnimation(3);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strategy':
        return <Compass className="w-3.5 h-3.5 text-kh-accent" />;
      case 'Brand':
        return <PenTool className="w-3.5 h-3.5 text-kh-accent" />;
      case 'Content':
        return <FileText className="w-3.5 h-3.5 text-kh-accent" />;
      case 'Social Media':
        return <Instagram className="w-3.5 h-3.5 text-[#C13584]" />;
      case 'Search':
        return <Search className="w-3.5 h-3.5 text-kh-accent" />;
      case 'Digital':
        return <Globe className="w-3.5 h-3.5 text-kh-accent" />;
      case 'Growth':
        return <BarChart3 className="w-3.5 h-3.5 text-kh-accent" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-kh-accent" />;
    }
  };

  const filtered =
    selectedCategory === 'All'
      ? capabilities
      : capabilities.filter((c) => c.category === selectedCategory);
  const visibleCapabilities = showAll || selectedCategory !== 'All' ? filtered : filtered.slice(0, 4);

  return (
    <section
      ref={ref}
      id="capabilities"
      aria-label="Chapter 10: Full Studio Capabilities & Marketing Services"
      className="scroll-mt-24 sm:scroll-mt-28 py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/20"
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-kh-ink-muted mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-kh-ink" />
              <span>CAPABILITIES MATRIX</span>
            </div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-tight editorial-headline-reveal ${
                isInView ? 'is-revealed' : ''
              }`}>
                THE STUDIO DISCIPLINES
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            Everything your brand needs to look world-class, tell honest stories, and welcome happy customers—all working together smoothly.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          className={`flex flex-wrap items-center gap-2 ${getItemClasses(1)}`}
          role="group"
          aria-label="Filter Capabilities by Discipline"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedIndex(0);
                setShowAll(cat !== 'All');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-kh-ink text-kh-bg shadow-xs font-semibold'
                  : 'border border-kh-border/30 bg-kh-paper/50 text-kh-ink-muted hover:border-kh-ink hover:text-kh-ink'
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Capabilities Accordion / List with Auto-reveal Transition */}
        <div key={selectedCategory} className={`space-y-3 animate-fade-in ${getItemClasses(2)}`}>
          {visibleCapabilities.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={item.number}
                className="rounded-xl border border-kh-border/25 bg-kh-paper overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-kh-surface/40 transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`capability-content-${item.number}`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-kh-accent font-semibold shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <div className="font-display text-xl sm:text-2xl text-kh-ink leading-tight">
                        {item.title}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted mt-0.5">
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-mono tracking-wider text-kh-ink-muted hidden md:inline-block">
                      {item.summary}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-kh-border/30 flex items-center justify-center text-kh-ink transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-kh-ink text-kh-bg' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div
                    id={`capability-content-${item.number}`}
                    className="p-6 sm:p-8 border-t border-kh-border/15 bg-kh-surface/30 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in"
                  >
                    <div className="lg:col-span-6 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-kh-ink font-semibold block mb-1">
                          WHY IT MATTERS:
                        </span>
                        <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
                          {item.whyItMatters}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-kh-ink font-semibold block mb-1">
                          OUR APPROACH:
                        </span>
                        <p className="text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
                          {item.approach}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-6 p-5 rounded-lg border border-kh-border/20 bg-kh-paper space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-kh-ink font-semibold block">
                        TYPICAL DELIVERABLES:
                      </span>
                      <ul className="space-y-2">
                        {item.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs text-kh-ink">
                            <CheckCircle className="w-3.5 h-3.5 text-kh-accent shrink-0" />
                            <span className="font-light">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {selectedCategory === 'All' && !showAll && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="w-full py-3 text-xs font-mono tracking-widest uppercase text-kh-ink-muted hover:text-kh-ink transition-colors cursor-pointer"
            >
              Show all {capabilities.length} capabilities
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
