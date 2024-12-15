import React, { useState } from 'react';
import { Gamepad2, Brain, Sparkles, Star } from 'lucide-react';

export function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header 
      className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-4">
            <div 
              className={`transform transition-transform duration-300 ${
                isHovered ? 'scale-110 rotate-6' : 'scale-100'
              }`}
            >
              <Gamepad2 className="h-10 w-10 text-indigo-600 drop-shadow-md" />
            </div>
            <div>
              <h1 className={`
                text-3xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-indigo-600 to-purple-600 
                transition-all duration-300 
                ${isHovered ? 'text-shadow-lg' : ''}
              `}>
                EduPlay Hub
              </h1>
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                Learning through play for all ages
              </p>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <div 
              className={`
                p-2 rounded-full transition-all duration-300 
                ${isHovered ? 'bg-purple-100 shadow-md' : ''}
              `}
            >
              <Brain 
                className={`
                  h-7 w-7 text-purple-500 
                  transition-transform duration-300 
                  ${isHovered ? 'scale-110' : ''}
                `} 
              />
            </div>
            <div 
              className={`
                p-2 rounded-full transition-all duration-300 
                ${isHovered ? 'bg-yellow-100 shadow-md' : ''}
              `}
            >
              <Sparkles 
                className={`
                  h-7 w-7 text-yellow-500 
                  transition-transform duration-300 
                  ${isHovered ? 'scale-110 rotate-12' : ''}
                `} 
              />
            </div>
            <div 
              className={`
                p-2 rounded-full transition-all duration-300 
                ${isHovered ? 'bg-green-100 shadow-md' : ''}
              `}
            >
              <Star 
                className={`
                  h-7 w-7 text-green-500 
                  transition-transform duration-300 
                  ${isHovered ? 'scale-110 -rotate-12' : ''}
                `} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;