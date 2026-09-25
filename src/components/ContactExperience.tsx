import React, { useState } from 'react';
import { business } from '../config/business';
import { Mail, Phone, Instagram, MapPin, ArrowUpRight, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { FlyingLetter } from './FlyingLetter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BougainvilleaVideo } from './BougainvilleaVideo';

export const ContactExperience: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    interest: 'A new website or online store',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [preparedBrief, setPreparedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [flyMessage, setFlyMessage] = useState('Dispatching your letter to KOLPO HOUSE...');

  const [isSent, setIsSent] = useState(false);

  const { ref, isInView, getItemClasses } = useScrollAnimation(3);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please tell us your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email so we can write back.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 5) {
      errs.message = 'Please share a few words about what you would like to create.';
    }
    return errs;
  };

  const handleSendLetter = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const briefText = `POSTAL DISPATCH — KOLPO HOUSE STUDIO
--------------------------------------------------
SENDER: ${formData.name}
EMAIL: ${formData.email}${formData.phone ? `\nPHONE: ${formData.phone}` : ''}
${formData.brand ? `COMPANY / BRAND: ${formData.brand}\n` : ''}${formData.interest ? `INTEREST: ${formData.interest}\n` : ''}
MESSAGE:
${formData.message}
--------------------------------------------------
Sent on ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} from Kolkata studio gateway`;

    setPreparedBrief(briefText);
    setFlyMessage('Folding your letter & sealing with the kh mark...');
    setIsFlying(true);
  };

  const handleFlightComplete = () => {
    setIsFlying(false);
    setIsSent(true);
  };

  const handleCopy = async () => {
    if (!preparedBrief) return;
    try {
      await navigator.clipboard.writeText(preparedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleDispatchWhatsApp = () => {
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  };

  const handleDispatchEmail = () => {
    window.location.href = emailHref;
  };

  const handleReset = () => {
    setIsSent(false);
    setPreparedBrief(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      brand: '',
      interest: 'A new website or online store',
      budget: '',
      message: '',
    });
  };

  const whatsappHref = preparedBrief
    ? `https://wa.me/${business.whatsappRaw}?text=${encodeURIComponent(preparedBrief)}`
    : `https://wa.me/${business.whatsappRaw}?text=${encodeURIComponent(business.whatsappMessage)}`;

  const emailHref = preparedBrief
    ? `mailto:${business.email}?subject=${encodeURIComponent(
      `Letter from ${formData.name}: ${formData.brand || 'Creative Collaboration'}`
    )}&body=${encodeURIComponent(preparedBrief)}`
    : `mailto:${business.email}?subject=${encodeURIComponent('Creative Project Inquiry — KOLPO HOUSE')}`;

  return (
    <section
      ref={ref}
      id="contact"
      aria-label="Chapter: Write to KOLPO HOUSE & Studio Contact"
      data-active={isInView}
      className="kh-contact-experience scroll-mt-24 sm:scroll-mt-28 py-10 sm:py-14 md:py-20 px-4 sm:px-8 lg:px-12 border-b border-kh-border/20 bg-kh-surface/30 paper-texture relative overflow-hidden"
    >
      {/* Living Bougainvillea Ambient Accent (ERA-inspired botanical element 07) */}
      <BougainvilleaVideo
        variant="07"
        mode="decorative"
        position="custom"
        className="absolute -bottom-14 -right-14 sm:-bottom-20 sm:-right-20 w-56 sm:w-72 md:w-80 aspect-square opacity-45 pointer-events-none"
      />

      <div className="kh-contact-experience__inner max-w-7xl mx-auto space-y-5 sm:space-y-7 relative z-10">
        {/* Header Strip */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 sm:pb-4 border-b border-kh-border/20 ${getItemClasses(0)}`}>
          <div>
            <div className="editorial-mask">
              <h2 className={`font-display responsive-section-heading text-kh-ink leading-[0.96] tracking-tight editorial-headline-reveal ${isInView ? 'is-revealed' : ''
                }`}>
                LET’S MAKE <br />
                <span className="italic font-light text-kh-accent">SOMETHING MEANINGFUL.</span>
              </h2>
            </div>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-kh-ink-secondary leading-relaxed font-light">
            Tell us what you are building. Your note goes directly to our studio, where it is read with care before we reply.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8 items-start">
          {/* Left: Direct Channels & Studio Coordinates */}
          <div className={`lg:col-span-5 space-y-4 sm:space-y-5 ${getItemClasses(1)}`}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-kh-ink-muted block">
                DIRECT STUDIO CHANNELS
              </span>
              <p className="text-sm text-kh-ink-secondary font-light leading-relaxed">
                Reach us directly through your preferred medium. We respond to every thoughtful inquiry within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${business.email}`}
                className="p-4 sm:p-5 rounded-xl border border-kh-border/30 bg-kh-paper hover:border-kh-ink transition-all duration-300 flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-kh-border/30 flex items-center justify-center text-kh-ink group-hover:bg-kh-ink group-hover:text-kh-bg transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono tracking-widest uppercase text-kh-ink-muted">
                      DIRECT EMAIL
                    </div>
                    <div className="text-sm sm:text-base font-medium text-kh-ink">
                      {business.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-kh-ink-muted group-hover:text-kh-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${business.phoneRaw}`}
                className="p-4 sm:p-5 rounded-xl border border-kh-border/30 bg-kh-paper hover:border-kh-ink transition-all duration-300 flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-kh-border/30 flex items-center justify-center text-kh-ink group-hover:bg-kh-ink group-hover:text-kh-bg transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono tracking-widest uppercase text-kh-ink-muted">
                      TELEPHONE
                    </div>
                    <div className="text-sm sm:text-base font-medium text-kh-ink font-mono">
                      {business.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-kh-ink-muted group-hover:text-kh-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 rounded-xl border border-kh-border/30 bg-kh-paper hover:border-kh-ink transition-all duration-300 flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-kh-border/30 flex items-center justify-center text-kh-ink group-hover:bg-kh-ink group-hover:text-kh-bg transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono tracking-widest uppercase text-kh-ink-muted">
                      INSTANT MESSAGING
                    </div>
                    <div className="text-sm sm:text-base font-medium text-kh-ink">
                      WhatsApp Dialogue
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-kh-ink-muted group-hover:text-kh-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Physical Location */}
              <div className="p-4 sm:p-5 rounded-xl border border-kh-border/20 bg-kh-surface/50 flex items-center gap-4 text-xs font-mono text-kh-ink-secondary sm:col-span-2 lg:col-span-1">
                <MapPin className="w-4 h-4 text-kh-accent shrink-0" />
                <div>
                  <span className="text-kh-ink font-medium block">
                    {business.location}
                  </span>
                  <span>Creative & Digital Studio • Kolkata</span>
                </div>
              </div>
            </div>

            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] uppercase text-kh-ink-muted hover:text-kh-ink transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" /> Follow the studio {business.instagramHandle} <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Right: Client-Side Interactive Letter & Direct Dispatch */}
          <div className={`kh-contact-sheet lg:col-span-7 p-4 sm:p-6 md:p-8 rounded-2xl border border-kh-border/30 bg-kh-paper shadow-sm ${getItemClasses(2)}`}>
            <div className="pb-3 sm:pb-4 border-b border-kh-border/20 mb-4 sm:mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-kh-ink-muted">
                  STUDIO CORRESPONDENCE
                </span>
                <span className="text-[9px] font-mono text-kh-accent tracking-widest uppercase">
                  DIRECT TO FOUNDERS
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-kh-ink mt-1">
                {isSent ? 'Letter Dispatched' : 'Your project letter'}
              </h3>
            </div>

            {!isSent ? (
              <form onSubmit={handleSendLetter} className="space-y-3.5 sm:space-y-4" noValidate>
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono tracking-wider uppercase text-kh-ink">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. S. Sen"
                      className="w-full px-4 py-2.5 rounded-lg border border-kh-border/40 bg-kh-bg text-sm text-kh-ink focus:border-kh-ink transition-colors"
                      required
                    />
                    {errors.name && (
                      <span className="text-[11px] font-mono text-red-600 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono tracking-wider uppercase text-kh-ink">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-kh-border/40 bg-kh-bg text-sm text-kh-ink focus:border-kh-ink transition-colors"
                      required
                    />
                    {errors.email && (
                      <span className="text-[11px] font-mono text-red-600 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Company or Brand */}
                <div className="space-y-1">
                  <label className="text-xs font-mono tracking-wider uppercase text-kh-ink">
                    Your Company or Brand <span className="opacity-50">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    placeholder="e.g. Atelier Studio / Personal Project"
                    className="w-full px-4 py-2.5 rounded-lg border border-kh-border/40 bg-kh-bg text-sm text-kh-ink focus:border-kh-ink transition-colors"
                  />
                </div>

                {/* Message Field: What you want to create */}
                <div className="space-y-1">
                  <label className="text-xs font-mono tracking-wider uppercase text-kh-ink">
                    What you want to create (Your message) *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your brand, what you would like to build together, and your vision..."
                    className="w-full px-4 py-3 rounded-lg border border-kh-border/40 bg-kh-bg text-sm text-kh-ink focus:border-kh-ink transition-colors resize-none letter-ruled-paper"
                    required
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-red-600 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-kh-ink-muted">
                    No automated spam. Direct human reply from Kolkata within 24 hours.
                  </span>
                  <button
                    type="submit"
                    className="kh-contact-submit w-full sm:w-auto px-8 py-3.5 rounded-full bg-kh-ink text-kh-bg text-xs font-mono tracking-[0.2em] uppercase hover:bg-kh-accent transition-all duration-300 font-semibold shadow-sm cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND THE LETTER</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Delivered Confirmation & Multi-Channel Options */
              <div className="space-y-6 animate-fade-in">
                <div className="p-5 rounded-2xl border border-kh-accent/30 bg-kh-surface text-xs font-mono text-kh-ink space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Check className="w-4 h-4" />
                    <span className="tracking-wider uppercase">LETTER DISPATCHED SUCCESSFULLY</span>
                  </div>
                  <p className="text-sm font-serif italic text-kh-ink">
                    “Your letter is on its way. We’ll read it with care and write back soon.”
                  </p>
                </div>

                {/* Airmail Bordered Sealed Letter Summary */}
                <div className="airmail-border shadow-md">
                  <div className="bg-[#FAF8F5] text-[#1E201E] p-6 sm:p-8 rounded-[12px] border border-stone-300 relative overflow-hidden font-sans">
                    {/* Airmail Stamp */}
                    <div className="absolute top-4 right-4 flex flex-col items-center">
                      <div className="w-14 h-16 border-2 border-dashed border-[#A99678] bg-[#F3EFEA] flex flex-col items-center justify-center p-1 shadow-inner">
                        <span className="text-[8px] font-mono tracking-widest text-[#7D8668] uppercase font-bold">AIRMAIL</span>
                        <div className="w-6 h-6 rounded-full border border-[#7D8668] flex items-center justify-center my-0.5">
                          <span className="font-serif italic text-[11px] font-bold">kh</span>
                        </div>
                        <span className="text-[7px] font-mono text-[#5E605A]">KOLKATA</span>
                      </div>
                      <div className="w-16 h-16 rounded-full border border-red-800/40 absolute -top-1 -right-1 flex items-center justify-center rotate-[-15deg] pointer-events-none">
                        <span className="text-[7px] font-mono tracking-tighter text-red-800/70 font-bold uppercase text-center leading-none">
                          KOLKATA G.P.O.<br />SEALED &<br />RECORDED
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 pr-16">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#85867F] block">FROM:</span>
                        <p className="text-sm font-serif font-bold text-[#1E201E]">{formData.name}</p>
                        <p className="text-xs font-mono text-[#5E605A]">{formData.email}</p>
                      </div>

                      <div className="pt-2 border-t border-stone-200">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#7D8668] block font-bold">DELIVERED TO:</span>
                        <p className="text-sm font-serif font-bold text-[#161715]">KOLPO HOUSE STUDIO</p>
                        <p className="text-xs font-mono text-[#5E605A]">Kolkata, India</p>
                      </div>
                    </div>

                    {/* Letter Excerpt */}
                    <div className="mt-4 pt-4 border-t border-dashed border-stone-300">
                      <pre className="text-xs font-mono text-[#2C2E2B] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                        {preparedBrief}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Secondary Channel Options (Section 23) */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-kh-ink-muted block">
                    ADDITIONAL WAYS TO CONNECT:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={handleDispatchWhatsApp}
                      className="px-4 py-3 rounded-full bg-emerald-800 text-white text-center text-xs font-mono tracking-wider uppercase hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Also via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDispatchEmail}
                      className="px-4 py-3 rounded-full border border-kh-ink bg-kh-ink text-kh-bg text-center text-xs font-mono tracking-wider uppercase hover:bg-kh-accent transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-4 py-3 rounded-full border border-kh-border/40 text-kh-ink text-center text-xs font-mono tracking-wider uppercase hover:border-kh-ink transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-kh-accent" />
                          <span>Copied Letter!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Letter</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono text-kh-ink-muted hover:text-kh-ink underline cursor-pointer"
                  >
                    Write another letter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flying Letter Animation Veil */}
      <FlyingLetter
        isFlying={isFlying}
        onFlyComplete={handleFlightComplete}
        senderName={formData.name}
        senderEmail={formData.email}
        message={flyMessage}
      />
    </section>
  );
};
