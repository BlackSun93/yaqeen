export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  icon?: string;
  tags?: string[];
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  quote: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Partner {
  name: string;
  nameEn: string;
  color: string;
  bg: string;
}

export type Locale = 'ar' | 'en';
