import React, { useState } from 'react';
import { Play, Trophy, Clock, BookOpen } from 'lucide-react';

export function GameCard({ game, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const difficultyIcons = {
    'Easy': <BookOpen className="h-4 w-4 mr-1" />,
    'Medium': <Clock className="h-4 w-4 mr-1" />,
    'Hard': <Trophy className="h-4 w-4 mr-1" />
  };

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl bg-white 
        shadow-2xl transition-all duration-300 
        ${isHovered ? 'scale-105 shadow-indigo-200' : 'scale-100'} 
        cursor-pointer border border-gray-100 
        hover:border-indigo-100`}
    >
      {/* Animated Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
          transition-opacity duration-500 
          ${isHovered ? 'opacity-80' : 'opacity-60'} z-10`}
      />
      
      {/* Background Image with Subtle Effects */}
      <img 
        src={game.imageSrc} 
        alt={game.title} 
        className={`h-[300px] w-full object-cover 
          transition-transform duration-500 
          ${isHovered ? 'scale-110 blur-sm' : ''}`}
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
        {/* Category and Difficulty Badges */}
        <div className="flex justify-between items-start mb-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium 
            transition-all duration-300
            ${isHovered ? 'bg-indigo-600 scale-105' : 'bg-indigo-500'}
          `}>
            {game.category}
          </span>
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium flex items-center
            transition-all duration-300
            ${
              game.difficulty === 'Easy' ? 'bg-green-500' : 
              game.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
            }
            ${isHovered ? 'scale-105' : ''}
          `}>
            {difficultyIcons[game.difficulty]}
            {game.difficulty}
          </span>
        </div>

        {/* Game Details */}
        <div className="transform transition-transform duration-300">
          <h3 className={`
            text-2xl font-bold mb-2
            transition-colors duration-300
            ${isHovered ? 'text-indigo-200' : 'text-white'}
          `}>
            {game.title}
          </h3>
          <p className="text-sm text-white/90 mb-4 line-clamp-3">{game.description}</p>
          
          {/* Start Game Button */}
          <button 
            className={`
              flex items-center justify-center w-full 
              bg-white/20 backdrop-blur-sm py-3 rounded-xl 
              text-sm font-semibold text-white
              transition-all duration-300 
              hover:bg-white/30 hover:text-indigo-100
              ${isHovered ? 'scale-105 shadow-lg' : ''}
            `}
          >
            <Play className="w-5 h-5 mr-2 animate-pulse" />
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;