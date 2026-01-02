'use client';

import { Heart, Activity, Droplets, Circle, Wind, Flower2 } from 'lucide-react';
import type { CancerCategory } from '@/types/cancer-types';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: Array<{ id: string; label: string; icon: React.ElementType; color: string }> = [
  { id: 'all', label: 'الكل', icon: Circle, color: 'gray' },
  { id: 'breast', label: 'الثدي', icon: Heart, color: 'pink' },
  { id: 'digestive', label: 'الهضمي', icon: Activity, color: 'amber' },
  { id: 'blood', label: 'الدم', icon: Droplets, color: 'red' },
  { id: 'urological', label: 'المسالك', icon: Circle, color: 'blue' },
  { id: 'respiratory', label: 'التنفسي', icon: Wind, color: 'cyan' },
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
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

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        const colorClasses = getColorClasses(category.color, isSelected);

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
