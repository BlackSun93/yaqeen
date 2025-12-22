'use client';

import { Award } from 'lucide-react';
import type { Story } from '@/types';

interface StoryCardProps {
  story: Story;
  locale: string;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-50 relative hover:shadow-lg transition-shadow">
      <div className="absolute top-6 left-6 opacity-10">
        <Award className="w-16 h-16 text-orange-500" />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
          {story.title.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{story.title}</h3>
          <p className="text-sm text-orange-600">{story.subtitle}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-loose italic">&ldquo;{story.text}&rdquo;</p>
    </div>
  );
}
