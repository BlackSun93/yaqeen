'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FileText, Activity, Coffee } from 'lucide-react';

interface QuickAccessGridProps {
  locale: string;
}

export default function QuickAccessGrid({ locale }: QuickAccessGridProps) {
  const t = useTranslations('quickAccess');

  const cards = [
    {
      id: 'guide',
      href: '/guide',
      icon: FileText,
      borderColor: 'border-emerald-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'types',
      href: '/cancer-types',
      icon: Activity,
      borderColor: 'border-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 'nutrition',
      href: '/nutrition',
      icon: Coffee,
      borderColor: 'border-orange-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-20 -mt-20 relative z-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.id}
              href={card.href}
              className={`bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform cursor-pointer border-b-4 ${card.borderColor}`}
            >
              <div
                className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center ${card.iconColor} mb-6`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t(`${card.id}.title`)}
              </h3>
              <p className="text-gray-500">{t(`${card.id}.description`)}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
