'use client';

import { useState, useEffect } from 'react';
import { Hero } from './components/organisms/Hero';
import { SubHero } from './components/organisms/SubHero';
import { Gallery } from './components/organisms/Gallery';
import { TemporaryExhibitions } from './components/organisms/TemporaryExhibitions';
import { About } from './components/organisms/About';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState('100vh'); // Default height

  // Track scroll position and update section height
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const zoomLevel = Math.max(75, 120 - window.scrollY * 0.5);
      const img = new Image();
      img.src = '/img/bg/hero.png'; // Ajuste o caminho da imagem

      img.onload = () => {
        const imgHeight = img.height * (zoomLevel / 100);
        setSectionHeight(`${imgHeight}px`);
      };
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <section
        className="relative text-gray-100 bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/bg/hero.png)',
          backgroundSize: 'cover',
          height: sectionHeight,
          transition: 'height 0.5s ease-out',
        }}
      >
        <div className="flex flex-col p-8">
          <Hero onButtonClick={function (): void {
            throw new Error('Function not implemented.');
          } } imageUrl={''} />
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
