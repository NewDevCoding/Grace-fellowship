'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 mr-[30px]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-[#EBF0D2] py-4 px-4 z-50">
          <div className="flex flex-col space-y-4">
            <a href="/about" className="hover:text-gray-700">About Us</a>
            <a href="/connect" className="hover:text-gray-700">Connect</a>
            <a href="/sermons" className="hover:text-gray-700">Sermons</a>
            <a href="/give" className="hover:text-gray-700">Give</a>
          </div>
        </div>
      )}
    </div>
  );
} 