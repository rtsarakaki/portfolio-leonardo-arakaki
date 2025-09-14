'use client';

import React from 'react';
import { User, MapPin, Check } from 'lucide-react';

interface ProfileHeaderProps {
  className?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  className = ''
}) => {
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
          Leonardo Franco Arakaki
        </h2>
        <p className="text-sm text-[#0f1419] font-medium">
          Estudante de Arquitetura e Urbanismo
        </p>
        <div className="flex items-center justify-center gap-1 text-xs text-[#0f1419] mt-1">
          <MapPin size={12} />
          <span>FAUUSP • São Paulo, SP</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
