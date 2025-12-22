'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Heart, BookOpen, Smile, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');

  const stats = [
    { value: '+14', label: tStats('hospitals') },
    { value: '+5000', label: tStats('recoveries') },
    { value: '+120', label: tStats('doctors') },
  ];

  return (
    <header className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-b-[4rem] overflow-hidden min-h-[85vh] flex items-center">
      {/* Abstract Background Patterns */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-emerald-100 text-sm font-semibold mb-6 border border-white/20">
              <Heart className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              {t('badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {t('title')}
              <br />
              <span className="text-emerald-300">{t('titleHighlight')}</span>
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 opacity-90">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md active:scale-95 bg-white text-emerald-800 border-2 border-emerald-100 hover:border-emerald-600 hover:bg-emerald-50"
              >
                <BookOpen className="w-5 h-5" />
                {t('ctaGuide')}
              </Link>
              <Link
                href="/stories"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md active:scale-95 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Smile className="w-5 h-5" />
                {t('ctaStories')}
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md active:scale-95 bg-emerald-500 text-white hover:bg-emerald-400"
              >
                <MessageCircle className="w-5 h-5" />
                {t('ctaChat')}
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-white/10 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
                  <p className="text-xs text-emerald-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Abstract shapes representing people supporting each other */}
                <div className="absolute bottom-0 w-32 h-48 bg-emerald-300/30 rounded-t-full left-1/4 backdrop-blur-md" />
                <div className="absolute bottom-0 w-40 h-56 bg-emerald-100/30 rounded-t-full right-1/4 backdrop-blur-md z-10" />
                <Heart
                  className="w-40 h-40 text-white drop-shadow-2xl z-20"
                  fill="rgba(255,255,255,0.2)"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      {locale === 'ar' ? 'طوارئ الصحة' : 'Health Emergency'}
                    </p>
                    <p className="font-bold text-gray-800 dir-ltr">105</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-4 bg-white p-4 rounded-2xl shadow-xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      {locale === 'ar' ? 'نفقة الدولة' : 'State Funding'}
                    </p>
                    <p className="font-bold text-gray-800 text-xs">
                      {locale === 'ar' ? 'متاح للجميع' : 'Available to all'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
