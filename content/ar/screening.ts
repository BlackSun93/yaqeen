export interface SurveyQuestion {
  id: string;
  question: string;
  options: {
    value: 'yes' | 'no' | 'notSure';
    label: string;
    score: number;
  }[];
}

export interface Survey {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  questions: SurveyQuestion[];
  recommendations: {
    low: string;
    medium: string;
    high: string;
  };
}

export const screeningSurveys: Survey[] = [
  {
    id: 'general',
    titleKey: 'surveys.general.title',
    descriptionKey: 'surveys.general.description',
    icon: 'Scan',
    color: 'teal',
    questions: [
      {
        id: 'g1',
        question: 'هل لاحظت أي فقدان وزن غير مبرر (أكثر من 5 كيلو) في آخر 3 شهور؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g2',
        question: 'هل تعاني من إرهاق أو تعب شديد مستمر بدون سبب واضح؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g3',
        question: 'هل لاحظت أي تكتل أو ورم أو تورم غير طبيعي في أي مكان في جسمك؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1.5 },
        ],
      },
      {
        id: 'g4',
        question: 'هل عندك ألم مستمر في أي منطقة في جسمك بدون سبب واضح؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g5',
        question: 'هل لاحظت أي تغيرات في الجلد؟ (شامة تتغير لونها/حجمها، جرح مش بيخف، تقرحات)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g6',
        question: 'هل عندك صعوبة في البلع أو عسر هضم مستمر؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g7',
        question: 'هل لاحظت أي نزيف غير طبيعي؟ (دم في البول، البراز، السعال، أو نزيف غير متوقع)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1.5 },
        ],
      },
      {
        id: 'g8',
        question: 'هل عندك تغير مستمر في عادات الإخراج؟ (إمساك، إسهال، أو تغير في البول)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g9',
        question: 'هل فيه تاريخ عائلي للسرطان؟ (أقارب من الدرجة الأولى)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'g10',
        question: 'هل بتعمل فحص طبي دوري شامل سنوياً؟',
        options: [
          { value: 'yes', label: 'نعم', score: 0 },
          { value: 'no', label: 'لا', score: 1 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
    ],
    recommendations: {
      low: 'ممتاز! عوامل الخطر عندك قليلة. حافظ على نمط حياة صحي، نظام غذائي متوازن، رياضة منتظمة، وفحص طبي سنوي للاطمئنان.',
      medium: 'عندك بعض الأعراض اللي تستحق الانتباه. ننصحك بزيارة طبيب عام لعمل فحص شامل والاطمئنان على صحتك.',
      high: 'الأعراض اللي عندك محتاجة فحص طبي عاجل. من فضلك روح لدكتور متخصص في أقرب وقت. الكشف المبكر مهم جداً.',
    },
  },
  {
    id: 'breast',
    titleKey: 'surveys.breast.title',
    descriptionKey: 'surveys.breast.description',
    icon: 'Heart',
    color: 'pink',
    questions: [
      {
        id: 'b1',
        question: 'هل عمرك فوق 40 سنة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكدة', score: 0.5 },
        ],
      },
      {
        id: 'b2',
        question: 'هل فيه تاريخ عائلي لسرطان الثدي (أم، أخت، خالة)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكدة', score: 1 },
        ],
      },
      {
        id: 'b3',
        question: 'هل لاحظتي أي كتلة أو تغير في شكل الثدي؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكدة', score: 1 },
        ],
      },
      {
        id: 'b4',
        question: 'هل بدأت الدورة الشهرية قبل سن 12 سنة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكدة', score: 0.5 },
        ],
      },
      {
        id: 'b5',
        question: 'هل بتعملي فحص ذاتي للثدي بانتظام؟',
        options: [
          { value: 'yes', label: 'نعم', score: 0 },
          { value: 'no', label: 'لا', score: 1 },
          { value: 'notSure', label: 'مش متأكدة', score: 0.5 },
        ],
      },
      {
        id: 'b6',
        question: 'هل عملتي ماموجرام (أشعة على الثدي) في آخر سنتين؟',
        options: [
          { value: 'yes', label: 'نعم', score: 0 },
          { value: 'no', label: 'لا', score: 1 },
          { value: 'notSure', label: 'مش متأكدة', score: 0.5 },
        ],
      },
    ],
    recommendations: {
      low: 'استمري في الفحص الذاتي الشهري وعمل ماموجرام سنوي بعد سن 40. نمط حياتك الصحي مهم للوقاية.',
      medium: 'ننصحك بزيارة طبيب/طبيبة نساء لعمل فحص سريري. ممكن تحتاجي ماموجرام أو سونار على الثدي.',
      high: 'مهم جداً تروحي للدكتور في أقرب وقت. مراكز بهية وشفاء الأورمان بتقدم كشف مجاني.',
    },
  },
  {
    id: 'colon',
    titleKey: 'surveys.colon.title',
    descriptionKey: 'surveys.colon.description',
    icon: 'Activity',
    color: 'blue',
    questions: [
      {
        id: 'c1',
        question: 'هل عمرك فوق 45 سنة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
      {
        id: 'c2',
        question: 'هل فيه تاريخ عائلي لسرطان القولون؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'c3',
        question: 'هل لاحظت دم في البراز؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'c4',
        question: 'هل عندك تغيير مستمر في عادات الإخراج (إمساك أو إسهال)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'c5',
        question: 'هل بتاكل لحوم مصنعة بانتظام (لانشون، سوسيس، بسطرمة)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
      {
        id: 'c6',
        question: 'هل بتمارس رياضة بانتظام؟',
        options: [
          { value: 'yes', label: 'نعم', score: 0 },
          { value: 'no', label: 'لا', score: 1 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
    ],
    recommendations: {
      low: 'حافظ على نظام غذائي صحي غني بالألياف وقلل اللحوم المصنعة. اعمل منظار قولون كل 5 سنين بعد سن 50.',
      medium: 'ننصحك بزيارة طبيب جهاز هضمي للفحص. ممكن تحتاج تحليل دم خفي في البراز أو منظار.',
      high: 'مهم جداً تروح للدكتور فوراً. الأعراض اللي عندك محتاجة فحص متخصص في أقرب وقت.',
    },
  },
  {
    id: 'lung',
    titleKey: 'surveys.lung.title',
    descriptionKey: 'surveys.lung.description',
    icon: 'Wind',
    color: 'gray',
    questions: [
      {
        id: 'l1',
        question: 'هل بتدخن أو كنت مدخن؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'بطلت من فترة', score: 1 },
        ],
      },
      {
        id: 'l2',
        question: 'هل بتتعرض لدخان السجائر بشكل مستمر (تدخين سلبي)؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'l3',
        question: 'هل عندك كحة مستمرة أكثر من 3 أسابيع؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'l4',
        question: 'هل لاحظت دم مع الكحة أو البلغم؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'l5',
        question: 'هل بتشتغل في بيئة فيها غبار أو مواد كيماوية؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
      {
        id: 'l6',
        question: 'هل فيه تاريخ عائلي لسرطان الرئة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
    ],
    recommendations: {
      low: 'حافظ على نمط حياة صحي وابعد عن التدخين والتدخين السلبي. مش محتاج فحوصات حالياً.',
      medium: 'لو مدخن أو بطلت قريب، ننصحك تستشير دكتور صدر. ممكن تحتاج أشعة على الصدر.',
      high: 'الأعراض اللي عندك محتاجة فحص فوري. روح لدكتور صدر أو طوارئ أقرب مستشفى.',
    },
  },
  {
    id: 'prostate',
    titleKey: 'surveys.prostate.title',
    descriptionKey: 'surveys.prostate.description',
    icon: 'User',
    color: 'emerald',
    questions: [
      {
        id: 'p1',
        question: 'هل عمرك فوق 50 سنة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
      {
        id: 'p2',
        question: 'هل فيه تاريخ عائلي لسرطان البروستاتا؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'p3',
        question: 'هل عندك صعوبة في التبول أو ضعف في تدفق البول؟',
        options: [
          { value: 'yes', label: 'نعم', score: 2 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'p4',
        question: 'هل بتصحى كتير بالليل عشان تتبول؟',
        options: [
          { value: 'yes', label: 'نعم', score: 1 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
      {
        id: 'p5',
        question: 'هل لاحظت دم في البول؟',
        options: [
          { value: 'yes', label: 'نعم', score: 3 },
          { value: 'no', label: 'لا', score: 0 },
          { value: 'notSure', label: 'مش متأكد', score: 1 },
        ],
      },
      {
        id: 'p6',
        question: 'هل عملت تحليل PSA في آخر سنة؟',
        options: [
          { value: 'yes', label: 'نعم', score: 0 },
          { value: 'no', label: 'لا', score: 1 },
          { value: 'notSure', label: 'مش متأكد', score: 0.5 },
        ],
      },
    ],
    recommendations: {
      low: 'حافظ على الفحص الدوري بعد سن 50. تحليل PSA سنوي مفيد للاطمئنان.',
      medium: 'ننصحك بزيارة دكتور مسالك بولية لعمل فحص وتحليل PSA.',
      high: 'الأعراض اللي عندك محتاجة فحص متخصص فوراً. روح لدكتور مسالك بولية في أقرب وقت.',
    },
  },
];
