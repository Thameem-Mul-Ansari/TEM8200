import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameCard } from '../components/GameCard';
import { gamesByAgeGroup } from '../data/games';
import { ArrowLeft } from 'lucide-react';

export function GamesPage({ ageGroup, onBack }) {
  const navigate = useNavigate();
  const games = gamesByAgeGroup[ageGroup];
  const groupTitle = {
    early: 'Early Learners',
    middle: 'Middle School',
    high: 'High School',
    college: 'College & Professional',
  }[ageGroup];

  const handleGameClick = (game) => {
    switch (game.id) {
      case 'shape-detective':
        navigate('/gesture-math');
        break;
      case 'color-quest':
        navigate('/gesture-car');
        break;
      default:
        alert('Game interface coming soon!');
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Age Groups
        </button>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{groupTitle} Games</h2>
          <p className="text-lg text-gray-600">
            Explore our collection of computer vision and AR games designed specifically for {groupTitle.toLowerCase()}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={() => handleGameClick(game)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}