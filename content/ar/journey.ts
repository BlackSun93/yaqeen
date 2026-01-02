import { JourneyStage, DecisionTree, HealthcarePathway, JourneyContent } from '@/types/journey';

// Journey Stages
export const journeyStages: JourneyStage[] = [
  {
    id: 'screening',
    titleKey: 'stages.screening.title',
    descriptionKey: 'stages.screening.desc',
    icon: 'Search',
    color: 'emerald',
    order: 1,
    hasDecisionTree: false,
    linkTo: '/screening',
  },
  {
    id: 'where-to-go',
    titleKey: 'stages.whereToGo.title',
    descriptionKey: 'stages.whereToGo.desc',
    icon: 'MapPin',
    color: 'blue',
    order: 2,
    hasDecisionTree: true,
    decisionTreeId: 'healthcare-pathway',
  },
  {
    id: 'diagnosis',
    titleKey: 'stages.diagnosis.title',
    descriptionKey: 'stages.diagnosis.desc',
    icon: 'FileSearch',
    color: 'purple',
    order: 3,
    hasDecisionTree: true,
    decisionTreeId: 'diagnosis-tree',
  },
  {
    id: 'treatment',
    titleKey: 'stages.treatment.title',
    descriptionKey: 'stages.treatment.desc',
    icon: 'Stethoscope',
    color: 'pink',
    order: 4,
    hasDecisionTree: true,
    decisionTreeId: 'treatment-tree',
  },
  {
    id: 'followup',
    titleKey: 'stages.followup.title',
    descriptionKey: 'stages.followup.desc',
    icon: 'HeartPulse',
    color: 'teal',
    order: 5,
    hasDecisionTree: true,
    decisionTreeId: 'followup-tree',
  },
];

// Healthcare Pathways
export const healthcarePathways: Record<string, HealthcarePathway> = {
  nhi: {
    id: 'nhi',
    titleKey: 'pathways.nhi.title',
    descriptionKey: 'pathways.nhi.desc',
    stepsKeys: [
      'pathways.nhi.steps.1',
      'pathways.nhi.steps.2',
      'pathways.nhi.steps.3',
      'pathways.nhi.steps.4',
    ],
    documentsKeys: [
      'pathways.nhi.docs.1',
      'pathways.nhi.docs.2',
      'pathways.nhi.docs.3',
    ],
    tipsKeys: [
      'pathways.nhi.tips.1',
      'pathways.nhi.tips.2',
    ],
    contactInfo: {
      hotline: '15344',
      website: 'https://www.hio.gov.eg',
    },
    color: 'blue',
    icon: 'Building2',
  },
  uhi: {
    id: 'uhi',
    titleKey: 'pathways.uhi.title',
    descriptionKey: 'pathways.uhi.desc',
    stepsKeys: [
      'pathways.uhi.steps.1',
      'pathways.uhi.steps.2',
      'pathways.uhi.steps.3',
      'pathways.uhi.steps.4',
    ],
    documentsKeys: [
      'pathways.uhi.docs.1',
      'pathways.uhi.docs.2',
    ],
    tipsKeys: [
      'pathways.uhi.tips.1',
      'pathways.uhi.tips.2',
    ],
    contactInfo: {
      hotline: '15344',
      website: 'https://www.uhia.gov.eg',
    },
    eligibilityKey: 'pathways.uhi.eligibility',
    color: 'emerald',
    icon: 'ShieldCheck',
  },
  moh: {
    id: 'moh',
    titleKey: 'pathways.moh.title',
    descriptionKey: 'pathways.moh.desc',
    stepsKeys: [
      'pathways.moh.steps.1',
      'pathways.moh.steps.2',
      'pathways.moh.steps.3',
      'pathways.moh.steps.4',
      'pathways.moh.steps.5',
    ],
    documentsKeys: [
      'pathways.moh.docs.1',
      'pathways.moh.docs.2',
      'pathways.moh.docs.3',
    ],
    tipsKeys: [
      'pathways.moh.tips.1',
      'pathways.moh.tips.2',
    ],
    contactInfo: {
      hotline: '105',
      phone: '0223684288',
    },
    color: 'orange',
    icon: 'Hospital',
  },
  university: {
    id: 'university',
    titleKey: 'pathways.university.title',
    descriptionKey: 'pathways.university.desc',
    stepsKeys: [
      'pathways.university.steps.1',
      'pathways.university.steps.2',
      'pathways.university.steps.3',
    ],
    documentsKeys: [
      'pathways.university.docs.1',
      'pathways.university.docs.2',
    ],
    tipsKeys: [
      'pathways.university.tips.1',
    ],
    color: 'purple',
    icon: 'GraduationCap',
  },
  private: {
    id: 'private',
    titleKey: 'pathways.private.title',
    descriptionKey: 'pathways.private.desc',
    stepsKeys: [
      'pathways.private.steps.1',
      'pathways.private.steps.2',
      'pathways.private.steps.3',
    ],
    documentsKeys: [
      'pathways.private.docs.1',
      'pathways.private.docs.2',
    ],
    tipsKeys: [
      'pathways.private.tips.1',
    ],
    color: 'pink',
    icon: 'Building',
  },
  military: {
    id: 'military',
    titleKey: 'pathways.military.title',
    descriptionKey: 'pathways.military.desc',
    stepsKeys: [
      'pathways.military.steps.1',
      'pathways.military.steps.2',
      'pathways.military.steps.3',
    ],
    documentsKeys: [
      'pathways.military.docs.1',
      'pathways.military.docs.2',
    ],
    color: 'gray',
    icon: 'Shield',
  },
};

// Decision Trees
export const decisionTrees: Record<string, DecisionTree> = {
  'healthcare-pathway': {
    id: 'healthcare-pathway',
    titleKey: 'trees.healthcare.title',
    descriptionKey: 'trees.healthcare.desc',
    startNodeId: 'employment-status',
    nodes: {
      'employment-status': {
        id: 'employment-status',
        type: 'question',
        questionKey: 'trees.healthcare.q.employment',
        icon: 'Briefcase',
        options: [
          { id: 'gov', labelKey: 'trees.healthcare.o.govEmployee', nextNodeId: 'gov-insurance' },
          { id: 'private', labelKey: 'trees.healthcare.o.privateEmployee', nextNodeId: 'private-insurance' },
          { id: 'unemployed', labelKey: 'trees.healthcare.o.unemployed', nextNodeId: 'uhi-check' },
          { id: 'retired', labelKey: 'trees.healthcare.o.retired', nextNodeId: 'pension-type' },
          { id: 'military', labelKey: 'trees.healthcare.o.military', nextNodeId: 'result-military' },
        ],
      },
      'gov-insurance': {
        id: 'gov-insurance',
        type: 'question',
        questionKey: 'trees.healthcare.q.govInsurance',
        icon: 'FileCheck',
        options: [
          { id: 'nhi', labelKey: 'trees.healthcare.o.nhi', nextNodeId: 'result-nhi' },
          { id: 'uhi', labelKey: 'trees.healthcare.o.uhi', nextNodeId: 'result-uhi' },
          { id: 'none', labelKey: 'trees.healthcare.o.noInsurance', nextNodeId: 'state-expense' },
        ],
      },
      'private-insurance': {
        id: 'private-insurance',
        type: 'question',
        questionKey: 'trees.healthcare.q.privateInsurance',
        icon: 'CreditCard',
        options: [
          { id: 'has-insurance', labelKey: 'trees.healthcare.o.hasPrivate', nextNodeId: 'result-private' },
          { id: 'no-insurance', labelKey: 'trees.healthcare.o.noPrivate', nextNodeId: 'uhi-check' },
        ],
      },
      'uhi-check': {
        id: 'uhi-check',
        type: 'question',
        questionKey: 'trees.healthcare.q.uhiCoverage',
        descriptionKey: 'trees.healthcare.q.uhiCoverageDesc',
        icon: 'MapPin',
        options: [
          { id: 'covered', labelKey: 'trees.healthcare.o.uhiCovered', nextNodeId: 'result-uhi' },
          { id: 'not-covered', labelKey: 'trees.healthcare.o.uhiNotCovered', nextNodeId: 'state-expense' },
        ],
      },
      'pension-type': {
        id: 'pension-type',
        type: 'question',
        questionKey: 'trees.healthcare.q.pensionType',
        icon: 'User',
        options: [
          { id: 'gov-pension', labelKey: 'trees.healthcare.o.govPension', nextNodeId: 'gov-insurance' },
          { id: 'private-pension', labelKey: 'trees.healthcare.o.privatePension', nextNodeId: 'uhi-check' },
        ],
      },
      'state-expense': {
        id: 'state-expense',
        type: 'question',
        questionKey: 'trees.healthcare.q.stateExpense',
        icon: 'Hospital',
        options: [
          { id: 'moh', labelKey: 'trees.healthcare.o.moh', descriptionKey: 'trees.healthcare.o.mohDesc', nextNodeId: 'result-moh' },
          { id: 'university', labelKey: 'trees.healthcare.o.university', descriptionKey: 'trees.healthcare.o.universityDesc', nextNodeId: 'result-university' },
        ],
      },
      'result-nhi': {
        id: 'result-nhi',
        type: 'result',
        pathwayId: 'nhi',
        icon: 'CheckCircle',
      },
      'result-uhi': {
        id: 'result-uhi',
        type: 'result',
        pathwayId: 'uhi',
        icon: 'CheckCircle',
      },
      'result-moh': {
        id: 'result-moh',
        type: 'result',
        pathwayId: 'moh',
        icon: 'CheckCircle',
      },
      'result-university': {
        id: 'result-university',
        type: 'result',
        pathwayId: 'university',
        icon: 'CheckCircle',
      },
      'result-private': {
        id: 'result-private',
        type: 'result',
        pathwayId: 'private',
        icon: 'CheckCircle',
      },
      'result-military': {
        id: 'result-military',
        type: 'result',
        pathwayId: 'military',
        icon: 'CheckCircle',
      },
    },
  },
  'diagnosis-tree': {
    id: 'diagnosis-tree',
    titleKey: 'trees.diagnosis.title',
    descriptionKey: 'trees.diagnosis.desc',
    startNodeId: 'diagnosis-start',
    nodes: {
      'diagnosis-start': {
        id: 'diagnosis-start',
        type: 'question',
        questionKey: 'trees.diagnosis.q.stage',
        icon: 'FileSearch',
        options: [
          { id: 'suspicion', labelKey: 'trees.diagnosis.o.suspicion', nextNodeId: 'initial-tests' },
          { id: 'confirmed', labelKey: 'trees.diagnosis.o.confirmed', nextNodeId: 'staging-tests' },
          { id: 'need-biopsy', labelKey: 'trees.diagnosis.o.needBiopsy', nextNodeId: 'biopsy-info' },
        ],
      },
      'initial-tests': {
        id: 'initial-tests',
        type: 'info',
        resultKey: 'trees.diagnosis.info.initialTests',
        guidanceKey: 'trees.diagnosis.guidance.initialTests',
        icon: 'TestTube',
      },
      'staging-tests': {
        id: 'staging-tests',
        type: 'info',
        resultKey: 'trees.diagnosis.info.stagingTests',
        guidanceKey: 'trees.diagnosis.guidance.stagingTests',
        icon: 'Scan',
      },
      'biopsy-info': {
        id: 'biopsy-info',
        type: 'info',
        resultKey: 'trees.diagnosis.info.biopsy',
        guidanceKey: 'trees.diagnosis.guidance.biopsy',
        icon: 'Syringe',
      },
    },
  },
  'treatment-tree': {
    id: 'treatment-tree',
    titleKey: 'trees.treatment.title',
    descriptionKey: 'trees.treatment.desc',
    startNodeId: 'treatment-start',
    nodes: {
      'treatment-start': {
        id: 'treatment-start',
        type: 'question',
        questionKey: 'trees.treatment.q.type',
        icon: 'Stethoscope',
        options: [
          { id: 'surgery', labelKey: 'trees.treatment.o.surgery', nextNodeId: 'surgery-info' },
          { id: 'chemo', labelKey: 'trees.treatment.o.chemo', nextNodeId: 'chemo-info' },
          { id: 'radiation', labelKey: 'trees.treatment.o.radiation', nextNodeId: 'radiation-info' },
          { id: 'combined', labelKey: 'trees.treatment.o.combined', nextNodeId: 'combined-info' },
        ],
      },
      'surgery-info': {
        id: 'surgery-info',
        type: 'info',
        resultKey: 'trees.treatment.info.surgery',
        guidanceKey: 'trees.treatment.guidance.surgery',
        icon: 'Scissors',
      },
      'chemo-info': {
        id: 'chemo-info',
        type: 'info',
        resultKey: 'trees.treatment.info.chemo',
        guidanceKey: 'trees.treatment.guidance.chemo',
        icon: 'Pill',
      },
      'radiation-info': {
        id: 'radiation-info',
        type: 'info',
        resultKey: 'trees.treatment.info.radiation',
        guidanceKey: 'trees.treatment.guidance.radiation',
        icon: 'Zap',
      },
      'combined-info': {
        id: 'combined-info',
        type: 'info',
        resultKey: 'trees.treatment.info.combined',
        guidanceKey: 'trees.treatment.guidance.combined',
        icon: 'Layers',
      },
    },
  },
  'followup-tree': {
    id: 'followup-tree',
    titleKey: 'trees.followup.title',
    descriptionKey: 'trees.followup.desc',
    startNodeId: 'followup-start',
    nodes: {
      'followup-start': {
        id: 'followup-start',
        type: 'question',
        questionKey: 'trees.followup.q.stage',
        icon: 'HeartPulse',
        options: [
          { id: 'just-finished', labelKey: 'trees.followup.o.justFinished', nextNodeId: 'post-treatment' },
          { id: 'regular-checkup', labelKey: 'trees.followup.o.regularCheckup', nextNodeId: 'checkup-schedule' },
          { id: 'side-effects', labelKey: 'trees.followup.o.sideEffects', nextNodeId: 'side-effects-info' },
        ],
      },
      'post-treatment': {
        id: 'post-treatment',
        type: 'info',
        resultKey: 'trees.followup.info.postTreatment',
        guidanceKey: 'trees.followup.guidance.postTreatment',
        icon: 'CalendarCheck',
      },
      'checkup-schedule': {
        id: 'checkup-schedule',
        type: 'info',
        resultKey: 'trees.followup.info.checkupSchedule',
        guidanceKey: 'trees.followup.guidance.checkupSchedule',
        icon: 'Calendar',
      },
      'side-effects-info': {
        id: 'side-effects-info',
        type: 'info',
        resultKey: 'trees.followup.info.sideEffects',
        guidanceKey: 'trees.followup.guidance.sideEffects',
        icon: 'AlertCircle',
      },
    },
  },
};

// Export complete journey content
export const journeyContent: JourneyContent = {
  stages: journeyStages,
  decisionTrees,
  pathways: healthcarePathways,
};
