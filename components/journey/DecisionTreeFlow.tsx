'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DecisionTree, DecisionNode } from '@/types/journey';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface DecisionTreeFlowProps {
  tree: DecisionTree;
  currentNodeId: string;
  onSelectOption: (nextNodeId: string) => void;
  onBack: () => void;
  onBackToMap: () => void;
  locale: string;
}

export default function DecisionTreeFlow({
  tree,
  currentNodeId,
  onSelectOption,
  onBack,
  onBackToMap,
  locale,
}: DecisionTreeFlowProps) {
  const t = useTranslations('journey');
  const currentNode = tree.nodes[currentNodeId];

  const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName) return Icons.Circle;
    return (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Circle;
  };

  if (!currentNode) return null;

  const NodeIcon = getIcon(currentNode.icon);

  // For info type nodes (showing guidance)
  if (currentNode.type === 'info') {
    return (
      <div className="max-w-xl mx-auto animate-fade-in">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            <span>{t('backToQuestion')}</span>
          </button>
          <button
            onClick={onBackToMap}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm">{t('backToMap')}</span>
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <NodeIcon className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              {currentNode.resultKey ? t(currentNode.resultKey) : ''}
            </h2>
          </div>

          {/* Guidance */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentNode.guidanceKey ? t(currentNode.guidanceKey) : ''}
            </p>
          </div>

          {/* Back to Map Button */}
          <button
            onClick={onBackToMap}
            className="mt-6 w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            {t('backToMap')}
          </button>
        </div>
      </div>
    );
  }

  // For question type nodes
  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          <span>{t('backToQuestion')}</span>
        </button>
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">{t('backToMap')}</span>
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
        {/* Tree Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            <NodeIcon className="w-4 h-4" />
            {t(tree.titleKey)}
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          {currentNode.questionKey ? t(currentNode.questionKey) : ''}
        </h2>

        {/* Description if available */}
        {currentNode.descriptionKey && (
          <p className="text-gray-500 text-sm text-center mb-6">
            {t(currentNode.descriptionKey)}
          </p>
        )}

        {/* Options */}
        <div className="space-y-3 mt-6">
          {currentNode.options?.map((option) => {
            const OptionIcon = option.icon ? getIcon(option.icon) : null;

            return (
              <button
                key={option.id}
                onClick={() => onSelectOption(option.nextNodeId)}
                className={cn(
                  'w-full p-4 rounded-2xl border-2 text-right transition-all duration-200',
                  'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50',
                  'flex items-center gap-3 group'
                )}
              >
                {OptionIcon && (
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors">
                    <OptionIcon className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" />
                  </div>
                )}
                <div className="flex-1">
                  <span className="font-medium text-gray-800 block">
                    {t(option.labelKey)}
                  </span>
                  {option.descriptionKey && (
                    <span className="text-sm text-gray-500 block mt-1">
                      {t(option.descriptionKey)}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
