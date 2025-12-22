'use client';

import { useTranslations } from 'next-intl';

interface ShareStoryCTAProps {
  locale: string;
}

export default function ShareStoryCTA({ locale }: ShareStoryCTAProps) {
  const t = useTranslations('common');

  return (
    <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">
        {locale === 'ar' ? 'عندك قصة ملهمة؟' : 'Have an inspiring story?'}
      </h3>
      <p className="mb-6 opacity-90">
        {locale === 'ar'
          ? 'قصتك ممكن تكون طوق نجاة لغيرك. شاركنا تجربتك.'
          : 'Your story could be a lifeline for others. Share your experience with us.'}
      </p>
      <button className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
        {t('shareStory')}
      </button>
    </div>
  );
}
