'use client';

import React from 'react';
import { useArtworkById } from '@/app/hooks/useArtworkById';
import ExpoCard from '@/app/components/molecules/ExpoCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const AnnunciationExpo: React.FC = () => {
  const artworkIds = [459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256, 471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404];

  const { data, loading, error } = useArtworkById(artworkIds);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className=" mx-auto p-8 mb-24">
      <h2 className="text-4xl font-bold mb-8">Artwork Gallery</h2>
      {loading && <p>Carregando obras...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      {!loading && !error && data.length > 0 && (
        <Slider {...settings}>
          {data.map((art) => (
            <ExpoCard key={art.id} artwork={art} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AnnunciationExpo;
