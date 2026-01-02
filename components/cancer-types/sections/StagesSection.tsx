'use client';

import type { CancerType } from '@/types/cancer-types';
import { StageVisualizer } from '../shared';

interface StagesSectionProps {
  cancerType: CancerType;
}

export default function StagesSection({ cancerType }: StagesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-2">مراحل المرض</h3>
        <p className="text-gray-600 text-sm mb-6">
          تحديد مرحلة السرطان مهم جداً لتحديد خطة العلاج المناسبة. كل مرحلة لها نسبة شفاء وطريقة علاج مختلفة.
        </p>
        <StageVisualizer stages={cancerType.stages} color={cancerType.color} />
      </div>

      {/* Stage Legend */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h4 className="font-bold text-blue-800 mb-3">ملاحظات مهمة</h4>
        <ul className="space-y-2 text-blue-700 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
            نسب الشفاء تقريبية وتختلف حسب حالة كل مريض
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
            الكشف المبكر يزيد من نسبة الشفاء بشكل كبير
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
            خطة العلاج يحددها الطبيب حسب نوع الورم ومرحلته
          </li>
        </ul>
      </div>
    </div>
  );
}
