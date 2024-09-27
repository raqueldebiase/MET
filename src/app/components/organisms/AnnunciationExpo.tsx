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

const AnnunciationExpo: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [
    459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256,
    471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404
  ];

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

  // Função para exibir os detalhes da obra
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
    <div className="mx-auto pt-24">
      
      {loading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && data.length === 0 && <p className="text-center">Nenhuma obra encontrada.</p>}

      {!loading && !error && data.length > 0 && (
        <>
          <div className="slider-container overflow-hidden relative mx-auto mb-8">
            <Slider ref={sliderRef} {...settings}>
              {data.map((art) => (
                <div key={art.id} className="relative">
                  {/* Componente do Card */}
                  <ExpoCard
                    artwork={art}
                    onClick={() => handleCardClick(art)}
                  />
                  {/* Botão Expandir dentro do Card */}
                  <div className="absolute bottom-36 right-10">
                  <ButtonExpand
                    onClick={() => handleCardClick(art)}  
                  />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex justify-end space-x-4 mb-4">
            <PrevArrow onClick={goToPrev} />
            <NextArrow onClick={goToNext} />
          </div>

          {/* Detalhes da Obra Selecionada */}
          <div ref={detailsRef} className="mt-8 h-screen flex items-center bg-primary">
            {selectedArtwork && (
              <section className="p-8">
                <div className="flex flex-col md:flex-row justify-center items-end space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-full md:w-2/3 flex justify-center">
                    <InnerImageZoom
                      src={selectedArtwork.imageUrl}
                      zoomType="click"
                      zoomScale={2}
                      zoomSrc={selectedArtwork.imageUrl}
                      fadeDuration={150}
                    />
                  </div>
                  <div className="w-full md:w-2/3 space-y-2">
                    <h3 className="text-2xl text-white font-semibold">{selectedArtwork.title}</h3>
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

export default AnnunciationExpo;
