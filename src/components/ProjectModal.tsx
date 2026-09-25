import React, { useEffect } from 'react';
import { ProjectBlueprint } from '../config/business';
import { X, ArrowUpRight, ShieldAlert } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectBlueprint | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
      className="kh-popup-backdrop fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-kh-ink/80 p-0 sm:p-6 lg:p-10"
    >
      <div
        className="kh-popup-panel relative w-full max-w-5xl max-h-[94dvh] overflow-y-auto bg-kh-bg border border-kh-border/40 p-5 sm:p-10 lg:p-12 shadow-2xl space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-kh-border/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-kh-accent tracking-widest uppercase font-semibold">
              {project.code}
            </span>
            <span className="text-kh-border">/</span>
            <span className="font-mono text-xs tracking-widest text-kh-ink-muted uppercase">
              {project.type}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-kh-border/40 hover:bg-kh-surface text-kh-ink transition-colors cursor-pointer"
            aria-label="Close project blueprint sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <h2
            id="project-modal-title"
            className="font-display text-3xl sm:text-5xl text-kh-ink leading-tight font-normal"
          >
            {project.title}
          </h2>
          <p className="font-display text-xl sm:text-2xl text-kh-ink-secondary italic font-light">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-kh-ink-secondary leading-relaxed font-light max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Strategic Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Strategic Challenge */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
              THE STRATEGIC CHALLENGE
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Insight */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-accent font-semibold">
              CORE INSIGHT & WHITESPACE
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.insight}
            </p>
          </div>

          {/* Strategy & Verbal Architecture */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
              STRATEGIC APPROACH
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.strategy}
            </p>
          </div>

          {/* Creative Direction */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
              CREATIVE & SENSORY DIRECTION
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.direction}
            </p>
          </div>

          {/* Digital System */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
              DIGITAL ARCHITECTURE
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.digitalArchitecture}
            </p>
          </div>

          {/* Growth Framework */}
          <div className="p-6 rounded-xl border border-kh-border/25 bg-kh-paper space-y-2">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted">
              GROWTH SYSTEM
            </div>
            <p className="text-xs sm:text-sm text-kh-ink leading-relaxed font-light">
              {project.growthSystem}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="p-6 rounded-xl border border-kh-border/30 bg-kh-surface/50 space-y-3">
          <div className="text-[10px] font-mono tracking-[0.24em] uppercase text-kh-ink font-semibold">
            KEY SYSTEM DELIVERABLES:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full border border-kh-border/30 bg-kh-bg text-xs font-mono text-kh-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Confidentiality & Integrity Notice */}
        <div className="flex items-center gap-3 p-4 rounded-xl border border-kh-border/20 bg-kh-surface/30 text-xs font-mono text-kh-ink-muted">
          <ShieldAlert className="w-4 h-4 text-kh-accent shrink-0" />
          <span>
            Self-initiated studio blueprint. All frameworks reflect real Kolpo House methodology and strategic rigor. No unauthorized third-party commercial claims or metrics are fabricated.
          </span>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-kh-border/20">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-widest text-kh-ink-muted hover:text-kh-ink cursor-pointer"
          >
            ← Close Exploration
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kh-ink text-kh-bg text-xs font-mono tracking-widest uppercase hover:bg-kh-accent transition-colors cursor-pointer"
          >
            <span>Discuss A Similar Challenge</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
