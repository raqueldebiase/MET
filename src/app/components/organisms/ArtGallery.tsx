// ArtGallery.tsx
import React from 'react';
import { ArtCard } from '../molecules/ArtCard';
import { useArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';


export const ArtGallery: React.FC = ({}) => {
  const { artworks, loading } = useArtworkByHighlight();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {loading ? (
        <p>Loading...</p>
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
