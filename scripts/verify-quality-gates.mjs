import fs from 'node:fs';
import path from 'node:path';

console.log('--- KOLPO HOUSE AUTONOMOUS QUALITY GATES VERIFICATION ---');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// Gate 1: Check AGENTS.md existence and rules
assert(fs.existsSync('AGENTS.md'), 'AGENTS.md exists in root directory');
const agentsMd = fs.readFileSync('AGENTS.md', 'utf8');
assert(agentsMd.includes('KOLPO HOUSE'), 'AGENTS.md contains KOLPO HOUSE identity');
assert(agentsMd.includes('kolpohouse@gmail.com'), 'AGENTS.md has verified contact email');
assert(agentsMd.includes('+91 7003497348'), 'AGENTS.md has verified phone/WhatsApp');
assert(agentsMd.includes('22.5726° N, 88.3639° E'), 'AGENTS.md contains Kolkata coordinates');

// Gate 2: Business configuration Single Source of Truth
const businessFile = fs.readFileSync('src/config/business.ts', 'utf8');
assert(businessFile.includes("name: 'KOLPO HOUSE'"), 'Single source of truth has correct studio name');
assert(businessFile.includes("email: 'kolpohouse@gmail.com'"), 'Single source of truth has correct email');
assert(businessFile.includes("phone: '+91 7003497348'"), 'Single source of truth has correct phone');
assert(businessFile.includes("tagline: 'We build brands, not just content.'"), 'Single source of truth has exact tagline');
assert(businessFile.includes("blueprints: ["), 'Single source of truth has curated blueprints');
assert(!businessFile.includes("growthSystem: ["), 'Growth system circle constellation removed per client specification');
assert(!businessFile.includes("EST. 2024") && !businessFile.includes("established:"), 'EST. 2024 completely purged per client specification');
assert(!businessFile.includes("'AI'") && !businessFile.includes("AI-Powered"), 'AI mentions purged from services per client specification');
assert(businessFile.includes("capabilities: ["), 'Single source of truth has studio capabilities');
assert(businessFile.includes("legal: {"), 'Single source of truth has plain-English legal drafts');

// Gate 3: Theme system & Anti-vibecode color palette
const indexCss = fs.readFileSync('src/index.css', 'utf8');
assert(indexCss.includes('#F3F1EB'), 'Light theme uses warm architectural #F3F1EB background');
assert(indexCss.includes('#0A0B0A'), 'Dark theme uses deep architectural #0A0B0A background');
assert(indexCss.includes('#7D8668'), 'Sage accent #7D8668 is defined');
assert(indexCss.includes('hero-arch-mask'), 'Hero arch mask CSS is defined');

// Gate 4: Production distribution verification
assert(fs.existsSync('dist/index.html'), 'dist/index.html exists');
assert(fs.existsSync('dist/robots.txt'), 'dist/robots.txt exists');
assert(fs.existsSync('dist/sitemap.xml'), 'dist/sitemap.xml exists');

const distIndex = fs.readFileSync('dist/index.html', 'utf8');
assert(distIndex.includes('KOLPO HOUSE — Strategy. Creativity. Content. Growth.'), 'HTML contains official title');
assert(distIndex.includes('https://kolpo-house.vercel.app/'), 'HTML contains canonical & OG URL');
assert(distIndex.includes('Instrument+Serif'), 'HTML loads editorial luxury serif typography');
assert(distIndex.includes('Sora'), 'HTML loads functional modern sans typography');
assert(distIndex.includes('localStorage.getItem(\'kolpo-theme\')'), 'HTML contains anti-flash theme script');
assert(distIndex.includes('@type": "ProfessionalService'), 'HTML contains Schema.org structured data');

// Gate 5: Check all components exist and compile without any 'any'
const components = [
  'Navigation.tsx',
  'Hero.tsx',
  'EditorialThesis.tsx',
  'FourChapters.tsx',
  'CognitiveArchitecture.tsx',
  'ProcessJourney.tsx',
  'ServicesShowcase.tsx',
  'VisualWorlds.tsx',
  'SelectedWork.tsx',
  'ProjectModal.tsx',
  'IntroScreen.tsx',
  'FlyingLetter.tsx',
  'EngagementArchitecture.tsx',
  'StudioDisciplines.tsx',
  'CreativeCreed.tsx',
  'KolkataStory.tsx',
  'CapabilitiesMatrix.tsx',
  'FAQ.tsx',
  'ContactExperience.tsx',
  'Footer.tsx',
  'LegalModal.tsx',
  'BougainvilleaVideo.tsx',
  'SkyMedia.tsx'
];

components.forEach(comp => {
  const filePath = path.join('src/components', comp);
  assert(fs.existsSync(filePath), `Component ${comp} exists`);
  const content = fs.readFileSync(filePath, 'utf8');
  assert(!content.includes(': any'), `Component ${comp} has zero TypeScript : any`);
  assert(content.includes('aria-') || content.includes('role='), `Component ${comp} includes accessibility attributes`);
});

// Gate 6: Assets check
const referenceAssets = [
  'kh-logo-monogram.jpg',
  'kh-why-kolpohouse.jpg',
  'kh-how-it-started.jpg',
  'kh-graphic-s1.jpg',
  'kh-graphic-s2.jpg',
  'kh-graphic-deep-blue.jpg',
  'services-cover.jpg',
  'service-strategy.jpg',
  'service-brand-comm.jpg',
  'service-content.jpg',
  'service-digital-marketing.jpg',
  'kolkata-satyajit-ray.jpg',
  'kolkata-tagore-chokher-bali.jpg',
  'kolkata-books-cat.jpg',
  'kolkata-architecture-taxi.jpg',
  'kolkata-cafe-sketches.jpg',
  'kolkata-princep-ghat-thonga.jpg',
  'kolkata-cinema-victoria.jpg',
  'kolkata-durga-book.jpg',
  'kolkata-flower-market.jpg',
  'kolkata-tea-kachori.jpg',
  'kolkata-ray-doodles.jpg',
  'kolkata-wine-notes.jpg',
  'bougainvillea-flowers.avif',
  'bougainvillea-flowers.webm',
  'bougainvillea-flowers.mov',
  'bougainvillea-flowers_01.avif',
  'bougainvillea-flowers_01.webm',
  'bougainvillea-flowers_02.avif',
  'bougainvillea-flowers_02.webm',
  'bougainvillea-flowers_03.avif',
  'bougainvillea-flowers_03.webm',
  'bougainvillea-flowers_04.avif',
  'bougainvillea-flowers_04.webm',
  'bougainvillea-flowers_05.avif',
  'bougainvillea-flowers_05.webm',
  'bougainvillea-flowers_06.avif',
  'bougainvillea-flowers_06.webm',
  'bougainvillea-flowers_07.avif',
  'bougainvillea-flowers_07.webm'
];

referenceAssets.forEach(asset => {
  assert(fs.existsSync(path.join('public/assets', asset)), `Asset public/assets/${asset} is present`);
});

console.log('---------------------------------------------------------');
console.log(`TOTAL CHECKS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL AUTONOMOUS QUALITY GATES PASSED SUCCESSFULLY!');
}
