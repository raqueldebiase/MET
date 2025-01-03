'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useArtworkById } from '@/app/hooks/useArtworkById';
import ExpoCard from '@/app/components/molecules/ExpoCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Artwork } from '@/app/hooks/useArtworkById';
import NextArrow from '../atoms/NextArrow';
import PrevArrow from '../atoms/PrevArrow';
import LoadingSpinner from '../atoms/LoadingSpinner';
import ArtworkDetails from '../molecules/ArtworkDetails';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


const CapitalLetters: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkIds = [472539, 811798, 469047, 479712, 467520, 468974, 468476, 469045, 32837, 463543, 466773, 469048, 467521, 469827, 479379, 468975, 469826, 467526, 466734, 461353, 476336, 466703, 466241, 467419, 466200, 466632, 469985, 476564, 461298, 910582, 466086, 463602, 468977, 32947, 467681, 472538, 479379, 472539, 474236];

  const { data, loading, error } = useArtworkById(artworkIds);
  const sliderRef = useRef<Slider | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null); 

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
    responsive: [
      {
        breakpoint: 767, // Para telas com largura menor que 767px (mobile)
        settings: {
          slidesToShow: 1, // Exibe apenas 1 slide por vez
          swipe: true, // Habilita swipe para mobile
        },
      },
    ],
  };

  const handleCardClick = (art: Artwork) => {
    setSelectedArtwork(art);
  };

  // Monitora quando o selectedArtwork é atualizado e rola até a seção de detalhes
  useEffect(() => {
    if (selectedArtwork && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedArtwork]);

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
      <div className="mx-auto md:pt-24" style={{ scrollBehavior: 'smooth' }}> {/* Adicionando a propriedade de scroll suave */}
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
  
            {selectedArtwork && (
              <div ref={detailsRef}> {/* Adiciona a referência aqui */}
                <ArtworkDetails artwork={selectedArtwork} onBack={handleBackToSlider} />
              </div>
            )}
  
          </>
        )}
      </div>
    );
  };

export default CapitalLetters;
