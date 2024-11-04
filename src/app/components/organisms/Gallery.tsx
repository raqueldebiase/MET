// Gallery.tsx
import React from 'react';
import { ArtGallery } from './ArtGallery';

interface GalleryProps {
  description: string;
  title: string;
  id: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  title,
  description,
  id
}) => {
  return (
    <section id={id} className="gallery-section py-8 md:py-24">
      <div className="container mx-auto px-4 text-center mb-8 mt-16 mb:mt-8">
        <h2 className=" mt-4 mb:mt-0 text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-500 mt-4 mb-16">{description}</p>
      </div>
      <div className="container mx-auto px-4">
        <ArtGallery />
      </div>
    </section>
  );
};
