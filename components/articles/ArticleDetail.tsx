'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Smile, BookOpen } from 'lucide-react';
import type { Article } from '@/types';
import { cn } from '@/lib/utils';

interface ArticleDetailProps {
  article: Article;
  backHref: string;
  locale: string;
}

export default function ArticleDetail({ article, backHref, locale }: ArticleDetailProps) {
  const t = useTranslations('common');
  const isRTL = locale === 'ar';

  // Convert markdown-like formatting to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>');

        // Handle headers
        if (line.startsWith('---')) {
          return <hr key={index} className="my-6 border-gray-200" />;
        }

        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }

        return (
          <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line }} />
        );
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Link
        href={backHref}
        className={cn(
          'inline-flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors bg-white px-4 py-2 rounded-full shadow-sm'
        )}
      >
        <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
        {t('backToList')}
      </Link>

      <article className="bg-white rounded-[2rem] p-6 md:p-12 shadow-xl shadow-gray-200/50 max-w-4xl mx-auto border-t-8 border-emerald-500">
        <div className="flex items-center gap-3 mb-6 text-emerald-600">
          <BookOpen className="w-6 h-6" />
          <span className="font-bold">{t('awareness')}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="prose prose-lg md:prose-xl text-gray-600 leading-loose">
          {formatContent(article.content)}
        </div>

        {/* Feedback Section */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-6 rounded-xl">
          <p className="text-sm text-gray-500">{t('wasHelpful')}</p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Smile className="w-5 h-5" />
              {t('helpful')}
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <Link
              href={backHref}
              className="text-emerald-600 font-bold hover:underline"
            >
              {t('readOther')}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
