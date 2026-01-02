'use client';

import { CheckCircle2 } from 'lucide-react';
import type { CancerStage } from '@/types/cancer-types';

interface StageVisualizerProps {
  stages: CancerStage[];
  color?: string;
}

export default function StageVisualizer({ stages, color = 'emerald' }: StageVisualizerProps) {
  const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    emerald: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      gradient: 'from-emerald-100 to-emerald-50'
    },
    pink: {
      bg: 'bg-pink-500',
      text: 'text-pink-600',
      border: 'border-pink-200',
      gradient: 'from-pink-100 to-pink-50'
    },
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      border: 'border-blue-200',
      gradient: 'from-blue-100 to-blue-50'
    },
    amber: {
      bg: 'bg-amber-500',
      text: 'text-amber-600',
      border: 'border-amber-200',
      gradient: 'from-amber-100 to-amber-50'
    },
    red: {
      bg: 'bg-red-500',
      text: 'text-red-600',
      border: 'border-red-200',
      gradient: 'from-red-100 to-red-50'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      border: 'border-purple-200',
      gradient: 'from-purple-100 to-purple-50'
    },
    cyan: {
      bg: 'bg-cyan-500',
      text: 'text-cyan-600',
      border: 'border-cyan-200',
      gradient: 'from-cyan-100 to-cyan-50'
    },
    indigo: {
      bg: 'bg-indigo-500',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      gradient: 'from-indigo-100 to-indigo-50'
    },
  };

  const colors = colorClasses[color] || colorClasses.emerald;

  return (
    <div className="space-y-4">
      {/* Stage Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        {stages.map((stage, index) => (
          <div key={stage.stage} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${colors.bg} text-white flex items-center justify-center font-bold text-sm`}>
                {stage.stage}
              </div>
              <span className={`text-xs mt-1 ${colors.text} font-medium`}>
                {stage.survivalRate}
              </span>
            </div>
            {index < stages.length - 1 && (
              <div className={`flex-1 h-1 ${colors.bg} opacity-30 mx-2`} />
            )}
          </div>
        ))}
      </div>

      {/* Stage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stages.map((stage) => (
          <div
            key={stage.stage}
            className={`bg-gradient-to-br ${colors.gradient} ${colors.border} border rounded-xl p-4`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 rounded-full ${colors.bg} text-white flex items-center justify-center font-bold text-sm`}>
                {stage.stage}
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{stage.title}</h4>
                <span className={`text-sm ${colors.text}`}>
                  نسبة البقاء: {stage.survivalRate}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{stage.description}</p>
            <div className={`flex items-start gap-2 text-sm ${colors.text}`}>
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{stage.treatmentApproach}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
