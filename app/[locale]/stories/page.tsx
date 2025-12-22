import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import SectionHeader from '@/components/articles/SectionHeader';
import StoryCard from '@/components/stories/StoryCard';
import ShareStoryCTA from '@/components/stories/ShareStoryCTA';
import { hopeStories } from '@/content/ar/stories';

interface StoriesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: StoriesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('stories'),
  };
}

export default async function StoriesPage({ params }: StoriesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  const subtitle = locale === 'ar'
    ? 'الأمل موجود وحقيقي. دي قصص ناس زيك عدوا من المحنة وبقوا أقوى'
    : 'Hope is real. These are stories of people like you who overcame and became stronger';

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <SectionHeader title={t('stories')} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {hopeStories.map((story) => (
          <StoryCard key={story.id} story={story} locale={locale} />
        ))}
      </div>

      <ShareStoryCTA locale={locale} />
    </div>
  );
}
