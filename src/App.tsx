import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { EditorialThesis } from './components/EditorialThesis';
import { FourChapters } from './components/FourChapters';
import { CognitiveArchitecture } from './components/CognitiveArchitecture';
import { ProcessJourney } from './components/ProcessJourney';
import { VisualWorlds } from './components/VisualWorlds';
import { IntroScreen } from './components/IntroScreen';
import { SelectedWork } from './components/SelectedWork';
import { ProjectModal } from './components/ProjectModal';
import { EngagementArchitecture } from './components/EngagementArchitecture';
import { StudioDisciplines } from './components/StudioDisciplines';
import { CreativeCreed } from './components/CreativeCreed';
import { CapabilitiesMatrix } from './components/CapabilitiesMatrix';
import { FAQ } from './components/FAQ';
import { ContactExperience } from './components/ContactExperience';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ServicesShowcase } from './components/ServicesShowcase';
import { KolkataStory } from './components/KolkataStory';
import { SkyMedia } from './components/SkyMedia';
import { ProjectBlueprint } from './config/business';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('kolpo-theme') as 'light' | 'dark' | 'system') || 'system';
  });

  const [activeProject, setActiveProject] = useState<ProjectBlueprint | null>(null);
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  // Apply theme to document element
  useEffect(() => {
    const applyTheme = () => {
      let resolved = theme;
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', resolved);
      localStorage.setItem('kolpo-theme', theme);
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`site-shell min-h-screen bg-kh-bg text-kh-ink selection:bg-kh-ink selection:text-kh-bg transition-colors duration-500 ${
      showIntro ? 'site-intro-pending' : 'site-intro-ready'
    }`}>
      {/* Brand Entrance Intro Veil */}
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      {/* Fixed Architectural Header */}
      <Navigation
        theme={theme}
        onThemeChange={setTheme}
        onOpenContact={handleOpenContact}
      />

      {/* Main Narrative Chapters */}
      <main id="main">
        {/* Chapter 00 // Prologue & Architectural Hero */}
        <Hero onOpenContact={handleOpenContact} isIntroDone={!showIntro} />

        {/* Chapter 01 // Editorial Thesis: The Anatomy of Resonance */}
        <EditorialThesis />

        {/* Chapter 02 // The Four Chapters: Strategy, Creativity, Content, Growth */}
        <FourChapters />

        {/* Chapter 03 // Cognitive Architecture: WHO, WHY, WHAT, HOW */}
        <CognitiveArchitecture />

        {/* Chapter 04 // Spatial Methodology: The Process Journey */}
        <ProcessJourney />

        {/* Studio Services Showcase: 4 Services & Reference Cards */}
        <ServicesShowcase onOpenContact={handleOpenContact} />

        {/* Chapter 05 // Four Visual Worlds */}
        <VisualWorlds onOpenContact={handleOpenContact} />

        {/* Chapter 06 // Curated Archive & Selected Work */}
        <SelectedWork onSelectProject={setActiveProject} />

        {/* Chapter 07 // Engagement Architecture */}
        <EngagementArchitecture onOpenContact={handleOpenContact} />

        {/* Chapter 09 // How Kolpo House Operates */}
        <StudioDisciplines />

        {/* Chapter 10 // Core Creative Creed */}
        <CreativeCreed />

        {/* Environmental Horizon // Architectural Space & Riverfront Sky */}
        <SkyMedia />

        {/* Notes from Kolkata: Visual Story Archive */}
        <KolkataStory onOpenContact={handleOpenContact} />

        {/* Chapter 11 // Full Capabilities Matrix */}
        <CapabilitiesMatrix />

        {/* Chapter 12 // Practical Dialogues & FAQ */}
        <FAQ />

        {/* Chapter 13 // Invitation to Dialogue: Write to KOLPO HOUSE */}
        <ContactExperience />
      </main>

      {/* Chapter 14 // Editorial Footer */}
      <Footer onOpenLegal={setActiveLegal} />

      {/* Full-Screen Project Inspection Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={activeLegal}
        onClose={() => setActiveLegal(null)}
      />
    </div>
  );
}

export default App;
