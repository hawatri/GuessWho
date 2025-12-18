import React, { useState, useEffect } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { CardGrid } from './components/CardGrid';
import { categories } from './data/categories';
import { Gamepad2, Moon, Sun } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or respect system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Gamepad2 size={48} className="text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                Guess Who Game
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose a category and flip cards to eliminate options. Perfect for playing the classic guessing game!
          </p>
        </header>

        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {selectedCategory && (
          <div className="mt-8">
            <CardGrid category={selectedCategory} />
          </div>
        )}

        {!selectedCategory && (
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                How to Play
              </h3>
              <div className="text-left space-y-3 text-gray-600 dark:text-gray-300">
                <p>• Select a category from above</p>
                <p>• Click cards to flip them (eliminate)</p>
                <p>• Use the counter to track active cards</p>
                <p>• Reset anytime to start over</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;