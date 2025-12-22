'use client';

import { useTranslations } from 'next-intl';
import { FileText, MapPin, Coffee, Heart } from 'lucide-react';

interface QuickPromptsProps {
  locale: string;
  onSelect: (prompt: string) => void;
}

export default function QuickPrompts({ locale, onSelect }: QuickPromptsProps) {
  const t = useTranslations('chat.quickPrompts');

  const prompts = [
    {
      icon: FileText,
      text: t('treatment'),
      color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
    },
    {
      icon: MapPin,
      text: t('hospitals'),
      color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    },
    {
      icon: Coffee,
      text: t('nutrition'),
      color: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
    },
    {
      icon: Heart,
      text: t('support'),
      color: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {prompts.map((prompt, index) => {
        const Icon = prompt.icon;
        return (
          <button
            key={index}
            onClick={() => onSelect(prompt.text)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${prompt.color}`}
          >
            <Icon className="w-4 h-4" />
            {prompt.text}
          </button>
        );
      })}
    </div>
  );
}
