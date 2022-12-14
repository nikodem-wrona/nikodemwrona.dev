import { FC } from 'react'
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  Header,
  HomeInnerWrapper,
  HomeWrapper,
  LinksList,
  LinksListItem,
  IconLink, HomeImageOne
} from './Home.styles'
import Image from 'next/image'
import CreatureOne from '../../../public/images/image4.png'
import CreatureTwo from '../../../public/images/image2.png'
import { Topbar } from '@/_shared/components'

type IconNames = 'Github' | 'Linkedin' | 'Twitter' | 'Mail';

const renderIcon = (name: IconNames) => {
  switch (name) {
    case 'Github': {
      return <GithubIcon />
    }
    case 'Linkedin': {
      return <LinkedInIcon />
    }
    case 'Twitter' : {
      return <TwitterIcon />
    }
    case 'Mail': {
      return <MailIcon />
    }
  }
}

const renderLink = (iconName: IconNames, link: string, isMailLink?: boolean): JSX.Element => {
  if (isMailLink) {
    return (
      <IconLink href={`mailto:${link}`} rel={"noopener noreferer"} target={'_blank'}>
        {renderIcon(iconName)}
      </IconLink>
    )
  }

  return (
    <IconLink href={link} rel={"noopener noreferer"} target={'_blank'}>
      {renderIcon(iconName)}
    </IconLink>
  )
}

export const HomeComponent: FC = () => {
  return (
    <HomeWrapper>
      <Topbar />
      <HomeInnerWrapper>
        <Header>
          <Image height={320} width={220} src={CreatureTwo} alt={'Hello!'} />
          <HomeImageOne height={220} width={220} src={CreatureOne} alt={'Hello!'} />
        </Header>
        <Header>
          Hi! Here are places where you can find me
        </Header>
        <LinksList>
          <LinksListItem>
            {renderLink('Github', 'https://github.com/nikodem-wrona')}
            {renderLink('Linkedin', 'https://www.linkedin.com/in/nikodem-wrona/')}
            {renderLink('Twitter', 'https://twitter.com/nikodemwrona')}
            {renderLink('Mail', 'wronanikodem@gmail.com', true)}
          </LinksListItem>
        </LinksList>
      </HomeInnerWrapper>
    </HomeWrapper>
  )
}
