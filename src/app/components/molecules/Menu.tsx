// components/Menu.tsx

import React from 'react';

export const Menu: React.FC = () => {
  return (
    <header className="text-gray p-4">
      <div className="flex flex-col items-end justify-end space-y-1">
        <span className="w-8 h-1 bg-white"></span>
        <span className="w-12 h-1 bg-white"></span>
        <span className="w-6 h-1 bg-white"></span>
      </div>
    </header>
  );
};
