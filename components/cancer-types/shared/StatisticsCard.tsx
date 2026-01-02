'use client';

import { TrendingUp, Users, Calendar, Activity } from 'lucide-react';
import type { CancerStatistics } from '@/types/cancer-types';

interface StatisticsCardProps {
  statistics: CancerStatistics;
  color?: string;
}

const iconMap = {
  prevalence: TrendingUp,
  survival: Activity,
  age: Calendar,
  cases: Users,
};

export default function StatisticsCard({ statistics, color = 'emerald' }: StatisticsCardProps) {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  };

  const colors = colorClasses[color] || colorClasses.emerald;

  const stats = [
    {
      label: 'معدل الانتشار',
      value: statistics.prevalenceInEgypt,
      icon: 'prevalence',
    },
    {
      label: 'نسبة الشفاء',
      value: statistics.survivalRate,
      icon: 'survival',
    },
    {
      label: 'الفئة العمرية',
      value: statistics.commonAgeGroup,
      icon: 'age',
    },
  ];

  if (statistics.annualCases) {
    stats.push({
      label: 'الحالات السنوية',
      value: statistics.annualCases,
      icon: 'cases',
    });
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <div
            key={index}
            className={`${colors.bg} ${colors.border} border rounded-xl p-4 text-center`}
          >
            <div className={`${colors.text} flex justify-center mb-2`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className={`${colors.text} text-sm font-medium mb-1`}>
              {stat.label}
            </div>
            <div className="text-gray-800 font-bold text-sm">
              {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
