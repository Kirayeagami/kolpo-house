/**
 * KOLPO HOUSE — Visual Reference & Asset Registry
 * Single Source of Truth for studio imagery, brand monograms, and cultural photography.
 */

export interface StudioAsset {
  id: string;
  src: string;
  title: string;
  subtitle?: string;
  caption?: string;
  category: 'monogram' | 'graphic' | 'service' | 'kolkata';
  aspectRatio?: string;
}

export const studioAssets = {
  // Brand Logos & Monograms
  monogram: {
    id: 'kh-monogram',
    src: '/assets/kh-logo-monogram.jpg',
    title: 'KOLPO HOUSE Monogram',
    caption: 'from vision to expression',
    category: 'monogram' as const,
  },
  whyKolpoHouse: {
    id: 'kh-why-kolpohouse',
    src: '/assets/kh-why-kolpohouse.jpg',
    title: 'Why "KOLPO HOUSE"?',
    caption: 'Watercolor paper study, Digital Marketing 2026',
    category: 'monogram' as const,
  },
  howItStarted: {
    id: 'kh-how-it-started',
    src: '/assets/kh-how-it-started.jpg',
    title: 'How Did It Start?',
    caption: 'A conversation about building something of our own in Kolkata',
    category: 'monogram' as const,
  },

  // Abstract Fluid Graphics & Editorial Art
  graphicS1: {
    id: 'kh-graphic-s1',
    src: '/assets/kh-graphic-s1.jpg',
    title: 'This is our beginning.',
    caption: 'Purple editorial composition with fluid waves',
    category: 'graphic' as const,
  },
  graphicS2: {
    id: 'kh-graphic-s2',
    src: '/assets/kh-graphic-s2.jpg',
    title: 'We believe a brand is more than what it posts.',
    caption: 'It is what it says. What it looks like. What it makes people feel.',
    category: 'graphic' as const,
  },
  graphicDeepBlue: {
    id: 'kh-graphic-deep-blue',
    src: '/assets/kh-graphic-deep-blue.jpg',
    title: 'A digital studio built around creativity.',
    caption: 'Deep blue editorial composition with flowing white waves',
    category: 'graphic' as const,
  },

  // 4 Core Studio Services (Section 18)
  servicesCover: {
    id: 'services-cover',
    src: '/assets/services-cover.jpg',
    title: 'Our Services',
    subtitle: 'Strategy, Brand Communication, Content, Digital Marketing',
    caption: '2026 Client Availability',
    category: 'service' as const,
  },
  serviceStrategy: {
    id: 'service-strategy',
    num: '01',
    src: '/assets/service-strategy.jpg',
    title: 'Strategy',
    tagline: 'Strategy gives creativity somewhere to go.',
    description:
      'Before we create, we understand. We study the brand, its audience, its market and where it wants to go. This includes identifying communication goals, audience behaviour and content opportunities. We build content pillars and define what the brand should consistently talk about.',
    closingQuote: 'The result is a clear direction that gives every creative decision a reason.',
    category: 'service' as const,
  },
  serviceBrandComm: {
    id: 'service-brand-comm',
    num: '02',
    src: '/assets/service-brand-comm.jpg',
    title: 'Brand Communication',
    tagline: 'Consistency builds recognition. Character builds connection.',
    description:
      'A brand needs more than a logo and a colour palette. It needs a recognisable way of speaking and expressing itself. We work on brand language, tone of voice, messaging and storytelling frameworks across content, campaigns and everyday touchpoints.',
    closingQuote: 'So whether the brand is speaking through a caption, campaign or visual, it still sounds like the same brand.',
    category: 'service' as const,
  },
  serviceContent: {
    id: 'service-content',
    num: '03',
    src: '/assets/service-content.jpg',
    title: 'Content',
    tagline: 'Create with intention. Not just frequency.',
    description:
      'Content should never exist simply to fill a calendar. We develop ideas that have a purpose behind them. This includes reels, static content, carousels, campaigns, brand stories and platform-specific formats built around communication pillars rather than chasing every passing trend.',
    closingQuote: 'The aim is content that looks good, communicates clearly and gives people a reason to stop, watch or remember.',
    category: 'service' as const,
  },
  serviceDigitalMarketing: {
    id: 'service-digital-marketing',
    num: '04',
    src: '/assets/service-digital-marketing.jpg',
    title: 'Digital Marketing',
    tagline: 'Be present. Be purposeful. Be remembered.',
    description:
      'A strong digital presence is built through consistency and active management. We bring strategy, content and communication together across the brand’s digital platforms with ongoing adaptation when audience or objectives evolve.',
    closingQuote: 'Because digital marketing isn’t simply about being visible. It’s about building a presence that stays relevant.',
    category: 'service' as const,
  },

  // Notes from Kolkata / Cultural Photographic Archive (Sections 20, 21, 22)
  kolkataArchive: [
    {
      id: 'kolkata-satyajit-ray',
      src: '/assets/kolkata-satyajit-ray.jpg',
      title: 'Satyajit Ray in his Kolkata Study',
      caption: 'The solitary craft of writing, sketching, and composing at his desk.',
      tag: 'MASTER AT WORK',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-tagore-chokher-bali',
      src: '/assets/kolkata-tagore-chokher-bali.jpg',
      title: 'Tagore & Morning Coffee',
      caption: 'Chokher Bali resting on Bengali pages with morning black coffee.',
      tag: 'LITERATURE & RHYTHM',
      aspect: 'portrait',
    },
    {
      id: 'kolkata-books-cat',
      src: '/assets/kolkata-books-cat.jpg',
      title: 'College Street Boipara',
      caption: 'Quiet street cat resting beside vintage bookstalls on College Street.',
      tag: 'BOIPARA CULTURE',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-architecture-taxi',
      src: '/assets/kolkata-architecture-taxi.jpg',
      title: 'Heritage & The Ambassador',
      caption: 'Classic Kolkata architecture and yellow taxi under postal stamp.',
      tag: 'ARCHITECTURE',
      aspect: 'portrait',
    },
    {
      id: 'kolkata-cafe-sketches',
      src: '/assets/kolkata-cafe-sketches.jpg',
      title: 'Café Napkin Sketches',
      caption: 'Espresso, ink pen, and architectural drafts drawn on table napkins.',
      tag: 'TACTILE CRAFT',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-princep-ghat-thonga',
      src: '/assets/kolkata-princep-ghat-thonga.jpg',
      title: 'Princep Ghat & Hooghly River',
      caption: 'Newspaper thonga against Vidyasagar Setu in the evening river mist.',
      tag: 'RIVERFRONT NOTES',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-cinema-victoria',
      src: '/assets/kolkata-cinema-victoria.jpg',
      title: 'Balcony Over Victoria Memorial',
      caption: 'Poetic cinematic still from Ray’s cinema overlooking the Maidan.',
      tag: 'CINEMATIC HERITAGE',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-durga-book',
      src: '/assets/kolkata-durga-book.jpg',
      title: 'Devotion & Memory',
      caption: 'Bengali elder with Durga book cover juxtaposed against time.',
      tag: 'ICONOGRAPHY',
      aspect: 'portrait',
    },
    {
      id: 'kolkata-flower-market',
      src: '/assets/kolkata-flower-market.jpg',
      title: 'Malik Ghat Flower Market',
      caption: 'The vibrant morning commerce of marigolds under Howrah Bridge.',
      tag: 'LIVING COMMERCE',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-tea-kachori',
      src: '/assets/kolkata-tea-kachori.jpg',
      title: 'Domestic Warmth & Afternoon Chai',
      caption: 'Block-printed cotton, fresh kachoris, biscuits and quiet reading.',
      tag: 'DOMESTIC TRANQUILITY',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-ray-doodles',
      src: '/assets/kolkata-ray-doodles.jpg',
      title: 'Feluda, Topshe & Jatayu Doodles',
      caption: 'Hand-drawn ink character sketches celebrating Bengali storytelling.',
      tag: 'SKETCHES & DOODLES',
      aspect: 'landscape',
    },
    {
      id: 'kolkata-wine-notes',
      src: '/assets/kolkata-wine-notes.jpg',
      title: 'Notes from Kolkata',
      caption: 'শহরের নোটবুক — Wine glass with lipstick mark on the rim.',
      tag: 'SHOHORER NOTEBOOK',
      aspect: 'landscape',
    },
  ],
};
