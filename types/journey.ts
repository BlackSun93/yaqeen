// Journey Stage Definition
export interface JourneyStage {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  color: 'emerald' | 'blue' | 'purple' | 'pink' | 'teal';
  order: number;
  hasDecisionTree: boolean;
  decisionTreeId?: string;
  linkTo?: string; // For stages that link to other pages (e.g., screening)
}

// Decision Tree Option
export interface DecisionOption {
  id: string;
  labelKey: string;
  descriptionKey?: string;
  nextNodeId: string;
  icon?: string;
}

// Decision Tree Node
export interface DecisionNode {
  id: string;
  type: 'question' | 'result' | 'info' | 'link';
  questionKey?: string;
  descriptionKey?: string;
  options?: DecisionOption[];
  resultKey?: string;
  guidanceKey?: string;
  pathwayId?: string; // Reference to HealthcarePathway
  linkTo?: string; // For nodes that link to other pages
  icon?: string;
}

// Healthcare Pathway Result
export interface HealthcarePathway {
  id: 'nhi' | 'uhi' | 'moh' | 'university' | 'private' | 'military';
  titleKey: string;
  descriptionKey: string;
  stepsKeys: string[];
  documentsKeys: string[];
  tipsKeys?: string[];
  contactInfo?: {
    phone?: string;
    website?: string;
    hotline?: string;
  };
  eligibilityKey?: string;
  color: string;
  icon: string;
}

// Complete Decision Tree
export interface DecisionTree {
  id: string;
  titleKey: string;
  descriptionKey?: string;
  nodes: Record<string, DecisionNode>;
  startNodeId: string;
}

// Journey Content Structure
export interface JourneyContent {
  stages: JourneyStage[];
  decisionTrees: Record<string, DecisionTree>;
  pathways: Record<string, HealthcarePathway>;
}
