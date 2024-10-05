// src/app/components/molecules/ExpoCard.tsx

import React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/hooks/useArtworkById';

interface ExpoCardProps {
  artwork: Artwork;
  onClick: () => void; 
}

const ExpoCard: React.FC<ExpoCardProps> = ({ artwork, onClick }) => {
  return (
    <div 
      className="p-8 cursor-pointer" 
      onClick={onClick} 
    >
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        width={600}
        height={400}
        layout="intrinsic"
        quality={100}
        className="rounded-sm mb-8 transition-transform duration-500 ease-in-out hover:scale-105"
      />
      
      <h3 className="text-xl mb-2">{artwork.title}</h3>
      <p className="text-md mb-6">{artwork.artistDisplayName || 'Unknown'}</p>
      <nav>
                    <ul className="text-md text-gray-400 ">
                      <li><span className="font-semibold">Date:</span> {artwork.objectDate || 'N/A'}</li>
                      <li><span className="font-semibold">City:</span> {artwork.city || 'N/A'}</li>
                      <li><span className="font-semibold">Country:</span> {artwork.country || 'N/A'}</li>
                      <li><span className="font-semibold">Medium:</span> {artwork.medium || 'N/A'}</li>
                      <li><span className="font-semibold">Dimensions:</span> {artwork.dimensions || 'N/A'}</li>
                      <li><span className="font-semibold">Collection:</span> {artwork.repository || 'N/A'}</li>
                      <li><span className="font-semibold">Public Domain:</span> {artwork.isPublicDomain ? 'Yes' : 'No'}</li>
                    </ul>
                  </nav>
    </div>
  );
};

export default ExpoCard;
