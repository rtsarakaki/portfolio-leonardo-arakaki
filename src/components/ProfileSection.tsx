'use client';

import React from 'react';
import ProfileHeader from './ProfileHeader';
import AboutMeSection from './AboutMeSection';
import EducationContent from './EducationContent';
import AnimatedBox from './AnimatedBox';

interface ProfileSectionProps {
  isVisible: boolean;
  className?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  isVisible,
  className = ''
}) => {
  return (
    <div className={`profile-section ${className} `}>
      <AnimatedBox direction="left" className="p-6 h-full overflow-y-auto scrollbar-hide">
        <ProfileHeader />

        {/* Content */}
        <div className="flex-1">
          <div className="space-y-6">
            <AboutMeSection />
            <EducationContent />
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
};

export default ProfileSection;
