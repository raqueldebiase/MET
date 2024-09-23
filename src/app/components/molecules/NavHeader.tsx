import React from 'react';

export const NavHeader: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-white text-lg tracking-wider">
        <li className="relative group">
          <a href="/">HOME</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#gallery">GALLERY</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#temporary-exhibitions">EXPLORE</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#about">ABOUT THIS PROJECT</a>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
};
