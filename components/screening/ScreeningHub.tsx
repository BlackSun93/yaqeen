'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Heart, Activity, Wind, User, ClipboardCheck, AlertCircle, Scan } from 'lucide-react';
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
  Scan,
};

export default function ScreeningHub({ locale }: ScreeningHubProps) {
  const t = useTranslations('screening');
  const [activeSurvey, setActiveSurvey] = useState<string | null>(null);

  const handleSelectSurvey = (surveyId: string | null) => {
    setActiveSurvey(surveyId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentSurvey = screeningSurveys.find((s) => s.id === activeSurvey);

  if (currentSurvey) {
    return (
      <SurveyQuestions
        survey={currentSurvey}
        locale={locale}
        onBack={() => handleSelectSurvey(null)}
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

        {/* General Survey - Featured at Top */}
        {screeningSurveys
          .filter((s) => s.id === 'general')
          .map((survey) => {
            const Icon = iconMap[survey.icon] || Scan;
            return (
              <div key={survey.id} className="mb-8">
                <button
                  onClick={() => handleSelectSurvey(survey.id)}
                  className="w-full p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group text-right"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-teal-500 text-white text-xs font-bold rounded-full">
                          مُوصى به
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {t(survey.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(survey.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm font-medium">أو اختار فحص محدد</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Specific Surveys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screeningSurveys
            .filter((s) => s.id !== 'general')
            .map((survey) => {
              const Icon = iconMap[survey.icon] || Heart;
              return (
                <SurveyCard
                  key={survey.id}
                  survey={survey}
                  Icon={Icon}
                  locale={locale}
                  onClick={() => handleSelectSurvey(survey.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
