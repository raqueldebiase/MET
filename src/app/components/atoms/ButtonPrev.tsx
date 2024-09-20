// src/components/atoms/ButtonPrev.tsx
import React from 'react';

interface ButtonPrevProps {
  text: string;
  onClick?: () => void;
}

export const ButtonPrev: React.FC<ButtonPrevProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 w-32 border text-primary rounded-full">
      {text}
    </button>
  );
};
