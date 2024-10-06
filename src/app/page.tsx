'use client';

import { useState, useEffect } from 'react';
import { Hero } from './components/organisms/Hero';
import { SubHero } from './components/organisms/SubHero';
import { Gallery } from './components/organisms/Gallery';
import { TemporaryExhibitions } from './components/organisms/TemporaryExhibitions';
import { About } from './components/organisms/About';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState('100vh'); 
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se estamos no mobile e ajusta isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Chama ao carregar a página para definir o estado inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position e aplica o zoom baseado no dispositivo
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const zoomLevel = isMobile
        ? Math.max(40, 70 - window.scrollY * 0.8) // Mobile zoom (90-120%)
        : Math.max(75, 120 - window.scrollY * 0.5); // Desktop zoom (75-120%)

      const img = new Image();
      img.src = '/img/bg/hero.png'; 

      img.onload = () => {
        const imgHeight = img.height * (zoomLevel / 100);
        setSectionHeight(`${imgHeight}px`);
      };
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama uma vez para definir o estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, isMobile]); // Atualiza com base no scroll e no dispositivo

  return (
    <>
      <section
        className="relative text-gray-100 bg-center bg-no-repeat md:h-screen flex"
        style={{
          backgroundImage: 'url(/img/bg/hero.png)',
          backgroundSize: 'cover', // Mantém cover para desktop e mobile
          height: sectionHeight,
          transition: 'height 0.5s ease-out',
        }}
      >


        <div className="flex flex-wrap items-end p-8">
          <Hero onButtonClick={() => { throw new Error('Function not implemented.'); }} imageUrl={''} />
          <SubHero />
        </div>
      </section>
      
      <Gallery
        title="Galeria de Obras de Arte do MET"
        description="Explore uma coleção de pinturas do Metropolitan Museum." 
        id="gallery"
      />

      <TemporaryExhibitions
        title="Temporary Exhibitions"
        description="Explore uma coleção de pinturas do Metropolitan Museum."
        id="temporary-exhibitions"
      />

      <About 
        title="About this project"
        id="about"
      />
    </>
  );
}
