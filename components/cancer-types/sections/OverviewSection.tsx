'use client';

import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { CancerType } from '@/types/cancer-types';
import { StatisticsCard } from '../shared';

interface OverviewSectionProps {
  cancerType: CancerType;
}

export default function OverviewSection({ cancerType }: OverviewSectionProps) {
  return (
    <div className="space-y-8">
      {/* Overview Text */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-start gap-3 mb-4">
          <Info className={`w-6 h-6 text-${cancerType.color}-500 flex-shrink-0 mt-1`} />
          <h3 className="text-xl font-bold text-gray-800">نظرة عامة</h3>
        </div>
        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
          {cancerType.overview}
        </div>
      </div>

      {/* Statistics */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">الإحصائيات في مصر</h3>
        <StatisticsCard statistics={cancerType.statistics} color={cancerType.color} />
      </div>

      {/* Egypt Specific Factors */}
      {cancerType.statistics.egyptSpecificFactors && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-800 mb-1">عوامل خاصة بمصر</h4>
              <p className="text-amber-700 text-sm">
                {cancerType.statistics.egyptSpecificFactors}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Key Points */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          نقاط مهمة
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-emerald-700 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            نسبة الشفاء: {cancerType.statistics.survivalRate}
          </li>
          <li className="flex items-start gap-2 text-emerald-700 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
            الفئة العمرية الأكثر شيوعاً: {cancerType.statistics.commonAgeGroup}
          </li>
          {cancerType.prevention.screeningRecommendation && (
            <li className="flex items-start gap-2 text-emerald-700 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              الكشف المبكر متاح ومهم للوقاية والعلاج
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
