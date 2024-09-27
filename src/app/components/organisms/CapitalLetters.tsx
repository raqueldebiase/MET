'use client';

import React, { useState, useRef } from 'react';
import { useArtworkById } from '@/app/hooks/useArtworkById';
import ExpoCard from '@/app/components/molecules/ExpoCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Artwork } from '@/app/hooks/useArtworkById';
import NextArrow from '../atoms/NextArrow';
import PrevArrow from '../atoms/PrevArrow';
import LoadingSpinner from '../atoms/LoadingSpinner';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { ButtonExpand } from '../atoms/ButtonExpand';

const CapitalLetters: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [472539, 811798, 469047, 479712, 467520, 468974, 468476, 469045, 32837, 463543, 466773, 469048, 467521, 469827, 479379, 468975, 469826, 467526, 466734, 461353, 476336, 466703, 466241, 467419, 466200, 466632, 469985, 476564, 461298, 910582, 466086, 463602, 468977, 32947, 467681, 472538, 479379, 472539, 474236];

  const { data, loading, error } = useArtworkById(artworkIds);
  const sliderRef = useRef<Slider | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      <h2 className="text-4xl p-8 font-bold mb-4">Artwork Gallery</h2>
      {loading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      {!loading && !error && data.length > 0 && (
        <>
          <div className="slider-container overflow-hidden relative mx-auto">
          <Slider ref={sliderRef} {...settings}>
              {data.map((art) => (
                <div key={art.id} className="relative">
                  {/* Componente do Card */}
                  <ExpoCard
                    artwork={art}
                    onClick={() => handleCardClick(art)}
                  />
                  {/* Botão Expandir dentro do Card */}
                  <div className="absolute bottom-24 right-10">
                  <ButtonExpand
                    onClick={() => handleCardClick(art)}  
                  />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-end space-x-0 px-8">
            <PrevArrow onClick={goToPrev} /> 
            <NextArrow onClick={goToNext} />
          </div>

          <div ref={detailsRef} className="mt-8 py-24 ">
            {selectedArtwork && (
              <section className="p-8">
                <div className="flex flex-col md:flex-row justify-center items-end space-y-6 md:space-y-0 md:space-x-8 ">
                  <div className="w-full md:w-2/3 flex justify-center">
                    <InnerImageZoom
                      src={selectedArtwork.imageUrl}
                      zoomType="click"
                      zoomScale={2}
                      zoomSrc={selectedArtwork.imageUrl}
                      fadeDuration={150}
                    />
                  </div>
                  <div className="w-full md:w-1/3 space-y-2">
                    <h3 className="text-2xl font-semibold">{selectedArtwork.title}</h3>
                    <p className="text-lg text-gray-600">{selectedArtwork.artistDisplayName || 'Unknown Artist'}</p>
                    <p className="text-sm text-gray-500">Date: {selectedArtwork.objectDate || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Location: {selectedArtwork.city || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Medium: {selectedArtwork.medium || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Dimensions: {selectedArtwork.dimensions || 'N/A'}</p>
                    <p className="text-sm text-gray-500">Collection: {selectedArtwork.repository || 'N/A'}</p>
                    <p className="text-sm text-gray-500">{selectedArtwork.isPublicDomain ? 'Public Domain' : 'Not Public Domain'}</p>
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

export default CapitalLetters;
