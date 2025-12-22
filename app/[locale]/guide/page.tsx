import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import SectionHeader from '@/components/articles/SectionHeader';
import ArticleCard from '@/components/articles/ArticleCard';
import { guideArticles } from '@/content/ar/guide';

interface GuidePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('guide'),
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  const subtitle = locale === 'ar'
    ? 'كل المعلومات اللي محتاجها عشان تطلع قرار العلاج المجاني'
    : 'All the information you need to get free treatment approval';

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('guide')} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guideArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            href={`/guide/${article.id}`}
            type="guide"
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
