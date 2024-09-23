import React from 'react';

interface ButtonExpandProps {
  imageUrl: string;
}

export const ButtonExpand: React.FC<ButtonExpandProps> = ({ imageUrl }) => {
  const handleClick = () => {
    // Abre a imagem em uma nova janela ou aba
    window.open(imageUrl, '_blank');
  };

  return (
    <button onClick={handleClick} className="px-4 py-2 border text-primary rounded-full text-">
      +
    </button>
  );
};
