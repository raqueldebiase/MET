'use client';

import React from 'react';
import Link from 'next/link';

export const SubHero: React.FC = () => {

  return (
    <section className="h-full pb-2 flex flex-col justify-end items-end mt-96">
      <div className="backdrop-blur-md bg-white/30 rounded-lg p-8 w-2/4 mb-4">
        <h2 className="text-2xl mb-8">Título da Sessão</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
          interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
          quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
          interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
          quam blandit metus, sed lobortis diam orci nec neque.
        </p>
      </div>

      <div className="text-white text-end px-0 pt-2 mt-4 w-1/4">
        <h3>Title: Boating</h3>
        <h4>Edouard Manet</h4>
        <p>1874, Paris</p>
        <p>Medium: Oil on canvas,</p>
        <p>Dimensions: 38 1/4 x 51 1/4 in. (97.2 x 130.2 cm)</p>
        <p>The Metropolitan Museum of Art</p>
        <Link href='https://www.metmuseum.org/art/collection/search/436947' className="text-sm text-blue-200 hover:underline" target="_blank" rel="noopener noreferrer">
                View on MET website
        </Link>
      </div>
    </section>
  );
};
