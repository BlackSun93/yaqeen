import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import SectionHeader from '@/components/articles/SectionHeader';
import ArticleCard from '@/components/articles/ArticleCard';
import { nutritionArticles } from '@/content/ar/nutrition';

interface NutritionPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: NutritionPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('nutrition'),
  };
}

export default async function NutritionPage({ params }: NutritionPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  const subtitle = locale === 'ar'
    ? 'المعدة بيت الداء والدواء. دليلك لتغذية سليمة أثناء العلاج'
    : 'Your guide to healthy nutrition during treatment';

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('nutrition')} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nutritionArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            href={`/nutrition/${article.id}`}
            type="nutrition"
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
