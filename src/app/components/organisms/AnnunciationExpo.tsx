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
import NextArrow from '../atoms/NextArrow';
import PrevArrow from '../atoms/PrevArrow';

const AnnunciationExpo: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256, 471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404];

  const { data, loading, error } = useArtworkById(artworkIds);

  // Criando a referência para o slider
  const sliderRef = useRef<Slider | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    arrows: false, // Desativando as setas internas do Slider
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  const handleCardClick = (art: Artwork) => {
    setSelectedArtwork(art);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Funções de navegação para as setas
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="mx-auto">
      <h2 className="text-4xl p-8 font-bold mb-8">Artwork Gallery</h2>
      {loading && <p>Carregando obras...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      {!loading && !error && data.length > 0 && (
        <>
          {/* Passando a referência para o slider */}
          <Slider ref={sliderRef} {...settings}>
            {data.map((art) => (
              <ExpoCard
                key={art.id}
                artwork={art}
                onClick={() => handleCardClick(art)} // Passa a obra para o estado e rola até a div
              />
            ))}
          </Slider>

          {/* Colocando as setas de navegação logo abaixo do slider */}
          <div className="flex justify-end space-x-0 px-8">
            <PrevArrow onClick={goToPrev} />
            <NextArrow onClick={goToNext} />
          </div>

          <div ref={detailsRef} className="mt-8 py-8 bg-gray-50">
            {selectedArtwork && (
              <section className="p-8">
                <div className="mt-4 flex justify-center">
                  <div className='w-1/2 flex justify-center'>
                    <Image
                      src={selectedArtwork.imageUrl}
                      alt={selectedArtwork.title}
                      width={600}
                      height={400}
                      layout="intrinsic"
                      quality={100}
                    />
                  </div>
                  <div className='w-1/2 grid content-end'>
                    <div className='mb-8'>
                      <h3 className="text-xl mb-2">{selectedArtwork.artistDisplayName}</h3>
                      <p className="text-md mb-6">{selectedArtwork.title || 'Unknown'}</p>
                    </div>
                    <div>
                      <p className="text-md text-gray-500">{selectedArtwork.objectDate || 'N/A'}</p>
                      <p className="text-md text-gray-500">{selectedArtwork.city || 'N/A'}</p> 
                      <p className="text-md text-gray-500">{selectedArtwork.medium || 'N/A'}</p>
                      <p className="text-md text-gray-500">Dimensions: {selectedArtwork.dimensions || 'N/A'}</p>
                      <p className="text-md text-gray-500">{selectedArtwork.repository || 'N/A'}</p>
                      <p className="text-md text-gray-500">{selectedArtwork.isPublicDomain || 'N/A'}</p>
                          
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
