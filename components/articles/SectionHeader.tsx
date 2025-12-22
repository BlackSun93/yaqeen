'use client';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 relative z-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
