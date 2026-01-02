import type { CancerType, CancerCategoryInfo, TreatmentCenter } from '@/types/cancer-types';

// Treatment Centers in Egypt (Shared across cancer types)
export const treatmentCentersEgypt: TreatmentCenter[] = [
  {
    id: 'nci',
    name: 'المعهد القومي للأورام',
    location: 'القاهرة - فم الخليج',
    specialties: ['جميع أنواع السرطان', 'العلاج الكيماوي', 'العلاج الإشعاعي', 'الجراحة'],
    phone: '02-23644720',
    website: 'https://www.nci.cu.edu.eg',
    governmentFunded: true,
  },
  {
    id: 'baheya',
    name: 'مستشفى بهية',
    location: 'القاهرة - الهرم / الشيخ زايد',
    specialties: ['سرطان الثدي'],
    phone: '16554',
    website: 'https://www.baheya.org',
    governmentFunded: false, // Charity
  },
  {
    id: '57357',
    name: 'مستشفى سرطان الأطفال 57357',
    location: 'القاهرة - السيدة زينب',
    specialties: ['سرطان الأطفال', 'اللوكيميا', 'الليمفوما'],
    phone: '16357',
    website: 'https://www.57357.org',
    governmentFunded: false, // Charity
  },
  {
    id: 'kasralainy',
    name: 'مستشفى قصر العيني',
    location: 'القاهرة - قصر العيني',
    specialties: ['جميع أنواع السرطان', 'زراعة النخاع'],
    phone: '02-23654060',
    governmentFunded: true,
  },
  {
    id: 'ainshams',
    name: 'مستشفى عين شمس التخصصي',
    location: 'القاهرة - عين شمس',
    specialties: ['جميع أنواع السرطان', 'العلاج الموجه'],
    phone: '02-26831274',
    governmentFunded: true,
  },
  {
    id: 'mansoura',
    name: 'مركز أورام المنصورة',
    location: 'المنصورة - الدقهلية',
    specialties: ['جميع أنواع السرطان', 'سرطان المثانة', 'سرطان الكبد'],
    phone: '050-2202835',
    governmentFunded: true,
  },
  {
    id: 'alexandria',
    name: 'معهد أورام الإسكندرية',
    location: 'الإسكندرية',
    specialties: ['جميع أنواع السرطان'],
    governmentFunded: true,
  },
  {
    id: 'aswan',
    name: 'مركز أورام أسوان',
    location: 'أسوان',
    specialties: ['جميع أنواع السرطان'],
    governmentFunded: true,
  },
  {
    id: 'shefaalorman',
    name: 'مستشفى شفاء الأورمان',
    location: 'الأقصر',
    specialties: ['جميع أنواع السرطان'],
    phone: '095-2282000',
    governmentFunded: false, // Charity
  },
  {
    id: 'darelfouad',
    name: 'مستشفى دار الفؤاد',
    location: 'القاهرة - السادس من أكتوبر',
    specialties: ['جميع أنواع السرطان', 'العلاج المتقدم'],
    phone: '16370',
    governmentFunded: false, // Private
  },
];

// Cancer Categories Information
export const cancerCategories: CancerCategoryInfo[] = [
  {
    id: 'breast',
    title: 'سرطان الثدي',
    description: 'أورام الثدي',
    icon: 'Heart',
    color: 'pink',
  },
  {
    id: 'digestive',
    title: 'الجهاز الهضمي',
    description: 'سرطانات الكبد والقولون والمعدة',
    icon: 'Activity',
    color: 'amber',
  },
  {
    id: 'blood',
    title: 'سرطانات الدم',
    description: 'اللوكيميا والليمفوما',
    icon: 'Droplets',
    color: 'red',
  },
  {
    id: 'urological',
    title: 'الجهاز البولي',
    description: 'المثانة والبروستاتا والكلى',
    icon: 'Circle',
    color: 'blue',
  },
  {
    id: 'respiratory',
    title: 'الجهاز التنفسي',
    description: 'سرطان الرئة',
    icon: 'Wind',
    color: 'cyan',
  },
  {
    id: 'gynecological',
    title: 'الأورام النسائية',
    description: 'الرحم والمبيض وعنق الرحم',
    icon: 'Flower2',
    color: 'purple',
  },
];

// Comprehensive Cancer Types Data
export const cancerTypes: CancerType[] = [
  // 1. Breast Cancer
  {
    id: 'breast',
    slug: 'breast-cancer',
    title: 'سرطان الثدي',
    englishName: 'Breast Cancer',
    excerpt: 'الأكثر انتشاراً بين السيدات، ونسب الشفاء في مصر وصلت لمستويات عالمية مع الكشف المبكر.',
    icon: 'Heart',
    color: 'pink',
    category: 'breast',

    overview: `سرطان الثدي هو أكثر أنواع السرطان انتشاراً بين النساء في مصر والعالم. الخبر الجيد إن الكشف المبكر بيرفع نسبة الشفاء لأكثر من 98%. في مصر، حصل تطور كبير في علاج سرطان الثدي، والمستشفيات المصرية بقت بتقدم علاج على مستوى عالمي.

مهم جداً إن كل سيدة تعمل فحص ذاتي شهري، وتتابع مع دكتور متخصص. سرطان الثدي لما بيتاكتشف بدري، العلاج بيكون أسهل وأقل تأثيراً على الحياة.`,

    statistics: {
      prevalenceInEgypt: '32% من سرطانات السيدات في مصر',
      annualCases: 'حوالي 22,000 حالة جديدة سنوياً',
      survivalRate: '98% في المرحلة الأولى، 85% في المرحلة الثانية',
      commonAgeGroup: '40-60 سنة (لكن ممكن يحصل في أي سن)',
      genderDistribution: 'female',
      egyptSpecificFactors: 'برنامج الكشف المبكر القومي ساهم في اكتشاف حالات كتير في مراحل مبكرة',
    },

    riskFactors: [
      {
        id: 'age',
        title: 'السن',
        description: 'الخطورة بتزيد بعد سن 50',
        modifiable: false,
        icon: 'Calendar',
      },
      {
        id: 'family',
        title: 'التاريخ العائلي',
        description: 'وجود حالات في العائلة (الأم، الأخت، البنت)',
        modifiable: false,
        icon: 'Users',
      },
      {
        id: 'genetics',
        title: 'الجينات',
        description: 'طفرات جينية زي BRCA1 و BRCA2',
        modifiable: false,
        icon: 'Dna',
      },
      {
        id: 'obesity',
        title: 'زيادة الوزن',
        description: 'السمنة بتزود الخطورة خاصة بعد انقطاع الدورة',
        modifiable: true,
        icon: 'Scale',
      },
      {
        id: 'hormones',
        title: 'العلاج الهرموني',
        description: 'استخدام الهرمونات التعويضية لفترة طويلة',
        modifiable: true,
        icon: 'Pill',
      },
      {
        id: 'alcohol',
        title: 'الكحول',
        description: 'شرب الكحول بيزود الخطورة',
        modifiable: true,
        icon: 'Wine',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'المرحلة الأولى',
        description: 'الورم صغير (أقل من 2 سم) ولم ينتشر للغدد الليمفاوية',
        survivalRate: '98-100%',
        treatmentApproach: 'جراحة تحفظية + علاج إشعاعي أو هرموني حسب الحالة',
      },
      {
        stage: 'II',
        title: 'المرحلة الثانية',
        description: 'الورم أكبر (2-5 سم) أو انتشر لعدد قليل من الغدد',
        survivalRate: '85-90%',
        treatmentApproach: 'جراحة + علاج كيماوي + إشعاعي',
      },
      {
        stage: 'III',
        title: 'المرحلة الثالثة',
        description: 'الورم كبير أو انتشر لغدد كتير',
        survivalRate: '70-75%',
        treatmentApproach: 'علاج كيماوي قبل الجراحة + جراحة + إشعاع',
      },
      {
        stage: 'IV',
        title: 'المرحلة الرابعة',
        description: 'انتشر لأعضاء تانية (العظام، الكبد، الرئة)',
        survivalRate: '25-30%',
        treatmentApproach: 'علاج موجه + هرموني + كيماوي للسيطرة على المرض',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'كتلة أو تورم في الثدي أو تحت الإبط',
          warningLevel: 'urgent',
          icon: 'AlertCircle',
        },
        {
          id: 's2',
          description: 'تغير في شكل أو حجم الثدي',
          warningLevel: 'common',
          icon: 'Eye',
        },
        {
          id: 's3',
          description: 'تغير في جلد الثدي (تجعد، احمرار، قشور)',
          warningLevel: 'urgent',
          icon: 'Fingerprint',
        },
        {
          id: 's4',
          description: 'إفرازات من الحلمة (خاصة لو فيها دم)',
          warningLevel: 'urgent',
          icon: 'Droplet',
        },
      ],
      advanced: [
        {
          id: 's5',
          description: 'ألم في العظام',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'ضيق في التنفس',
          warningLevel: 'common',
        },
        {
          id: 's7',
          description: 'نقص غير مبرر في الوزن',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'أي كتلة جديدة في الثدي لازم تتفحص حتى لو مش مؤلمة. 80% من الكتل بتكون حميدة، لكن الفحص ضروري.',
    },

    diagnosis: {
      overview: 'تشخيص سرطان الثدي بيبدأ بالفحص السريري، وبعدين الماموجرام أو السونار، وأخيراً العينة للتأكيد.',
      methods: [
        {
          id: 'd1',
          name: 'الماموجرام',
          description: 'أشعة خاصة للثدي بتكشف الأورام الصغيرة قبل ما تتحسس باليد',
          icon: 'Scan',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'السونار (الموجات فوق الصوتية)',
          description: 'بيوضح طبيعة أي كتلة - صلبة ولا سائلة',
          icon: 'Radio',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd3',
          name: 'الرنين المغناطيسي (MRI)',
          description: 'للحالات اللي محتاجة تفاصيل أدق',
          icon: 'Cog',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'عينة الثدي (Biopsy)',
          description: 'أخذ عينة من الورم لتحليلها - دي اللي بتأكد التشخيص',
          icon: 'Syringe',
          availableInEgypt: true,
          costLevel: 'low',
        },
      ],
      specialists: ['جراح أورام', 'طبيب أشعة', 'طبيب أورام طبية', 'طبيب علاج إشعاعي'],
    },

    treatment: {
      overview: 'علاج سرطان الثدي بيعتمد على نوع الورم ومرحلته. الجراحة التحفظية بقت الأساس، ومش شرط استئصال الثدي كله.',
      options: [
        {
          id: 't1',
          name: 'الجراحة التحفظية',
          description: 'إزالة الورم فقط مع الحفاظ على الثدي',
          type: 'surgery',
          availableInEgypt: 'متوفرة في معظم المراكز',
          icon: 'Scissors',
        },
        {
          id: 't2',
          name: 'استئصال الثدي',
          description: 'إزالة الثدي كله - للحالات المتقدمة',
          type: 'surgery',
          availableInEgypt: 'متوفرة مع إمكانية الترميم',
          icon: 'Scissors',
        },
        {
          id: 't3',
          name: 'العلاج الكيماوي',
          description: 'أدوية لقتل الخلايا السرطانية',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر بالمجان في المستشفيات الحكومية',
          icon: 'Pill',
        },
        {
          id: 't4',
          name: 'العلاج الإشعاعي',
          description: 'أشعة لقتل أي خلايا متبقية بعد الجراحة',
          type: 'radiation',
          availableInEgypt: 'متوفر في المعهد القومي ومراكز كتير',
          icon: 'Zap',
        },
        {
          id: 't5',
          name: 'العلاج الهرموني',
          description: 'لأنواع معينة من سرطان الثدي (ER+)',
          type: 'hormone',
          availableInEgypt: 'متوفر ومغطى بالتأمين',
          icon: 'Pill',
        },
        {
          id: 't6',
          name: 'العلاج الموجه',
          description: 'أدوية حديثة بتستهدف الخلايا السرطانية بالتحديد (زي Herceptin)',
          type: 'targeted',
          availableInEgypt: 'متوفر في المراكز المتخصصة',
          icon: 'Target',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'baheya' || c.id === 'nci' || c.id === 'kasralainy' || c.id === 'darelfouad'
      ),
      egyptSpecificNotes: 'مستشفى بهية بتقدم العلاج مجاناً لسرطان الثدي. المعهد القومي للأورام بيوفر علاج شامل بتكلفة رمزية.',
    },

    prevention: {
      possible: 'partial',
      measures: [
        'الفحص الذاتي الشهري للثدي',
        'ماموجرام سنوي بعد سن 40',
        'الحفاظ على وزن صحي',
        'ممارسة الرياضة بانتظام (30 دقيقة يومياً)',
        'الرضاعة الطبيعية بتقلل الخطورة',
        'تجنب العلاج الهرموني لفترات طويلة',
      ],
      screeningRecommendation: {
        who: 'كل السيدات من سن 40',
        frequency: 'ماموجرام كل سنة أو سنتين',
        method: 'ماموجرام + فحص سريري',
        startAge: '40 سنة (أو أبكر لو فيه تاريخ عائلي)',
        linkedSurveyId: 'breast',
      },
    },

    relatedResources: [
      { type: 'screening', id: 'breast', title: 'فحص سرطان الثدي' },
      { type: 'nutrition', id: 'n1', title: 'التغذية أثناء العلاج' },
      { type: 'caregiver', id: 'c1', title: 'دليل المرافق' },
    ],

    livingWith: {
      duringTreatment: 'أثناء العلاج، مهم الراحة والتغذية الجيدة. الدعم النفسي من العيلة مهم جداً. فيه مجموعات دعم في مستشفى بهية.',
      afterTreatment: 'بعد العلاج، المتابعة الدورية ضرورية. معظم السيدات بيرجعوا لحياتهم الطبيعية.',
      supportGroups: ['مجموعات دعم بهية', 'جمعية أصدقاء مرضى السرطان'],
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 2. Liver Cancer
  {
    id: 'liver',
    slug: 'liver-cancer',
    title: 'سرطان الكبد',
    englishName: 'Hepatocellular Carcinoma (HCC)',
    excerpt: 'مصر نجحت في القضاء على فيروس سي، والعلاج تطور جداً مع التشخيص المبكر.',
    icon: 'Activity',
    color: 'amber',
    category: 'digestive',

    overview: `سرطان الكبد كان منتشر في مصر بسبب فيروس سي، لكن بعد حملة 100 مليون صحة، الإصابات الجديدة قلت جداً. المهم دلوقتي هو متابعة مرضى الكبد المزمن (التليف) لأنهم أكتر ناس معرضين للإصابة.

الكشف المبكر بالسونار وتحليل AFP كل 4-6 شهور بيكتشف الورم وهو صغير، وساعتها العلاج بيكون أسهل ونتائجه ممتازة.`,

    statistics: {
      prevalenceInEgypt: '12% من حالات السرطان في مصر',
      annualCases: 'حوالي 25,000 حالة جديدة سنوياً',
      survivalRate: '70% لما يتكتشف بدري، 15% في المراحل المتأخرة',
      commonAgeGroup: '50-70 سنة',
      genderDistribution: 'both',
      egyptSpecificFactors: 'مرتبط بانتشار فيروس سي تاريخياً - الحالات الجديدة بتقل بشكل ملحوظ',
    },

    riskFactors: [
      {
        id: 'hcv',
        title: 'فيروس سي',
        description: 'السبب الرئيسي في مصر - حتى بعد العلاج المتابعة مطلوبة',
        modifiable: false,
        icon: 'Bug',
      },
      {
        id: 'hbv',
        title: 'فيروس بي',
        description: 'التطعيم متوفر ومهم للوقاية',
        modifiable: true,
        icon: 'Shield',
      },
      {
        id: 'cirrhosis',
        title: 'تليف الكبد',
        description: 'أي سبب للتليف بيزود الخطورة',
        modifiable: false,
        icon: 'AlertTriangle',
      },
      {
        id: 'alcohol',
        title: 'الكحول',
        description: 'بيسبب تليف الكبد على المدى الطويل',
        modifiable: true,
        icon: 'Wine',
      },
      {
        id: 'aflatoxin',
        title: 'السموم الفطرية',
        description: 'موجودة في المكسرات والحبوب المخزنة غلط',
        modifiable: true,
        icon: 'Skull',
      },
      {
        id: 'obesity',
        title: 'الكبد الدهني',
        description: 'السمنة بتسبب تراكم دهون على الكبد',
        modifiable: true,
        icon: 'Scale',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'المرحلة الأولى',
        description: 'ورم واحد صغير (أقل من 2 سم) - وظائف الكبد سليمة',
        survivalRate: '70-80%',
        treatmentApproach: 'استئصال جراحي أو تردد حراري',
      },
      {
        stage: 'II',
        title: 'المرحلة الثانية',
        description: 'ورم واحد أكبر أو أورام متعددة صغيرة',
        survivalRate: '50-60%',
        treatmentApproach: 'جراحة أو حقن شرياني أو تردد حراري',
      },
      {
        stage: 'III',
        title: 'المرحلة الثالثة',
        description: 'أورام متعددة أو انتشار للأوعية الدموية',
        survivalRate: '30-40%',
        treatmentApproach: 'حقن شرياني + علاج موجه',
      },
      {
        stage: 'IV',
        title: 'المرحلة الرابعة',
        description: 'انتشار خارج الكبد',
        survivalRate: '10-15%',
        treatmentApproach: 'علاج موجه أو مناعي',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'ألم في الجانب الأيمن من البطن',
          warningLevel: 'common',
          icon: 'MapPin',
        },
        {
          id: 's2',
          description: 'نقص في الوزن غير مبرر',
          warningLevel: 'common',
          icon: 'TrendingDown',
        },
        {
          id: 's3',
          description: 'فقدان الشهية',
          warningLevel: 'common',
          icon: 'Utensils',
        },
      ],
      advanced: [
        {
          id: 's4',
          description: 'اصفرار الجلد والعين (الصفراء)',
          warningLevel: 'urgent',
        },
        {
          id: 's5',
          description: 'تورم البطن (استسقاء)',
          warningLevel: 'urgent',
        },
        {
          id: 's6',
          description: 'ارتفاع AFP فجأة',
          warningLevel: 'urgent',
        },
      ],
      warningSigns: 'لو عندك تليف كبد أو تاريخ فيروس سي، لازم تعمل سونار وAFP كل 4-6 شهور حتى لو مفيش أعراض.',
    },

    diagnosis: {
      overview: 'التشخيص بيعتمد على السونار والأشعة المقطعية مع تحليل AFP. في أغلب الحالات مش محتاجين عينة.',
      methods: [
        {
          id: 'd1',
          name: 'السونار',
          description: 'أول فحص للكشف - سهل ورخيص ومتوفر',
          icon: 'Radio',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'تحليل AFP',
          description: 'دلالة أورام في الدم - بيرتفع مع سرطان الكبد',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd3',
          name: 'الأشعة المقطعية ثلاثية المراحل',
          description: 'بتأكد التشخيص وتحدد حجم ومكان الورم',
          icon: 'Scan',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'الرنين المغناطيسي',
          description: 'لتفاصيل أدق في بعض الحالات',
          icon: 'Cog',
          availableInEgypt: true,
          costLevel: 'high',
        },
      ],
      specialists: ['طبيب كبد', 'جراح كبد', 'طبيب أشعة تداخلية', 'طبيب أورام'],
    },

    treatment: {
      overview: 'علاج سرطان الكبد متنوع ويعتمد على حجم الورم ووظائف الكبد. الخيارات تطورت جداً في مصر.',
      options: [
        {
          id: 't1',
          name: 'الاستئصال الجراحي',
          description: 'إزالة الجزء المصاب من الكبد',
          type: 'surgery',
          availableInEgypt: 'متوفر في المراكز الكبرى',
          icon: 'Scissors',
        },
        {
          id: 't2',
          name: 'التردد الحراري (RFA)',
          description: 'حرق الورم بالإبر - للأورام الصغيرة',
          type: 'other',
          availableInEgypt: 'متوفر ومنتشر',
          icon: 'Flame',
        },
        {
          id: 't3',
          name: 'الحقن الشرياني (TACE)',
          description: 'حقن كيماوي مباشر في شريان الكبد',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر في كل المراكز الكبرى',
          icon: 'Syringe',
        },
        {
          id: 't4',
          name: 'الميكروويف',
          description: 'تقنية أحدث لحرق الأورام',
          type: 'other',
          availableInEgypt: 'متوفر في بعض المراكز',
          icon: 'Waves',
        },
        {
          id: 't5',
          name: 'العلاج الموجه',
          description: 'أدوية زي Sorafenib للحالات المتقدمة',
          type: 'targeted',
          availableInEgypt: 'متوفر',
          icon: 'Target',
        },
        {
          id: 't6',
          name: 'زراعة الكبد',
          description: 'للحالات المناسبة - الحل النهائي',
          type: 'surgery',
          availableInEgypt: 'متوفر في مراكز متخصصة',
          icon: 'Heart',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'mansoura' || c.id === 'kasralainy' || c.id === 'ainshams'
      ),
      egyptSpecificNotes: 'مصر من أكتر الدول خبرة في علاج سرطان الكبد. معهد الكبد بالمنوفية ومركز أورام المنصورة من أهم المراكز.',
    },

    prevention: {
      possible: 'yes',
      measures: [
        'التطعيم ضد فيروس بي',
        'علاج فيروس سي بالأدوية الحديثة',
        'متابعة دورية لمرضى التليف',
        'تجنب الكحول',
        'الحفاظ على وزن صحي لتجنب الكبد الدهني',
        'تخزين الحبوب والمكسرات بشكل صحيح',
      ],
      screeningRecommendation: {
        who: 'مرضى التليف أو التاريخ السابق لفيروس سي',
        frequency: 'كل 4-6 شهور',
        method: 'سونار + تحليل AFP',
      },
    },

    relatedResources: [
      { type: 'nutrition', id: 'n2', title: 'تغذية مرضى الكبد' },
      { type: 'guide', id: 'g1', title: 'إجراءات العلاج على نفقة الدولة' },
    ],

    livingWith: {
      duringTreatment: 'الراحة مهمة. تجنب الأكلات الدسمة والمالحة. المتابعة مع طبيب التغذية مفيدة.',
      afterTreatment: 'المتابعة كل 3 شهور في السنة الأولى. السونار والـ AFP بانتظام.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 3. Lung Cancer
  {
    id: 'lung',
    slug: 'lung-cancer',
    title: 'سرطان الرئة',
    englishName: 'Lung Cancer',
    excerpt: 'التدخين السبب الرئيسي، والكشف المبكر والعلاجات الحديثة غيرت النتائج للأفضل.',
    icon: 'Wind',
    color: 'cyan',
    category: 'respiratory',

    overview: `سرطان الرئة مرتبط بشكل كبير بالتدخين، لكن كمان ممكن يصيب غير المدخنين. العلاجات الحديثة زي العلاج الموجه والمناعي حسنت النتائج بشكل كبير.

الأهم هو الوقاية بالابتعاد عن التدخين، والكشف المبكر للمدخنين السابقين والحاليين.`,

    statistics: {
      prevalenceInEgypt: '8% من حالات السرطان',
      annualCases: 'حوالي 8,000 حالة جديدة سنوياً',
      survivalRate: '60% في المرحلة الأولى، 5% في المرحلة الرابعة',
      commonAgeGroup: '55-75 سنة',
      genderDistribution: 'both',
      egyptSpecificFactors: 'معدلات التدخين عالية في مصر - حملات الإقلاع مهمة',
    },

    riskFactors: [
      {
        id: 'smoking',
        title: 'التدخين',
        description: 'السبب في 85% من الحالات',
        modifiable: true,
        icon: 'Cigarette',
      },
      {
        id: 'passive',
        title: 'التدخين السلبي',
        description: 'التعرض لدخان السجائر',
        modifiable: true,
        icon: 'Cloud',
      },
      {
        id: 'pollution',
        title: 'التلوث',
        description: 'تلوث الهواء خاصة في المدن الكبرى',
        modifiable: true,
        icon: 'Factory',
      },
      {
        id: 'radon',
        title: 'غاز الرادون',
        description: 'غاز طبيعي في بعض المباني',
        modifiable: true,
        icon: 'Wind',
      },
      {
        id: 'occupation',
        title: 'التعرض المهني',
        description: 'الأسبستوس والمواد الكيميائية',
        modifiable: true,
        icon: 'HardHat',
      },
      {
        id: 'family',
        title: 'التاريخ العائلي',
        description: 'وجود حالات في العائلة',
        modifiable: false,
        icon: 'Users',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'المرحلة الأولى',
        description: 'ورم صغير في الرئة فقط',
        survivalRate: '60-80%',
        treatmentApproach: 'جراحة استئصالية',
      },
      {
        stage: 'II',
        title: 'المرحلة الثانية',
        description: 'انتشر للغدد الليمفاوية القريبة',
        survivalRate: '40-50%',
        treatmentApproach: 'جراحة + علاج كيماوي',
      },
      {
        stage: 'III',
        title: 'المرحلة الثالثة',
        description: 'انتشر للغدد في منتصف الصدر',
        survivalRate: '20-30%',
        treatmentApproach: 'كيماوي + إشعاعي + أحياناً جراحة',
      },
      {
        stage: 'IV',
        title: 'المرحلة الرابعة',
        description: 'انتشر لأعضاء بعيدة',
        survivalRate: '5-10%',
        treatmentApproach: 'علاج موجه أو مناعي حسب نوع الورم',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'كحة مستمرة أكتر من أسبوعين',
          warningLevel: 'common',
          icon: 'Mic',
        },
        {
          id: 's2',
          description: 'تغير في صوت أو طبيعة الكحة',
          warningLevel: 'common',
          icon: 'Volume2',
        },
        {
          id: 's3',
          description: 'بلغم فيه دم',
          warningLevel: 'urgent',
          icon: 'Droplet',
        },
      ],
      advanced: [
        {
          id: 's4',
          description: 'ضيق في التنفس',
          warningLevel: 'common',
        },
        {
          id: 's5',
          description: 'ألم في الصدر',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'بحة في الصوت',
          warningLevel: 'common',
        },
        {
          id: 's7',
          description: 'نقص وزن غير مبرر',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'لو مدخن أو مدخن سابق وعندك كحة مستمرة، لازم تعمل أشعة على الصدر.',
    },

    diagnosis: {
      overview: 'التشخيص بيبدأ بأشعة الصدر ثم الأشعة المقطعية والعينة للتأكيد ومعرفة نوع الورم.',
      methods: [
        {
          id: 'd1',
          name: 'أشعة الصدر',
          description: 'أول فحص لأي مشكلة في الرئة',
          icon: 'FileImage',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'الأشعة المقطعية',
          description: 'بتوضح تفاصيل الورم وحجمه ومكانه',
          icon: 'Scan',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd3',
          name: 'PET-CT',
          description: 'بيوضح انتشار الورم في الجسم',
          icon: 'Activity',
          availableInEgypt: true,
          costLevel: 'high',
        },
        {
          id: 'd4',
          name: 'منظار الشعب الهوائية',
          description: 'لأخذ عينة من الورم',
          icon: 'Eye',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd5',
          name: 'تحليل الطفرات الجينية',
          description: 'لتحديد العلاج الموجه المناسب',
          icon: 'Dna',
          availableInEgypt: true,
          costLevel: 'medium',
        },
      ],
      specialists: ['طبيب صدر', 'جراح صدر', 'طبيب أورام', 'طبيب أشعة'],
    },

    treatment: {
      overview: 'العلاج بيعتمد على نوع الورم ومرحلته. العلاجات الموجهة والمناعية غيرت كتير في النتائج.',
      options: [
        {
          id: 't1',
          name: 'الجراحة',
          description: 'استئصال الورم أو جزء من الرئة',
          type: 'surgery',
          availableInEgypt: 'متوفرة في المراكز الكبرى',
          icon: 'Scissors',
        },
        {
          id: 't2',
          name: 'العلاج الكيماوي',
          description: 'للحالات المتقدمة أو بعد الجراحة',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't3',
          name: 'العلاج الإشعاعي',
          description: 'لتقليص الورم أو بدل الجراحة',
          type: 'radiation',
          availableInEgypt: 'متوفر',
          icon: 'Zap',
        },
        {
          id: 't4',
          name: 'العلاج الموجه',
          description: 'للأورام اللي فيها طفرات معينة (EGFR, ALK)',
          type: 'targeted',
          availableInEgypt: 'متوفر',
          icon: 'Target',
        },
        {
          id: 't5',
          name: 'العلاج المناعي',
          description: 'بيساعد الجسم يحارب السرطان',
          type: 'immunotherapy',
          availableInEgypt: 'متوفر في المراكز المتخصصة',
          icon: 'Shield',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'kasralainy' || c.id === 'ainshams'
      ),
    },

    prevention: {
      possible: 'yes',
      measures: [
        'الإقلاع عن التدخين - أهم خطوة',
        'تجنب التدخين السلبي',
        'تجنب التعرض للمواد الكيميائية في العمل',
        'ممارسة الرياضة',
        'أكل الخضار والفواكه',
      ],
      screeningRecommendation: {
        who: 'المدخنين الحاليين والسابقين فوق 55 سنة',
        frequency: 'سنوياً',
        method: 'أشعة مقطعية منخفضة الجرعة',
        linkedSurveyId: 'lung',
      },
    },

    relatedResources: [
      { type: 'screening', id: 'lung', title: 'فحص سرطان الرئة' },
      { type: 'nutrition', id: 'n1', title: 'التغذية أثناء العلاج' },
    ],

    livingWith: {
      duringTreatment: 'الإقلاع عن التدخين ضروري. تمارين التنفس مفيدة. الدعم النفسي مهم.',
      afterTreatment: 'المتابعة الدورية بالأشعة. الابتعاد نهائياً عن التدخين.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 4. Colon Cancer
  {
    id: 'colon',
    slug: 'colon-cancer',
    title: 'سرطان القولون',
    englishName: 'Colorectal Cancer',
    excerpt: 'مرتبط بنظام الأكل، والمنظار بيكشفه بدري وممكن يمنعه كمان.',
    icon: 'Circle',
    color: 'emerald',
    category: 'digestive',

    overview: `سرطان القولون من أكتر السرطانات اللي ممكن نقي منها ونكتشفها بدري. المنظار بيشيل الزوائد اللحمية قبل ما تتحول لسرطان، وده بيمنع المرض أصلاً.

التغيير في نظام الأكل والحركة بيقللوا الخطورة بشكل كبير.`,

    statistics: {
      prevalenceInEgypt: '7% من حالات السرطان',
      annualCases: 'حوالي 6,500 حالة جديدة سنوياً',
      survivalRate: '90% في المرحلة الأولى، 15% في المرحلة الرابعة',
      commonAgeGroup: '50-70 سنة',
      genderDistribution: 'both',
      egyptSpecificFactors: 'زيادة الحالات مرتبطة بتغير نمط الأكل والسمنة',
    },

    riskFactors: [
      {
        id: 'age',
        title: 'السن',
        description: 'الخطورة بتزيد بعد سن 50',
        modifiable: false,
        icon: 'Calendar',
      },
      {
        id: 'diet',
        title: 'نظام الأكل',
        description: 'اللحوم المصنعة والأكل قليل الألياف',
        modifiable: true,
        icon: 'Utensils',
      },
      {
        id: 'obesity',
        title: 'السمنة',
        description: 'زيادة الوزن بتزود الخطورة',
        modifiable: true,
        icon: 'Scale',
      },
      {
        id: 'sedentary',
        title: 'قلة الحركة',
        description: 'الجلوس لفترات طويلة',
        modifiable: true,
        icon: 'Armchair',
      },
      {
        id: 'family',
        title: 'التاريخ العائلي',
        description: 'وجود حالات في العائلة',
        modifiable: false,
        icon: 'Users',
      },
      {
        id: 'polyps',
        title: 'الزوائد اللحمية',
        description: 'وجود زوائد سابقة في القولون',
        modifiable: true,
        icon: 'Circle',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'المرحلة الأولى',
        description: 'الورم في جدار القولون فقط',
        survivalRate: '90%',
        treatmentApproach: 'جراحة فقط في الغالب',
      },
      {
        stage: 'II',
        title: 'المرحلة الثانية',
        description: 'اخترق جدار القولون كله',
        survivalRate: '70-80%',
        treatmentApproach: 'جراحة + أحياناً كيماوي',
      },
      {
        stage: 'III',
        title: 'المرحلة الثالثة',
        description: 'انتشر للغدد الليمفاوية',
        survivalRate: '50-65%',
        treatmentApproach: 'جراحة + كيماوي',
      },
      {
        stage: 'IV',
        title: 'المرحلة الرابعة',
        description: 'انتشر للكبد أو أعضاء تانية',
        survivalRate: '15%',
        treatmentApproach: 'كيماوي + علاج موجه + أحياناً جراحة للانتشار',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'تغير مستمر في عادات الإخراج',
          warningLevel: 'common',
          icon: 'RefreshCw',
        },
        {
          id: 's2',
          description: 'دم في البراز (أحمر أو غامق)',
          warningLevel: 'urgent',
          icon: 'Droplet',
        },
        {
          id: 's3',
          description: 'ألم في البطن مستمر',
          warningLevel: 'common',
          icon: 'AlertCircle',
        },
      ],
      advanced: [
        {
          id: 's4',
          description: 'نقص وزن غير مبرر',
          warningLevel: 'common',
        },
        {
          id: 's5',
          description: 'إرهاق وضعف عام',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'انسداد معوي',
          warningLevel: 'urgent',
        },
      ],
      warningSigns: 'أي دم في البراز لازم يتفحص. مش دايماً بواسير!',
    },

    diagnosis: {
      overview: 'المنظار هو الفحص الأساسي - بيشوف القولون كله وياخد عينات.',
      methods: [
        {
          id: 'd1',
          name: 'منظار القولون',
          description: 'الفحص الذهبي - بيشوف وياخد عينة ويشيل زوائد',
          icon: 'Eye',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd2',
          name: 'تحليل الدم الخفي في البراز',
          description: 'فحص بسيط للكشف المبكر',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd3',
          name: 'الأشعة المقطعية',
          description: 'لتقييم الانتشار',
          icon: 'Scan',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'تحليل CEA',
          description: 'دلالة أورام للمتابعة',
          icon: 'Activity',
          availableInEgypt: true,
          costLevel: 'low',
        },
      ],
      specialists: ['جراح جهاز هضمي', 'طبيب جهاز هضمي', 'طبيب أورام'],
    },

    treatment: {
      overview: 'الجراحة هي الأساس في المراحل المبكرة. الكيماوي والعلاج الموجه للمراحل المتقدمة.',
      options: [
        {
          id: 't1',
          name: 'الجراحة',
          description: 'استئصال الجزء المصاب من القولون',
          type: 'surgery',
          availableInEgypt: 'متوفرة - بما فيها جراحة المناظير',
          icon: 'Scissors',
        },
        {
          id: 't2',
          name: 'العلاج الكيماوي',
          description: 'بعد الجراحة في المراحل المتقدمة',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't3',
          name: 'العلاج الموجه',
          description: 'أدوية زي Bevacizumab و Cetuximab',
          type: 'targeted',
          availableInEgypt: 'متوفر',
          icon: 'Target',
        },
        {
          id: 't4',
          name: 'العلاج الإشعاعي',
          description: 'خاصة لسرطان المستقيم',
          type: 'radiation',
          availableInEgypt: 'متوفر',
          icon: 'Zap',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'kasralainy' || c.id === 'mansoura'
      ),
    },

    prevention: {
      possible: 'yes',
      measures: [
        'منظار قولون بعد سن 50',
        'أكل كتير ألياف (خضار، فواكه، حبوب)',
        'قلل اللحوم المصنعة (لانشون، سوسيس)',
        'حافظ على وزن صحي',
        'مارس رياضة منتظمة',
        'قلل الكحول',
      ],
      screeningRecommendation: {
        who: 'كل الناس من سن 45-50',
        frequency: 'منظار كل 10 سنين لو طبيعي',
        method: 'منظار قولون أو تحليل براز سنوي',
        linkedSurveyId: 'colon',
      },
    },

    relatedResources: [
      { type: 'screening', id: 'colon', title: 'فحص سرطان القولون' },
      { type: 'nutrition', id: 'n3', title: 'الأكل الصحي والوقاية' },
    ],

    livingWith: {
      duringTreatment: 'بعض المرضى بيحتاجوا كيس مؤقت - معظم الحالات بترجع طبيعي.',
      afterTreatment: 'منظار متابعة كل سنة لمدة 5 سنين. أكل صحي ورياضة.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 5. Bladder Cancer
  {
    id: 'bladder',
    slug: 'bladder-cancer',
    title: 'سرطان المثانة',
    englishName: 'Bladder Cancer',
    excerpt: 'كان منتشر في مصر بسبب البلهارسيا، والحالات قلت جداً. التشخيص المبكر مهم.',
    icon: 'Circle',
    color: 'blue',
    category: 'urological',

    overview: `مصر كانت من أعلى الدول في سرطان المثانة بسبب البلهارسيا، لكن بعد القضاء على المرض، الحالات الجديدة قلت. دلوقتي التدخين بقى السبب الأول.

العرض الأساسي هو الدم في البول - أي دم لازم يتفحص فوراً.`,

    statistics: {
      prevalenceInEgypt: '10% من حالات السرطان (كانت أعلى زمان)',
      annualCases: 'حوالي 10,000 حالة سنوياً',
      survivalRate: '77% في المرحلة المبكرة',
      commonAgeGroup: '55-75 سنة',
      genderDistribution: 'both',
      egyptSpecificFactors: 'البلهارسيا كانت السبب الرئيسي - دلوقتي التدخين والتعرض الكيميائي',
    },

    riskFactors: [
      {
        id: 'smoking',
        title: 'التدخين',
        description: 'السبب الأول حالياً',
        modifiable: true,
        icon: 'Cigarette',
      },
      {
        id: 'schistosomiasis',
        title: 'البلهارسيا',
        description: 'التاريخ السابق للإصابة',
        modifiable: false,
        icon: 'Bug',
      },
      {
        id: 'chemicals',
        title: 'المواد الكيميائية',
        description: 'العمل في صناعات معينة (الصباغة، المطاط)',
        modifiable: true,
        icon: 'Beaker',
      },
      {
        id: 'age',
        title: 'السن',
        description: 'بيزيد بعد سن 55',
        modifiable: false,
        icon: 'Calendar',
      },
      {
        id: 'chronic',
        title: 'التهابات مزمنة',
        description: 'التهابات متكررة في المثانة',
        modifiable: true,
        icon: 'Flame',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'سطحي (Non-muscle invasive)',
        description: 'الورم في البطانة فقط',
        survivalRate: '90%',
        treatmentApproach: 'إزالة بالمنظار + BCG',
      },
      {
        stage: 'II',
        title: 'اختراق العضلة',
        description: 'الورم وصل لعضلة المثانة',
        survivalRate: '60-70%',
        treatmentApproach: 'استئصال المثانة أو علاج ثلاثي',
      },
      {
        stage: 'III',
        title: 'موضعي متقدم',
        description: 'انتشر للأنسجة المجاورة',
        survivalRate: '40-50%',
        treatmentApproach: 'كيماوي + جراحة أو إشعاع',
      },
      {
        stage: 'IV',
        title: 'منتشر',
        description: 'انتشر لأعضاء بعيدة',
        survivalRate: '10-15%',
        treatmentApproach: 'كيماوي + علاج مناعي',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'دم في البول (لون أحمر أو بني)',
          warningLevel: 'urgent',
          icon: 'Droplet',
        },
        {
          id: 's2',
          description: 'حرقان أو ألم أثناء التبول',
          warningLevel: 'common',
          icon: 'Flame',
        },
        {
          id: 's3',
          description: 'الحاجة للتبول كتير',
          warningLevel: 'common',
          icon: 'Clock',
        },
      ],
      advanced: [
        {
          id: 's4',
          description: 'ألم في أسفل الظهر',
          warningLevel: 'common',
        },
        {
          id: 's5',
          description: 'عدم القدرة على التبول',
          warningLevel: 'urgent',
        },
        {
          id: 's6',
          description: 'تورم في الرجلين',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'أي دم في البول - حتى لو مرة واحدة ومن غير ألم - لازم يتفحص فوراً!',
    },

    diagnosis: {
      overview: 'التشخيص بالمنظار هو الأساس - بيشوف المثانة من جوه وياخد عينة.',
      methods: [
        {
          id: 'd1',
          name: 'تحليل البول',
          description: 'للكشف عن الدم والخلايا غير الطبيعية',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'منظار المثانة',
          description: 'شوف المثانة من جوه وأخذ عينة',
          icon: 'Eye',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd3',
          name: 'الأشعة المقطعية',
          description: 'للمثانة والكلى والحالب',
          icon: 'Scan',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'تحليل الخلايا البولية',
          description: 'فحص خلايا البول تحت الميكروسكوب',
          icon: 'Microscope',
          availableInEgypt: true,
          costLevel: 'low',
        },
      ],
      specialists: ['طبيب مسالك بولية', 'جراح مسالك', 'طبيب أورام'],
    },

    treatment: {
      overview: 'العلاج بيعتمد على عمق الورم. الأورام السطحية بتتعالج بالمنظار، المتقدمة محتاجة جراحة أكبر.',
      options: [
        {
          id: 't1',
          name: 'الإزالة بالمنظار (TURBT)',
          description: 'إزالة الورم السطحي عن طريق المنظار',
          type: 'surgery',
          availableInEgypt: 'متوفرة ومنتشرة',
          icon: 'Eye',
        },
        {
          id: 't2',
          name: 'العلاج المناعي الموضعي (BCG)',
          description: 'حقن في المثانة لمنع الرجوع',
          type: 'immunotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Shield',
        },
        {
          id: 't3',
          name: 'استئصال المثانة',
          description: 'للحالات المتقدمة - مع عمل مثانة بديلة',
          type: 'surgery',
          availableInEgypt: 'متوفر في المراكز الكبرى',
          icon: 'Scissors',
        },
        {
          id: 't4',
          name: 'العلاج الكيماوي',
          description: 'قبل أو بعد الجراحة',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't5',
          name: 'العلاج المناعي',
          description: 'للحالات المنتشرة (Pembrolizumab)',
          type: 'immunotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Shield',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'mansoura' || c.id === 'kasralainy'
      ),
      egyptSpecificNotes: 'مركز أورام المنصورة من أهم المراكز المتخصصة في سرطان المثانة.',
    },

    prevention: {
      possible: 'partial',
      measures: [
        'الإقلاع عن التدخين',
        'شرب مياه كتير',
        'الوقاية من البلهارسيا (تجنب المياه الملوثة)',
        'الحماية في العمل من المواد الكيميائية',
        'علاج التهابات المثانة',
      ],
    },

    relatedResources: [
      { type: 'guide', id: 'g1', title: 'إجراءات العلاج على نفقة الدولة' },
    ],

    livingWith: {
      duringTreatment: 'بعد استئصال المثانة، فيه خيارات كتير للمثانة البديلة.',
      afterTreatment: 'متابعة بالمنظار كل 3 شهور في البداية.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 6. Prostate Cancer
  {
    id: 'prostate',
    slug: 'prostate-cancer',
    title: 'سرطان البروستاتا',
    englishName: 'Prostate Cancer',
    excerpt: 'أكتر سرطان في الرجال فوق 50، وبيتطور ببطء في أغلب الحالات.',
    icon: 'User',
    color: 'indigo',
    category: 'urological',

    overview: `سرطان البروستاتا من أكتر السرطانات في الرجال كبار السن. الخبر الكويس إنه في أغلب الحالات بيكون بطيء جداً، وكتير من الرجال بيعيشوا معاه من غير ما يسبب مشاكل.

الفحص المبكر مهم للرجال فوق 50، أو فوق 45 لو فيه تاريخ عائلي.`,

    statistics: {
      prevalenceInEgypt: '6% من سرطانات الرجال',
      annualCases: 'حوالي 3,500 حالة سنوياً',
      survivalRate: '99% في المراحل المبكرة (5 سنوات)',
      commonAgeGroup: '65+ سنة',
      genderDistribution: 'male',
      egyptSpecificFactors: 'التشخيص بيتأخر أحياناً لأن الرجال مش بيروحوا للكشف',
    },

    riskFactors: [
      {
        id: 'age',
        title: 'السن',
        description: 'الخطورة بتزيد جداً بعد 50',
        modifiable: false,
        icon: 'Calendar',
      },
      {
        id: 'family',
        title: 'التاريخ العائلي',
        description: 'الأب أو الأخ عنده سرطان بروستاتا',
        modifiable: false,
        icon: 'Users',
      },
      {
        id: 'race',
        title: 'العرق',
        description: 'أعلى في الرجال من أصول أفريقية',
        modifiable: false,
        icon: 'Globe',
      },
      {
        id: 'obesity',
        title: 'السمنة',
        description: 'مرتبطة بأنواع أشرس',
        modifiable: true,
        icon: 'Scale',
      },
      {
        id: 'diet',
        title: 'نظام الأكل',
        description: 'اللحوم الحمراء والدهون',
        modifiable: true,
        icon: 'Utensils',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'مبكر جداً',
        description: 'ورم صغير جداً محدود في جزء من البروستاتا',
        survivalRate: '99%',
        treatmentApproach: 'مراقبة فعالة أو جراحة أو إشعاع',
      },
      {
        stage: 'II',
        title: 'مبكر',
        description: 'ورم أكبر لكن لسه في البروستاتا',
        survivalRate: '99%',
        treatmentApproach: 'جراحة أو إشعاع',
      },
      {
        stage: 'III',
        title: 'موضعي متقدم',
        description: 'خرج من كبسولة البروستاتا',
        survivalRate: '95%',
        treatmentApproach: 'إشعاع + علاج هرموني',
      },
      {
        stage: 'IV',
        title: 'منتشر',
        description: 'انتشر للعظام أو أعضاء تانية',
        survivalRate: '30%',
        treatmentApproach: 'علاج هرموني + كيماوي',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'صعوبة في بدء التبول',
          warningLevel: 'common',
          icon: 'Pause',
        },
        {
          id: 's2',
          description: 'ضعف تدفق البول',
          warningLevel: 'common',
          icon: 'TrendingDown',
        },
        {
          id: 's3',
          description: 'التبول كتير خاصة بالليل',
          warningLevel: 'common',
          icon: 'Moon',
        },
      ],
      advanced: [
        {
          id: 's4',
          description: 'دم في البول أو المني',
          warningLevel: 'urgent',
        },
        {
          id: 's5',
          description: 'ألم في العظام (خاصة الظهر)',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'ضعف الانتصاب',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'الأعراض دي ممكن تكون بسبب تضخم البروستاتا الحميد - الفحص بيفرق.',
    },

    diagnosis: {
      overview: 'التشخيص بتحليل PSA والفحص الشرجي، ثم العينة لو لزم.',
      methods: [
        {
          id: 'd1',
          name: 'تحليل PSA',
          description: 'تحليل دم بيكشف ارتفاع دلالات البروستاتا',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'الفحص الشرجي',
          description: 'الدكتور بيتحسس البروستاتا',
          icon: 'Hand',
          availableInEgypt: true,
          costLevel: 'free',
        },
        {
          id: 'd3',
          name: 'الرنين المغناطيسي',
          description: 'لتحديد مكان الورم بدقة',
          icon: 'Cog',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'عينة البروستاتا',
          description: 'أخذ عينات بالإبرة للتأكيد',
          icon: 'Syringe',
          availableInEgypt: true,
          costLevel: 'medium',
        },
      ],
      specialists: ['طبيب مسالك بولية', 'طبيب أورام'],
    },

    treatment: {
      overview: 'كتير من الحالات البطيئة ممكن نراقبها فقط. الخيارات تشمل الجراحة والإشعاع والهرمونات.',
      options: [
        {
          id: 't1',
          name: 'المراقبة الفعالة',
          description: 'متابعة من غير علاج للأورام البطيئة',
          type: 'other',
          availableInEgypt: 'مناسب لحالات كتير',
          icon: 'Eye',
        },
        {
          id: 't2',
          name: 'استئصال البروستاتا',
          description: 'إزالة البروستاتا جراحياً - متضمن الروبوت',
          type: 'surgery',
          availableInEgypt: 'متوفر بما فيها جراحة الروبوت',
          icon: 'Scissors',
        },
        {
          id: 't3',
          name: 'العلاج الإشعاعي',
          description: 'إشعاع خارجي أو زرع حبيبات مشعة',
          type: 'radiation',
          availableInEgypt: 'متوفر',
          icon: 'Zap',
        },
        {
          id: 't4',
          name: 'العلاج الهرموني',
          description: 'تقليل هرمون الذكورة اللي بيغذي الورم',
          type: 'hormone',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't5',
          name: 'العلاج الكيماوي',
          description: 'للحالات المتقدمة',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'kasralainy' || c.id === 'darelfouad'
      ),
    },

    prevention: {
      possible: 'limited',
      measures: [
        'فحص PSA سنوي بعد سن 50',
        'أكل صحي (خضار، طماطم، سمك)',
        'الحفاظ على وزن صحي',
        'ممارسة الرياضة',
      ],
      screeningRecommendation: {
        who: 'الرجال فوق 50 (أو 45 لو فيه تاريخ عائلي)',
        frequency: 'سنوياً',
        method: 'تحليل PSA + فحص شرجي',
        linkedSurveyId: 'prostate',
      },
    },

    relatedResources: [
      { type: 'screening', id: 'prostate', title: 'فحص البروستاتا' },
    ],

    livingWith: {
      duringTreatment: 'بعض العلاجات ممكن تأثر على التبول والجنس - ناقش الخيارات مع طبيبك.',
      afterTreatment: 'متابعة PSA منتظمة. كتير من الرجال بيعيشوا حياة طبيعية.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 7. Leukemia
  {
    id: 'leukemia',
    slug: 'leukemia',
    title: 'سرطان الدم (اللوكيميا)',
    englishName: 'Leukemia',
    excerpt: 'سرطان يصيب خلايا الدم ونخاع العظم، وله أنواع كتير بعضها قابل للشفاء التام.',
    icon: 'Droplets',
    color: 'red',
    category: 'blood',

    overview: `اللوكيميا هو سرطان بيصيب خلايا الدم البيضاء. فيه أنواع كتير - بعضها بطيء وبعضها سريع. نسب الشفاء تحسنت جداً، خاصة في الأطفال.

مستشفى 57357 من أهم المراكز في الشرق الأوسط لعلاج لوكيميا الأطفال.`,

    statistics: {
      prevalenceInEgypt: '3% من حالات السرطان',
      annualCases: 'حوالي 5,000 حالة سنوياً',
      survivalRate: '85% في الأطفال، 50-60% في الكبار (بتختلف حسب النوع)',
      commonAgeGroup: 'الأطفال والكبار فوق 55',
      genderDistribution: 'both',
      egyptSpecificFactors: 'مستشفى 57357 بيقدم علاج متميز للأطفال مجاناً',
    },

    riskFactors: [
      {
        id: 'genetics',
        title: 'العوامل الوراثية',
        description: 'بعض المتلازمات الوراثية',
        modifiable: false,
        icon: 'Dna',
      },
      {
        id: 'radiation',
        title: 'التعرض للإشعاع',
        description: 'جرعات عالية من الإشعاع',
        modifiable: true,
        icon: 'Zap',
      },
      {
        id: 'chemicals',
        title: 'المواد الكيميائية',
        description: 'البنزين ومواد تانية',
        modifiable: true,
        icon: 'Beaker',
      },
      {
        id: 'smoking',
        title: 'التدخين',
        description: 'بيزود خطورة بعض الأنواع',
        modifiable: true,
        icon: 'Cigarette',
      },
      {
        id: 'prevchemo',
        title: 'علاج كيماوي سابق',
        description: 'بعض الأدوية الكيماوية',
        modifiable: false,
        icon: 'Pill',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'اللوكيميا الحادة',
        description: 'خلايا سريعة الانقسام - محتاجة علاج فوري',
        survivalRate: '70-85% في الأطفال',
        treatmentApproach: 'كيماوي مكثف',
      },
      {
        stage: 'II',
        title: 'اللوكيميا المزمنة الليمفاوية (CLL)',
        description: 'بطيئة - ممكن نراقبها في البداية',
        survivalRate: '83% (5 سنوات)',
        treatmentApproach: 'مراقبة ثم علاج موجه',
      },
      {
        stage: 'III',
        title: 'اللوكيميا المزمنة النخاعية (CML)',
        description: 'كانت خطيرة - العلاج الموجه غيرها',
        survivalRate: '90% (5 سنوات) مع العلاج الموجه',
        treatmentApproach: 'العلاج الموجه (Imatinib)',
      },
      {
        stage: 'IV',
        title: 'اللوكيميا الحادة المقاومة',
        description: 'مش بتستجيب للعلاج الأولي',
        survivalRate: 'متغير حسب الحالة',
        treatmentApproach: 'زراعة نخاع',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'إرهاق شديد ومستمر',
          warningLevel: 'common',
          icon: 'Battery',
        },
        {
          id: 's2',
          description: 'ارتفاع في درجة الحرارة متكرر',
          warningLevel: 'common',
          icon: 'Thermometer',
        },
        {
          id: 's3',
          description: 'كدمات سهلة أو نزيف',
          warningLevel: 'urgent',
          icon: 'Droplet',
        },
        {
          id: 's4',
          description: 'التهابات متكررة',
          warningLevel: 'common',
          icon: 'Shield',
        },
      ],
      advanced: [
        {
          id: 's5',
          description: 'تضخم الغدد الليمفاوية',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'ألم في العظام',
          warningLevel: 'common',
        },
        {
          id: 's7',
          description: 'تضخم الطحال والكبد',
          warningLevel: 'common',
        },
        {
          id: 's8',
          description: 'نقص الوزن',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'لو فيه إرهاق شديد مع كدمات سهلة أو حرارة متكررة، لازم تحليل دم فوراً.',
    },

    diagnosis: {
      overview: 'التشخيص بصورة الدم الكاملة ثم عينة النخاع والتحاليل الجينية.',
      methods: [
        {
          id: 'd1',
          name: 'صورة الدم الكاملة (CBC)',
          description: 'أول فحص بيوضح خلل في خلايا الدم',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
        {
          id: 'd2',
          name: 'عينة النخاع (Bone Marrow)',
          description: 'من عظمة الحوض - ضرورية للتشخيص',
          icon: 'Syringe',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd3',
          name: 'التحليل الجيني (Cytogenetics)',
          description: 'لتحديد نوع اللوكيميا بدقة',
          icon: 'Dna',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'Flow Cytometry',
          description: 'تحديد نوع الخلايا السرطانية',
          icon: 'Activity',
          availableInEgypt: true,
          costLevel: 'medium',
        },
      ],
      specialists: ['طبيب أمراض دم', 'طبيب أورام'],
    },

    treatment: {
      overview: 'العلاج بيعتمد على النوع. الكيماوي هو الأساس، وزراعة النخاع للحالات المناسبة.',
      options: [
        {
          id: 't1',
          name: 'العلاج الكيماوي',
          description: 'على مراحل (حث - تدعيم - صيانة)',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't2',
          name: 'العلاج الموجه',
          description: 'أدوية زي Imatinib للـ CML',
          type: 'targeted',
          availableInEgypt: 'متوفر',
          icon: 'Target',
        },
        {
          id: 't3',
          name: 'زراعة النخاع',
          description: 'من متبرع مطابق أو ذاتية',
          type: 'stemCell',
          availableInEgypt: 'متوفر في مراكز متخصصة',
          icon: 'Heart',
        },
        {
          id: 't4',
          name: 'العلاج المناعي (CAR-T)',
          description: 'أحدث العلاجات - لحالات معينة',
          type: 'immunotherapy',
          availableInEgypt: 'محدود التوفر',
          icon: 'Shield',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === '57357' || c.id === 'nci' || c.id === 'kasralainy'
      ),
      egyptSpecificNotes: 'مستشفى 57357 من أفضل المراكز عالمياً لعلاج لوكيميا الأطفال.',
    },

    prevention: {
      possible: 'limited',
      measures: [
        'تجنب التعرض للمواد الكيميائية الخطرة',
        'الإقلاع عن التدخين',
        'الحماية من الإشعاع غير الضروري',
      ],
    },

    relatedResources: [
      { type: 'caregiver', id: 'c2', title: 'رعاية طفل مريض بالسرطان' },
    ],

    livingWith: {
      duringTreatment: 'العلاج بيكون مكثف ومحتاج إقامة بالمستشفى. الدعم النفسي للطفل والأهل مهم.',
      afterTreatment: 'متابعة منتظمة لسنوات. كتير من الأطفال بيتعافوا تماماً.',
      supportGroups: ['جمعية أصدقاء 57357'],
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },

  // 8. Lymphoma
  {
    id: 'lymphoma',
    slug: 'lymphoma',
    title: 'سرطان الغدد الليمفاوية (الليمفوما)',
    englishName: 'Lymphoma',
    excerpt: 'سرطان يصيب الجهاز الليمفاوي، وفيه نوعين رئيسيين. نسب الشفاء عالية خاصة في هودجكين.',
    icon: 'GitBranch',
    color: 'purple',
    category: 'blood',

    overview: `الليمفوما سرطان بيصيب الجهاز الليمفاوي (الغدد والطحال). فيه نوعين رئيسيين: هودجكين (نسب شفاء عالية جداً) ونون-هودجكين (أنواع كتيرة ومختلفة).

العلاج تطور جداً، وكتير من الحالات بتتشافى تماماً.`,

    statistics: {
      prevalenceInEgypt: '4% من حالات السرطان',
      annualCases: 'حوالي 6,000 حالة سنوياً',
      survivalRate: '90% لهودجكين، 70% لنون-هودجكين (حسب النوع)',
      commonAgeGroup: '15-35 سنة (هودجكين)، 60+ (نون-هودجكين)',
      genderDistribution: 'both',
    },

    riskFactors: [
      {
        id: 'immune',
        title: 'ضعف المناعة',
        description: 'نقص المناعة المكتسب أو الأدوية المثبطة',
        modifiable: false,
        icon: 'Shield',
      },
      {
        id: 'infection',
        title: 'العدوى الفيروسية',
        description: 'EBV و HTLV-1 و HIV',
        modifiable: true,
        icon: 'Bug',
      },
      {
        id: 'age',
        title: 'السن',
        description: 'هودجكين في الشباب، نون-هودجكين في كبار السن',
        modifiable: false,
        icon: 'Calendar',
      },
      {
        id: 'autoimmune',
        title: 'أمراض المناعة الذاتية',
        description: 'زي الروماتويد والذئبة',
        modifiable: false,
        icon: 'AlertTriangle',
      },
      {
        id: 'chemicals',
        title: 'المواد الكيميائية',
        description: 'المبيدات وبعض الكيماويات',
        modifiable: true,
        icon: 'Beaker',
      },
    ],

    stages: [
      {
        stage: 'I',
        title: 'المرحلة الأولى',
        description: 'إصابة مجموعة غدد واحدة',
        survivalRate: '95%+ (هودجكين)',
        treatmentApproach: 'كيماوي خفيف + إشعاع',
      },
      {
        stage: 'II',
        title: 'المرحلة الثانية',
        description: 'مجموعتين أو أكتر على نفس جانب الحجاب الحاجز',
        survivalRate: '90%+ (هودجكين)',
        treatmentApproach: 'كيماوي + إشعاع',
      },
      {
        stage: 'III',
        title: 'المرحلة الثالثة',
        description: 'غدد على الجانبين (فوق وتحت الحجاب)',
        survivalRate: '85% (هودجكين)',
        treatmentApproach: 'كيماوي مكثف',
      },
      {
        stage: 'IV',
        title: 'المرحلة الرابعة',
        description: 'انتشر لأعضاء غير ليمفاوية',
        survivalRate: '65-70% (هودجكين)',
        treatmentApproach: 'كيماوي مكثف + علاج موجه',
      },
    ],

    symptoms: {
      early: [
        {
          id: 's1',
          description: 'تضخم غدد غير مؤلم (الرقبة، الإبط، الفخذ)',
          warningLevel: 'common',
          icon: 'Circle',
        },
        {
          id: 's2',
          description: 'حمى غير مفسرة',
          warningLevel: 'common',
          icon: 'Thermometer',
        },
        {
          id: 's3',
          description: 'عرق ليلي غزير',
          warningLevel: 'common',
          icon: 'Droplets',
        },
        {
          id: 's4',
          description: 'نقص وزن أكتر من 10% في 6 شهور',
          warningLevel: 'urgent',
          icon: 'TrendingDown',
        },
      ],
      advanced: [
        {
          id: 's5',
          description: 'حكة شديدة في الجلد',
          warningLevel: 'common',
        },
        {
          id: 's6',
          description: 'إرهاق شديد',
          warningLevel: 'common',
        },
        {
          id: 's7',
          description: 'ألم بعد شرب الكحول (في هودجكين)',
          warningLevel: 'common',
        },
      ],
      warningSigns: 'تضخم غدة أكتر من أسبوعين مع أي من الأعراض التانية محتاج فحص.',
    },

    diagnosis: {
      overview: 'التشخيص بعينة من الغدة المتضخمة وفحوصات لتحديد انتشار المرض.',
      methods: [
        {
          id: 'd1',
          name: 'عينة من الغدة (Biopsy)',
          description: 'استئصال غدة كاملة أو عينة منها',
          icon: 'Scissors',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd2',
          name: 'PET-CT Scan',
          description: 'لمعرفة كل الأماكن المصابة',
          icon: 'Activity',
          availableInEgypt: true,
          costLevel: 'high',
        },
        {
          id: 'd3',
          name: 'عينة النخاع',
          description: 'لبعض أنواع نون-هودجكين',
          icon: 'Syringe',
          availableInEgypt: true,
          costLevel: 'medium',
        },
        {
          id: 'd4',
          name: 'تحاليل الدم',
          description: 'صورة الدم، وظائف الكبد والكلى، LDH',
          icon: 'TestTube',
          availableInEgypt: true,
          costLevel: 'low',
        },
      ],
      specialists: ['طبيب أمراض دم', 'طبيب أورام'],
    },

    treatment: {
      overview: 'العلاج الكيماوي هو الأساس، مع إضافة الإشعاع أو العلاج الموجه حسب النوع.',
      options: [
        {
          id: 't1',
          name: 'العلاج الكيماوي (ABVD)',
          description: 'البروتوكول الأساسي لهودجكين',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't2',
          name: 'العلاج الكيماوي (R-CHOP)',
          description: 'لنون-هودجكين مع Rituximab',
          type: 'chemotherapy',
          availableInEgypt: 'متوفر',
          icon: 'Pill',
        },
        {
          id: 't3',
          name: 'العلاج الإشعاعي',
          description: 'للمراحل المبكرة أو مع الكيماوي',
          type: 'radiation',
          availableInEgypt: 'متوفر',
          icon: 'Zap',
        },
        {
          id: 't4',
          name: 'العلاج الموجه',
          description: 'أدوية زي Rituximab و Brentuximab',
          type: 'targeted',
          availableInEgypt: 'متوفر',
          icon: 'Target',
        },
        {
          id: 't5',
          name: 'زراعة النخاع',
          description: 'للحالات المنتكسة',
          type: 'stemCell',
          availableInEgypt: 'متوفر',
          icon: 'Heart',
        },
        {
          id: 't6',
          name: 'العلاج المناعي (CAR-T)',
          description: 'لبعض حالات نون-هودجكين المقاومة',
          type: 'immunotherapy',
          availableInEgypt: 'محدود',
          icon: 'Shield',
        },
      ],
      centersInEgypt: treatmentCentersEgypt.filter(c =>
        c.id === 'nci' || c.id === 'kasralainy' || c.id === '57357'
      ),
    },

    prevention: {
      possible: 'limited',
      measures: [
        'تجنب العدوى الفيروسية',
        'تجنب المواد الكيميائية الضارة',
        'الحفاظ على جهاز مناعي صحي',
      ],
    },

    relatedResources: [
      { type: 'nutrition', id: 'n1', title: 'التغذية أثناء العلاج' },
      { type: 'caregiver', id: 'c1', title: 'دليل المرافق' },
    ],

    livingWith: {
      duringTreatment: 'الكيماوي ممكن يسبب تساقط الشعر والإرهاق. الدعم النفسي مهم.',
      afterTreatment: 'متابعة لسنوات للتأكد من عدم الانتكاس. معظم المرضى بيعيشوا حياة طبيعية.',
    },

    lastUpdated: '2024-01',
    medicalDisclaimer: 'هذه المعلومات للتوعية فقط وليست بديلاً عن استشارة الطبيب المختص.',
  },
];

// Export a function to get cancer type by ID
export function getCancerTypeById(id: string): CancerType | undefined {
  return cancerTypes.find(c => c.id === id);
}

// Export a function to get cancer types by category
export function getCancerTypesByCategory(category: string): CancerType[] {
  if (category === 'all') return cancerTypes;
  return cancerTypes.filter(c => c.category === category);
}

// Export legacy format for backward compatibility
export const cancerTypesArticles = cancerTypes.map(ct => ({
  id: ct.id,
  title: ct.title,
  excerpt: ct.excerpt,
  icon: ct.icon,
  content: ct.overview,
}));
