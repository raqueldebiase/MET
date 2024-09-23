// ArtGallery.tsx
'use client';

import React from 'react';
import { ArtCard } from '../molecules/ArtCard';
import { useArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';
import LoadingSpinner from '../atoms/LoadingSpinner'; // Ajuste o caminho conforme necessário

export const ArtGallery: React.FC = () => {
  const { artworks, loading } = useArtworkByHighlight();

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {loading ? (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center h-full">
          <LoadingSpinner />
        </div>
      ) : (
        artworks.map((art) => (
          <ArtCard
            key={art.id}
            artwork={art} // Passa o objeto completo da obra
          />
        ))
      )}
    </div>
  );
};
