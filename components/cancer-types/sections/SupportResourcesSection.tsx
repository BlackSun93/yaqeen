'use client';

import Link from 'next/link';
import { FileText, Utensils, Users, BookOpen, ArrowLeft, Sparkles } from 'lucide-react';
import { guideArticles } from '@/content/ar/guide';
import { nutritionArticles } from '@/content/ar/nutrition';
import { caregiversArticles } from '@/content/ar/caregivers';
import { allArticles } from '@/content/ar/articles';

interface SupportResourcesSectionProps {
  cancerTypeId?: string;
  cancerTypeTitle?: string;
}

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  articles: Array<{ id: string; title: string; excerpt: string; href: string }>;
  viewAllHref: string;
  viewAllLabel: string;
}

function ResourceCategoryCard({ category }: { category: ResourceCategory }) {
  const Icon = category.icon;
  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50' },
  };

  const colors = colorClasses[category.color] || colorClasses.blue;

  return (
    <div className={`bg-white rounded-2xl border-2 ${colors.border} overflow-hidden`}>
      {/* Header */}
      <div className={`${colors.light} p-4 border-b ${colors.border}`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${colors.bg} text-white flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{category.title}</h3>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="p-2">
        {category.articles.slice(0, 3).map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="block p-3 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-800 truncate group-hover:text-gray-900">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-500 truncate">{article.excerpt}</p>
              </div>
              <ArrowLeft className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mr-2`} />
            </div>
          </Link>
        ))}

        <Link
          href={category.viewAllHref}
          className={`block p-3 text-center ${colors.text} text-sm font-medium hover:underline`}
        >
          {category.viewAllLabel}
        </Link>
      </div>
    </div>
  );
}

export default function SupportResourcesSection({ cancerTypeId, cancerTypeTitle }: SupportResourcesSectionProps) {
  // Get related articles for this cancer type (patient articles)
  const patientArticles = cancerTypeId
    ? allArticles
        .filter((a) =>
          (a.relatedCancerTypes?.includes(cancerTypeId) || a.category === 'awareness' || a.category === 'stories') &&
          a.category !== 'caregivers'
        )
        .slice(0, 5)
    : allArticles
        .filter((a) => (a.category === 'awareness' || a.category === 'stories'))
        .slice(0, 5);

  const resourceCategories: ResourceCategory[] = [
    {
      id: 'guide',
      title: 'إجراءات العلاج',
      description: 'نفقة الدولة والتأمين',
      icon: FileText,
      color: 'blue',
      articles: guideArticles.map((a) => ({
        id: a.id,
        title: a.title,
        excerpt: a.excerpt,
        href: `/guide/${a.id}`,
      })),
      viewAllHref: '/guide',
      viewAllLabel: `عرض الكل (${guideArticles.length})`,
    },
    {
      id: 'nutrition',
      title: 'التغذية والصحة',
      description: 'أكلات ومشروبات مفيدة',
      icon: Utensils,
      color: 'emerald',
      articles: nutritionArticles.map((a) => ({
        id: a.id,
        title: a.title,
        excerpt: a.excerpt,
        href: `/nutrition/${a.id}`,
      })),
      viewAllHref: '/nutrition',
      viewAllLabel: `عرض الكل (${nutritionArticles.length})`,
    },
    {
      id: 'caregivers',
      title: 'دليل المرافق',
      description: 'نصائح لأفراد العائلة',
      icon: Users,
      color: 'purple',
      articles: caregiversArticles.map((a) => ({
        id: a.id,
        title: a.title,
        excerpt: a.excerpt,
        href: `/caregivers/${a.id}`,
      })),
      viewAllHref: '/caregivers',
      viewAllLabel: `عرض الكل (${caregiversArticles.length})`,
    },
    {
      id: 'learn-more',
      title: 'اتعلم',
      description: cancerTypeTitle ? `مقالات عن ${cancerTypeTitle}` : 'مقالات للمرضى',
      icon: BookOpen,
      color: 'indigo',
      articles: patientArticles.map((a) => ({
        id: a.id,
        title: a.title,
        excerpt: a.excerpt,
        href: a.href,
      })),
      viewAllHref: '/articles',
      viewAllLabel: 'اتعلم أكتر',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>الخطوة الجاية</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            موارد لدعم رحلة العلاج
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            موارد عملية للمرضى ومقدمي الرعاية - من إجراءات العلاج للتغذية للدعم والتوعية
          </p>
        </div>

        {/* Resource Categories Grid - 2x2 on medium screens, 4 cols on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {resourceCategories.map((category) => (
            <ResourceCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
