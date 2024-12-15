import React, { useState } from 'react';
import { 
  Car, 
  Hand, 
  Play, 
  Move, 
  Gamepad2 
} from 'lucide-react';

export function GestureCar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
    flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden 
      transform transition-all duration-300 hover:scale-[1.01] relative z-10">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 to-purple-600">
              Gesture Car Math Adventure
            </h1>
            <p className="text-xl text-gray-600">
              Relive your Road Rash memories! Learn math through an exciting, interactive driving experience!
            </p>
            <div 
              className="relative w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a 
                href="http://127.0.0.1:5000/game/gestureCarGame"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-bold text-white 
                bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full 
                hover:from-indigo-700 hover:to-purple-800 
                transition-all duration-300 transform 
                hover:scale-105 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                <Play className="mr-3" size={24} />
                Start Your Math Journey
              </a>
              
              {isHovered && (
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Car 
              size={300} 
              className="text-indigo-500 opacity-20 absolute" 
              strokeWidth={1} 
            />
          </div>
        </div>

        {/* Game Instructions */}
        <div className="bg-gray-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How to Play
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 
            transform hover:scale-105 transition-all">
              <Hand className="text-indigo-600" size={48} />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Left Hand</h3>
                <p className="text-gray-600">
                  Steer left, moving the car to a minimum of -81
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 
            transform hover:scale-105 transition-all">
              <Hand className="text-purple-600" size={48} />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Right Hand</h3>
                <p className="text-gray-600">
                  Steer right, moving the car to a maximum of 81
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wow Factor */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
              The Wow Factor
            </h3>
            <p className="text-xl text-gray-700">
              Combining cutting-edge technologies like OpenCV and MediaPipe, our game transforms learning 
              into an engaging, interactive experience. Children solve math problems through intuitive 
              hand gestures, making education fun and immersive.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Gamepad2 className="text-indigo-600" size={48} />
              <Move className="text-purple-600" size={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestureCar;