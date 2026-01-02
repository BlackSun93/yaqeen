'use client';

import { useState, useMemo } from 'react';
import { Heart, Search, TrendingUp, Users, FileText, Utensils, UsersRound, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { CancerType, CancerCategory } from '@/types/cancer-types';
import CancerTypeCard from './CancerTypeCard';
import { CategoryFilter } from './shared';
import { guideArticles } from '@/content/ar/guide';
import { nutritionArticles } from '@/content/ar/nutrition';
import { caregiversArticles } from '@/content/ar/caregivers';
import { allArticles } from '@/content/ar/articles';

interface CancerTypesHubProps {
  cancerTypes: CancerType[];
}

const categoryLabels: Record<CancerCategory, string> = {
  breast: 'سرطان الثدي',
  digestive: 'الجهاز الهضمي',
  blood: 'سرطان الدم',
  urological: 'الجهاز البولي',
  gynecological: 'أمراض النساء',
  respiratory: 'الجهاز التنفسي',
  endocrine: 'الغدد الصماء',
  neurological: 'الجهاز العصبي',
};

export default function CancerTypesHub({ cancerTypes }: CancerTypesHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<CancerCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories from available cancer types
  const availableCategories = useMemo(() => {
    const categories = new Set<CancerCategory>();
    cancerTypes.forEach((ct) => categories.add(ct.category));
    return Array.from(categories);
  }, [cancerTypes]);

  // Filter cancer types by category and search
  const filteredCancerTypes = useMemo(() => {
    return cancerTypes.filter((ct) => {
      const matchesCategory = selectedCategory === 'all' || ct.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        ct.title.includes(searchQuery) ||
        ct.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ct.excerpt.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [cancerTypes, selectedCategory, searchQuery]);

  // Get featured/most common cancer types for Egypt
  const featuredTypes = useMemo(() => {
    // Priority: Liver, Breast, Bladder, Lung (most common in Egypt)
    const priorityOrder = ['liver', 'breast', 'bladder', 'lung'];
    return cancerTypes
      .filter((ct) => priorityOrder.includes(ct.id))
      .sort((a, b) => priorityOrder.indexOf(a.id) - priorityOrder.indexOf(b.id))
      .slice(0, 4);
  }, [cancerTypes]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 border-b border-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أنواع الأورام
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              معلومات شاملة ومفصلة عن أنواع السرطان المختلفة، الأعراض، طرق التشخيص والعلاج،
              مع التركيز على البيانات والمراكز المتاحة في مصر
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن نوع السرطان..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - Most Common in Egypt */}
      {featuredTypes.length > 0 && selectedCategory === 'all' && searchQuery === '' && (
        <section className="py-8 border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">الأكثر انتشاراً في مصر</h2>
                <p className="text-gray-500 text-sm">أنواع السرطان الأكثر شيوعاً في مصر</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredTypes.map((cancerType) => (
                <CancerTypeCard key={cancerType.id} cancerType={cancerType} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-6 bg-white sticky top-0 z-30 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <CategoryFilter
            categories={availableCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categoryLabels={categoryLabels}
          />
        </div>
      </section>

      {/* All Cancer Types */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedCategory === 'all' ? 'كل أنواع السرطان' : categoryLabels[selectedCategory]}
                </h2>
                <p className="text-gray-500 text-sm">
                  {filteredCancerTypes.length} {filteredCancerTypes.length === 1 ? 'نوع' : 'أنواع'}
                </p>
              </div>
            </div>
          </div>

          {filteredCancerTypes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCancerTypes.map((cancerType) => (
                <CancerTypeCard key={cancerType.id} cancerType={cancerType} />
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

      {/* CTA - Screening */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              الكشف المبكر ينقذ الأرواح
            </h2>
            <p className="text-gray-600 mb-6">
              اعمل فحص الكشف المبكر الآن لتعرف إذا كنت محتاج تعمل فحوصات طبية
            </p>
            <Link
              href="/screening"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <Heart className="w-5 h-5" />
              ابدأ فحص الكشف المبكر
            </Link>
          </div>
        </div>
      </section>

      {/* Support Resources Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">موارد لدعم رحلة العلاج</h2>
              <p className="text-gray-500">مقالات ونصائح عملية للمرضى ومقدمي الرعاية</p>
            </div>
          </div>

          {/* Resources Grid - 3 Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Guide Articles */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">إجراءات العلاج</h3>
              </div>
              <div className="space-y-3">
                {guideArticles.slice(0, 3).map((article) => (
                  <Link
                    key={article.id}
                    href={`/guide/${article.id}`}
                    className="block bg-white rounded-lg p-3 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 group-hover:text-blue-600 font-medium text-sm">
                        {article.title}
                      </span>
                      <ArrowLeft className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/guide"
                className="block text-center text-blue-600 text-sm font-medium mt-4 hover:underline"
              >
                عرض كل الإجراءات
              </Link>
            </div>

            {/* Nutrition Articles */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-emerald-800">التغذية والصحة</h3>
              </div>
              <div className="space-y-3">
                {nutritionArticles.slice(0, 3).map((article) => (
                  <Link
                    key={article.id}
                    href={`/nutrition/${article.id}`}
                    className="block bg-white rounded-lg p-3 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 group-hover:text-emerald-600 font-medium text-sm">
                        {article.title}
                      </span>
                      <ArrowLeft className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/nutrition"
                className="block text-center text-emerald-600 text-sm font-medium mt-4 hover:underline"
              >
                عرض كل نصائح التغذية
              </Link>
            </div>

            {/* Caregiver Articles */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                  <UsersRound className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-purple-800">دليل المرافق</h3>
              </div>
              <div className="space-y-3">
                {caregiversArticles.slice(0, 3).map((article) => (
                  <Link
                    key={article.id}
                    href={`/caregivers/${article.id}`}
                    className="block bg-white rounded-lg p-3 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 group-hover:text-purple-600 font-medium text-sm">
                        {article.title}
                      </span>
                      <ArrowLeft className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/caregivers"
                className="block text-center text-purple-600 text-sm font-medium mt-4 hover:underline"
              >
                عرض كل نصائح المرافقين
              </Link>
            </div>
          </div>

          {/* Learn More - Patient Articles CTA */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">اتعلم أكتر</h3>
              <p className="text-gray-600 mb-4">
                مقالات عن التغذية، التوعية، قصص نجاح، وآخر الأخبار والأبحاث
              </p>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                اتعلم
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-6 bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-amber-700 text-sm">
            <strong>تنبيه:</strong> المعلومات المقدمة هنا للتوعية فقط وليست بديلاً عن استشارة الطبيب المتخصص.
            إذا كنت تعاني من أي أعراض، يرجى استشارة طبيبك فوراً.
          </p>
        </div>
      </section>
    </div>
  );
}
