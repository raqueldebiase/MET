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
import LoadingSpinner from '../atoms/LoadingSpinner';

const AnnunciationExpo: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256, 471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404];

  const { data, loading, error } = useArtworkById(artworkIds);

  const sliderRef = useRef<Slider | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
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

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="mx-auto">
      <h2 className="text-4xl p-8 font-bold mb-8">Artwork Gallery</h2>
      {loading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      {!loading && !error && data.length > 0 && (
        <>
          <Slider ref={sliderRef} {...settings}>
            {data.map((art) => (
              <ExpoCard
                key={art.id}
                artwork={art}
                onClick={() => handleCardClick(art)}
              />
            ))}
          </Slider>

          <div className="flex justify-end space-x-0 px-8">
            <PrevArrow onClick={goToPrev} />
            <NextArrow onClick={goToNext} />
          </div>

          <div ref={detailsRef} className="mt-8 py-8 bg-gray-30">
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
