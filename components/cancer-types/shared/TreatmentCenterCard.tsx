'use client';

import { MapPin, Phone, Globe, Building2, Heart } from 'lucide-react';
import type { TreatmentCenter } from '@/types/cancer-types';

interface TreatmentCenterCardProps {
  center: TreatmentCenter;
}

export default function TreatmentCenterCard({ center }: TreatmentCenterCardProps) {
  const getFundingBadge = () => {
    if (center.governmentFunded) {
      return (
        <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <Building2 className="w-3 h-3" />
          حكومي
        </span>
      );
    }
    return (
      <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
        <Heart className="w-3 h-3" />
        خيري/خاص
      </span>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-gray-800">{center.name}</h4>
        {getFundingBadge()}
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>{center.location}</span>
        </div>

        {center.phone && (
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-400" />
            <a
              href={`tel:${center.phone}`}
              className="text-emerald-600 hover:underline"
              dir="ltr"
            >
              {center.phone}
            </a>
          </div>
        )}

        {center.website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <a
              href={center.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline truncate"
            >
              زيارة الموقع
            </a>
          </div>
        )}
      </div>

      {center.specialties.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex flex-wrap gap-1">
            {center.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
