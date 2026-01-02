'use client';

import * as LucideIcons from 'lucide-react';
import { Stethoscope, CheckCircle2 } from 'lucide-react';
import type { CancerType, DiagnosisMethod } from '@/types/cancer-types';

interface DiagnosisSectionProps {
  cancerType: CancerType;
}

function DiagnosisMethodCard({ method }: { method: DiagnosisMethod }) {
  const IconComponent = method.icon
    ? (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[method.icon] || Stethoscope
    : Stethoscope;

  const getCostBadge = () => {
    const costColors: Record<string, string> = {
      free: 'bg-emerald-100 text-emerald-700',
      low: 'bg-blue-100 text-blue-700',
      medium: 'bg-amber-100 text-amber-700',
      high: 'bg-red-100 text-red-700',
    };
    const costLabels: Record<string, string> = {
      free: 'مجاني',
      low: 'تكلفة منخفضة',
      medium: 'تكلفة متوسطة',
      high: 'تكلفة عالية',
    };

    if (!method.costLevel) return null;

    return (
      <span className={`text-xs px-2 py-0.5 rounded-full ${costColors[method.costLevel]}`}>
        {costLabels[method.costLevel]}
      </span>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-800">{method.name}</h4>
            {getCostBadge()}
          </div>
          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
          {method.availableInEgypt && (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
              <CheckCircle2 className="w-3 h-3" />
              متوفر في مصر
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DiagnosisSection({ cancerType }: DiagnosisSectionProps) {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-3">كيف يتم التشخيص؟</h3>
        <p className="text-gray-600">{cancerType.diagnosis.overview}</p>
      </div>

      {/* Diagnosis Methods */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">طرق التشخيص</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancerType.diagnosis.methods.map((method) => (
            <DiagnosisMethodCard key={method.id} method={method} />
          ))}
        </div>
      </div>

      {/* Specialists */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
          <Stethoscope className="w-5 h-5" />
          الأطباء المتخصصين
        </h4>
        <div className="flex flex-wrap gap-2">
          {cancerType.diagnosis.specialists.map((specialist, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
            >
              {specialist}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
