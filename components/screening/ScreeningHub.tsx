'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Heart, Activity, Wind, User, ClipboardCheck, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/articles/SectionHeader';
import SurveyCard from './SurveyCard';
import SurveyQuestions from './SurveyQuestions';
import { screeningSurveys } from '@/content/ar/screening';

interface ScreeningHubProps {
  locale: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Wind,
  User,
};

export default function ScreeningHub({ locale }: ScreeningHubProps) {
  const t = useTranslations('screening');
  const [activeSurvey, setActiveSurvey] = useState<string | null>(null);

  const currentSurvey = screeningSurveys.find((s) => s.id === activeSurvey);

  if (currentSurvey) {
    return (
      <SurveyQuestions
        survey={currentSurvey}
        locale={locale}
        onBack={() => setActiveSurvey(null)}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('title')} subtitle={t('subtitle')} />

      {/* Disclaimer Banner */}
      <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-amber-800 text-sm leading-relaxed">{t('disclaimer')}</p>
      </div>

      {/* Survey Selection */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardCheck className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-gray-800">{t('selectSurvey')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screeningSurveys.map((survey) => {
            const Icon = iconMap[survey.icon] || Heart;
            return (
              <SurveyCard
                key={survey.id}
                survey={survey}
                Icon={Icon}
                locale={locale}
                onClick={() => setActiveSurvey(survey.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
