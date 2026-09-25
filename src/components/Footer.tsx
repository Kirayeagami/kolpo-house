import React from 'react';
import { business } from '../config/business';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Editorial Footer"
      className="bg-kh-bg text-kh-ink border-t border-kh-border/20 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-7">
        {/* Main Footer Block: Brand & Contact */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-kh-ink">
              {business.name}
            </div>
            <p className="font-display text-sm sm:text-base text-kh-ink-secondary italic font-light">
              “{business.tagline}”
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 text-xs font-sans">
            <div className="text-[10px] font-mono tracking-widest uppercase text-kh-ink font-semibold">
              CONTACT
            </div>
            <div className="flex flex-col space-y-1.5 text-kh-ink-secondary">
              <a
                href={`mailto:${business.email}`}
                className="hover:text-kh-ink transition-colors font-mono"
              >
                {business.email}
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                className="hover:text-kh-ink transition-colors font-mono"
              >
                {business.phone}
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-kh-ink transition-colors"
              >
                Instagram: {business.instagramHandle}
              </a>
              <span className="text-kh-ink-muted pt-0.5">
                {business.location}
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="border-t border-kh-border/20" />

        {/* Legal Links & Quick Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-kh-ink-muted">
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-kh-ink transition-colors cursor-pointer text-left"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-kh-ink transition-colors cursor-pointer text-left"
            >
              Terms of Service
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-kh-ink transition-colors cursor-pointer text-kh-ink"
            aria-label="Scroll back to top"
          >
            <span className="text-[11px]">↑ Top</span>
          </button>
        </div>

        {/* Subtle Divider */}
        <div className="border-t border-kh-border/20" />

        {/* Copyright */}
        <div className="text-[11px] font-mono text-kh-ink-muted">
          © {new Date().getFullYear()} {business.name}
        </div>
      </div>
    </footer>
  );
};
