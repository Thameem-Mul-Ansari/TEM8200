import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function AgeGroupCard({ title, ageRange, description, imageSrc, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl 
        transform transition-all duration-300 hover:scale-105 
        hover:shadow-indigo-200 cursor-pointer 
        border border-gray-100 hover:border-indigo-100"
    >
      {/* Animated Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
          transition-all duration-500 
          ${isHovered ? 'opacity-80' : 'opacity-60'}`} 
      />
      
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className={`h-full w-full object-cover 
            transition-transform duration-500 
            ${isHovered ? 'scale-110 blur-sm' : ''}`}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-[350px] flex flex-col justify-end p-6 text-white">
        {/* Star Badge for Engagement */}
        <div className={`absolute top-4 right-4 transition-all duration-300 
          ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
          <Star 
            className={`h-6 w-6 text-yellow-400 
              ${isHovered ? 'fill-yellow-400' : ''}`} 
          />
        </div>

        <div className="transform transition-transform duration-300">
          <h3 className={`text-3xl font-bold mb-2 
            transition-all duration-300 
            ${isHovered ? 'text-indigo-200' : 'text-white'}`}>
            {title}
          </h3>
          <p className="text-sm font-medium text-white/80 mb-2">{ageRange}</p>
          <p className="text-sm text-white/90 mb-4 line-clamp-3">{description}</p>
          
          <div className="flex items-center text-sm font-semibold text-white 
            transition-all duration-300 
            transform group-hover:translate-x-2">
            Explore Games
            <ArrowRight 
              className={`ml-2 h-5 w-5 transition-transform 
              ${isHovered ? 'translate-x-1' : ''}`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeGroupCard;