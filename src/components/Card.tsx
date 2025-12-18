import React from 'react';

interface CardProps {
  item: string;
  isFlipped: boolean;
  onToggle: () => void;
  categoryColor: string;
}

export const Card: React.FC<CardProps> = ({ item, isFlipped, onToggle, categoryColor }) => {
  return (
    <div className="card-container" onClick={onToggle}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className={`card-face card-front ${categoryColor}`}>
          <div className="card-content">
            <span className="card-text">{item}</span>
          </div>
        </div>
        <div className="card-face card-back">
          <div className="card-content">
            <span className="card-text text-gray-500 dark:text-gray-400">✗</span>
          </div>
        </div>
      </div>
    </div>
  );
};