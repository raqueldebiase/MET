// ArtCard.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonDetails } from '../atoms/ButtonDetails';
import { ButtonExpand } from '../atoms/ButtonExpand';
import { ArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';
import Link from 'next/link';

interface ArtCardProps {
  artwork: ArtworkByHighlight;
  showImage?: boolean;
}

export const ArtCard: React.FC<ArtCardProps> = ({ artwork, showImage = true }) => {
  const { imageUrl, title, objectDate, artistDisplayName, dimensions, medium, city, linkResource } = artwork;
  const fallbackImageUrl = '/fallback-image.jpg';

  const [showDetails, setShowDetails] = useState(false);
  const handleDetailsToggle = () => {
    setShowDetails((prev) => !prev);
  };

  console.log('linkResource:', linkResource); // Para depuração

  return (
    <div className="art-card overflow-hidden">
      {showImage && (
        <Image
        src={imageUrl || fallbackImageUrl}
        alt={title}
        layout="responsive"
        width={500}
        height={400}
        className="w-full h-48 object-cover"
      />
      )}
      <div className="py-4">
        <h3 className="text-lg mb:text-xl font-extralight md:w-2/3">{title}</h3>
        {artistDisplayName && <p className="text-md text-gray-400">{artistDisplayName}</p>}

        {showDetails && (
          <div className='pt-4 more-details transition-all duration-500 ease-in-out'>
            {objectDate && <p className="text-md text-gray-400">Date: {objectDate}</p>}
            {dimensions && <p className="text-md text-gray-400">Dimensions: {dimensions}</p>}
            {medium && <p className="text-md text-gray-400">Medium: {medium}</p>}
            {city && <p className="text-md text-gray-400">Local: {city}</p>}
            {linkResource && (
              <Link href={linkResource} className="text-sm text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                View on MET website
              </Link>
            )}
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
