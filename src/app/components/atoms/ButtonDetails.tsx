// ButtonDetails.tsx
import React from 'react';

interface ButtonDetailsProps {
  onClick: () => void;
}

export const ButtonDetails: React.FC<ButtonDetailsProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 border text-primary rounded-full">
      More details
    </button>
  );
};
