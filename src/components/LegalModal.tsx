import React, { useEffect } from 'react';
import { business } from '../config/business';
import { X, ShieldAlert } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [type]);

  if (!type) return null;

  const policy = business.legal[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-kh-ink/75 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-kh-bg border border-kh-border/40 p-6 sm:p-10 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-kh-border/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-kh-accent tracking-widest uppercase font-semibold">
              LEGAL FRAMEWORK
            </span>
            <span className="text-kh-border">/</span>
            <span className="font-mono text-xs text-kh-ink-muted uppercase">
              UPDATED {policy.lastUpdated}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full border border-kh-border/30 hover:bg-kh-surface text-kh-ink transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h2
            id="legal-modal-title"
            className="font-display text-3xl sm:text-4xl text-kh-ink mb-2 font-normal"
          >
            {policy.title}
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-kh-ink-muted bg-kh-surface p-3 rounded-lg border border-kh-border/20">
            <ShieldAlert className="w-4 h-4 text-kh-accent shrink-0" />
            <span>
              Draft for studio review before public commercial launch. Prepared for KOLPO HOUSE.
            </span>
          </div>
        </div>

        <div className="space-y-6 text-sm text-kh-ink-secondary font-light leading-relaxed">
          {policy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5 border-b border-kh-border/10 pb-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-kh-ink font-semibold">
                {sec.heading}
              </h3>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-kh-ink text-kh-bg text-xs font-mono tracking-widest uppercase hover:bg-kh-accent transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
