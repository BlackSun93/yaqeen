'use client';

import { useTranslations } from 'next-intl';
import { Award } from 'lucide-react';

interface PartnersSectionProps {
  locale: string;
}

const partners = [
  { nameAr: 'وزارة الصحة والسكان', nameEn: 'Ministry of Health', color: 'text-blue-600', bg: 'bg-blue-50' },
  { nameAr: 'مستشفى 57357', nameEn: '57357 Hospital', color: 'text-red-600', bg: 'bg-red-50' },
  { nameAr: 'مؤسسة بهية', nameEn: 'Baheya Foundation', color: 'text-pink-600', bg: 'bg-pink-50' },
  { nameAr: 'المعهد القومي للأورام', nameEn: 'National Cancer Institute', color: 'text-emerald-800', bg: 'bg-emerald-50' },
  { nameAr: 'شفاء الأورمان', nameEn: 'Shefaa Al-Orman', color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function PartnersSection({ locale }: PartnersSectionProps) {
  const t = useTranslations('partners');

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 font-semibold mb-8">{t('title')}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div
                className={`w-16 h-16 rounded-full ${partner.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
              >
                <Award className={`w-8 h-8 ${partner.color}`} />
              </div>
              <span className="text-sm font-bold text-gray-700">
                {locale === 'ar' ? partner.nameAr : partner.nameEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
