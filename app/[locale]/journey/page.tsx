import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import JourneyHub from '@/components/journey/JourneyHub';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'journey' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function JourneyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <JourneyHub locale={locale} />;
}
