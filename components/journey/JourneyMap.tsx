'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { JourneyStage } from '@/types/journey';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface JourneyMapProps {
  stages: JourneyStage[];
  onStageSelect: (stage: JourneyStage) => void;
  locale: string;
}

const colorVariants: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  emerald: {
    bg: 'bg-emerald-100',
    border: 'border-emerald-500',
    text: 'text-emerald-600',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-500',
    text: 'text-blue-600',
    gradient: 'from-blue-400 to-blue-600',
  },
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-500',
    text: 'text-purple-600',
    gradient: 'from-purple-400 to-purple-600',
  },
  pink: {
    bg: 'bg-pink-100',
    border: 'border-pink-500',
    text: 'text-pink-600',
    gradient: 'from-pink-400 to-pink-600',
  },
  teal: {
    bg: 'bg-teal-100',
    border: 'border-teal-500',
    text: 'text-teal-600',
    gradient: 'from-teal-400 to-teal-600',
  },
};

export default function JourneyMap({ stages, onStageSelect, locale }: JourneyMapProps) {
  const t = useTranslations('journey');

  const getIcon = (iconName: string): LucideIcon => {
    return (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Circle;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop: Winding Path Layout */}
      <div className="hidden md:block relative py-8">
        {/* SVG Path with Stage Nodes */}
        <svg
          className="w-full"
          viewBox="0 0 900 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            {/* Filters for hover effects */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Winding path - dashed background */}
          <path
            d="M 800 250
               C 700 250 650 80 550 80
               C 450 80 400 250 300 250
               C 200 250 150 80 100 80"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="8"
            strokeDasharray="15 10"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Winding path - solid overlay */}
          <path
            d="M 800 250
               C 700 250 650 80 550 80
               C 450 80 400 250 300 250
               C 200 250 150 80 100 80"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Stage Nodes */}
          {stages.map((stage, index) => {
            // Exact positions on the path (RTL: start from right)
            const nodePositions = [
              { x: 800, y: 250 }, // Stage 1 - الكشف المبكر (start)
              { x: 550, y: 80 },  // Stage 2 - أروح فين؟ (first peak)
              { x: 300, y: 250 }, // Stage 3 - التشخيص (middle bottom)
              { x: 175, y: 130 }, // Stage 4 - العلاج (going up)
              { x: 100, y: 80 },  // Stage 5 - المتابعة (end peak)
            ];

            const pos = nodePositions[index];
            const colorMap: Record<string, { fill: string; stroke: string; text: string }> = {
              emerald: { fill: '#d1fae5', stroke: '#10b981', text: '#059669' },
              blue: { fill: '#dbeafe', stroke: '#3b82f6', text: '#2563eb' },
              purple: { fill: '#ede9fe', stroke: '#8b5cf6', text: '#7c3aed' },
              pink: { fill: '#fce7f3', stroke: '#ec4899', text: '#db2777' },
              teal: { fill: '#ccfbf1', stroke: '#14b8a6', text: '#0d9488' },
            };
            const c = colorMap[stage.color] || colorMap.emerald;

            return (
              <g
                key={stage.id}
                className="cursor-pointer transition-transform duration-200 hover:scale-110 origin-center"
                style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                onClick={() => onStageSelect(stage)}
              >
                {/* Invisible larger hit area */}
                <circle cx={pos.x} cy={pos.y} r="60" fill="transparent" />

                {/* Outer glow */}
                <circle cx={pos.x} cy={pos.y} r="42" fill={c.fill} opacity="0.5" />

                {/* Main circle */}
                <circle cx={pos.x} cy={pos.y} r="35" fill={c.fill} stroke={c.stroke} strokeWidth="4" />

                {/* Stage number badge */}
                <circle cx={pos.x + 28} cy={pos.y - 28} r="14" fill={c.stroke} />
                <text x={pos.x + 28} y={pos.y - 23} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
                  {stage.order}
                </text>

                {/* Title below */}
                <text x={pos.x} y={pos.y + 60} textAnchor="middle" fill={c.text} fontSize="14" fontWeight="bold">
                  {t(stage.titleKey)}
                </text>

                {/* Hover hint */}
                <text x={pos.x} y={pos.y + 78} textAnchor="middle" fill="#9ca3af" fontSize="11" className="opacity-0 group-hover:opacity-100">
                  {t('clickToStart')}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Icon overlays - positioned on top of SVG circles */}
        <div className="absolute inset-0 pointer-events-none" style={{ paddingTop: '32px' }}>
          {stages.map((stage, index) => {
            const IconComponent = getIcon(stage.icon);
            const colors = colorVariants[stage.color] || colorVariants.emerald;

            // Positions matching SVG coordinates (viewBox 900x400)
            const positionStyles = [
              { left: '88.9%', top: '62.5%' },  // 800/900, 250/400
              { left: '61.1%', top: '20%' },    // 550/900, 80/400
              { left: '33.3%', top: '62.5%' },  // 300/900, 250/400
              { left: '19.4%', top: '32.5%' },  // 175/900, 130/400
              { left: '11.1%', top: '20%' },    // 100/900, 80/400
            ];
            const style = positionStyles[index];

            return (
              <div
                key={`icon-${stage.id}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                style={{ left: style.left, top: style.top }}
                onClick={() => onStageSelect(stage)}
              >
                <IconComponent className={cn('w-9 h-9', colors.text)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Vertical Stack Layout */}
      <div className="md:hidden space-y-4">
        {stages.map((stage, index) => {
          const colors = colorVariants[stage.color] || colorVariants.emerald;
          const IconComponent = getIcon(stage.icon);
          const isLast = index === stages.length - 1;

          return (
            <div key={stage.id} className="relative">
              {/* Connecting Line */}
              {!isLast && (
                <div className="absolute right-10 top-20 w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200" />
              )}

              <button
                onClick={() => onStageSelect(stage)}
                className={cn(
                  'w-full bg-white rounded-2xl p-4 shadow-sm border-2 transition-all duration-300',
                  'hover:shadow-lg hover:-translate-y-1 active:scale-98',
                  'flex items-center gap-4',
                  colors.border
                )}
              >
                {/* Icon */}
                <div className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0',
                  colors.bg
                )}>
                  <IconComponent className={cn('w-8 h-8', colors.text)} />
                </div>

                {/* Content */}
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-between">
                    <div className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br',
                      colors.gradient
                    )}>
                      {stage.order}
                    </div>
                    <h3 className={cn('text-lg font-bold', colors.text)}>
                      {t(stage.titleKey)}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {t(stage.descriptionKey)}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
