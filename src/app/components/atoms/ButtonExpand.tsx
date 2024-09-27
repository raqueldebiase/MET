import React from 'react';
import { AiOutlineExpand } from 'react-icons/ai';

interface ButtonExpandProps {
  imageUrl?: string;     // imageUrl agora é opcional
  onClick?: () => void;  // onClick agora é opcional
}

export const ButtonExpand: React.FC<ButtonExpandProps> = ({ imageUrl, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      // Se a função onClick for passada, executa ela
      onClick();
    } else if (imageUrl) {
      // Se o imageUrl for passado e onClick não estiver presente, abre a imagem em uma nova aba
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <button onClick={handleClick} className="px-4 py-2 border rounded-full text-lg text-gray-400">
      <AiOutlineExpand />
    </button>
  );
};
