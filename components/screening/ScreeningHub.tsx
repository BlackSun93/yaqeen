'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Heart, Activity, Wind, User, ClipboardCheck, AlertCircle, HandHeart } from 'lucide-react';
import SectionHeader from '@/components/articles/SectionHeader';
import SurveyCard from './SurveyCard';
import SurveyQuestions from './SurveyQuestions';
import BreastSelfExam from './BreastSelfExam';
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
  const [showSelfExam, setShowSelfExam] = useState(false);

  const currentSurvey = screeningSurveys.find((s) => s.id === activeSurvey);

  if (showSelfExam) {
    return (
      <BreastSelfExam
        locale={locale}
        onBack={() => setShowSelfExam(false)}
      />
    );
  }

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

      {/* Self Exam Banner */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => setShowSelfExam(true)}
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6 flex items-center gap-4 hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-xl"
        >
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
            <HandHeart className="w-8 h-8" />
          </div>
          <div className="text-right flex-1">
            <h3 className="text-xl font-bold mb-1">
              {locale === 'ar' ? 'تعلمي الفحص الذاتي للثدي' : 'Learn Breast Self-Examination'}
            </h3>
            <p className="text-pink-100 text-sm">
              {locale === 'ar'
                ? 'خطوات بسيطة ممكن تنقذ حياتك - اتعلميها في 5 دقائق'
                : 'Simple steps that can save your life - learn in 5 minutes'}
            </p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold shrink-0">
            {locale === 'ar' ? 'ابدأي الآن' : 'Start Now'}
          </div>
        </button>
      </div>

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
