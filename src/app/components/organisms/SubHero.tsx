// SubHero.tsx

'use client';

import React from 'react';
import { ArtCard } from '../molecules/ArtCard';
import { ArtworkByHighlight } from '@/app/hooks/useArtworkByHighlight';

export const SubHero: React.FC = () => {
  const specificArtwork: ArtworkByHighlight = {
    id: 123, // Adicione um ID fictício ou relevante
    title: 'Boating',
    imageUrl: '', // Pode deixar vazio já que a imagem não será exibida
    objectDate: '1874',
    isPublicDomain: true, // Adicione se necessário
    artistDisplayName: 'Edouard Manet',
    dimensions: '38 1/4 x 51 1/4 in. (97.2 x 130.2 cm)',
    repository: 'The Metropolitan Museum of Art', // Adicione o repositório
    medium: 'Oil on canvas',
    geographyType: 'Paris', // Adicione um tipo de geografia
    city: 'Paris',
    linkResource: 'https://www.metmuseum.org/art/collection/search/436947',
  };

  return (
    <section className="h-full flex flex-wrap justify-end gap-72 items-center pb-2">
      <div className="">
        <div className="backdrop-blur-md bg-white/30 rounded-lg p-8 w-2/4">
          <h2 className="text-2xl mb-8">Título da Sessão</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
            interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
            quam blandit metus, sed lobortis diam orci nec neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
            interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
            quam blandit metus, sed lobortis diam orci nec neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
            interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
            quam blandit metus, sed lobortis diam orci nec neque.
          </p>
        </div>
      </div>
      <div className="bg-primary/80 rounded-lg px-4 py-2 w-80">
          <ArtCard artwork={specificArtwork} showImage={false} />
        </div>
    </section>
  );
};
