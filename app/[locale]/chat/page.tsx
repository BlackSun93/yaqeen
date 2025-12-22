import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ChatInterface from '@/components/chat/ChatInterface';

interface ChatPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ChatPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('chat'),
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ChatInterface locale={locale} />;
}
