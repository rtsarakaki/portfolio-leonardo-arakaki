'use client';

import React from 'react';
import { User, MapPin, Check } from 'lucide-react';
import useTranslation from '@/hooks/useTranslation';

interface ProfileHeaderProps {
  className?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  className = ''
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`profile-header ${className}`}>
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e67e22] to-[#c2410c] flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            <User size={32} />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#c2410c] rounded-full flex items-center justify-center">
            <Check size={12} className="text-white" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-[#0f1419] mb-2 font-handwriting">
          {t('profile.name')}
        </h2>
        <p className="text-sm text-[#0f1419] font-medium">
          {t('profile.title')}
        </p>
        <div className="flex items-center justify-center gap-1 text-xs text-[#0f1419] mt-1">
          <MapPin size={12} />
          <span>{t('profile.location')}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
