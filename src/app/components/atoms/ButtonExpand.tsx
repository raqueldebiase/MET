import React from 'react';
import { AiOutlineExpand } from 'react-icons/ai';

interface ButtonExpandProps {
  imageUrl?: string;     // imageUrl agora é opcional
  onClick?: () => void;  // onClick agora é opcional
}

export const ButtonExpand: React.FC<ButtonExpandProps> = ({ imageUrl, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <button onClick={handleClick} className="px-4 py-2 border rounded-full text-lg text-gray-400 hover:bg-primary hover:border-primary hover:text-gray-100 duration-300">
      {/* Adiciona data-testid para facilitar o teste */}
      <AiOutlineExpand data-testid="expand-icon" />
    </button>
  );
};
