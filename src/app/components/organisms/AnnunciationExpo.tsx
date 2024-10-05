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
import { FaArrowUp } from "react-icons/fa";

const AnnunciationExpo: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [
    459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256,
    471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404
  ];

  const { data, loading, error } = useArtworkById(artworkIds);
  const sliderRef = useRef<Slider | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null); 

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
    // Usando setTimeout para atrasar a rolagem e garantir que o estado foi atualizado
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0); // Atraso de 0 ms
  };

  const handleBackToSlider = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('sliderContainerRef is null');
    }
    setSelectedArtwork(null);
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  // Função para extrair o ano de objectDate (exemplo: de '1500-1550' pegamos '1500')
  const extractYear = (dateStr: string) => {
    const yearMatch = dateStr.match(/\d{4}/); // Encontra o primeiro grupo de 4 dígitos
    return yearMatch ? parseInt(yearMatch[0], 10) : null;
  };

  // Ordena as obras por data, do mais antigo ao mais recente
  const sortedData = data?.sort((a, b) => {
    const yearA = extractYear(a.objectDate || '') || 0; // Se não houver data, assume 0 (muito antigo)
    const yearB = extractYear(b.objectDate || '') || 0;
    return yearA - yearB;
  });

  return (
    <div className="mx-auto pt-24" style={{ scrollBehavior: 'smooth' }}> {/* Adicionando a propriedade de scroll suave */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!loading && !error && sortedData.length === 0 && <p className="text-center">Nenhuma obra encontrada.</p>}

      {!loading && !error && sortedData.length > 0 && (
        <>
          <div className="slider-container relative overflow-hidden relative mx-auto mb-2" ref={sliderContainerRef}>
            <Slider ref={sliderRef} {...settings}>
              {sortedData.map((art) => (
                <div key={art.id} className="relative">
                  {/* Componente do Card */}
                  <ExpoCard
                    artwork={art}
                    onClick={() => handleCardClick(art)}
                  />
                  {/* Botão Expandir dentro do Card */}
                  <div className="absolute bottom-36 right-10">
                    {/* Aqui você pode adicionar um botão para expandir, se necessário */}
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute top-20 left-0 w-full flex justify-between p-4">
              <PrevArrow onClick={goToPrev} />
              <NextArrow onClick={goToNext} />
          </div>
          </div>

          {/* Detalhes da Obra Selecionada */}
          {selectedArtwork && (
            <div ref={detailsRef} className="mt-8 h-screen flex justify-center items-center bg-primary">
              <section className="p-8 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                {/* Imagem centralizada */}
                <div className="w-full md:w-2/3 flex justify-center">
                  <InnerImageZoom
                    src={selectedArtwork.imageUrl}
                    zoomType="click"
                    zoomScale={2}
                    zoomSrc={selectedArtwork.imageUrl}
                    fadeDuration={150}
                    className="rounded-sm"
                  />
                </div>
                
                {/* Detalhes da obra */}
                <div className="w-full md:w-1/3 space-y-4 text-end md:text-left">
                  <h3 className="text-3xl text-white font-bold">{selectedArtwork.title}</h3>
                  
                  <p className="text-xl text-gray-300">
                    <span className="font-semibold">Artist:</span> {selectedArtwork.artistDisplayName || 'Unknown Artist'}
                  </p>

                  <nav>
                    <ul className="text-md text-gray-400 space-y-1">
                      <li><span className="font-semibold">Date:</span> {selectedArtwork.objectDate || 'N/A'}</li>
                      <li><span className="font-semibold">Location:</span> {selectedArtwork.city || 'N/A'}</li>
                      <li><span className="font-semibold">Medium:</span> {selectedArtwork.medium || 'N/A'}</li>
                      <li><span className="font-semibold">Dimensions:</span> {selectedArtwork.dimensions || 'N/A'}</li>
                      <li><span className="font-semibold">Collection:</span> {selectedArtwork.repository || 'N/A'}</li>
                      <li><span className="font-semibold">Public Domain:</span> {selectedArtwork.isPublicDomain ? 'Yes' : 'No'}</li>
                    </ul>
                  </nav>
                  <div className='pt-12'>
                    <button 
                      onClick={handleBackToSlider} 
                      className="px-4 py-2 text-md inline-flex items-center gap-8 border text-gray-400 rounded-full hover:bg-primary hover:border-gray-100 hover:text-gray-100 duration-300 "
                    >
                      Scroll back <span><FaArrowUp /></span>
                    </button>
                  </div>

                </div>

              </section>
            </div>
          )}

        </>
      )}
    </div>
  );
};

export default AnnunciationExpo;
