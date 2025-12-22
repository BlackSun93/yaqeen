import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import QuickAccessGrid from '@/components/home/QuickAccessGrid';
import PartnersSection from '@/components/home/PartnersSection';
import EmergencyStrip from '@/components/home/EmergencyStrip';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-fade-in">
      <HeroSection locale={locale} />
      <QuickAccessGrid locale={locale} />
      <PartnersSection locale={locale} />
      <EmergencyStrip locale={locale} />
    </div>
  );
}
