'use client';

import React from 'react';
import Image from 'next/image'; 
import { useArtworkById } from '@/app/hooks/useArtworkById';

const AnnunciationExpo: React.FC = () => {
  // IDs das obras que você deseja buscar
  const artworkIds = [459055, 437490, 347404, 436096, 435899, 441233, 436791, 466182, 468106, 466256, 471086, 459062, 436476, 364797, 336173, 364735, 466685, 464404    ]; // Substitua com IDs reais

  // Utilize o hook para buscar as obras pelos IDs
  const { data, loading, error } = useArtworkById(artworkIds);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Artwork Gallery</h1>
      {loading && <p>Carregando obras...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length === 0 && <p>Nenhuma obra encontrada.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading && !error && data.map((art) => (
          <div key={art.id} className="border rounded-lg shadow-lg p-4">
            <Image 
              src={art.imageUrl} 
              alt={art.title} 
              width={600} 
              height={400} 
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{art.title}</h2>
            <p className="text-sm text-gray-500">Artist: {art.artistDisplayName || 'Unknown'}</p>
            <p className="text-sm text-gray-500">Year: {art.accessionYear || 'N/A'}</p>
            <p className="text-sm text-gray-500">Medium: {art.medium || 'N/A'}</p>
            <p className="text-sm text-gray-500">Dimensions: {art.dimensions || 'N/A'}</p>
            <p className="text-sm text-gray-500">Country: {art.country || 'N/A'}</p>
            <p className="text-sm text-gray-500">Repository: {art.repository || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnunciationExpo;
