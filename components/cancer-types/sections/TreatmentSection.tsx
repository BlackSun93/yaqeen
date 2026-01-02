'use client';

import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { Pill, CheckCircle2, Info, Sparkles, ArrowLeft } from 'lucide-react';
import type { CancerType, TreatmentOption } from '@/types/cancer-types';
import { TreatmentCenterCard } from '../shared';

interface TreatmentSectionProps {
  cancerType: CancerType;
}

function TreatmentOptionCard({ option }: { option: TreatmentOption }) {
  const IconComponent = option.icon
    ? (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[option.icon] || Pill
    : Pill;

  const typeColors: Record<string, { bg: string; text: string }> = {
    surgery: { bg: 'bg-blue-100', text: 'text-blue-700' },
    chemotherapy: { bg: 'bg-purple-100', text: 'text-purple-700' },
    radiation: { bg: 'bg-amber-100', text: 'text-amber-700' },
    immunotherapy: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
    targeted: { bg: 'bg-pink-100', text: 'text-pink-700' },
    hormone: { bg: 'bg-cyan-100', text: 'text-cyan-700' },
    stemCell: { bg: 'bg-red-100', text: 'text-red-700' },
    other: { bg: 'bg-gray-100', text: 'text-gray-700' },
  };

  const typeLabels: Record<string, string> = {
    surgery: 'جراحة',
    chemotherapy: 'كيماوي',
    radiation: 'إشعاعي',
    immunotherapy: 'مناعي',
    targeted: 'موجه',
    hormone: 'هرموني',
    stemCell: 'زراعة نخاع',
    other: 'أخرى',
  };

  const colors = typeColors[option.type] || typeColors.other;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-800">{option.name}</h4>
            <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
              {typeLabels[option.type]}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{option.description}</p>
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
            <CheckCircle2 className="w-3 h-3" />
            {option.availableInEgypt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TreatmentSection({ cancerType }: TreatmentSectionProps) {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-3">خيارات العلاج</h3>
        <p className="text-gray-600">{cancerType.treatment.overview}</p>
      </div>

      {/* Treatment Options */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">أنواع العلاج المتاحة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancerType.treatment.options.map((option) => (
            <TreatmentOptionCard key={option.id} option={option} />
          ))}
        </div>
      </div>

      {/* Egypt Specific Notes */}
      {cancerType.treatment.egyptSpecificNotes && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-800 mb-1">ملاحظات عن العلاج في مصر</h4>
              <p className="text-emerald-700 text-sm">
                {cancerType.treatment.egyptSpecificNotes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Centers */}
      {cancerType.treatment.centersInEgypt.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">مراكز العلاج في مصر</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cancerType.treatment.centersInEgypt.map((center) => (
              <TreatmentCenterCard key={center.id} center={center} />
            ))}
          </div>
        </div>
      )}

      {/* Free Treatment Callout */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue-800 mb-2">
              تقدر تتعالج مجاناً أو بتكلفة بسيطة
            </h4>
            <p className="text-blue-700 mb-4">
              فيه طرق كتير تقدر تاخد العلاج من خلالها بدون ما تتحمل تكاليف كبيرة -
              نفقة الدولة، التأمين الصحي، والمبادرات الرئاسية.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guide/g1"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <span>نفقة الدولة</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/guide/g2"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                <span>التأمين الصحي</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/guide/g3"
                className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                <span>المبادرات الرئاسية</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
