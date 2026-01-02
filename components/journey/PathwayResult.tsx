'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Phone, Globe, CheckCircle, FileText, Lightbulb, RotateCcw, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HealthcarePathway } from '@/types/journey';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PathwayResultProps {
  pathway: HealthcarePathway;
  onRestart: () => void;
  onBackToMap: () => void;
  locale: string;
}

const colorVariants: Record<string, { bg: string; border: string; text: string; light: string }> = {
  blue: {
    bg: 'bg-blue-600',
    border: 'border-blue-200',
    text: 'text-blue-600',
    light: 'bg-blue-50',
  },
  emerald: {
    bg: 'bg-emerald-600',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    light: 'bg-emerald-50',
  },
  orange: {
    bg: 'bg-orange-600',
    border: 'border-orange-200',
    text: 'text-orange-600',
    light: 'bg-orange-50',
  },
  purple: {
    bg: 'bg-purple-600',
    border: 'border-purple-200',
    text: 'text-purple-600',
    light: 'bg-purple-50',
  },
  pink: {
    bg: 'bg-pink-600',
    border: 'border-pink-200',
    text: 'text-pink-600',
    light: 'bg-pink-50',
  },
  gray: {
    bg: 'bg-gray-600',
    border: 'border-gray-200',
    text: 'text-gray-600',
    light: 'bg-gray-50',
  },
};

export default function PathwayResult({ pathway, onRestart, onBackToMap, locale }: PathwayResultProps) {
  const t = useTranslations('journey');
  const colors = colorVariants[pathway.color] || colorVariants.blue;

  const getIcon = (iconName: string): LucideIcon => {
    return (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Building2;
  };

  const PathwayIcon = getIcon(pathway.icon);

  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t('restart')}</span>
        </button>
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">{t('backToMap')}</span>
        </button>
      </div>

      {/* Result Card */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header */}
        <div className={cn('p-6 text-white', colors.bg)}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <PathwayIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm opacity-80 mb-1">مسارك العلاجي</div>
              <h2 className="text-2xl font-bold">{t(pathway.titleKey)}</h2>
            </div>
          </div>
          <p className="mt-4 text-white/90">{t(pathway.descriptionKey)}</p>

          {/* Eligibility if available */}
          {pathway.eligibilityKey && (
            <div className="mt-4 bg-white/10 rounded-xl p-3">
              <p className="text-sm">{t(pathway.eligibilityKey)}</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Steps */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className={cn('w-5 h-5', colors.text)} />
              <h3 className="font-bold text-gray-800">{t('steps')}</h3>
            </div>
            <div className="space-y-3">
              {pathway.stepsKeys.map((stepKey, index) => (
                <div
                  key={stepKey}
                  className={cn(
                    'flex items-start gap-3 p-3 rounded-xl',
                    colors.light
                  )}
                >
                  <div className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0',
                    colors.bg
                  )}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{t(stepKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className={cn('w-5 h-5', colors.text)} />
              <h3 className="font-bold text-gray-800">{t('requiredDocs')}</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <ul className="space-y-2">
                {pathway.documentsKeys.map((docKey) => (
                  <li key={docKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {t(docKey)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips */}
          {pathway.tipsKeys && pathway.tipsKeys.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-gray-800">{t('tips')}</h3>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <ul className="space-y-2">
                  {pathway.tipsKeys.map((tipKey) => (
                    <li key={tipKey} className="flex items-start gap-2 text-amber-800">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {t(tipKey)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Contact Info */}
          {pathway.contactInfo && (
            <div className="flex flex-wrap gap-3">
              {pathway.contactInfo.hotline && (
                <a
                  href={`tel:${pathway.contactInfo.hotline}`}
                  className={cn(
                    'flex items-center gap-2 px-4 py-3 rounded-xl text-white font-medium',
                    colors.bg
                  )}
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('callNow')}: {pathway.contactInfo.hotline}</span>
                </a>
              )}
              {pathway.contactInfo.website && (
                <a
                  href={pathway.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{t('visitWebsite')}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3 px-6 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {t('restart')}
        </button>
        <button
          onClick={onBackToMap}
          className="flex-1 py-3 px-6 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          {t('backToMap')}
          <Home className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
