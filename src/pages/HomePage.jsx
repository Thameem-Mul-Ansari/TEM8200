import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Rocket, Sparkles } from 'lucide-react';
import { AgeGroupCard } from '../components/AgeGroupCard';

export function HomePage({ onSelectAgeGroup }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const ageGroups = [
    {
      id: 'early',
      title: 'Early Learners',
      ageRange: 'Kindergarten - Grade 5',
      description: 'Playful learning experiences that spark curiosity and build foundational skills through interactive games and challenges.',
      imageSrc: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80',
      icon: BookOpen
    },
    {
      id: 'middle',
      title: 'Middle School',
      ageRange: 'Grade 6-8',
      description: 'Engaging educational adventures that develop critical thinking, problem-solving, and collaborative learning skills.',
      imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
      icon: Target
    },
    {
      id: 'high',
      title: 'High School',
      ageRange: 'Grade 9-12',
      description: 'Advanced interactive learning modules that challenge and inspire, preparing students for academic and real-world success.',
      imageSrc: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
      icon: Rocket
    },
    {
      id: 'college',
      title: 'College & Professional',
      ageRange: '18+ Years',
      description: 'Sophisticated learning platforms for skill enhancement, professional development, and intellectual growth.',
      imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
      icon: Sparkles
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
          Choose Your Learning Adventure
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Discover personalized, engaging educational experiences tailored to your learning stage. 
          Transform education into an exciting journey of discovery and growth.
        </p>
      </motion.div>

      {/* Age Groups Grid - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ageGroups.map((group) => (
          <motion.div
            key={group.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <AgeGroupCard
              title={group.title}
              ageRange={group.ageRange}
              description={group.description}
              imageSrc={group.imageSrc}
              onClick={() => {
                setSelectedCategory(group.id);
                onSelectAgeGroup(group.id);
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export default HomePage;