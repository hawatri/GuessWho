import React, { useState } from 'react';
import { Card } from './Card';
import { CategoryData } from '../data/categories';
import { RotateCcw } from 'lucide-react';

interface CardGridProps {
  category: CategoryData;
}

export const CardGrid: React.FC<CardGridProps> = ({ category }) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const resetCards = () => {
    setFlippedCards(new Set());
  };

  const activeCards = category.items.length - flippedCards.size;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
          {category.name}
        </h3>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Active: {activeCards} / {category.items.length}
          </span>
          <button
            onClick={resetCards}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {category.items.map((item, index) => (
          <Card
            key={index}
            item={item}
            isFlipped={flippedCards.has(index)}
            onToggle={() => toggleCard(index)}
            categoryColor={category.color}
          />
        ))}
      </div>
    </div>
  );
};