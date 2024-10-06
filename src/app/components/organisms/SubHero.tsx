'use client';

import React from 'react';
import Link from 'next/link';

export const SubHero: React.FC = () => {

  return (
    <section className="pb-2 flex flex-col md:justify-end justify-center items-end md:mt-48 gap-8 md:gap-0">
      <div className="backdrop-blur-md bg-white/30 rounded-lg p-8 md:w-2/4 mb-4">
        <h2 className="text-2xl mb-8">Título da Sessão</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
          interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
          quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
          interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui
          quam blandit metus, sed lobortis diam orci nec neque.
        </p>
      </div>

      <div className="text-white text-end px-0 pt-2 md:mt-4 md:w-2/4">
        <h3 className="text-lg font-semibold">Title: Boating</h3>
        <h4 className="text-md font-normal">Edouard Manet</h4>
        <dl className="text-sm mb-2">
          <dd>1874, Paris</dd>
          <dd>Oil on canvas</dd>
          <dd>The Metropolitan Museum of Art</dd>
        </dl>
        <Link
          href="https://www.metmuseum.org/art/collection/search/436947"
          className="text-sm text-white bg-gray-800 rounded-sm p-2 bg-opacity-60 hover:bg-opacity-75 "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Boating artwork on the Metropolitan Museum of Art website"
        >
          View on MET website
        </Link>
      </div>

    </section>
  );
};
