import { FC } from 'react'
import Image from 'next/image'

import Logo from '../../../public/images/image1.png';
import { TopbarWrapper } from './Topbar.styles'

export const Topbar: FC = () => {
  return (
    <TopbarWrapper>
      <Image height={40} width={40} src={Logo} alt={'Logo'} />
    </TopbarWrapper>
  )
}
