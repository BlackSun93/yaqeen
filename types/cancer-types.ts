// Cancer Type Category
export type CancerCategory =
  | 'breast'
  | 'digestive'
  | 'blood'
  | 'urological'
  | 'gynecological'
  | 'respiratory'
  | 'endocrine'
  | 'neurological';

// Cancer Stage
export type CancerStageLevel = 'I' | 'II' | 'III' | 'IV';

// Treatment Type
export type TreatmentType =
  | 'surgery'
  | 'chemotherapy'
  | 'radiation'
  | 'immunotherapy'
  | 'targeted'
  | 'hormone'
  | 'stemCell'
  | 'other';

// Warning Level for Symptoms
export type WarningLevel = 'common' | 'urgent';

// Resource Type for cross-linking
export type ResourceType = 'screening' | 'nutrition' | 'caregiver' | 'guide';

// Cancer Stage Information
export interface CancerStage {
  stage: CancerStageLevel;
  title: string;
  description: string;
  survivalRate: string;
  treatmentApproach: string;
}

// Statistics for Egypt
export interface CancerStatistics {
  prevalenceInEgypt: string;
  annualCases?: string;
  survivalRate: string;
  commonAgeGroup: string;
  genderDistribution: 'male' | 'female' | 'both';
  egyptSpecificFactors?: string;
}

// Risk Factor
export interface RiskFactor {
  id: string;
  title: string;
  description: string;
  modifiable: boolean;
  icon: string;
}

// Symptom
export interface CancerSymptom {
  id: string;
  description: string;
  warningLevel: WarningLevel;
  icon?: string;
}

// Diagnosis Method
export interface DiagnosisMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  availableInEgypt: boolean;
  costLevel?: 'free' | 'low' | 'medium' | 'high';
}

// Treatment Option
export interface TreatmentOption {
  id: string;
  name: string;
  description: string;
  type: TreatmentType;
  availableInEgypt: string;
  icon: string;
}

// Treatment Center in Egypt
export interface TreatmentCenter {
  id: string;
  name: string;
  location: string;
  specialties: string[];
  phone?: string;
  website?: string;
  governmentFunded: boolean;
}

// Screening Recommendation
export interface ScreeningRecommendation {
  who: string;
  frequency: string;
  method: string;
  startAge?: string;
  linkedSurveyId?: string;
}

// Related Resource Link
export interface RelatedResource {
  type: ResourceType;
  id: string;
  title: string;
}

// Complete Cancer Type Interface
export interface CancerType {
  id: string;
  slug: string;
  title: string;
  englishName: string;
  excerpt: string;
  icon: string;
  color: string;
  category: CancerCategory;

  // Overview
  overview: string;

  // Statistics
  statistics: CancerStatistics;

  // Risk Factors
  riskFactors: RiskFactor[];

  // Stages
  stages: CancerStage[];

  // Symptoms
  symptoms: {
    early: CancerSymptom[];
    advanced: CancerSymptom[];
    warningSigns: string;
  };

  // Diagnosis
  diagnosis: {
    overview: string;
    methods: DiagnosisMethod[];
    specialists: string[];
  };

  // Treatment
  treatment: {
    overview: string;
    options: TreatmentOption[];
    centersInEgypt: TreatmentCenter[];
    egyptSpecificNotes?: string;
  };

  // Prevention
  prevention: {
    possible: 'yes' | 'partial' | 'limited';
    measures: string[];
    screeningRecommendation?: ScreeningRecommendation;
  };

  // Related Resources
  relatedResources: RelatedResource[];

  // Living With Cancer
  livingWith?: {
    duringTreatment: string;
    afterTreatment: string;
    supportGroups?: string[];
  };

  // Metadata
  lastUpdated: string;
  medicalDisclaimer: string;
}

// Category Information for Filtering
export interface CancerCategoryInfo {
  id: CancerCategory;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Tab types for detail page
export type CancerDetailTab =
  | 'overview'
  | 'symptoms'
  | 'stages'
  | 'diagnosis'
  | 'treatment'
  | 'prevention';

// Tab information
export interface TabInfo {
  id: CancerDetailTab;
  title: string;
  icon: string;
}
