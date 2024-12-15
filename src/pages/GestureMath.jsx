import React, { useState } from 'react';
import { Play, Hand, Target } from 'lucide-react';

const GestureMathGame = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-green-500 to-emerald-600 
    flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] relative z-10">
        <div className="p-8 md:p-12 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-6">
            Gesture Math Challenge
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-md transform transition-all hover:scale-105">
              <Hand className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-bold text-green-800 mb-2">Right Hand</h3>
              <p className="text-green-600">Increase the number by 1</p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl shadow-md transform transition-all hover:scale-105">
              <Target className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-xl font-bold text-teal-800 mb-2">Check Answer</h3>
              <p className="text-teal-600">Show both hands to verify</p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-xl shadow-md transform transition-all hover:scale-105">
              <Hand className="mx-auto mb-4 text-emerald-600" size={48} strokeWidth={1} />
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Left Hand</h3>
              <p className="text-emerald-600">Decrease the number by 1</p>
            </div>
          </div>

          <div 
            className="relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a 
              href="http://127.0.0.1:5000/game/gesturemath"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-2xl font-bold text-white 
                         bg-gradient-to-r from-green-600 to-emerald-700 rounded-full 
                         hover:from-green-700 hover:to-emerald-800 
                         transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <Play className="mr-3" size={28} />
              Start The Gesture Math Game
            </a>
            
            {isHovered && (
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestureMathGame;