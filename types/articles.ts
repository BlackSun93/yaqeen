// Article category types
export type ArticleCategory =
  | 'guide'      // إجراءات العلاج - Treatment procedures
  | 'nutrition'  // التغذية - Nutrition
  | 'caregivers' // مقدمي الرعاية - Caregivers
  | 'awareness'  // التوعية - Awareness
  | 'news'       // أخبار - News
  | 'stories'    // قصص نجاح - Success stories
  | 'research';  // أبحاث - Research

// Extended article interface for the articles hub
export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  icon: string;
  category: ArticleCategory;
  tags?: string[];
  relatedCancerTypes?: string[]; // Optional: link to specific cancer types
  href: string;
  featured?: boolean;
  date?: string;
}

// Category metadata
export interface ArticleCategoryMeta {
  id: ArticleCategory;
  label: string;
  description: string;
  icon: string;
  color: string;
}

// All article categories with metadata
export const articleCategories: ArticleCategoryMeta[] = [
  {
    id: 'guide',
    label: 'إجراءات العلاج',
    description: 'دليلك لنفقة الدولة والتأمين والمبادرات',
    icon: 'FileText',
    color: 'blue',
  },
  {
    id: 'nutrition',
    label: 'التغذية',
    description: 'نصائح غذائية للمرضى والوقاية',
    icon: 'Utensils',
    color: 'emerald',
  },
  {
    id: 'caregivers',
    label: 'مقدمي الرعاية',
    description: 'دعم ونصائح لأفراد العائلة والمرافقين',
    icon: 'Users',
    color: 'purple',
  },
  {
    id: 'awareness',
    label: 'التوعية',
    description: 'معلومات عامة عن السرطان والوقاية',
    icon: 'Lightbulb',
    color: 'amber',
  },
  {
    id: 'stories',
    label: 'قصص نجاح',
    description: 'قصص ملهمة من محاربي السرطان',
    icon: 'Heart',
    color: 'pink',
  },
  {
    id: 'news',
    label: 'أخبار',
    description: 'آخر الأخبار والتطورات الطبية',
    icon: 'Newspaper',
    color: 'cyan',
  },
  {
    id: 'research',
    label: 'أبحاث',
    description: 'أحدث الأبحاث والدراسات العلمية',
    icon: 'FlaskConical',
    color: 'indigo',
  },
];
