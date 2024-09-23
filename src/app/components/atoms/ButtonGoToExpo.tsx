// components/atoms/ButtonGoToExpo.tsx

import React from 'react';
import Link from 'next/link';
import { BsArrowRightShort } from "react-icons/bs";

interface ButtonGoToExpoProps {
  href: string;
}

export const ButtonGoToExpo: React.FC<ButtonGoToExpoProps> = ({ href }) => {
  return (
    <Link href={href}  className="mt-4 bg-white text-gray-900 px-6 py-3 rounded-full transition duration-300 hover:bg-primary hover:text-white flex items-center justify-end w-36">
        <p>Go to expo </p>
        <BsArrowRightShort />
    </Link>
  );
};
