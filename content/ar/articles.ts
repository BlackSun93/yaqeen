import type { ArticleItem, ArticleCategory } from '@/types/articles';
import { guideArticles } from './guide';
import { nutritionArticles } from './nutrition';
import { caregiversArticles } from './caregivers';
import { cancerTypes } from './cancer-types';

// Convert guide articles to ArticleItem format
const guideItems: ArticleItem[] = guideArticles.map((article) => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  icon: article.icon || 'FileText',
  category: 'guide' as ArticleCategory,
  tags: article.tags,
  href: `/guide/${article.id}`,
  featured: article.id === 'g1', // Government funding is featured
}));

// Convert nutrition articles to ArticleItem format
const nutritionItems: ArticleItem[] = nutritionArticles.map((article) => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  icon: article.icon || 'Utensils',
  category: 'nutrition' as ArticleCategory,
  tags: article.tags,
  href: `/nutrition/${article.id}`,
  featured: article.id === 'n1', // Immune-boosting foods is featured
}));

// Convert caregiver articles to ArticleItem format
const caregiverItems: ArticleItem[] = caregiversArticles.map((article) => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  icon: article.icon || 'Users',
  category: 'caregivers' as ArticleCategory,
  href: `/caregivers/${article.id}`,
}));

// Convert cancer types overviews to awareness articles
const awarenessItems: ArticleItem[] = cancerTypes.map((ct) => ({
  id: `awareness-${ct.id}`,
  title: `ما هو ${ct.title}؟`,
  excerpt: ct.excerpt,
  icon: ct.icon,
  category: 'awareness' as ArticleCategory,
  tags: ['توعية', ct.title],
  relatedCancerTypes: [ct.id],
  href: `/cancer-types/${ct.id}`,
}));

// Additional awareness articles
const generalAwarenessItems: ArticleItem[] = [
  {
    id: 'awareness-early-detection',
    title: 'أهمية الكشف المبكر',
    excerpt: 'الكشف المبكر بينقذ حياة. اعرف ليه الفحص الدوري مهم وإزاي بيزود فرص الشفاء.',
    icon: 'Search',
    category: 'awareness',
    tags: ['كشف مبكر', 'وقاية'],
    href: '/screening',
    featured: true,
  },
  {
    id: 'awareness-symptoms',
    title: 'علامات تحذيرية لازم تنتبه ليها',
    excerpt: 'أعراض عامة ممكن تكون مؤشر على مشاكل صحية وتستدعي زيارة الطبيب.',
    icon: 'AlertTriangle',
    category: 'awareness',
    tags: ['أعراض', 'تحذير'],
    href: '/cancer-types',
  },
];

// Success stories (placeholder - can be expanded)
const storyItems: ArticleItem[] = [
  {
    id: 'story-1',
    title: 'رحلتي مع سرطان الثدي',
    excerpt: 'قصة نجاح ملهمة من سيدة مصرية تغلبت على المرض بالإيمان والعزيمة.',
    icon: 'Heart',
    category: 'stories',
    tags: ['قصة نجاح', 'سرطان الثدي'],
    relatedCancerTypes: ['breast'],
    href: '/stories',
    featured: true,
  },
  {
    id: 'story-2',
    title: 'من التشخيص للشفاء',
    excerpt: 'أب مصري يحكي تجربته مع سرطان القولون وكيف تغلب عليه.',
    icon: 'Heart',
    category: 'stories',
    tags: ['قصة نجاح', 'سرطان القولون'],
    relatedCancerTypes: ['colon'],
    href: '/stories',
  },
];

// News items (placeholder - can be expanded)
const newsItems: ArticleItem[] = [
  {
    id: 'news-1',
    title: 'افتتاح مركز أورام جديد في الصعيد',
    excerpt: 'وزارة الصحة تفتتح مركز متخصص لعلاج الأورام في محافظة أسيوط.',
    icon: 'Newspaper',
    category: 'news',
    tags: ['أخبار', 'مراكز علاج'],
    href: '#',
    date: '2024-12',
  },
  {
    id: 'news-2',
    title: 'علاج جديد للسرطان يحقق نتائج واعدة',
    excerpt: 'دراسة مصرية تكشف عن نتائج إيجابية لعلاج مناعي جديد.',
    icon: 'Newspaper',
    category: 'news',
    tags: ['أخبار', 'أبحاث'],
    href: '#',
    date: '2024-11',
  },
];

// Research items (placeholder - can be expanded)
const researchItems: ArticleItem[] = [
  {
    id: 'research-1',
    title: 'دراسة: العلاقة بين التغذية والوقاية من السرطان',
    excerpt: 'بحث علمي يؤكد أهمية النظام الغذائي الصحي في تقليل خطر الإصابة.',
    icon: 'FlaskConical',
    category: 'research',
    tags: ['أبحاث', 'تغذية', 'وقاية'],
    href: '#',
  },
  {
    id: 'research-2',
    title: 'تطورات في العلاج المناعي للأورام',
    excerpt: 'مراجعة لأحدث التطورات في استخدام العلاج المناعي لعلاج السرطان.',
    icon: 'FlaskConical',
    category: 'research',
    tags: ['أبحاث', 'علاج مناعي'],
    href: '#',
  },
];

// Combine all articles
export const allArticles: ArticleItem[] = [
  ...guideItems,
  ...nutritionItems,
  ...caregiverItems,
  ...awarenessItems,
  ...generalAwarenessItems,
  ...storyItems,
  ...newsItems,
  ...researchItems,
];

// Helper functions
export function getArticlesByCategory(category: ArticleCategory): ArticleItem[] {
  return allArticles.filter((article) => article.category === category);
}

export function getFeaturedArticles(): ArticleItem[] {
  return allArticles.filter((article) => article.featured);
}

export function getArticlesByCancerType(cancerTypeId: string): ArticleItem[] {
  return allArticles.filter(
    (article) => article.relatedCancerTypes?.includes(cancerTypeId)
  );
}

export function searchArticles(query: string): ArticleItem[] {
  const lowerQuery = query.toLowerCase();
  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
