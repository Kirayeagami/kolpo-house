import { useState } from 'react';
import { ArrowDown, ArrowUpRight, X } from 'lucide-react';
import { business } from '../config/business';
import { BougainvilleaVideo } from './BougainvilleaVideo';

interface HeroProps {
  onOpenContact: () => void;
  isIntroDone?: boolean;
}

export const Hero = ({ onOpenContact, isIntroDone = true }: HeroProps) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const visibleHotspot = activeHotspot ?? hoveredHotspot;

  return (
    <section aria-label="KOLPO HOUSE Prologue & Architectural Hero" className={`kh-cinematic-hero ${isIntroDone ? 'kh-cinematic-hero--ready' : ''}`}>
      <img src="/assets/kolkata.jpg" alt="KOLPO HOUSE Kolkata Architecture and Creative Atmosphere" className="kh-cinematic-hero__image" />
      <div className="kh-cinematic-hero__veil" />
      <BougainvilleaVideo variant="01" mode="decorative" position="custom" className="absolute -left-4 top-4 z-5 w-64 opacity-70 pointer-events-none sm:w-96 lg:w-[32rem]" />

      <div className="kh-cinematic-hero__topline">
        <span><i /> {business.descriptor}</span>
        <span className="hidden sm:block">Kolkata · India</span>
        <span>22.5726° N · 88.3639° E</span>
      </div>

      <div className="kh-cinematic-hero__title" aria-label="KOLPO HOUSE">
        <span>KOLPO</span>
        <strong>HOUSE</strong>
        <em>Stories with direction.</em>
      </div>

      <div className="kh-cinematic-hero__bottom">
        <p>Strategy, creativity, content and growth—built into a lasting identity for ambitious businesses.</p>
        <div className="kh-cinematic-hero__actions">
          <button type="button" onClick={onOpenContact}>Start a conversation <ArrowUpRight aria-hidden="true" /></button>
          <a href="#philosophy">Enter the house <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="kh-cinematic-hero__mobile-hotspots" aria-label="Studio principles">
          {business.heroHotspots.map((hotspot, index) => (
            <button
              key={hotspot.id}
              type="button"
              onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
              aria-expanded={visibleHotspot === index}
              aria-label={`Inspect hotspot ${hotspot.id}: ${hotspot.title}`}
            >
              {activeHotspot === index ? <X aria-hidden="true" /> : hotspot.id}
            </button>
          ))}
        </div>
      </div>

      <div className="kh-cinematic-hero__hotspots" aria-label="Studio principles">
        {business.heroHotspots.map((hotspot, index) => (
          <div key={hotspot.id} style={{ top: hotspot.position.top, left: hotspot.position.left }}>
            <button
              type="button"
              data-label={hotspot.title}
              onMouseEnter={() => setHoveredHotspot(index)}
              onMouseLeave={() => setHoveredHotspot(null)}
              onFocus={() => setHoveredHotspot(index)}
              onBlur={() => setHoveredHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
              aria-expanded={visibleHotspot === index}
              aria-label={`Inspect hotspot ${hotspot.id}: ${hotspot.title}`}
            >
              {activeHotspot === index ? <X aria-hidden="true" /> : hotspot.id}
            </button>
          </div>
        ))}
      </div>

      {visibleHotspot !== null && (
        <aside className="kh-cinematic-hero__detail" aria-live="polite">
          <span>{business.heroHotspots[visibleHotspot].subtitle}</span>
          <h2>{business.heroHotspots[visibleHotspot].title}</h2>
          <p>{business.heroHotspots[visibleHotspot].description}</p>
          {activeHotspot !== null && <button type="button" onClick={() => setActiveHotspot(null)}>Close</button>}
        </aside>
      )}
    </section>
  );
};
