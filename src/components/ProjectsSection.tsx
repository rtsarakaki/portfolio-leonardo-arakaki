'use client';

import React from 'react';
import { FolderOpen, ExternalLink, Calendar, MapPin, Users } from 'lucide-react';
import AnimatedBox from './AnimatedBox';
import SectionTitle from './SectionTitle';
import ContentBox from './ContentBox';
import SummarySection from './SummarySection';
import Badge from './Badge';
import InfoItem from './InfoItem';
import Heading3 from './Heading3';
import Heading6 from './Heading6';
import LoadingState from './LoadingState';
import useTranslation from '@/hooks/useTranslation';

interface ProjectsSectionProps {
  isVisible: boolean;
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isVisible,
  className = ''
}) => {
  const { t, isLoading } = useTranslation();


  // Se ainda está carregando, mostrar loading
  if (isLoading) {
    return <LoadingState className={className} />;
  }
  
  const projects = [
    {
      title: t('projects.projectsList.0.title'),
      category: t('projects.categories.architecture'),
      year: t('projects.projectsList.0.year'),
      location: t('projects.locations.campusUSP'),
      team: t('projects.team.individual'),
      description: t('projects.projectsList.0.description'),
      technologies: t('projects.projectsList.0.technologies'),
      highlights: [
        t('projects.highlightsList.universalAccessibility'),
        t('projects.highlightsList.visualIdentity'),
        t('projects.highlightsList.sustainability')
      ],
      status: t('projects.status.completed')
    },
    {
      title: t('projects.projectsList.1.title'),
      category: t('projects.categories.urbanPlanning'),
      year: t('projects.projectsList.1.year'),
      location: t('projects.locations.saoPauloSP'),
      team: t('projects.team.teamOf4'),
      description: t('projects.projectsList.1.description'),
      technologies: t('projects.projectsList.1.technologies'),
      highlights: [
        t('projects.highlightsList.sustainability'),
        t('projects.highlightsList.technology'),
        t('projects.highlightsList.urbanDesign')
      ],
      status: t('projects.status.completed')
    },
    {
      title: t('projects.projectsList.2.title'),
      category: t('projects.categories.graphicDesign'),
      year: t('projects.projectsList.2.year'),
      location: t('projects.locations.saoPauloSP'),
      team: t('projects.team.individual'),
      description: t('projects.projectsList.2.description'),
      technologies: t('projects.projectsList.2.technologies'),
      highlights: [
        t('projects.highlightsList.branding'),
        t('projects.highlightsList.visualIdentity'),
        t('projects.highlightsList.graphicDesign')
      ],
      status: t('projects.status.completed')
    }
  ];

  const getStatusColor = (status: string) => {
    const completedStatus = t('projects.status.completed');
    const implementedStatus = t('projects.status.implemented');
    const inProgressStatus = t('projects.status.inProgress');
    const conceptualStatus = t('projects.status.conceptual');
    
    switch (status) {
      case completedStatus:
      case implementedStatus:
        return 'bg-green-100 text-green-800';
      case inProgressStatus:
        return 'bg-blue-100 text-blue-800';
      case conceptualStatus:
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`profile-section ${className}`}>
      <AnimatedBox direction="top" className="p-6">
        <SectionTitle 
          icon={FolderOpen} 
          title={t('projects.title')} 
        />

        <div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ContentBox key={index} variant="highlighted">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Heading3>
                        {project.title}
                      </Heading3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[#e67e22] font-medium text-sm mb-2">
                      {project.category}
                    </p>
                      <div className="flex items-center gap-4 text-xs text-[#0f1419] mb-3">
                        <InfoItem icon={Calendar} text={project.year} />
                        <InfoItem icon={MapPin} text={project.location} />
                        <InfoItem icon={Users} text={project.team} />
                      </div>
                  </div>
                </div>
                
                <p className="text-[#0f1419] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                <div className="mb-3">
                  <Heading6 className="mb-2">{t('projects.technologies')}</Heading6>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <Badge key={techIndex} size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                </div>
                
                <div>
                  <Heading6 className="mb-2">{t('projects.highlights')}</Heading6>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight: string, highlightIndex: number) => (
                      <Badge key={highlightIndex} size="sm">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ContentBox>
            ))}
          </div>

          <SummarySection
            icon={FolderOpen}
            title={t('projects.methodology')}
            content={t('projects.methodologyContent')}
            className="mt-6"
          />
        </div>
      </AnimatedBox>
    </div>
  );
};

export default ProjectsSection;
