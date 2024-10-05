import React from 'react';
import { ButtonPrev } from './ButtonPrev';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-prev-arrow`} onClick={onClick}>
      <ButtonPrev onClick={onClick}/>
      
    </div>
  );
};

export default PrevArrow;
