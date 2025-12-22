'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Heart, Menu, X, Phone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  locale: string;
}

const navItems = [
  { id: 'home', href: '/' },
  { id: 'guide', href: '/guide' },
  { id: 'cancerTypes', href: '/cancer-types' },
  { id: 'nutrition', href: '/nutrition' },
  { id: 'caregivers', href: '/caregivers' },
  { id: 'stories', href: '/stories' },
  { id: 'chat', href: '/chat' },
];

export default function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tEmergency = useTranslations('emergency');
  const pathname = usePathname();
  const isRTL = locale === 'ar';

  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  const otherLocaleLabel = locale === 'ar' ? 'English' : 'عربي';

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              {locale === 'ar' ? 'يقين' : 'Yaqeen'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  pathname === item.href
                    ? 'bg-white text-emerald-600 shadow-sm font-bold'
                    : 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100'
                )}
              >
                {t(item.id)}
              </Link>
            ))}
          </div>

          {/* Right Section: Language + Emergency */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <Globe className="w-4 h-4" />
              {otherLocaleLabel}
            </Link>

            {/* Emergency */}
            <div className="flex items-center gap-3">
              <div className={cn('flex flex-col text-xs text-gray-500', isRTL ? 'items-end' : 'items-start')}>
                <span>{tEmergency('title')}</span>
                <span className="font-bold text-gray-800 text-lg leading-none dir-ltr">105</span>
              </div>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 animate-pulse">
                <Phone className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl z-50 animate-slide-down">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'p-4 rounded-xl transition-colors flex items-center justify-between',
                  pathname === item.href
                    ? 'bg-emerald-50 text-emerald-700 font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                {t(item.id)}
                {pathname === item.href && (
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <Link
              href={pathname}
              locale={otherLocale}
              onClick={() => setMobileMenuOpen(false)}
              className="p-4 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2 border-t border-gray-100 mt-2 pt-4"
            >
              <Globe className="w-5 h-5" />
              {otherLocaleLabel}
            </Link>

            {/* Mobile Emergency Numbers */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-center text-xs text-gray-400 mb-2">
                {tEmergency('title')}
              </p>
              <div className="flex justify-center gap-4">
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-sm font-bold">
                  105
                </span>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-bold">
                  15300
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
