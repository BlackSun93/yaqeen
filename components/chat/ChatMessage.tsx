'use client';

import { Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system';
  content: string;
  locale: string;
}

export default function ChatMessage({ role, content, locale }: ChatMessageProps) {
  const isUser = role === 'user';
  const isRTL = locale === 'ar';

  // Format message content (handle markdown-like formatting)
  const formatContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div
      className={cn(
        'flex gap-3',
        isUser ? (isRTL ? 'flex-row' : 'flex-row-reverse') : (isRTL ? 'flex-row-reverse' : 'flex-row')
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
          isUser ? 'bg-gray-100 text-gray-600' : 'bg-emerald-100 text-emerald-600'
        )}
      >
        {isUser ? <User className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
      </div>

      {/* Message Bubble */}
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3',
          isUser
            ? 'bg-emerald-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none',
          isRTL && isUser && 'rounded-br-2xl rounded-bl-none',
          isRTL && !isUser && 'rounded-bl-2xl rounded-br-none'
        )}
      >
        <div
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatContent(content) }}
        />
      </div>
    </div>
  );
}
