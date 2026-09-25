import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import { X, ArrowUpRight, Phone, Sun, Moon, Laptop } from 'lucide-react';

interface NavigationProps {
  theme: 'light' | 'dark' | 'system';
  onThemeChange: (theme: 'light' | 'dark' | 'system') => void;
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  onThemeChange,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kolkataTime, setKolkataTime] = useState('');

  // Update live Kolkata IST time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setKolkataTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for header glass tint
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out px-3 sm:px-8 py-3 sm:py-4 border-b ${
          isScrolled
            ? 'site-header--scrolled bg-kh-bg/90 backdrop-blur-md border-kh-border/20 shadow-xs'
            : 'site-header--hero bg-black/35 backdrop-blur-sm border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Wordmark & Location */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none shrink-0"
            aria-label="KOLPO HOUSE Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-kh-ink/20 group-hover:border-kh-ink transition-colors bg-kh-paper shadow-xs">
              <span className="text-[12px] font-serif italic text-kh-ink select-none">
                kh
              </span>
            </div>
            <div className="flex flex-col max-[359px]:hidden">
              <span className="font-display text-lg sm:text-xl tracking-[0.14em] text-kh-ink font-semibold leading-tight group-hover:translate-x-0.5 transition-transform duration-300">
                {business.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] tracking-[0.24em] uppercase text-kh-ink-muted font-mono -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Kolkata • {kolkataTime || 'Live IST'}</span>
              </span>
            </div>
          </a>

          {/* Center Editorial Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Primary Navigation"
          >
            {business.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[11px] tracking-[0.22em] font-medium text-kh-ink-secondary hover:text-kh-ink transition-colors py-1 group uppercase font-sans"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-kh-ink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Area: Theme Selector + Call + Contact Action */}
          <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
            {/* Compact Editorial Segmented Theme Control */}
            <div
              className="hidden min-[360px]:flex items-center p-0.5 rounded-full border border-kh-border/30 bg-kh-paper/60 text-[10px] font-mono"
              role="group"
              aria-label="Visual Theme Switcher"
            >
              <button
                type="button"
                onClick={() => onThemeChange('light')}
                className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  theme === 'light'
                    ? 'bg-kh-ink text-kh-bg shadow-xs'
                    : 'text-kh-ink-muted hover:text-kh-ink'
                }`}
                title="Light Mode"
                aria-label="Light Mode"
                aria-pressed={theme === 'light'}
              >
                <Sun className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('system')}
                className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  theme === 'system'
                    ? 'bg-kh-ink text-kh-bg shadow-xs'
                    : 'text-kh-ink-muted hover:text-kh-ink'
                }`}
                title="Follow System Theme"
                aria-label="Follow System Theme"
                aria-pressed={theme === 'system'}
              >
                <Laptop className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('dark')}
                className={`p-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-kh-ink text-kh-bg shadow-xs'
                    : 'text-kh-ink-muted hover:text-kh-ink'
                }`}
                title="Dark Mode"
                aria-label="Dark Mode"
                aria-pressed={theme === 'dark'}
              >
                <Moon className="w-3 h-3" />
              </button>
            </div>

            {/* Direct Phone Link */}
            <a
              href={`tel:${business.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-kh-ink-secondary hover:text-kh-ink transition-colors border border-kh-border/20 px-3 py-1.5 rounded-full hover:border-kh-ink/40"
              title="Call Studio"
            >
              <Phone className="w-3 h-3" />
              <span>{business.phone}</span>
            </a>

            {/* Primary Contact Button */}
            <button
              type="button"
              onClick={onOpenContact}
              className="hidden min-[440px]:inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold uppercase rounded-full border border-kh-ink bg-kh-ink text-kh-bg hover:bg-kh-accent hover:border-kh-accent transition-all duration-300 shadow-xs cursor-pointer group"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Animated Morphing Burger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-[60] shrink-0 w-10 h-10 rounded-full border border-kh-border/40 hover:border-kh-ink bg-kh-paper/80 backdrop-blur-md flex flex-col items-center justify-center gap-[5px] transition-all duration-300 cursor-pointer shadow-xs"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-4 h-[1.5px] bg-kh-ink transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-kh-ink transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-kh-ink transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Art-Directed Mobile Drawer Menu Modal */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-[70] flex flex-col justify-between p-5 sm:p-8 bg-kh-bg/98 backdrop-blur-2xl paper-texture overflow-y-auto max-h-[100dvh]"
        >
          {/* Subtle Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[35vw] font-display font-bold pointer-events-none select-none">
            KH
          </div>

          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-kh-border/20 pb-4 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-kh-accent animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-kh-ink uppercase font-semibold">
                {business.name}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full border border-kh-border/30 hover:border-kh-ink bg-kh-paper/80 flex items-center justify-center text-kh-ink transition-colors cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Staggered Animated Navigation Menu Items */}
          <nav className="flex flex-col space-y-2.5 my-auto py-6 relative z-10">
            {business.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 60}ms` }}
                className="animate-menu-item p-3 rounded-xl border border-transparent hover:border-kh-border/30 hover:bg-kh-paper/60 transition-all duration-300 text-kh-ink hover:text-kh-accent group flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-display text-2xl sm:text-3xl tracking-tight leading-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-kh-ink-muted group-hover:text-kh-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            ))}
          </nav>

          {/* Quick Action Drawer Footer */}
          <div className="pt-4 border-t border-kh-border/20 space-y-4 relative z-10">
            {/* Quick Action Buttons (WhatsApp, Phone, Email) */}
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <a
                href={`https://wa.me/${business.whatsappRaw}?text=${encodeURIComponent(business.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-emerald-800/30 bg-emerald-800/10 text-emerald-800 dark:text-emerald-400 flex flex-col items-center justify-center gap-1 text-center tracking-wider uppercase font-medium hover:bg-emerald-800 hover:text-white transition-colors"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                className="p-2.5 rounded-xl border border-kh-border/30 bg-kh-paper/80 text-kh-ink flex flex-col items-center justify-center gap-1 text-center tracking-wider uppercase font-medium hover:border-kh-ink transition-colors"
              >
                <span>Call Studio</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="p-2.5 rounded-xl border border-kh-border/30 bg-kh-paper/80 text-kh-ink flex flex-col items-center justify-center gap-1 text-center tracking-wider uppercase font-medium hover:border-kh-ink transition-colors"
              >
                <span>Email</span>
              </a>
            </div>

            {/* Mobile Metadata & Time */}
            <div className="flex items-center justify-between text-[11px] font-mono text-kh-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{business.location} • {kolkataTime || 'Live IST'}</span>
              </span>
              <span>STUDIO DIRECT</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
