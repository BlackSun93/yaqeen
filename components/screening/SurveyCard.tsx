'use client';

import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import type { Survey } from '@/content/ar/screening';
import { cn } from '@/lib/utils';

interface SurveyCardProps {
  survey: Survey;
  Icon: React.ComponentType<{ className?: string }>;
  locale: string;
  onClick: () => void;
}

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200 hover:border-pink-400' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200 hover:border-blue-400' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200 hover:border-gray-400' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200 hover:border-emerald-400' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200 hover:border-teal-400' },
};

export default function SurveyCard({ survey, Icon, locale, onClick }: SurveyCardProps) {
  const t = useTranslations('screening');
  const colors = colorClasses[survey.color] || colorClasses.emerald;
  const isRTL = locale === 'ar';

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-6 rounded-2xl border-2 transition-all duration-300 text-right hover:shadow-lg hover:-translate-y-1 group',
        colors.border,
        'bg-white'
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center shrink-0', colors.bg)}>
          <Icon className={cn('w-7 h-7', colors.text)} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {t(survey.titleKey)}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {t(survey.descriptionKey)}
          </p>
          <div className={cn(
            'flex items-center text-emerald-600 font-bold text-sm transition-transform',
            isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
          )}>
            {t('start')}
            <ArrowLeft className={cn('w-4 h-4', isRTL ? 'mr-2 rotate-180' : 'ml-2')} />
          </div>
        </div>
      </div>
    </button>
  );
}
