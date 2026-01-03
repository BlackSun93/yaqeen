'use client';

import * as LucideIcons from 'lucide-react';
import { Shield, CheckCircle2, AlertCircle, Calendar, Link as LinkIcon, Utensils, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { CancerType, RiskFactor } from '@/types/cancer-types';

interface PreventionSectionProps {
  cancerType: CancerType;
}

function RiskFactorCard({ factor }: { factor: RiskFactor }) {
  const IconComponent = factor.icon
    ? (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[factor.icon] || AlertCircle
    : AlertCircle;

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border ${
        factor.modifiable
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          factor.modifiable ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-600'
        }`}
      >
        <IconComponent className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={`font-bold ${factor.modifiable ? 'text-emerald-800' : 'text-gray-800'}`}>
            {factor.title}
          </h4>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              factor.modifiable
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {factor.modifiable ? 'يمكن تغييره' : 'غير قابل للتغيير'}
          </span>
        </div>
        <p className={`text-sm ${factor.modifiable ? 'text-emerald-700' : 'text-gray-600'}`}>
          {factor.description}
        </p>
      </div>
    </div>
  );
}

export default function PreventionSection({ cancerType }: PreventionSectionProps) {
  const preventionLabels: Record<string, { text: string; color: string }> = {
    yes: { text: 'الوقاية ممكنة بشكل كبير', color: 'emerald' },
    partial: { text: 'الوقاية ممكنة جزئياً', color: 'amber' },
    limited: { text: 'إمكانية الوقاية محدودة', color: 'red' },
  };

  const preventionInfo = preventionLabels[cancerType.prevention.possible] || preventionLabels.partial;

  return (
    <div className="space-y-8">
      {/* Prevention Possibility */}
      <div className={`bg-${preventionInfo.color}-50 border border-${preventionInfo.color}-200 rounded-xl p-4`}>
        <div className="flex items-center gap-3">
          <Shield className={`w-8 h-8 text-${preventionInfo.color}-600`} />
          <div>
            <h3 className={`font-bold text-${preventionInfo.color}-800`}>
              {preventionInfo.text}
            </h3>
            <p className={`text-${preventionInfo.color}-700 text-sm`}>
              {cancerType.prevention.possible === 'yes'
                ? 'اتباع نمط حياة صحي يقلل بشكل كبير من خطر الإصابة'
                : cancerType.prevention.possible === 'partial'
                ? 'بعض عوامل الخطر يمكن التحكم فيها، وبعضها لا'
                : 'معظم عوامل الخطر غير قابلة للتحكم، لكن الكشف المبكر مهم جداً'}
            </p>
          </div>
        </div>
      </div>

      {/* Risk Factors */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">عوامل الخطر</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancerType.riskFactors.map((factor) => (
            <RiskFactorCard key={factor.id} factor={factor} />
          ))}
        </div>
      </div>

      {/* Prevention Measures */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">طرق الوقاية</h3>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <ul className="space-y-3">
            {cancerType.prevention.measures.map((measure, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Screening Recommendation */}
      {cancerType.prevention.screeningRecommendation && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            توصيات الفحص الدوري
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="text-blue-600 font-bold block mb-1">من؟</span>
              <span className="text-gray-700 text-sm">
                {cancerType.prevention.screeningRecommendation.who}
              </span>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="text-blue-600 font-bold block mb-1">كل كام؟</span>
              <span className="text-gray-700 text-sm">
                {cancerType.prevention.screeningRecommendation.frequency}
              </span>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <span className="text-blue-600 font-bold block mb-1">إزاي؟</span>
              <span className="text-gray-700 text-sm">
                {cancerType.prevention.screeningRecommendation.method}
              </span>
            </div>
          </div>

          {cancerType.prevention.screeningRecommendation.linkedSurveyId && (
            <Link
              href={`/screening?survey=${cancerType.prevention.screeningRecommendation.linkedSurveyId}`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <LinkIcon className="w-4 h-4" />
              اعمل الفحص الآن
            </Link>
          )}
        </div>
      )}

      {/* Nutrition Callout */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-emerald-800 mb-2">
              التغذية السليمة بتفرق
            </h4>
            <p className="text-emerald-700 mb-4">
              الأكل الصحي بيساعد في الوقاية وبيقوي الجسم أثناء العلاج.
              اعرف إيه الأكلات اللي بترفع المناعة وإيه اللي لازم تتجنبه.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nutrition/n1"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                <span>أكلات لرفع المناعة</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/nutrition/n2"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 border border-emerald-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors"
              >
                <span>ممنوعات الكيماوي</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
