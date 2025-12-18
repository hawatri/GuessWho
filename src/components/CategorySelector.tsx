import React from 'react';
import { CategoryData } from '../data/categories';

interface CategorySelectorProps {
  categories: CategoryData[];
  selectedCategory: CategoryData | null;
  onSelectCategory: (category: CategoryData) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Choose a Category
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onSelectCategory(category)}
            className={`
              px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200
              hover:scale-105 hover:shadow-lg active:scale-95
              ${category.color}
              ${selectedCategory?.name === category.name 
                ? 'ring-4 ring-white dark:ring-gray-300 ring-opacity-50 shadow-xl' 
                : 'shadow-md'
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};