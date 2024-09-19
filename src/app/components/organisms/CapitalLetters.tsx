// src/app/pages/AnnunciationExpo.tsx

'use client';

import React, { useState, useRef } from 'react';
import { useArtworkById } from '@/app/hooks/useArtworkById';
import ExpoCard from '@/app/components/molecules/ExpoCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Artwork } from '@/app/hooks/useArtworkById';
import Image from 'next/image';

const CapitalLetters: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [472539, 811798, 469047, 479712, 467520, 468974, 468476, 469045, 32837, 463543, 466773, 469048, 467521, 469827, 479379, 468975, 469826, 467526,466734, 461353, 476336, 466703, 466241,467419, 466200, 466632, 469985, 476564, 461298, 910582, 466086, 463602, 468977, 32947, 467681, 472538, 479379, 472539, 474236,         ];
  
  const { data, loading, error } = useArtworkById(artworkIds);

  const detailsRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleCardClick = (art: Artwork) => {
    setSelectedArtwork(art);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mx-auto">
      <h2 className="text-4xl p-8 font-bold mb-8">Artwork Gallery</h2>
      {loading && <p>Carregando obras...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      {!loading && !error && data.length > 0 && (
        <>
          <Slider {...settings}>
            {data.map((art) => (
              <ExpoCard 
                key={art.id} 
                artwork={art} 
                onClick={() => handleCardClick(art)} // Passa a obra para o estado e rola até a div
              />
            ))}
          </Slider>
          <div ref={detailsRef} className="mt-48 bg-gray-50 ">
            {selectedArtwork && (
              <section className='p-8'>
                
                    <div className="mt-4">
                      <Image
                        src={selectedArtwork.imageUrl}
                        alt={selectedArtwork.title}
                        width={600}
                        height={400}
                        layout="intrinsic"
                        quality={100}
                      />
                    </div>
              </section>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CapitalLetters;
