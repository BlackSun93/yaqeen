'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useChat } from 'ai/react';
import { MessageCircle, Send, Loader2, AlertCircle, Heart } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickPrompts from './QuickPrompts';
import { cn } from '@/lib/utils';

interface ChatInterfaceProps {
  locale: string;
}

export default function ChatInterface({ locale }: ChatInterfaceProps) {
  const t = useTranslations('chat');
  const isRTL = true;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, setInput } = useChat({
    api: '/api/chat',
    body: { locale },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-180px)] flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
          <MessageCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('title')}</h1>
        <p className="text-gray-500">{t('subtitle')}</p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col max-w-4xl mx-auto w-full overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Heart className="w-16 h-16 text-emerald-200 mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                أهلاً بيك في يقين
              </h3>
              <p className="text-gray-500 max-w-md mb-8">
                أنا هنا عشان أساعدك وأجاوب على أسئلتك عن السرطان والعلاج في مصر. اسألني أي حاجة!
              </p>
              <QuickPrompts locale={locale} onSelect={handleQuickPrompt} />
            </div>
          ) : (
            <>
              {messages
                .filter((message) => message.role !== 'data')
                .map((message) => (
                <ChatMessage
                  key={message.id}
                  role={message.role as 'user' | 'assistant' | 'system'}
                  content={message.content}
                  locale={locale}
                />
              ))}
              {isLoading && (
                <div className={cn('flex items-center gap-2 text-gray-400', isRTL ? 'flex-row-reverse' : '')}>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>بفكر...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm">
              حصل خطأ. جرب تاني أو تواصل معانا.
            </p>
          </div>
        )}

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={t('placeholder')}
              rows={1}
              className={cn(
                'flex-1 resize-none rounded-2xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent',
                isRTL ? 'text-right' : 'text-left'
              )}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={cn(
                'px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2',
                input.trim() && !isLoading
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              )}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className={cn('w-5 h-5', isRTL ? 'rotate-180' : '')} />
              )}
              <span className="hidden sm:inline">{t('send')}</span>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center mt-3">{t('disclaimer')}</p>
        </form>
      </div>
    </div>
  );
}
