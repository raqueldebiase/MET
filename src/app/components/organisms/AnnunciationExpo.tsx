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

const AnnunciationExpo: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256, 471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404];
  
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
    <div className="mx-auto mb-24">
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
                <div className='flex'>
                  <div className="tec-card w-1/2">
                    <h3 className="text-2xl my-4">{selectedArtwork.title}</h3>
                    <p className="text-lg mb-1"><strong>Artist:</strong> {selectedArtwork.artistDisplayName || 'Unknown'}</p>
                    <p className="text-md mb-1"><strong>Year:</strong> {selectedArtwork.objectDate || 'N/A'}</p>
                    <p className="text-md mb-1"><strong>Medium:</strong> {selectedArtwork.medium || 'N/A'}</p>
                    <p className="text-md mb-1"><strong>Dimensions:</strong> {selectedArtwork.dimensions || 'N/A'}</p>
                    <p className="text-lg mb-2">{selectedArtwork.repository || 'N/A'}</p>
                  </div>
                  <div className="more-info w-1/2">
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
                  </div>
                  
                </div>
                

              </section>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AnnunciationExpo;
