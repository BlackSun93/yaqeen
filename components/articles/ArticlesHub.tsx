'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Search, BookOpen, Sparkles, ArrowLeft, Filter } from 'lucide-react';
import type { ArticleItem, ArticleCategory, ArticleCategoryMeta } from '@/types/articles';
import { articleCategories } from '@/types/articles';

interface ArticlesHubProps {
  articles: ArticleItem[];
  featuredArticles?: ArticleItem[];
}

// Article Card Component
function ArticleCard({ article }: { article: ArticleItem }) {
  const IconComponent =
    (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[article.icon] ||
    LucideIcons.FileText;

  const categoryMeta = articleCategories.find((c) => c.id === article.category);
  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
    pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-200', light: 'bg-pink-50' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50' },
  };

  const colors = colorClasses[categoryMeta?.color || 'blue'];

  return (
    <Link
      href={article.href}
      className={`block bg-white rounded-2xl border-2 ${colors.border} p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${colors.light} ${colors.text} flex items-center justify-center flex-shrink-0`}>
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Category Badge */}
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${colors.light} ${colors.text} mb-2`}>
            {categoryMeta?.label}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {article.excerpt}
          </p>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow */}
        <ArrowLeft className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
      </div>
    </Link>
  );
}

// Category Filter Pills
function CategoryFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: ArticleCategoryMeta[];
  selectedCategory: ArticleCategory | 'all';
  onCategoryChange: (category: ArticleCategory | 'all') => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        الكل
      </button>
      {categories.map((category) => {
        const IconComponent =
          (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[category.icon] ||
          LucideIcons.FileText;
        const isSelected = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isSelected
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <IconComponent className="w-4 h-4" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default function ArticlesHub({ articles, featuredArticles = [] }: ArticlesHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        article.title.includes(searchQuery) ||
        article.excerpt.includes(searchQuery) ||
        article.tags?.some((tag) => tag.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: articles.length };
    articles.forEach((article) => {
      counts[article.category] = (counts[article.category] || 0) + 1;
    });
    return counts;
  }, [articles]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 border-b border-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              اتعلم
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              مقالات ونصائح شاملة للمرضى - من التغذية للتوعية لقصص النجاح وآخر الأبحاث
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Sticky */}
      <section className="py-4 bg-white sticky top-0 z-30 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">تصفية:</span>
            </div>
            <CategoryFilters
              categories={articleCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Featured Articles - Now under filter */}
      {featuredArticles.length > 0 && selectedCategory === 'all' && searchQuery === '' && (
        <section className="py-8 bg-gradient-to-b from-amber-50 to-white border-b border-amber-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">مقالات مميزة</h2>
                <p className="text-gray-500 text-sm">أهم المقالات والموارد</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {selectedCategory === 'all'
                  ? 'كل المقالات'
                  : articleCategories.find((c) => c.id === selectedCategory)?.label}
              </h2>
              <p className="text-gray-500 text-sm">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'مقال' : 'مقالات'}
              </p>
            </div>
          </div>

          {/* Articles */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-600 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500">
                جرب البحث بكلمات مختلفة أو اختر فئة أخرى
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-6 bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-amber-700 text-sm">
            <strong>تنبيه:</strong> المعلومات المقدمة هنا للتوعية فقط وليست بديلاً عن استشارة الطبيب المتخصص.
          </p>
        </div>
      </section>
    </div>
  );
}
