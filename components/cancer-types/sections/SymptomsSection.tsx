'use client';

import * as LucideIcons from 'lucide-react';
import { AlertCircle, AlertTriangle } from 'lucide-react';
import type { CancerType, CancerSymptom } from '@/types/cancer-types';

interface SymptomsSectionProps {
  cancerType: CancerType;
}

function SymptomCard({ symptom, color }: { symptom: CancerSymptom; color: string }) {
  const IconComponent = symptom.icon
    ? (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[symptom.icon] || AlertCircle
    : AlertCircle;

  const isUrgent = symptom.warningLevel === 'urgent';

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border ${
        isUrgent
          ? 'bg-red-50 border-red-200'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUrgent ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
        }`}
      >
        <IconComponent className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className={`${isUrgent ? 'text-red-800' : 'text-gray-700'}`}>
          {symptom.description}
        </p>
        {isUrgent && (
          <span className="inline-flex items-center gap-1 text-xs text-red-600 mt-1">
            <AlertTriangle className="w-3 h-3" />
            عرض مهم - استشر الطبيب
          </span>
        )}
      </div>
    </div>
  );
}

export default function SymptomsSection({ cancerType }: SymptomsSectionProps) {
  return (
    <div className="space-y-8">
      {/* Early Symptoms */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          الأعراض المبكرة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancerType.symptoms.early.map((symptom) => (
            <SymptomCard key={symptom.id} symptom={symptom} color={cancerType.color} />
          ))}
        </div>
      </div>

      {/* Advanced Symptoms */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          الأعراض المتقدمة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancerType.symptoms.advanced.map((symptom) => (
            <SymptomCard key={symptom.id} symptom={symptom} color={cancerType.color} />
          ))}
        </div>
      </div>

      {/* Warning Signs */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-amber-800 text-lg mb-2">
              علامات تحذيرية مهمة
            </h4>
            <p className="text-amber-700">
              {cancerType.symptoms.warningSigns}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
