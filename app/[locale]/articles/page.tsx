import { setRequestLocale } from 'next-intl/server';
import { ArticlesHub } from '@/components/articles';
import { allArticles, getFeaturedArticles } from '@/content/ar/articles';

interface ArticlesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata() {
  return {
    title: 'اتعلم',
    description: 'مقالات ونصائح شاملة للمرضى - من التغذية للتوعية لقصص النجاح وآخر الأبحاث',
  };
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const featuredArticles = getFeaturedArticles();

  return <ArticlesHub articles={allArticles} featuredArticles={featuredArticles} />;
}
