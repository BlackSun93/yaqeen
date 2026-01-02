import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { CancerTypesHub } from '@/components/cancer-types';
import { cancerTypes } from '@/content/ar/cancer-types';

interface CancerTypesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CancerTypesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('cancerTypes'),
    description: 'معلومات شاملة ومفصلة عن أنواع السرطان المختلفة، الأعراض، طرق التشخيص والعلاج، مع التركيز على البيانات والمراكز المتاحة في مصر',
  };
}

export default async function CancerTypesPage({ params }: CancerTypesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CancerTypesHub cancerTypes={cancerTypes} />;
}
