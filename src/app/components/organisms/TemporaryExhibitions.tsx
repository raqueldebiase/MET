// components/organisms/TemporaryExhibitions.tsx

import React from 'react';
import { ButtonGoToExpo } from '../atoms/ButtonGoToExpo';
import { Exhibition01 } from '../molecules/Exhibition01';
import { Exhibition02 } from '../molecules/Exhibition02';

interface TemporaryProps {
  title: string;
  description: string;
}

export const TemporaryExhibitions: React.FC<TemporaryProps> = ({ title, description }) => {
  return (
    <section className="temporary-exhibitions py-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-500 mt-4 mb-16">{description}</p>
      </div>
      <Exhibition01 />
      <Exhibition02 />
    </section>
  );
};
