'use client';

import { Heart, Activity, Droplets, Circle, Wind, Flower2 } from 'lucide-react';
import type { CancerCategory } from '@/types/cancer-types';

interface CategoryFilterProps {
  categories: CancerCategory[];
  selectedCategory: CancerCategory | 'all';
  onCategoryChange: (category: CancerCategory | 'all') => void;
  categoryLabels: Record<CancerCategory, string>;
}

const categoryIcons: Record<string, React.ElementType> = {
  all: Circle,
  breast: Heart,
  digestive: Activity,
  blood: Droplets,
  urological: Circle,
  respiratory: Wind,
  gynecological: Flower2,
  endocrine: Circle,
  neurological: Circle,
};

const categoryColors: Record<string, string> = {
  all: 'gray',
  breast: 'pink',
  digestive: 'amber',
  blood: 'red',
  urological: 'blue',
  respiratory: 'cyan',
  gynecological: 'purple',
  endocrine: 'teal',
  neurological: 'indigo',
};

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange, categoryLabels }: CategoryFilterProps) {
  const getColorClasses = (colorName: string, isSelected: boolean) => {
    const colorMap: Record<string, { selected: string; unselected: string }> = {
      gray: {
        selected: 'bg-gray-600 text-white border-gray-600',
        unselected: 'bg-white text-gray-600 border-gray-200 hover:border-gray-400',
      },
      pink: {
        selected: 'bg-pink-600 text-white border-pink-600',
        unselected: 'bg-white text-pink-600 border-pink-200 hover:border-pink-400',
      },
      amber: {
        selected: 'bg-amber-600 text-white border-amber-600',
        unselected: 'bg-white text-amber-600 border-amber-200 hover:border-amber-400',
      },
      red: {
        selected: 'bg-red-600 text-white border-red-600',
        unselected: 'bg-white text-red-600 border-red-200 hover:border-red-400',
      },
      blue: {
        selected: 'bg-blue-600 text-white border-blue-600',
        unselected: 'bg-white text-blue-600 border-blue-200 hover:border-blue-400',
      },
      cyan: {
        selected: 'bg-cyan-600 text-white border-cyan-600',
        unselected: 'bg-white text-cyan-600 border-cyan-200 hover:border-cyan-400',
      },
    };

    return colorMap[colorName]?.[isSelected ? 'selected' : 'unselected'] || colorMap.gray.unselected;
  };

  // Build display categories: 'all' + passed categories
  const displayCategories: Array<{ id: CancerCategory | 'all'; label: string }> = [
    { id: 'all', label: 'الكل' },
    ...categories.map((cat) => ({ id: cat, label: categoryLabels[cat] })),
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {displayCategories.map((category) => {
        const Icon = categoryIcons[category.id] || Circle;
        const isSelected = selectedCategory === category.id;
        const colorClasses = getColorClasses(categoryColors[category.id] || 'gray', isSelected);

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ${colorClasses}`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium text-sm">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
