import React from 'react';
import Image from 'next/image';
import { ButtonDetails } from '../atoms/ButtonDetails';
import { ButtonExpand } from '../atoms/ButtonExpand';

interface ArtCardProps {
  imageUrl: string;
  title: string;
  date?: string; // Data é opcional
  onButtonClick: () => void;
}

export const ArtCard: React.FC<ArtCardProps> = ({ imageUrl, title, date, onButtonClick }) => {
  // Caminho para a imagem de fallback
  const fallbackImageUrl = '/fallback-image.jpg';

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
        <h3 className="text-xl font-bold">{title}</h3>
        {date && <p className="text-sm text-gray-600">{date}</p>}
        <div className="my-4">
        <ButtonDetails onClick={onButtonClick} />
        <ButtonExpand imageUrl={imageUrl || fallbackImageUrl} />
        </div>

      </div>
    </div>
  );
};
