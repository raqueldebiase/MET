// Gallery.tsx
import React from 'react';
import { ArtGallery } from './ArtGallery';

interface GalleryProps {
  title: string;
  artist: string;
  dimensions: string;
  medium: string;
  date?: string;
  city: string;
  onCardClick: (id: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  title,
  artist,
  dimensions,
  medium,
  date,
  city,
  onCardClick,
}) => {
  return (
    <section className="gallery-section py-24" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-500 mt-4">{artist}</p>
          <p className="text-lg text-gray-500 mt-4">{dimensions}</p>
          <p className="text-lg text-gray-500 mt-4">{medium}</p>
          {date && <p className="text-lg text-gray-500 mt-4">{date}</p>}
          <p className="text-lg text-gray-500 mt-4">{city}</p>
        </div>
        <ArtGallery onCardClick={onCardClick} />
      </div>
    </section>
  );
};
