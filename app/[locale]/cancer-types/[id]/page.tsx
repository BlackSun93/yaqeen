import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ArticleDetail from '@/components/articles/ArticleDetail';
import { cancerTypesArticles } from '@/content/ar/cancer-types';

interface ArticlePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return cancerTypesArticles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = cancerTypesArticles.find((a) => a.id === id);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function CancerTypeArticlePage({ params }: ArticlePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const article = cancerTypesArticles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} backHref="/cancer-types" locale={locale} />;
}
