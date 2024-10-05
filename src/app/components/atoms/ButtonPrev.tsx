// src/components/atoms/ButtonPrev.tsx
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

interface ButtonPrevProps {
  onClick?: () => void;
}

export const ButtonPrev: React.FC<ButtonPrevProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="p-4 bg-gray-200 text-primary rounded-full bg-opacity-70 text-lg">
      <IoIosArrowBack />
    </button>
  );
};
