import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleDetail from '@/components/articles/ArticleDetail';
import { caregiversArticles } from '@/content/ar/caregivers';

interface ArticlePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return caregiversArticles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = caregiversArticles.find((a) => a.id === id);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function CaregiversArticlePage({ params }: ArticlePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const article = caregiversArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} backHref="/caregivers" locale={locale} />;
}
