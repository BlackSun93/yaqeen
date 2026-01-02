'use client';

import { useTranslations } from 'next-intl';
import { Phone } from 'lucide-react';

interface EmergencyStripProps {
  locale: string;
}

export default function EmergencyStrip({ locale }: EmergencyStripProps) {
  const t = useTranslations('emergency');

  const numbers = [
    { number: '105', label: t('health') },
    { number: '19555', label: t('cancerInstitute') },
    { number: '15300', label: t('insurance') },
  ];

  return (
    <div className="bg-emerald-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-right gap-6">
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6" />
          <div>
            <h3 className="text-xl font-bold">
              أرقام تهمك
            </h3>
            <p className="text-emerald-100 text-sm">
              احفظ الأرقام دي عندك للطوارئ أو الاستفسار
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {numbers.map((item) => (
            <div
              key={item.number}
              className="bg-emerald-700 px-4 py-2 rounded-lg text-center"
            >
              <p className="font-mono text-lg font-bold dir-ltr">{item.number}</p>
              <p className="text-xs text-emerald-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
