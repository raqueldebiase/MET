'use client';

import React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/hooks/useArtworkById'; // Importe a interface

interface ExpoCardProps {
  artwork: Artwork;
}

const ExpoCard: React.FC<ExpoCardProps> = ({ artwork }) => {
  return (
    <div key={artwork.id} className="border rounded-lg shadow-lg p-4">
      <Image 
        src={artwork.imageUrl} 
        alt={artwork.title} 
        width={600} 
        height={400} 
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{artwork.title}</h2>
      <p className="text-sm text-gray-500">Artist: {artwork.artistDisplayName || 'Unknown'}</p>
      <p className="text-sm text-gray-500">Year: {artwork.objectDate || 'N/A'}</p>
      <p className="text-sm text-gray-500">Medium: {artwork.medium || 'N/A'}</p>
      <p className="text-sm text-gray-500">Dimensions: {artwork.dimensions || 'N/A'}</p>
      <p className="text-sm text-gray-500">Country: {artwork.country || 'N/A'}</p>
      <p className="text-sm text-gray-500">Repository: {artwork.repository || 'N/A'}</p>
    </div>
  );
};

export default ExpoCard;
