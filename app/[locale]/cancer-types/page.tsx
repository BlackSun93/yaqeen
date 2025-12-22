import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import SectionHeader from '@/components/articles/SectionHeader';
import ArticleCard from '@/components/articles/ArticleCard';
import { cancerTypesArticles } from '@/content/ar/cancer-types';

interface CancerTypesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CancerTypesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('cancerTypes'),
  };
}

export default async function CancerTypesPage({ params }: CancerTypesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  const subtitle = locale === 'ar'
    ? 'معلومات مبسطة عن أنواع السرطان الشائعة وطرق علاجها الحديثة في مصر'
    : 'Simplified information about common cancer types and modern treatments in Egypt';

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('cancerTypes')} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cancerTypesArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            href={`/cancer-types/${article.id}`}
            type="types"
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
