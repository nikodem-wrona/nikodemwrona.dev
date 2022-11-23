import type { NextPage } from 'next'
import { Footer, MainWrapper, Topbar } from '../_shared'
import { Home, About, Projects } from '../modules'

const HomePage: NextPage = () => {
  return (
    <MainWrapper>
      <Topbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </MainWrapper>
  )
}

export default HomePage
