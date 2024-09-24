
'use client';

import React, { useEffect, useState } from 'react';
import { NavHeader } from '../molecules/NavHeader';
import { Menu } from '../molecules/Menu';

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Ajuste o valor conforme necessário
  };

  useEffect(() => {
    handleResize(); // Verifica o tamanho inicial
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-8 bg-transparent">
      <div className="">
        {isMobile ? <Menu /> : <NavHeader />}
      </div>
    </header>
  );
};
