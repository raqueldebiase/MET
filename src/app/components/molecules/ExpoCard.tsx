// src/app/components/molecules/ExpoCard.tsx

import React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/hooks/useArtworkById';

interface ExpoCardProps {
  artwork: Artwork;
  onClick: () => void; // Função chamada quando o cartão é clicado
}

const ExpoCard: React.FC<ExpoCardProps> = ({ artwork, onClick }) => {
  return (
    <div 
      className="p-8 cursor-pointer" 
      onClick={onClick} // Chama a função onClick ao clicar
    >
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        width={600}
        height={400}
        layout="intrinsic"
        quality={100}
        className="rounded-sm mb-4"
      />
      
      <h3 className="text-xl mb-2">{artwork.title}</h3>
      <p className="text-md mb-6">{artwork.artistDisplayName || 'Unknown'}</p>
        <div>
          <p className="text-md text-gray-500">{artwork.objectDate || 'N/A'}</p>
          <p className="text-md text-gray-500">Local: {artwork.city || 'N/A'}</p> 
          <p className="text-md text-gray-500">Medium: {artwork.medium || 'N/A'}</p>
          {/* <p className="text-md text-gray-500">Dimensions: {artwork.dimensions || 'N/A'}</p> */}
          {/* <p className="text-md text-gray-500">{artwork.repository || 'N/A'}</p> */}
          <p className="text-md text-gray-500">{artwork.isPublicDomain || 'N/A'}</p>
                          
        </div>
    </div>
  );
};

export default ExpoCard;
