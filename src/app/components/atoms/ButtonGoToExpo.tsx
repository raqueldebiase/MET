// components/atoms/ButtonGoToExpo.tsx

import React from 'react';
import Link from 'next/link';

interface ButtonGoToExpoProps {
  href: string;
}

export const ButtonGoToExpo: React.FC<ButtonGoToExpoProps> = ({ href }) => {
  return (
    <Link href={href}  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-600">
    
        See Dutch Artworks
     
    </Link>
  );
};
