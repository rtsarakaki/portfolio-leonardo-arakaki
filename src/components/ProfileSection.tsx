'use client';

import React from 'react';
import ProfileHeader from './ProfileHeader';
import AboutMeSection from './AboutMeSection';
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
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="left" className="p-8">
        <ProfileHeader />

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
                    <AboutMeSection />
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
};

export default ProfileSection;
