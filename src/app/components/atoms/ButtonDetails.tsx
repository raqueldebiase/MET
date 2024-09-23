// ButtonDetails.tsx
import React from 'react';

interface ButtonDetailsProps {
  onClick: () => void;
  label?: string; // Adiciona uma prop label para o texto do botão
}

export const ButtonDetails: React.FC<ButtonDetailsProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {label || 'More Details'} {/* Exibe o texto passado ou o padrão "More Details" */}
    </button>
  );
};
