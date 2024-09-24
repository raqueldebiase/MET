
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export const NavHeader: React.FC = () => {
  const pathname = usePathname();

  const handleScrollToSection = (section: string) => {
    if (pathname !== '/') {
      window.location.href = '/#' + section; 
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="flex gap-6 text-white text-lg tracking-wider">
        {pathname !== '/' && (
          <li className="relative group">
            <a href="/" onClick={() => handleScrollToSection('')}>HOME</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
          </li>
        )}
        <li className="relative group">
          <a href="#gallery" onClick={() => handleScrollToSection('gallery')}>GALLERY</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#temporary-exhibitions" onClick={() => handleScrollToSection('temporary-exhibitions')}>EXPLORE</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#about" onClick={() => handleScrollToSection('about')}>ABOUT THIS PROJECT</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
};
