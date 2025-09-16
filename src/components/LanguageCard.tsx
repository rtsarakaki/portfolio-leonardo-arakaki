'use client';

import React from 'react';
import { Award } from 'lucide-react';
import FlagIcon from './FlagIcon';
import Badge from './Badge';
import Heading5 from './Heading5';
import useTranslation from '@/hooks/useTranslation';

interface LanguageCardProps {
  name: string;
  level: string;
  certificate?: string;
  flagKey: string;
  index: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ 
  name, 
  level, 
  certificate, 
  flagKey, 
  index 
}) => {
  const { t } = useTranslation();


  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 border-l-2 border-l-[#e67e22]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="drop-shadow-sm" role="img" aria-label={`Bandeira do ${name}`}>
            <FlagIcon flagKey={flagKey} />
          </div>
          <div>
            <Heading5>{name}</Heading5>
            <p className="text-[#e67e22] text-xs">{level}</p>
          </div>
        </div>
        {certificate && (
          <Badge 
            icon={Award} 
            size="sm"
          >
            {t('languages.certificate')}
          </Badge>
        )}
      </div>
      {certificate && (
        <p className="text-xs text-[#0f1419] font-medium bg-[#e67e22] bg-opacity-10 px-2 py-1 rounded border-l-2 border-[#e67e22]">
          {certificate}
        </p>
      )}
    </div>
  );
};

export default LanguageCard;
