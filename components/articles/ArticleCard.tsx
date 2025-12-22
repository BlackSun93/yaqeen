'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  FileText,
  ShieldCheck,
  Heart,
  Activity,
  Coffee,
  X,
  Smile,
  Droplet,
  Users,
  Briefcase,
  Baby,
  Wind,
  Circle,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';
import type { Article } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  ShieldCheck,
  Heart,
  Activity,
  Coffee,
  X,
  Smile,
  Droplet,
  Users,
  Briefcase,
  Baby,
  Wind,
  Circle,
  BookOpen,
};

interface ArticleCardProps {
  article: Article;
  href: string;
  type?: 'guide' | 'types' | 'nutrition' | 'caregivers';
  locale: string;
}

export default function ArticleCard({ article, href, type = 'guide', locale }: ArticleCardProps) {
  const t = useTranslations('common');
  const isRTL = locale === 'ar';

  const borderColors = {
    guide: 'border-emerald-500',
    types: 'border-blue-500',
    nutrition: 'border-orange-500',
    caregivers: 'border-purple-500',
  };

  const IconComponent = article.icon ? iconMap[article.icon] || BookOpen : BookOpen;

  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className={cn('h-2 w-full', `bg-${type === 'guide' ? 'emerald' : type === 'types' ? 'blue' : type === 'nutrition' ? 'orange' : 'purple'}-500`)}
           style={{ backgroundColor: type === 'guide' ? '#10b981' : type === 'types' ? '#3b82f6' : type === 'nutrition' ? '#f97316' : '#a855f7' }} />
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gray-50 rounded-full text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className="flex gap-2">
              {article.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {article.excerpt}
        </p>
        <div className={cn(
          'flex items-center text-emerald-600 font-bold text-sm mt-auto transition-transform',
          isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
        )}>
          {t('readDetails')}
          <ArrowLeft className={cn('w-4 h-4', isRTL ? 'mr-2 rotate-180' : 'ml-2')} />
        </div>
      </div>
    </Link>
  );
}
