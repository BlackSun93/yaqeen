'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle, AlertCircle, Eye, Hand, CircleDot } from 'lucide-react';
import type { Survey } from '@/content/ar/screening';
import { cn } from '@/lib/utils';

interface SurveyQuestionsProps {
  survey: Survey;
  locale: string;
  onBack: () => void;
}

type RiskLevel = 'low' | 'medium' | 'high';

const selfExamSteps = {
  ar: [
    { icon: Eye, title: 'المرآة', desc: 'قفي قدام المرآة وشوفي أي تغيرات في الشكل أو الحجم' },
    { icon: Hand, title: 'الفحص بالأصابع', desc: 'بحركة دائرية، افحصي كل منطقة من الثدي بأطراف أصابعك' },
    { icon: CircleDot, title: 'تحت الإبط', desc: 'متنسيش فحص منطقة تحت الإبط لأي تكتلات' },
  ],
  en: [
    { icon: Eye, title: 'Mirror Check', desc: 'Stand in front of a mirror and look for any changes in shape or size' },
    { icon: Hand, title: 'Finger Exam', desc: 'Using circular motions, examine each area of the breast with your fingertips' },
    { icon: CircleDot, title: 'Under Arm', desc: "Don't forget to check the underarm area for any lumps" },
  ],
};

const warningSigns = {
  ar: ['تغير في حجم أو شكل الثدي', 'تكتل أو سماكة جديدة', 'تغير في الجلد أو الحلمة', 'إفرازات غير طبيعية'],
  en: ['Change in breast size or shape', 'New lump or thickening', 'Changes in skin or nipple', 'Unusual discharge'],
};

export default function SurveyQuestions({ survey, locale, onBack }: SurveyQuestionsProps) {
  const t = useTranslations('screening');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showSelfExamIntro, setShowSelfExamIntro] = useState(survey.id === 'breast');
  const [showSelfExamSteps, setShowSelfExamSteps] = useState(false);
  const isRTL = locale === 'ar';

  const question = survey.questions[currentQuestion];
  const totalQuestions = survey.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateRisk = (): RiskLevel => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = survey.questions.reduce(
      (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
      0
    );
    const percentage = (totalScore / maxPossibleScore) * 100;

    if (percentage < 30) return 'low';
    if (percentage < 60) return 'medium';
    return 'high';
  };

  // Self-Exam Introduction Screen (for breast cancer only)
  if (showSelfExamIntro && survey.id === 'breast') {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className={cn('flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors')}
          >
            <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
            {t('backToSurveys')}
          </button>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Hand className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {locale === 'ar' ? 'الفحص الذاتي للثدي' : 'Breast Self-Examination'}
              </h2>
              <p className="text-gray-600">
                {locale === 'ar'
                  ? 'هل تحبي تتعلمي خطوات الفحص الذاتي قبل ما تبدأي الاستبيان؟'
                  : 'Would you like to learn self-examination steps before starting the survey?'}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowSelfExamIntro(false);
                  setShowSelfExamSteps(true);
                }}
                className="w-full p-4 rounded-xl bg-pink-500 text-white font-bold hover:bg-pink-600 transition-colors"
              >
                {locale === 'ar' ? 'أيوه، عايزة أتعلم' : 'Yes, I want to learn'}
              </button>
              <button
                onClick={() => setShowSelfExamIntro(false)}
                className="w-full p-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
              >
                {locale === 'ar' ? 'لا، ابدأ الاستبيان مباشرة' : 'No, start the survey directly'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Self-Exam Steps Screen
  if (showSelfExamSteps) {
    const steps = selfExamSteps[locale === 'ar' ? 'ar' : 'en'];
    const signs = warningSigns[locale === 'ar' ? 'ar' : 'en'];

    return (
      <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => {
              setShowSelfExamSteps(false);
              setShowSelfExamIntro(true);
            }}
            className={cn('flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors')}
          >
            <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
            {t('backToSurveys')}
          </button>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Hand className="w-6 h-6 text-pink-600" />
              {locale === 'ar' ? 'خطوات الفحص الذاتي' : 'Self-Exam Steps'}
            </h2>

            <div className="space-y-4 mb-6">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 bg-pink-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                      <StepIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
              <p className="text-sm font-bold text-amber-800 mb-2">
                {locale === 'ar' ? 'استشيري طبيبك فوراً لو لاحظتي:' : 'Consult your doctor immediately if you notice:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {signs.map((sign, idx) => (
                  <span key={idx} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    {sign}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSelfExamSteps(false)}
              className="w-full p-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors"
            >
              {locale === 'ar' ? 'فهمت، ابدأ الاستبيان' : 'Got it, start the survey'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const risk = calculateRisk();
    const riskConfig = {
      low: {
        icon: CheckCircle2,
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
      },
      medium: {
        icon: AlertTriangle,
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
      },
      high: {
        icon: AlertCircle,
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
      },
    };

    const config = riskConfig[risk];
    const RiskIcon = config.icon;

    return (
      <div className="container mx-auto px-4 py-12 min-h-screen animate-fade-in">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <button
            onClick={onBack}
            className={cn(
              'flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors'
            )}
          >
            <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
            {t('backToSurveys')}
          </button>

          {/* Results Card */}
          <div className={cn('rounded-3xl border-2 p-8', config.border, config.bg)}>
            <div className="text-center mb-8">
              <div className={cn('w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center', config.bg)}>
                <RiskIcon className={cn('w-10 h-10', config.color)} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('result.title')}</h2>
              <p className={cn('text-xl font-bold', config.color)}>
                {t(`result.${risk}`)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-gray-600 leading-relaxed">
                {t(`result.${risk}Desc`)}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-800 mb-3">{t('result.recommendation')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {survey.recommendations[risk]}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-bold"
              >
                <RotateCcw className="w-5 h-5" />
                {t('restart')}
              </button>
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-bold"
              >
                {t('backToSurveys')}
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 mt-6">{t('disclaimer')}</p>
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
          className={cn(
            'flex items-center text-gray-500 hover:text-emerald-600 mb-6 transition-colors'
          )}
        >
          <ArrowLeft className={cn('w-5 h-5', isRTL ? 'ml-2 rotate-180' : 'mr-2')} />
          {t('backToSurveys')}
        </button>

        {/* Survey Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{t(survey.titleKey)}</h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              {t('question')} {currentQuestion + 1} {t('of')} {totalQuestions}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.score)}
                className={cn(
                  'w-full p-4 rounded-xl border-2 text-right transition-all duration-200',
                  answers[question.id] === option.score
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                )}
              >
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 transition-colors font-bold',
              currentQuestion === 0
                ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            )}
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            {t('previous')}
          </button>
          <button
            onClick={handleNext}
            disabled={answers[question.id] === undefined}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-colors font-bold',
              answers[question.id] === undefined
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            )}
          >
            {currentQuestion === totalQuestions - 1 ? t('finish') : t('next')}
            {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-8">{t('disclaimer')}</p>
      </div>
    </div>
  );
}
