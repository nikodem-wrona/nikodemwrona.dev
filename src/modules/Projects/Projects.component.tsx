import { FC } from 'react';
import { ModuleWrapper } from '../../_shared';

import {
  ProjectsContentWrapper,
  ProjectsContent,
  ProjectsGrid,
  ProjectGridItem,
  ModuleHeader,
  HeaderRow,
  TopRowLinks,
  ProjectFolderIcon,
  GithubLinkIcon,
  UrlLinkIcon,
  NameRow,
  DescriptionRow,
  TechnologiesRow
} from './Projects.styles';

type Project = {
  name: string;
  description: string;
  githubUrl: string;
  websiteUrl: string | null;
  technologies: string[]
}

const projects: Project[] = [
  {
    name: 'nikodemwrona.dev',
    description: 'My personal website.',
    websiteUrl: 'https://nikodemwrona.dev',
    githubUrl: 'https://github.com/NikodemWrona/nikodemwrona.dev',
    technologies: [
      'TypeScript',
      'Next.js'
    ]
  },
  {
    name: 'project_euler',
    description: 'Project Euler problems solutions.',
    websiteUrl: null,
    githubUrl: 'https://github.com/NikodemWrona/project_euler',
    technologies: [
      'Go',
    ]
  },
  {
    name: 'check-currency-rates',
    description: 'Very simple script for checking currency rates using NBP api.',
    websiteUrl: null,
    githubUrl: 'https://github.com/NikodemWrona/check-currency-rates',
    technologies: [
      'Python',
    ]
  }
]

export const Projects: FC = () => {
  const renderItems = () => {
    return projects.map(project => (
      <ProjectGridItem key={project.name}>
        <HeaderRow>
          <div>
            <ProjectFolderIcon />
          </div>
          <div>
            <TopRowLinks>
              {project.websiteUrl && (
                <a href={project.websiteUrl} rel={'noreferrer noopener'} target={'_blank'}>
                  <UrlLinkIcon />
                </a>
              )}
              <a href={project.githubUrl} rel={'noreferrer noopener'} target={'_blank'}>
                <GithubLinkIcon />
              </a>
            </TopRowLinks>
          </div>
        </HeaderRow>
        <NameRow>
          {project.name}
        </NameRow>
        <DescriptionRow>
          {project.description}
        </DescriptionRow>
        <TechnologiesRow>
          {
            project.technologies.map(tech => (
              <div key={`${project.name}-${tech}`}>
                {tech}
              </div>
            ))
          }
        </TechnologiesRow>
      </ProjectGridItem>
    ));
  }

  return (
    <ModuleWrapper id={'projects-module'} color={'primary'}>
      <ProjectsContentWrapper>
        <ProjectsContent>
          <ModuleHeader>
            My work
          </ModuleHeader>
          <ProjectsGrid>
            {renderItems()}
          </ProjectsGrid>
        </ProjectsContent>
      </ProjectsContentWrapper>
    </ModuleWrapper>
  )
}
