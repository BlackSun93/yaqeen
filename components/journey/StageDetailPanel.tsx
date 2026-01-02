'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { JourneyStage } from '@/types/journey';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface StageDetailPanelProps {
  stage: JourneyStage;
  onStart: () => void;
  onBack: () => void;
  locale: string;
}

const colorVariants: Record<string, { bg: string; border: string; text: string; button: string }> = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  pink: {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-700',
    button: 'bg-pink-600 hover:bg-pink-700',
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    button: 'bg-teal-600 hover:bg-teal-700',
  },
};

export default function StageDetailPanel({ stage, onStart, onBack, locale }: StageDetailPanelProps) {
  const t = useTranslations('journey');
  const colors = colorVariants[stage.color] || colorVariants.emerald;

  const getIcon = (iconName: string): LucideIcon => {
    return (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Circle;
  };

  const IconComponent = getIcon(stage.icon);

  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6"
      >
        <ArrowRight className="w-5 h-5" />
        <span>{t('backToMap')}</span>
      </button>

      {/* Stage Card */}
      <div className={cn(
        'rounded-3xl p-8 border-2',
        colors.bg,
        colors.border
      )}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={cn(
            'w-20 h-20 rounded-2xl flex items-center justify-center',
            'bg-white shadow-md'
          )}>
            <IconComponent className={cn('w-10 h-10', colors.text)} />
          </div>
          <div>
            <div className={cn(
              'text-xs font-bold uppercase tracking-wide mb-1',
              colors.text
            )}>
              المرحلة {stage.order}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t(stage.titleKey)}
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          {t(stage.descriptionKey)}
        </p>

        {/* Action Buttons */}
        {stage.linkTo ? (
          // If stage links to another page (like screening)
          <Link
            href={stage.linkTo}
            className={cn(
              'flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl',
              'text-white font-bold text-lg transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-1',
              colors.button
            )}
          >
            <span>{t('goToScreening')}</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        ) : stage.hasDecisionTree ? (
          // If stage has a decision tree
          <button
            onClick={onStart}
            className={cn(
              'flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl',
              'text-white font-bold text-lg transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-1',
              colors.button
            )}
          >
            <span>{t('startTree')}</span>
            <Play className="w-5 h-5" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
