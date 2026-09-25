export interface ProjectBlueprint {
  id: string;
  code: string;
  category: 'Brand' | 'Creative' | 'Digital' | 'Growth';
  title: string;
  type: string;
  tagline: string;
  summary: string;
  challenge: string;
  insight: string;
  strategy: string;
  direction: string;
  digitalArchitecture: string;
  growthSystem: string;
  deliverables: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  category: 'Strategy' | 'Brand' | 'Content' | 'Social Media' | 'Search' | 'Digital' | 'Growth';
  summary: string;
  whyItMatters: string;
  approach: string;
  deliverables: string[];
}

export const business = {
  name: 'KOLPO HOUSE',
  monogram: 'KH',
  tagline: 'We build brands, not just content.',
  descriptor: 'Independent Creative & Digital Studio',
  location: 'Kolkata, India',
  coordinates: '22.5726° N, 88.3639° E',
  timezone: 'Asia/Kolkata (IST)',
  email: 'kolpohouse@gmail.com',
  phone: '+91 7003497348',
  phoneRaw: '+917003497348',
  whatsappRaw: '917003497348',
  whatsappMessage: 'Hi Kolpo House, I found your website and would like to discuss a project.',
  instagram: 'https://instagram.com/kolpo.house',
  instagramHandle: '@kolpo.house',
  heroScript: 'a considered imagination',
  editorialThesis: {
    title: 'THE ANATOMY OF RESONANCE',
    phaseOne: 'GOOD CONTENT CAN GET ATTENTION.',
    phaseTwo: 'GOOD STRATEGY GIVES IT SOMEWHERE TO GO.',
    firstPrinciple: 'STRATEGY BEFORE EXECUTION.',
    description:
      'Too much marketing makes noise that people instantly forget. At KOLPO HOUSE, we give your brand a clear purpose, memorable beauty, and steady direction before making a single post or video.'
  },
  heroHotspots: [
    {
      id: '01',
      title: 'The Thinking',
      subtitle: 'STRATEGY FIRST',
      position: { top: '38%', left: '26%' },
      description: 'Understanding who you are and why people care about your work, so your message always hits the mark.'
    },
    {
      id: '02',
      title: 'The Expression',
      subtitle: 'BEAUTY & CLARITY',
      position: { top: '27%', left: '73%' },
      description: 'Crafting clean typography, warm colors, and unforgettable design that feels like your genuine personality.'
    },
    {
      id: '03',
      title: 'The Momentum',
      subtitle: 'REAL CONNECTION',
      position: { top: '56%', left: '74%' },
      description: 'Turning curious visitors into loyal friends and happy customers who keep coming back over the years.'
    }
  ],
  navigation: [
    { label: 'WORK', href: '#work', chapter: '01' },
    { label: 'SERVICES', href: '#services', chapter: '02' },
    { label: 'PROCESS', href: '#process', chapter: '03' },
    { label: 'ABOUT', href: '#kolkata', chapter: '04' },
    { label: 'CONTACT', href: '#contact', chapter: '05' },
  ],
  chapters: [
    {
      num: '01',
      name: 'STRATEGY',
      title: 'Know what matters.',
      quote: '“Before you speak, know who you are speaking to and why it matters.”',
      summary: 'We find the sweet spot between what your business does best and what people truly care about. Clear thinking makes every design decision simple and powerful.',
      outputs: [
        'Finding your unique market place',
        'Simple, clear brand messaging',
        'Tone of voice everyone understands',
        'Key story topics for your audience'
      ]
    },
    {
      num: '02',
      name: 'CREATIVITY',
      title: 'Make it unforgettable.',
      quote: '“Great design makes a brand feel like an honest friend, impossible to copy.”',
      summary: 'We give your ideas a striking visual identity. Warm colors, gorgeous typography, and friendly artwork help you stand out anywhere in the world.',
      outputs: [
        'Logo & visual identity systems',
        'Photography & video art direction',
        'Eye-catching campaign concepts',
        'Print, packaging & sensory design'
      ]
    },
    {
      num: '03',
      name: 'CONTENT',
      title: 'Give ideas a voice.',
      quote: '“Every post, photo, and line should add lasting value to your story.”',
      summary: 'We create content that people actually enjoy reading and watching. No spam, no robotic clickbait—just genuine, helpful, and charming storytelling.',
      outputs: [
        'Engaging videos & reels',
        'Thoughtful articles & newsletters',
        'Clean social media scheduling',
        'Helpful visual guides for customers'
      ]
    },
    {
      num: '04',
      name: 'GROWTH',
      title: 'Build on what works.',
      quote: '“Attention is just the start. Genuine trust lasts for decades.”',
      summary: 'We look at what people love and do more of it. Simple, honest marketing that steadily brings you great clients and sustainable revenue.',
      outputs: [
        'Product & service launches',
        'Helpful digital ads that work',
        'Community friendships & collabs',
        'Steady, honest customer growth'
      ]
    }
  ],
  cognitiveFramework: [
    {
      step: '01',
      key: 'WHO',
      subtitle: 'THE BRAND AND ITS PEOPLE',
      question: '“Who are you when no marketing is speaking?”',
      description: 'We sit down with you to discover your genuine passion, craftsmanship, and the heartfelt reason your business exists in the first place.',
      status: 'WHO Understood'
    },
    {
      step: '02',
      key: 'WHY',
      subtitle: 'PURPOSE AND AMBITION',
      question: '“What positive difference are you here to make?”',
      description: 'We define the clear promise you make to customers and the goal that gets your team excited every morning.',
      status: 'WHY Defined'
    },
    {
      step: '03',
      key: 'WHAT',
      subtitle: 'THE AUDIENCE & RELEVANCE',
      question: '“What do real people truly need from you?”',
      description: 'We listen to what your customers wish for, making sure what you create solves a real problem with care and warmth.',
      status: 'WHAT Identified'
    },
    {
      step: '04',
      key: 'HOW',
      subtitle: 'THE STORY WORTH TELLING',
      question: '“How does your story come alive in the real world?”',
      description: 'We bring the whole experience to life with a beautiful website, welcoming posts, and smooth customer journeys.',
      status: 'HOW Orchestrated'
    }
  ],
  processStages: [
    {
      num: '01',
      name: 'DISCOVER',
      subtitle: 'LISTENING CLOSELY',
      quote: '“We ask great questions and listen to your story before sketching anything.”',
      description: 'We learn about your history, your customers, and what makes your work special.',
      deliverables: [
        'Friendly founder conversations',
        'Reviewing existing materials',
        'Learning what customers love',
        'Spotting great opportunities'
      ]
    },
    {
      num: '02',
      name: 'DEFINE',
      subtitle: 'CHOOSING DIRECTION',
      quote: '“Good direction means doing a few things with extraordinary care.”',
      description: 'We summarize our discoveries into a crystal-clear guide so everyone knows the path forward.',
      deliverables: [
        'Brand direction summary',
        'Words & tone of voice guide',
        'Visual moodboard & inspiration',
        'Simple roadmap for next steps'
      ]
    },
    {
      num: '03',
      name: 'CREATE',
      subtitle: 'MAKING & SHAPING',
      quote: '“Turning ideas into beautiful designs, websites, and stories.”',
      description: 'We draw the logos, pick the fonts, write the words, and build working interactive website prototypes.',
      deliverables: [
        'Complete visual identity',
        'Website design & prototype',
        'Story scripts & copy',
        'Social media templates'
      ]
    },
    {
      num: '04',
      name: 'EXECUTE',
      subtitle: 'BRINGING TO LIFE',
      quote: '“Polishing every tiny detail so your launch feels magical.”',
      description: 'We code the website, test it on all phones and tablets, and prepare your launch announcement.',
      deliverables: [
        'Fast, mobile-ready website',
        'Ready-to-use image and video kits',
        'Friendly launch plan',
        'Full testing on all devices'
      ]
    },
    {
      num: '05',
      name: 'OPTIMISE',
      subtitle: 'CARING & GROWING',
      quote: '“Growth is a long friendship with your community.”',
      description: 'We check in to see what customers love most and keep refining things so your brand stays fresh.',
      deliverables: [
        'Checking customer feedback',
        'New seasonal design ideas',
        'Helpful advice as you expand',
        'Ongoing care and support'
      ]
    }
  ],
  visualWorlds: [
    {
      id: 'brand',
      num: '01',
      name: 'BRAND',
      subtitle: 'Identity & Personality',
      tagline: 'A point of view, made visible.',
      description: 'We create logos, colors, and words that make your business instantly recognizable and deeply trusted.',
      deliverables: [
        'Brand Strategy & Clear Positioning',
        'Names, Slogans & Verbal Identity',
        'Friendly Tone of Voice Guidelines',
        'Core Brand Story & Principles',
        'Complete Visual Design System'
      ],
      mark: 'Aa',
      accentColor: '#7D8668'
    },
    {
      id: 'digital',
      num: '02',
      name: 'DIGITAL',
      subtitle: 'Websites & Touchpoints',
      tagline: 'A welcoming digital home that feels right.',
      description: 'We build websites that load fast, look like art galleries, and work smoothly on any smartphone or computer.',
      deliverables: [
        'Modern Website Design & Engineering',
        'Interactive Storytelling Touchpoints',
        'Mobile-First Layouts for All Phones',
        'Clear Inquiry & Contact Journeys',
        'Speed & Accessibility Optimization'
      ],
      mark: '01/04',
      accentColor: '#5B7085'
    },
    {
      id: 'creative',
      num: '03',
      name: 'CREATIVE',
      subtitle: 'Campaigns & Storytelling',
      tagline: 'Stories that capture human imagination.',
      description: 'We create photo shoots, videos, and articles that make people stop, smile, and remember your work.',
      deliverables: [
        'Creative Direction & Big Ideas',
        'Photo & Video Shoot Direction',
        'Storyboards & Authentic Copywriting',
        'Seasonal Launch Campaigns',
        'Printed Books, Cards & Collateral'
      ],
      mark: 'An Idea.',
      accentColor: '#966858'
    },
    {
      id: 'growth',
      num: '04',
      name: 'GROWTH',
      subtitle: 'Audience & Community',
      tagline: 'Honest progress with real care.',
      description: 'Helping genuine people discover your business through word of mouth, smart partnerships, and gentle outreach.',
      deliverables: [
        'Thoughtful Product & Service Drops',
        'Community Building & Instagram Cadence',
        'Smart Advertising with Zero Jargon',
        'Creative Collaborations with Kindreds',
        'Clear Analytics & Continuous Care'
      ],
      mark: '04—∞',
      accentColor: '#6B7A66'
    }
  ],
  blueprints: [
    {
      id: '01',
      code: 'KH-ARC-01',
      category: 'Brand',
      type: 'STRATEGIC BLUEPRINT',
      title: 'Artisanal Heritage & Modern Verbal Identity',
      tagline: 'How an authentic family workshop becomes a beloved national brand.',
      summary: 'A complete brand guide created for a handcrafted goods maker expanding into modern design boutiques across India and abroad.',
      challenge: 'How can a traditional workshop show its handmade craft without sounding old-fashioned?',
      insight: 'People love honest human craft. When you explain the patience and care behind every object, customers appreciate the real value.',
      strategy: 'Focus on the human hands, the honest materials, and the timeless beauty of the creations.',
      direction: 'Natural paper textures, warm lighting, elegant serif typography, and documentary photography.',
      digitalArchitecture: 'An editorial journal layout with numbered chapters and effortless shopping journeys.',
      growthSystem: 'Private studio open days, printed story cards inside packages, and warm direct letters.',
      deliverables: [
        'Founding Story & Values Document',
        'Logo, Monogram & Typography Guidelines',
        'Packaging & Box Design Suite',
        'Photo & Film Moodboards',
        'Flagship Website Layout Blueprint'
      ]
    },
    {
      id: '02',
      code: 'KH-ARC-02',
      category: 'Creative',
      type: 'CREATIVE EXPLORATION',
      title: 'Seasonal Storytelling & Visual Universe',
      tagline: 'Connecting photos, videos, and essays into one memorable story.',
      summary: 'A seasonal storytelling project connecting still photos, peaceful video clips, and founder journals.',
      challenge: 'How to tell a captivating story across Instagram without posting repetitive ads?',
      insight: 'People follow brands that share beauty and wisdom. Treat your feed like a small magazine, not a billboard.',
      strategy: 'Tell a story in three gentle acts: The Inspiration, The Making, and The Final Piece.',
      direction: 'Golden natural daylight, candid portraits, poetic voiceovers, and peaceful ambient sounds.',
      digitalArchitecture: 'Interactive horizontal gallery where visitors swipe through behind-the-scenes moments.',
      growthSystem: 'Inviting artists and photographers to share their perspective on the project.',
      deliverables: [
        'Story Outline & Video Scripts',
        'Photography Direction & Shotlist',
        'Instagram Grid & Reel Templates',
        'Interactive Story Microsite Design',
        'Post-Release Review & Feedback'
      ]
    },
    {
      id: '03',
      code: 'KH-ARC-03',
      category: 'Digital',
      type: 'EXPERIENCE BLUEPRINT',
      title: 'Digital Home & Frictionless Inquiries',
      tagline: 'A fast, beautiful website that turns curiosity into happy clients.',
      summary: 'A custom digital experience built for independent studios who want more client inquiries without pushy sales gimmicks.',
      challenge: 'How do you get more clients to reach out without sounding desperate or salesy?',
      insight: 'When people see proof of your good taste and transparent communication, they feel safe contacting you.',
      strategy: 'Make the website lightning-fast, show your thinking clearly, and offer a simple, friendly brief builder.',
      direction: 'Calm architectural lines, instant page loads, and clear buttons on phones and laptops.',
      digitalArchitecture: 'Clean React + Vite engineering with zero lag, readable text, and instant WhatsApp / Email links.',
      growthSystem: 'High ranking on Google for design keywords and personal follow-ups to all inquiries.',
      deliverables: [
        'Interactive Website Prototype',
        'Postal-Style Client Brief Builder',
        'Full Smartphone & Tablet Responsiveness',
        'Accessibility & Fast Loading Audit',
        'Google Search & Social Share Setup'
      ]
    }
  ] as ProjectBlueprint[],
  engagements: [
    {
      num: '01',
      title: 'BRAND BUILDING',
      subtitle: 'Complete Identity & Positioning',
      description: 'For new businesses starting out, or heritage companies ready for a fresh, confident look.',
      scope: 'Name, logo, colors, fonts, voice, and a complete design guide created over 6 to 10 weeks of friendly collaboration.'
    },
    {
      num: '02',
      title: 'CAMPAIGNS',
      subtitle: 'Launches & Special Moments',
      description: 'Coordinated photo, video, and social releases that announce your new product or milestone to the world.',
      scope: 'Concept planning, shoot direction, social storyboards, and launch day coordination.'
    },
    {
      num: '03',
      title: 'DIGITAL PRESENCE',
      subtitle: 'Websites & Mobile Experiences',
      description: 'Custom-built websites that look like modern magazines and work effortlessly on every phone and laptop.',
      scope: 'Page design, smooth animations, mobile responsiveness, and easy contact flows.'
    },
    {
      num: '04',
      title: 'CONTENT & CREATIVE',
      subtitle: 'Ongoing Storytelling & Socials',
      description: 'Regular photography, video clips, and thoughtful writing that keep your community engaged month after month.',
      scope: 'Monthly editorial plans, photo & reel sessions, and community conversation guides.'
    },
    {
      num: '05',
      title: 'LONG-TERM GROWTH',
      subtitle: 'Steady Partnership & Advice',
      description: 'A trusted creative partner by your side as your business opens new locations and expands.',
      scope: 'Monthly strategy check-ins, marketing advice, and ongoing creative support.'
    }
  ],
  disciplines: [
    {
      num: '01',
      title: 'CREATIVE & STRATEGY',
      subtitle: 'THE BIG PICTURE',
      description: 'Connecting your business goals to clear ideas, beautiful visuals, and memorable words.',
      synergy: 'Makes sure everything looks intentional and meaningful before production starts.',
      focus: [
        'Brand positioning & messaging',
        'Art direction & styling',
        'Campaign ideas & pacing',
        'Story writing & copy'
      ]
    },
    {
      num: '02',
      title: 'OPERATIONS & DELIVERY',
      subtitle: 'KEEPING PROMISES',
      description: 'Managing timelines, budgets, and quality checks so every project arrives smoothly and on time.',
      synergy: 'Turns exciting ideas into delivered, working realities with zero stress for you.',
      focus: [
        'Project schedules & updates',
        'Web development standards',
        'Quality checks on all screens',
        'Smooth launch day support'
      ]
    },
    {
      num: '03',
      title: 'CLIENT RELATIONSHIPS',
      subtitle: 'WARM ALLIANCES',
      description: 'Open, honest communication. You speak directly with the creators making your work, not a middleman.',
      synergy: 'Creates a relaxed, friendly environment where we build genuine friendships.',
      focus: [
        'Listening to your dreams & needs',
        'Collaborative preview reviews',
        'Clear, plain-language agreements',
        'Quick replies on WhatsApp & Email'
      ]
    },
    {
      num: '04',
      title: 'BUSINESS & SUSTAINABILITY',
      subtitle: 'FAIR VALUE',
      description: 'Ensuring your investment creates real commercial value, more customers, and a lasting brand.',
      synergy: 'Keeps proposals honest, transparent, and fair for both sides from day one.',
      focus: [
        'Clear, fixed project proposals',
        'Transparent deliverables lists',
        'Sensible resource planning',
        'Real long-term business value'
      ]
    }
  ],
  capabilities: [
    {
      number: '01',
      title: 'Brand Strategy',
      category: 'Strategy',
      summary: 'Finding what makes your business unique and planning your clear path forward.',
      whyItMatters: 'Without a clear plan, businesses spend money on random ads that get ignored.',
      approach: 'We study your competitors, talk with you about your strengths, and write a simple guide to guide every future choice.',
      deliverables: ['Clear Brand Roadmaps', 'Audience Profiles', 'Unique Selling Points', 'Tone of Voice Guide']
    },
    {
      number: '02',
      title: 'Brand Identity & Visuals',
      category: 'Brand',
      summary: 'Creating your logo, colors, fonts, and signature look that people remember.',
      whyItMatters: 'Great visual design makes you look professional and instantly builds customer trust.',
      approach: 'We craft timeless logos, harmonious colors, and readable typography built to look fresh for decades.',
      deliverables: ['Custom Logos & Monograms', 'Color Palettes', 'Typography Suites', 'Brand Style Guide']
    },
    {
      number: '03',
      title: 'Social Media Storytelling',
      category: 'Social Media',
      summary: 'Turning your social profiles into friendly, inspiring places people love visiting.',
      whyItMatters: 'Daily spam pushes followers away; warm, beautiful stories build true fans.',
      approach: 'We design pleasant post themes, helpful tips, and engaging reels that treat followers like friends.',
      deliverables: ['Monthly Story Calendars', 'Aesthetic Feed Direction', 'Community Reply Guides', 'Ready-to-Post Graphics']
    },
    {
      number: '04',
      title: 'Instagram Visual Growth',
      category: 'Social Media',
      summary: 'Beautiful short-form reels and photography crafted for modern aesthetic brands.',
      whyItMatters: 'Instagram is the living shop window where most customers first look you up.',
      approach: 'We combine cinematic camera angles with easy-to-read captions and clean sound design.',
      deliverables: ['Short-Form Video Formats', 'Story Highlight Covers', 'Photo Grid Layouts', 'Bio & Profile Makeovers']
    },
    {
      number: '05',
      title: 'Content & Editorial Writing',
      category: 'Content',
      summary: 'Writing essays, interviews, and stories that explain your craft in plain, engaging English.',
      whyItMatters: 'Helpful stories show that you are an expert and make people proud to choose you.',
      approach: 'We interview your team, uncover fascinating stories, and write articles people actually want to read.',
      deliverables: ['Founder Feature Stories', 'Customer Guides', 'Website Articles', 'Printed Booklets & Notes']
    },
    {
      number: '06',
      title: 'Website Design & Engineering',
      category: 'Digital',
      summary: 'Building fast, beautiful websites that look stunning on iPhones, Androids, and laptops.',
      whyItMatters: 'Your website is your digital home—it should never feel clunky, slow, or broken.',
      approach: 'We design custom layouts, test them on all devices, and make sure every button works flawlessly.',
      deliverables: ['Custom Responsive Websites', 'Mobile-First Designs', 'Sub-Second Loading Speeds', 'Interactive Contact Forms']
    },
    {
      number: '07',
      title: 'Search Engine Visibility (SEO)',
      category: 'Search',
      summary: 'Making sure your website shows up when people in your city search for what you offer.',
      whyItMatters: 'Showing up on Google brings you free, interested customers every single day.',
      approach: 'We write clear headlines, add proper location tags, and make your site clean and easy for Google to read.',
      deliverables: ['Google Business Listing Setup', 'Local Search Optimization', 'Fast Technical Code', 'Readable Page Titles']
    },
    {
      number: '08',
      title: 'Google Ads & Search Intent',
      category: 'Search',
      summary: 'Showing simple, helpful ads to people who are actively searching for your service right now.',
      whyItMatters: 'People searching on Google already want to buy; you just need to welcome them in.',
      approach: 'We select the right search keywords and send visitors to clear, welcoming pages with easy contact options.',
      deliverables: ['Search Ad Setup', 'Budget Protection Rules', 'Clear Ad Copy Variations', 'Monthly Results Review']
    },
    {
      number: '09',
      title: 'Meta Ads (Instagram & Facebook)',
      category: 'Social Media',
      summary: 'Sharing your best photos and videos with local people who would love your business.',
      whyItMatters: 'Visual ads help people who have never heard of you discover your work.',
      approach: 'We show your genuine work to people who enjoy similar arts, food, fashion, or lifestyle topics.',
      deliverables: ['Visual Ad Campaigns', 'Audience Matching', 'Photo & Video Ads', 'Clear Monthly Reporting']
    },
    {
      number: '10',
      title: 'Customer Inquiries & Growth',
      category: 'Growth',
      summary: 'Making it simple and friendly for people to ask questions, book calls, and become clients.',
      whyItMatters: 'If reaching out is confusing or difficult, people leave and go somewhere else.',
      approach: 'We create effortless WhatsApp buttons, friendly contact letters, and clear next steps.',
      deliverables: ['WhatsApp Fast Contact', 'Simple Letter Inquiries', 'Follow-up Email Templates', 'Customer Feedback Checks']
    },
    {
      number: '11',
      title: 'Campaign Launches & Moments',
      category: 'Growth',
      summary: 'Orchestrating special moments, seasonal announcements, and opening celebrations.',
      whyItMatters: 'A special event or launch brings excitement and gives people a reason to talk about you.',
      approach: 'We build anticipation, prepare photos, and launch across email, social, and press together.',
      deliverables: ['Launch Day Schedules', 'Teaser Photos & Videos', 'Announcement Emails', 'Post-Launch Celebration']
    }
  ] as CapabilityItem[],
  faqs: [
    {
      q: 'What exactly does KOLPO HOUSE do?',
      a: 'We help businesses look great, tell their story, build fast modern websites, and attract happy customers. We combine design, photography, writing, and digital marketing under one roof.'
    },
    {
      q: 'How does starting a project work?',
      a: 'It starts with a simple conversation. You send us a brief or message on WhatsApp. We listen to your goals, suggest a clear plan, and give you a straightforward proposal with fixed deliverables.'
    },
    {
      q: 'Can we hire you for just a website or just a logo?',
      a: 'Yes! While we love building complete brand worlds, we frequently take on focused projects—like a brand identity, an online store, or a seasonal campaign.'
    },
    {
      q: 'Do you work with people outside Kolkata?',
      a: 'Absolutely. While our studio is based in Kolkata, we work with wonderful clients and creators across India and internationally via smooth WhatsApp and video calls.'
    },
    {
      q: 'How are fees and timelines decided?',
      a: 'We give you a fixed, clear written price based on what we agree to build. No surprises, no hidden fees, and no confusing corporate retainers.'
    },
    {
      q: 'How does the postal brief form work?',
      a: 'You fill in a few lines about your project right on our website. It formats your note like a neat postal letter, and you can instantly send it to us via WhatsApp, Email, or copy it to your clipboard.'
    }
  ],
  legal: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'September 2026',
      sections: [
        {
          heading: 'Direct Inquiries & Respect',
          body: 'When you contact KOLPO HOUSE via email, phone, WhatsApp, or our postal brief form, your details are used solely to answer your questions and discuss your project. We never sell, rent, or spam your information.'
        },
        {
          heading: 'Private Browser Briefs',
          body: 'The brief form on this website compiles your note inside your own browser. Nothing is saved to a tracking database until you choose to click Send via WhatsApp or Open Email.'
        },
        {
          heading: 'Zero Invasive Trackers',
          body: 'We do not use surveillance cookies or cross-site advertising trackers. We store your theme choice (Light, Dark, or System) in your browser so the site looks great every time you visit.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'September 2026',
      sections: [
        {
          heading: 'Welcome to our Studio',
          body: 'This website is our studio portfolio and journal. The concepts and ideas shared here illustrate our creative thinking and design quality.'
        },
        {
          heading: 'Working Together',
          body: 'Starting an official project requires an agreed written scope and proposal outlining the schedule and deliverables. We believe in clear, fair agreements.'
        }
      ]
    },
    cookies: {
      title: 'Cookies & Storage Policy',
      lastUpdated: 'September 2026',
      sections: [
        {
          heading: 'Honest & Simple Storage',
          body: 'We only use your browser localStorage to remember if you prefer Light or Dark mode. You can clear your browser storage anytime.'
        }
      ]
    }
  }
};
