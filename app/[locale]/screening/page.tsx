import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ScreeningHub from '@/components/screening/ScreeningHub';

interface ScreeningPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ScreeningPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('screening'),
  };
}

export default async function ScreeningPage({ params }: ScreeningPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ScreeningHub locale={locale} />;
}
