import styled from 'styled-components'
import { FiFolder, FiGithub, FiLink } from "react-icons/fi";

export const ProjectsContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5rem;
  }
`;

export const ModuleHeader = styled.div`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectGridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 255px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.background.secondary};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectFolderIcon = styled(FiFolder)`
  height: 35px;
  width: 35px;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const GithubLinkIcon = styled(FiGithub)`
  width: 20px;
  height: 20px;
  transition: color .3s ease;
  color: ${({theme}) => theme.colors.text.secondary};

  &:hover {
    color: ${({theme}) => theme.colors.text.brand};
  }
`;

export const UrlLinkIcon = styled(FiLink)`
  width: 20px;
  height: 20px;
  transition: color .3s ease;
  color: ${({theme}) => theme.colors.text.secondary};

  &:hover {
    color: ${({theme}) => theme.colors.text.brand};
  }
`;

export const TopRowLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  & > a:last-child {
    margin-left: 1.5rem;
  }
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const DescriptionRow = styled.div`
  display: flex;
  padding-top: 2rem;
  height: 60%;
  font-size: 1.3rem;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const TechnologiesRow = styled.div`
  display: flex;
  & > div {
    color: ${({theme}) => theme.colors.text.secondary};
    font-size: 1.3rem;
    margin-right: 1rem;
  }
`;
