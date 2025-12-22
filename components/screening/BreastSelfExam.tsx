'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Hand,
  CircleDot,
  AlertCircle,
  CheckCircle2,
  Info,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreastSelfExamProps {
  locale: string;
  onBack: () => void;
}

interface ExamStep {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  tipsAr: string[];
  tipsEn: string[];
  icon: React.ComponentType<{ className?: string }>;
  illustration: 'mirror' | 'hands-up' | 'lying' | 'shower' | 'squeeze';
}

const examSteps: ExamStep[] = [
  {
    id: 1,
    titleAr: 'الفحص أمام المرآة',
    titleEn: 'Mirror Examination',
    descriptionAr: 'قفي أمام المرآة وكتفيكي مستقيمة وإيديكي على وسطك. شوفي ثدييكي - لازم يكونوا بالشكل والحجم والون الطبيعي ليكي.',
    descriptionEn: 'Stand in front of a mirror with your shoulders straight and arms on your hips. Look at your breasts - they should be their usual size, shape, and color.',
    tipsAr: [
      'دوري على أي تغيير في الشكل أو الحجم',
      'لاحظي لو فيه تجعد أو انكماش في الجلد',
      'شوفي لو الحلمة اتغير مكانها أو انقلبت للداخل',
      'تأكدي إن مفيش احمرار أو طفح جلدي'
    ],
    tipsEn: [
      'Look for any changes in shape or size',
      'Notice if there is dimpling or puckering of the skin',
      'Check if the nipple has changed position or is inverted',
      'Make sure there is no redness or rash'
    ],
    icon: Eye,
    illustration: 'mirror'
  },
  {
    id: 2,
    titleAr: 'رفع الذراعين',
    titleEn: 'Arms Raised',
    descriptionAr: 'ارفعي إيديكي لفوق وشوفي نفس التغييرات. حركة الذراعين بتساعدك تشوفي تغييرات ممكن ماتظهرش في الوضع العادي.',
    descriptionEn: 'Raise your arms and look for the same changes. Arm movement helps reveal changes that may not be visible in the normal position.',
    tipsAr: [
      'لاحظي حركة الثديين - لازم يتحركوا بالتساوي',
      'شوفي لو فيه انتفاخ أو تورم في أي جزء',
      'تأكدي إن الجلد مش زي قشر البرتقانة'
    ],
    tipsEn: [
      'Notice breast movement - they should move evenly',
      'Look for any bulging or swelling',
      'Make sure the skin is not like orange peel'
    ],
    icon: Hand,
    illustration: 'hands-up'
  },
  {
    id: 3,
    titleAr: 'فحص الحلمة',
    titleEn: 'Nipple Check',
    descriptionAr: 'اضغطي برفق على كل حلمة وشوفي لو فيه أي إفرازات. الإفرازات ممكن تكون شفافة أو صفراء أو بيضاء أو فيها دم.',
    descriptionEn: 'Gently squeeze each nipple and check for any discharge. Discharge can be clear, yellow, white, or bloody.',
    tipsAr: [
      'أي إفرازات من حلمة واحدة بس محتاجة فحص',
      'الإفرازات اللي فيها دم مهمة جداً تتفحص',
      'إفرازات الحمل والرضاعة طبيعية'
    ],
    tipsEn: [
      'Discharge from only one nipple needs examination',
      'Bloody discharge is very important to check',
      'Pregnancy and breastfeeding discharge is normal'
    ],
    icon: CircleDot,
    illustration: 'squeeze'
  },
  {
    id: 4,
    titleAr: 'الفحص وأنتِ نايمة',
    titleEn: 'Lying Down Examination',
    descriptionAr: 'نامي على ضهرك وحطي وسادة تحت كتفك اليمين. استخدمي إيدك الشمال لفحص الثدي اليمين بحركة دائرية. كرري على الجانب التاني.',
    descriptionEn: 'Lie on your back with a pillow under your right shoulder. Use your left hand to examine the right breast in circular motions. Repeat on the other side.',
    tipsAr: [
      'استخدمي الـ 3 أصابع الوسطانية مش أطراف الأصابع',
      'اضغطي ضغطات خفيفة ومتوسطة وقوية',
      'غطي الثدي كله من الترقوة لتحت الثدي',
      'مايتنساش تفحصي منطقة تحت الإبط'
    ],
    tipsEn: [
      'Use the pads of your 3 middle fingers, not fingertips',
      'Apply light, medium, and firm pressure',
      'Cover the entire breast from collarbone to below',
      'Don\'t forget to examine the armpit area'
    ],
    icon: Hand,
    illustration: 'lying'
  },
  {
    id: 5,
    titleAr: 'الفحص في الدُش',
    titleEn: 'Shower Examination',
    descriptionAr: 'كتير من الستات بيلاقوا إن الفحص أسهل لما البشرة مبلولة. استخدمي نفس الحركات الدائرية لفحص كل ثدي.',
    descriptionEn: 'Many women find it easier to examine when the skin is wet. Use the same circular motions to examine each breast.',
    tipsAr: [
      'الصابون بيخلي الحركة أسهل على الجلد',
      'افحصي كل ثدي بإيدك المقابلة',
      'ابدأي من برا وروحي للحلمة في حركة حلزونية'
    ],
    tipsEn: [
      'Soap makes movement easier on the skin',
      'Examine each breast with the opposite hand',
      'Start from outside and go to nipple in spiral motion'
    ],
    icon: Hand,
    illustration: 'shower'
  }
];

const warningSignsAr = [
  'كتلة جديدة في الثدي أو تحت الإبط',
  'سماكة أو تورم في جزء من الثدي',
  'تهيج أو تنقير في جلد الثدي',
  'احمرار أو جلد متقشر في منطقة الحلمة',
  'انسحاب الحلمة للداخل أو ألم فيها',
  'إفرازات من الحلمة غير لبن الرضاعة',
  'أي تغيير في حجم أو شكل الثدي',
  'ألم مستمر في أي منطقة من الثدي'
];

const warningSignsEn = [
  'New lump in breast or armpit',
  'Thickening or swelling in part of the breast',
  'Irritation or dimpling of breast skin',
  'Redness or flaky skin around the nipple',
  'Nipple pulling inward or pain',
  'Discharge other than breast milk',
  'Any change in breast size or shape',
  'Persistent pain in any area of the breast'
];

export default function BreastSelfExam({ locale, onBack }: BreastSelfExamProps) {
  const t = useTranslations('screening');
  const [currentStep, setCurrentStep] = useState(0);
  const [showWarnings, setShowWarnings] = useState(false);
  const isRTL = locale === 'ar';

  const step = examSteps[currentStep];
  const progress = ((currentStep + 1) / examSteps.length) * 100;
  const warningSigns = locale === 'ar' ? warningSignsAr : warningSignsEn;

  const IllustrationComponent = ({ type }: { type: string }) => {
    const baseClasses = "w-full h-48 rounded-2xl flex items-center justify-center";

    switch (type) {
      case 'mirror':
        return (
          <div className={cn(baseClasses, "bg-gradient-to-br from-pink-100 to-pink-50")}>
            <div className="text-center">
              <div className="w-24 h-32 border-4 border-pink-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Eye className="w-12 h-12 text-pink-400" />
              </div>
              <p className="text-pink-600 text-sm font-medium">
                {locale === 'ar' ? 'أمام المرآة' : 'In front of mirror'}
              </p>
            </div>
          </div>
        );
      case 'hands-up':
        return (
          <div className={cn(baseClasses, "bg-gradient-to-br from-purple-100 to-purple-50")}>
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-2">
                <div className="w-8 h-20 bg-purple-200 rounded-full transform -rotate-12" />
                <div className="w-16 h-16 bg-purple-300 rounded-full" />
                <div className="w-8 h-20 bg-purple-200 rounded-full transform rotate-12" />
              </div>
              <p className="text-purple-600 text-sm font-medium">
                {locale === 'ar' ? 'رفع الذراعين' : 'Arms raised'}
              </p>
            </div>
          </div>
        );
      case 'lying':
        return (
          <div className={cn(baseClasses, "bg-gradient-to-br from-blue-100 to-blue-50")}>
            <div className="text-center">
              <div className="w-40 h-12 bg-blue-200 rounded-full mx-auto mb-2 relative">
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-300 rounded-full -translate-y-1/2" />
                <Hand className="absolute top-0 right-1/4 w-8 h-8 text-blue-400 -translate-y-2" />
              </div>
              <p className="text-blue-600 text-sm font-medium">
                {locale === 'ar' ? 'وضع الاستلقاء' : 'Lying position'}
              </p>
            </div>
          </div>
        );
      case 'shower':
        return (
          <div className={cn(baseClasses, "bg-gradient-to-br from-cyan-100 to-cyan-50")}>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-20 bg-cyan-200 rounded-t-full mx-auto" />
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-6 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <p className="text-cyan-600 text-sm font-medium mt-2">
                {locale === 'ar' ? 'في الدُش' : 'In the shower'}
              </p>
            </div>
          </div>
        );
      case 'squeeze':
        return (
          <div className={cn(baseClasses, "bg-gradient-to-br from-rose-100 to-rose-50")}>
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <CircleDot className="w-20 h-20 text-rose-300" />
                <Hand className="absolute -bottom-2 -right-2 w-10 h-10 text-rose-400" />
              </div>
              <p className="text-rose-600 text-sm font-medium mt-2">
                {locale === 'ar' ? 'فحص الحلمة' : 'Nipple check'}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (showWarnings) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setShowWarnings(false)}
            className="flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors"
          >
            <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
            {locale === 'ar' ? 'رجوع للخطوات' : 'Back to steps'}
          </button>

          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-800">
                {locale === 'ar' ? 'علامات تحتاج زيارة الطبيب' : 'Signs that need a doctor visit'}
              </h2>
            </div>

            <p className="text-red-700 mb-6">
              {locale === 'ar'
                ? 'لو لاحظتي أي من العلامات دي، روحي للدكتور في أقرب وقت. معظم الحالات بتكون حميدة، بس الكشف المبكر مهم جداً.'
                : 'If you notice any of these signs, see a doctor as soon as possible. Most cases are benign, but early detection is very important.'}
            </p>

            <ul className="space-y-3">
              {warningSigns.map((sign, index) => (
                <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{sign}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white rounded-xl">
              <p className="text-gray-600 text-sm">
                <strong className="text-gray-800">
                  {locale === 'ar' ? 'تذكري: ' : 'Remember: '}
                </strong>
                {locale === 'ar'
                  ? '90% من كتل الثدي بتكون حميدة. الفحص المبكر بينقذ حياة!'
                  : '90% of breast lumps are benign. Early detection saves lives!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
          {t('backToSurveys')}
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {locale === 'ar' ? 'خطوات الفحص الذاتي للثدي' : 'Breast Self-Examination Steps'}
          </h1>
          <p className="text-gray-500">
            {locale === 'ar'
              ? 'اعملي الفحص ده مرة كل شهر، بعد انتهاء الدورة بأسبوع'
              : 'Do this exam once a month, a week after your period ends'}
          </p>
        </div>

        {/* Best Time Reminder */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <Calendar className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold text-emerald-800 text-sm">
              {locale === 'ar' ? 'أفضل وقت للفحص' : 'Best time for examination'}
            </p>
            <p className="text-emerald-700 text-sm">
              {locale === 'ar'
                ? 'بعد انتهاء الدورة الشهرية بـ 7-10 أيام، لما الثدي بيكون أقل تورم وألم'
                : '7-10 days after your period ends, when breasts are least swollen and tender'}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              {locale === 'ar' ? 'الخطوة' : 'Step'} {currentStep + 1} {locale === 'ar' ? 'من' : 'of'} {examSteps.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Illustration */}
          <IllustrationComponent type={step.illustration} />

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <step.icon className="w-5 h-5 text-pink-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                {locale === 'ar' ? step.titleAr : step.titleEn}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {locale === 'ar' ? step.descriptionAr : step.descriptionEn}
            </p>

            {/* Tips */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-600" />
                {locale === 'ar' ? 'نصائح مهمة' : 'Important Tips'}
              </h3>
              <ul className="space-y-2">
                {(locale === 'ar' ? step.tipsAr : step.tipsEn).map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 transition-colors font-bold',
              currentStep === 0
                ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            )}
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            {locale === 'ar' ? 'السابق' : 'Previous'}
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(examSteps.length - 1, prev + 1))}
            disabled={currentStep === examSteps.length - 1}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-colors font-bold',
              currentStep === examSteps.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            )}
          >
            {locale === 'ar' ? 'التالي' : 'Next'}
            {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Warning Signs Button */}
        <button
          onClick={() => setShowWarnings(true)}
          className="w-full p-4 rounded-xl border-2 border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-colors flex items-center justify-center gap-2 font-bold"
        >
          <AlertCircle className="w-5 h-5" />
          {locale === 'ar' ? 'علامات تحتاج زيارة الطبيب' : 'Signs that need a doctor visit'}
        </button>

        {/* Step Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {examSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all',
                index === currentStep
                  ? 'bg-pink-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
