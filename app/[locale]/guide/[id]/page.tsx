import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleDetail from '@/components/articles/ArticleDetail';
import { guideArticles } from '@/content/ar/guide';

interface ArticlePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return guideArticles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = guideArticles.find((a) => a.id === id);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function GuideArticlePage({ params }: ArticlePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const article = guideArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} backHref="/guide" locale={locale} />;
}
