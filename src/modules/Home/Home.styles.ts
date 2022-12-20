import { styled } from '@/styles/globalStyles'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export const HomeWrapper = styled('div', {
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$backgroundPrimary'
});

export const HomeInnerWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled('h1', {
  color: '$textPrimary',
  padding: '$large',
  fontSize: '$font18'
});

export const LinksList = styled('div', {
  display: 'flex',
});

export const LinksListItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  color: '$textPrimary',
  padding: '$medium',
});

const sharedIconStyles = {
  height: '35px',
  width: '35px',
  transition: 'transform .3s ease',
  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-5px)',
  }
}

export const IconLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  outline: 'none',
});

export const GithubIcon = styled(FiGithub, {
  ...sharedIconStyles,
});

export const LinkedInIcon = styled(FiLinkedin, {
  ...sharedIconStyles,
});

export const TwitterIcon = styled(FiTwitter, {
  ...sharedIconStyles,
});

export const MailIcon = styled(FiMail, {
  ...sharedIconStyles,
});
