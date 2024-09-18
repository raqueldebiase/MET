import React from 'react';
import { NavHeader } from '../molecules/NavHeader';
import { Menu } from '../molecules/Menu';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-8 bg-transparent ">
      <div className="flex items-center justify-between">
        <NavHeader />
        <Menu />
      </div>
    </header>
  );
};
