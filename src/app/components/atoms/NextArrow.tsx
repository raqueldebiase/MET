import React from 'react';
import { ButtonNext } from './ButtonNext';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} custom-next-arrow `} onClick={onClick}
    >
      <ButtonNext text="Next" onClick={onClick}/>
    </div>
  );
};

export default NextArrow;
