import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleDetail from '@/components/articles/ArticleDetail';
import { nutritionArticles } from '@/content/ar/nutrition';

interface ArticlePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return nutritionArticles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = nutritionArticles.find((a) => a.id === id);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NutritionArticlePage({ params }: ArticlePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const article = nutritionArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} backHref="/nutrition" locale={locale} />;
}
