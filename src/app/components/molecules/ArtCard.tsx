// ArtCard.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonDetails } from '../atoms/ButtonDetails';
import { ButtonExpand } from '../atoms/ButtonExpand';
import { ArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';


interface ArtCardProps {
  artwork: ArtworkByHighlight; // Recebe o objeto da obra de arte
}

export const ArtCard: React.FC<ArtCardProps> = ({ artwork}) => {
  const { imageUrl, title, objectDate, artistDisplayName, dimensions, medium, city } = artwork;
  const fallbackImageUrl = '/fallback-image.jpg';

  const [showDetails, setShowDetails] = useState(false);
  const handleDetailsToggle = () => {
    setShowDetails((prev) => !prev)
  };

  return (
    <div className="art-card overflow-hidden">
      <Image
        src={imageUrl || fallbackImageUrl}
        alt={title}
        layout="responsive"
        width={500}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="py-4">
        <h3 className="text-xl">{title}</h3>
        {artistDisplayName && <p className="text-md text-gray-400">{artistDisplayName}</p>}

        {showDetails && (
        <div className='pt-4 more-details transition-all duration-500 ease-in-out' >
          {objectDate && <p className="text-sm text-gray-600">Date: {objectDate}</p>}
          {dimensions && <p className="text-sm text-gray-600">Dimensions: {dimensions}</p>}
          {medium && <p className="text-sm text-gray-600">Medium: {medium}</p>}
          {city && <p className="text-sm text-gray-600">Local: {city}</p>}
        </div>
        )}
        
        <div className="my-4 flex">
          <ButtonDetails onClick={handleDetailsToggle} label={showDetails ? 'Less Details' : 'More Details'} />
          <ButtonExpand imageUrl={imageUrl || fallbackImageUrl} />
        </div>
      </div>
    </div>
  );
};
