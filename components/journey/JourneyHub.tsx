'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { journeyStages, decisionTrees, healthcarePathways } from '@/content/ar/journey';
import { JourneyStage, DecisionTree, HealthcarePathway } from '@/types/journey';
import JourneyMap from './JourneyMap';
import StageDetailPanel from './StageDetailPanel';
import DecisionTreeFlow from './DecisionTreeFlow';
import PathwayResult from './PathwayResult';

interface JourneyHubProps {
  locale: string;
}

type ViewType = 'map' | 'stage' | 'tree' | 'result';

export default function JourneyHub({ locale }: JourneyHubProps) {
  const t = useTranslations('journey');

  const [view, setView] = useState<ViewType>('map');
  const [selectedStage, setSelectedStage] = useState<JourneyStage | null>(null);
  const [currentTree, setCurrentTree] = useState<DecisionTree | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [selectedPathway, setSelectedPathway] = useState<HealthcarePathway | null>(null);
  const [nodeHistory, setNodeHistory] = useState<string[]>([]);

  const handleStageSelect = (stage: JourneyStage) => {
    setSelectedStage(stage);
    setView('stage');
  };

  const handleStartTree = () => {
    if (selectedStage?.decisionTreeId) {
      const tree = decisionTrees[selectedStage.decisionTreeId];
      if (tree) {
        setCurrentTree(tree);
        setCurrentNodeId(tree.startNodeId);
        setNodeHistory([tree.startNodeId]);
        setView('tree');
      }
    }
  };

  const handleSelectOption = (nextNodeId: string) => {
    const node = currentTree?.nodes[nextNodeId];
    if (node) {
      if (node.type === 'result' && node.pathwayId) {
        const pathway = healthcarePathways[node.pathwayId];
        if (pathway) {
          setSelectedPathway(pathway);
          setView('result');
        }
      } else {
        setNodeHistory(prev => [...prev, nextNodeId]);
        setCurrentNodeId(nextNodeId);
      }
    }
  };

  const handleBack = () => {
    if (view === 'result') {
      setView('tree');
      setSelectedPathway(null);
    } else if (view === 'tree') {
      if (nodeHistory.length > 1) {
        const newHistory = nodeHistory.slice(0, -1);
        setNodeHistory(newHistory);
        setCurrentNodeId(newHistory[newHistory.length - 1]);
      } else {
        setView('stage');
        setCurrentTree(null);
        setCurrentNodeId(null);
        setNodeHistory([]);
      }
    } else if (view === 'stage') {
      setView('map');
      setSelectedStage(null);
    }
  };

  const handleBackToMap = () => {
    setView('map');
    setSelectedStage(null);
    setCurrentTree(null);
    setCurrentNodeId(null);
    setSelectedPathway(null);
    setNodeHistory([]);
  };

  const handleRestart = () => {
    if (currentTree) {
      setCurrentNodeId(currentTree.startNodeId);
      setNodeHistory([currentTree.startNodeId]);
      setSelectedPathway(null);
      setView('tree');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {t('title')}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in">
          {view === 'map' && (
            <div>
              <p className="text-center text-gray-500 mb-6">{t('selectStage')}</p>
              <JourneyMap
                stages={journeyStages}
                onStageSelect={handleStageSelect}
                locale={locale}
              />
            </div>
          )}

          {view === 'stage' && selectedStage && (
            <StageDetailPanel
              stage={selectedStage}
              onStart={handleStartTree}
              onBack={handleBackToMap}
              locale={locale}
            />
          )}

          {view === 'tree' && currentTree && currentNodeId && (
            <DecisionTreeFlow
              tree={currentTree}
              currentNodeId={currentNodeId}
              onSelectOption={handleSelectOption}
              onBack={handleBack}
              onBackToMap={handleBackToMap}
              locale={locale}
            />
          )}

          {view === 'result' && selectedPathway && (
            <PathwayResult
              pathway={selectedPathway}
              onRestart={handleRestart}
              onBackToMap={handleBackToMap}
              locale={locale}
            />
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{t('disclaimer')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
