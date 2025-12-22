import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import SectionHeader from '@/components/articles/SectionHeader';
import ArticleCard from '@/components/articles/ArticleCard';
import { caregiversArticles } from '@/content/ar/caregivers';

interface CaregiversPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CaregiversPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('caregivers'),
  };
}

export default async function CaregiversPage({ params }: CaregiversPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  const subtitle = locale === 'ar'
    ? 'أنت السند.. وإحنا جنبك. نصائح عملية لكل مرافق ومقدم رعاية'
    : 'Practical tips for every caregiver and support person';

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('caregivers')} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caregiversArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            href={`/caregivers/${article.id}`}
            type="caregivers"
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
