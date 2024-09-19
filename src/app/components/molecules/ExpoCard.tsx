'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/hooks/useArtworkById'; // Importe a interface

interface ExpoCardProps {
  artwork: Artwork;
}

const ExpoCard: React.FC<ExpoCardProps> = ({ artwork }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Função para carregar a imagem e obter suas dimensões
    const loadImage = () => {
      const img = new window.Image();
      img.src = artwork.imageUrl;
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
      };
    };

    loadImage();
  }, [artwork.imageUrl]);

  return (
    <div key={artwork.id} className="px-4">
      {imageSize.width > 0 && imageSize.height > 0 && (
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          width={imageSize.width}
          height={imageSize.height}
          className="rounded-sm mb-4"
          quality={100} // Alta qualidade para manter a nitidez
          layout="intrinsic" // Mantém a proporção original da imagem
        />
      )}
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
