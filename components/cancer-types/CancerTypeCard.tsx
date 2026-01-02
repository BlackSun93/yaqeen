'use client';

import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowLeft, Activity } from 'lucide-react';
import type { CancerType } from '@/types/cancer-types';

interface CancerTypeCardProps {
  cancerType: CancerType;
}

export default function CancerTypeCard({ cancerType }: CancerTypeCardProps) {
  const IconComponent =
    (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[cancerType.icon] || Activity;

  const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    pink: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      border: 'border-pink-200',
      hover: 'hover:border-pink-400',
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      hover: 'hover:border-amber-400',
    },
    red: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      border: 'border-red-200',
      hover: 'hover:border-red-400',
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400',
    },
    cyan: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
      hover: 'hover:border-cyan-400',
    },
    indigo: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      hover: 'hover:border-indigo-400',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400',
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      hover: 'hover:border-emerald-400',
    },
  };

  const colors = colorClasses[cancerType.color] || colorClasses.emerald;

  return (
    <Link
      href={`/cancer-types/${cancerType.id}`}
      className={`block bg-white rounded-2xl border-2 ${colors.border} ${colors.hover} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
        <IconComponent className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {cancerType.title}
      </h3>

      {/* English Name */}
      <p className="text-sm text-gray-500 mb-3" dir="ltr">
        {cancerType.englishName}
      </p>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
        {cancerType.excerpt}
      </p>

      {/* Stats Row */}
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full`}>
          {cancerType.statistics.survivalRate.split(',')[0]}
        </div>
        <div className="text-gray-500">
          {cancerType.statistics.commonAgeGroup}
        </div>
      </div>

      {/* Read More */}
      <div className={`flex items-center gap-2 ${colors.text} font-medium group-hover:gap-3 transition-all`}>
        <span>اقرأ المزيد</span>
        <ArrowLeft className="w-4 h-4 rotate-180" />
      </div>
    </Link>
  );
}
