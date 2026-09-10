import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import CinematicScroll from '../components/CinematicScroll';

export default function AboutPage() {
  const navigate = useNavigate();

  const handleVisitClick = () => {
    navigate('/contact');
  };

  return (
    <div style={{ paddingTop: '80px', backgroundColor: isDark ? '#121110' : '#FAF8F5', minHeight: '100vh', transition: 'background-color 0.35s ease' }}>
      {/* Editorial About Showcase */}
      <About onVisitClick={handleVisitClick} />

      {/* Cinematic Visual Break */}
      <CinematicScroll
        image="/assets/products/pvc-panel-showcase.jpg"
        subtext="Architectural Dimension"
        quote="Texture, Shadow & Structure in Perfect Resonance"
        author="Contemporary Surat Living"
      />

      {/* Why Choose Us Distinctive Blocks */}
      <WhyChooseUs />
    </div>
  );
}
