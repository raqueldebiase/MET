// src/components/atoms/ButtonPrev.tsx
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface ButtonNextProps {
  
  onClick?: () => void;
}

export const ButtonNext: React.FC<ButtonNextProps> = ({  onClick }) => {
  return (
    <button onClick={onClick} className="p-4 text-primary bg-gray-200 rounded-full bg-opacity-70 text-lg">
      <IoIosArrowForward />
    </button>
  );
};
