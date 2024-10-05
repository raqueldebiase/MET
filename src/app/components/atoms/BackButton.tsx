// BackButton.tsx
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 text-md inline-flex items-center gap-8 border text-gray-400 rounded-full hover:bg-primary hover:border-gray-100 hover:text-gray-100 duration-300"
    >
      Scroll back <span><FaArrowUp /></span>
    </button>
  );
};

export default BackButton;
