import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { CancerTypeDetail } from '@/components/cancer-types';
import { cancerTypes, getCancerTypeById } from '@/content/ar/cancer-types';

interface CancerTypePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return cancerTypes.map((cancerType) => ({
    id: cancerType.id,
  }));
}

export async function generateMetadata({ params }: CancerTypePageProps) {
  const { id } = await params;
  const cancerType = getCancerTypeById(id);

  if (!cancerType) {
    return { title: 'Cancer Type Not Found' };
  }

  return {
    title: `${cancerType.title} | ${cancerType.englishName}`,
    description: cancerType.excerpt,
  };
}

export default async function CancerTypePage({ params }: CancerTypePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const cancerType = getCancerTypeById(id);

  if (!cancerType) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">جاري التحميل...</div>}>
      <CancerTypeDetail cancerType={cancerType} />
    </Suspense>
  );
}
