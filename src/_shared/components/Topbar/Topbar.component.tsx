import { FC, useEffect, useState } from 'react'
import { TopbarWrapper, TopbarLogo, TopbarLinks, TopbarLink, TopbarLinkNumber, TopbarLinkText } from './Topbar.styles'
import { scrollToModule } from '../../utils'

export const Topbar: FC = () => {
  const [shouldDisplayTopbar, setShouldDisplayTopbar] = useState<boolean>(true);

  useEffect(() => {
    if (!window) {
      return
    }

    const handleScrollEvent = () => {
      if (window.scrollY > 15 ) {
        setShouldDisplayTopbar(false)
      } else {
        setShouldDisplayTopbar(true)
      }
    }

    window.document.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    }
  }, [shouldDisplayTopbar])

  return (
    <TopbarWrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: shouldDisplayTopbar ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <TopbarLogo>
        {"NW"}
      </TopbarLogo>
      <TopbarLinks>
        <TopbarLink onClick={() => scrollToModule('home')}>
          <TopbarLinkNumber>
            01.
          </TopbarLinkNumber>
          <TopbarLinkText>
            Home
          </TopbarLinkText>
        </TopbarLink>
        <TopbarLink onClick={() => scrollToModule('about')}>
          <TopbarLinkNumber>
            02.
          </TopbarLinkNumber>
          <TopbarLinkText>
            About
          </TopbarLinkText>
        </TopbarLink>
        <TopbarLink onClick={() => scrollToModule('projects')}>
          <TopbarLinkNumber>
            03.
          </TopbarLinkNumber>
          <TopbarLinkText>
            Projects
          </TopbarLinkText>
        </TopbarLink>
      </TopbarLinks>
    </TopbarWrapper>
  )
}
