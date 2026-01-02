'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Heart } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const appName = 'يقين';

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 mt-auto relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Heart className="w-6 h-6 fill-emerald-500 text-emerald-500" />
              <span className="text-2xl font-bold">{appName}</span>
            </div>
            <p className="text-sm leading-loose max-w-md text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Site Sections */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t('sections')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guide" className="hover:text-emerald-400 transition-colors">
                  {tNav('guide')}
                </Link>
              </li>
              <li>
                <Link href="/cancer-types" className="hover:text-emerald-400 transition-colors">
                  {tNav('cancerTypes')}
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="hover:text-emerald-400 transition-colors">
                  {tNav('nutrition')}
                </Link>
              </li>
              <li>
                <Link href="/caregivers" className="hover:text-emerald-400 transition-colors">
                  {tNav('caregivers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t('importantLinks')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('medicalBoards')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('healthInsurance')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('presidentialInitiatives')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {appName}. {t('copyright')}
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-xs">
              FB
            </span>
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-xs">
              IG
            </span>
            <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer text-xs">
              TW
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-gray-600 text-center max-w-2xl mx-auto">
          {t('disclaimer')}
        </p>
      </div>
    </footer>
  );
}
