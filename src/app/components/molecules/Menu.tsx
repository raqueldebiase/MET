// components/Menu.tsx

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScrollToSection = (section: string) => {
    if (pathname !== '/') {
      window.location.href = '/#' + section; 
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-gray p-4 cursor-pointer" onClick={toggleMenu}>
      <div className="flex flex-col items-end justify-end space-y-1">
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-12 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
      </div>
      {isOpen && (
        <nav className="absolute right-0 text-white text-end px-12 py-8">
          <ul>
            {pathname !== '/' && (
              <li className="relative group mb-2">
                <a href="/" onClick={() => handleScrollToSection('')}>HOME</a>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
              </li>
            )}
            <li className="relative group mb-2">
              <a href="#gallery" onClick={() => handleScrollToSection('gallery')}>GALLERY</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
            </li>
            <li className="relative group mb-2">
              <a href="#temporary-exhibitions" onClick={() => handleScrollToSection('temporary-exhibitions')}>EXPLORE</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
            </li>
            <li className="relative group mb-2">
              <a href="#about" onClick={() => handleScrollToSection('about')}>ABOUT THIS PROJECT</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
