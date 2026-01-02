'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Activity, BookOpen, AlertTriangle, Layers, Stethoscope, Pill, Shield } from 'lucide-react';
import type { CancerType } from '@/types/cancer-types';
import {
  OverviewSection,
  SymptomsSection,
  StagesSection,
  DiagnosisSection,
  TreatmentSection,
  PreventionSection,
  SupportResourcesSection,
} from './sections';

interface CancerTypeDetailProps {
  cancerType: CancerType;
}

type TabId = 'overview' | 'symptoms' | 'stages' | 'diagnosis' | 'treatment' | 'prevention';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: Tab[] = [
  { id: 'overview', label: 'نظرة عامة', icon: BookOpen },
  { id: 'symptoms', label: 'الأعراض', icon: AlertTriangle },
  { id: 'stages', label: 'المراحل', icon: Layers },
  { id: 'diagnosis', label: 'التشخيص', icon: Stethoscope },
  { id: 'treatment', label: 'العلاج', icon: Pill },
  { id: 'prevention', label: 'الوقاية', icon: Shield },
];

export default function CancerTypeDetail({ cancerType }: CancerTypeDetailProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab') as TabId | null;
  const [activeTab, setActiveTab] = useState<TabId>(tabParam && tabs.some(t => t.id === tabParam) ? tabParam : 'overview');

  const IconComponent =
    (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[cancerType.icon] || Activity;

  const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
    pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-200', light: 'bg-pink-50' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
    red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-200', light: 'bg-red-50' },
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
    cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200', light: 'bg-cyan-50' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
  };

  const colors = colorClasses[cancerType.color] || colorClasses.emerald;

  // Update URL when tab changes without page reload
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', activeTab);
    window.history.replaceState({}, '', url.toString());
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewSection cancerType={cancerType} />;
      case 'symptoms':
        return <SymptomsSection cancerType={cancerType} />;
      case 'stages':
        return <StagesSection cancerType={cancerType} />;
      case 'diagnosis':
        return <DiagnosisSection cancerType={cancerType} />;
      case 'treatment':
        return <TreatmentSection cancerType={cancerType} />;
      case 'prevention':
        return <PreventionSection cancerType={cancerType} />;
      default:
        return <OverviewSection cancerType={cancerType} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`${colors.light} border-b ${colors.border}`}>
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/cancer-types"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لأنواع الأورام</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl ${colors.bg} text-white flex items-center justify-center flex-shrink-0`}>
              <IconComponent className="w-10 h-10" />
            </div>

            {/* Title & Meta */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {cancerType.title}
              </h1>
              <p className="text-gray-500 text-lg mb-4" dir="ltr">
                {cancerType.englishName}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4">
                <div className={`${colors.light} ${colors.text} px-4 py-2 rounded-lg border ${colors.border}`}>
                  <span className="text-xs text-gray-500 block">معدل الانتشار</span>
                  <span className="font-bold">{cancerType.statistics.prevalenceInEgypt}</span>
                </div>
                <div className={`${colors.light} ${colors.text} px-4 py-2 rounded-lg border ${colors.border}`}>
                  <span className="text-xs text-gray-500 block">نسبة الشفاء</span>
                  <span className="font-bold">{cancerType.statistics.survivalRate.split(',')[0]}</span>
                </div>
                <div className={`${colors.light} ${colors.text} px-4 py-2 rounded-lg border ${colors.border}`}>
                  <span className="text-xs text-gray-500 block">الفئة العمرية</span>
                  <span className="font-bold">{cancerType.statistics.commonAgeGroup}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Sticky */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? `${colors.text} border-current`
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {renderTabContent()}
        </div>
      </div>

      {/* Support Resources - Next Steps */}
      <SupportResourcesSection cancerTypeId={cancerType.id} cancerTypeTitle={cancerType.title} />

      {/* Medical Disclaimer */}
      <div className="bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1">تنبيه طبي</h3>
              <p className="text-amber-700 text-sm">
                {cancerType.medicalDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            آخر تحديث: {cancerType.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}
