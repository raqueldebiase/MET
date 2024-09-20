// src/components/atoms/ButtonPrev.tsx
import React from 'react';

interface ButtonNextProps {
  text: string;
  onClick?: () => void;
}

export const ButtonNext: React.FC<ButtonNextProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 border w-32 text-primary rounded-full">
      {text}
    </button>
  );
};
