import { FC } from 'react'
import { FooterWrapper, FooterContent, Copyrights, Contact } from './Footer.styles';

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyrights>
          Created with ❤️ by Nikodem Wrona
        </Copyrights>
        <Contact>
          Contact email: wronanikodem@protonmail.com
        </Contact>
      </FooterContent>
    </FooterWrapper>
  )
}
