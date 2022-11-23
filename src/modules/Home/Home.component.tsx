import { FC } from 'react'
import { ModuleWrapper, HighlightedBrandText, Button, scrollToModule } from '../../_shared'
import { HomeContentWrapper, HomeContent, HomeContentRow, HomeFirstRowText, HomeSecondRowText, HomeThirdRowText, HomeFourthRowText, HomeFifthRowText } from './Home.styles'

export const Home: FC = () => {
  return (
    <ModuleWrapper id={'home-module'} color={'primary'}>
      <HomeContentWrapper>
        <HomeContent>
          <HomeContentRow>
            <HomeFirstRowText>
              Hi, my name is
            </HomeFirstRowText>
          </HomeContentRow>
          <HomeContentRow>
            <HomeSecondRowText>
              Nikodem Wrona.
            </HomeSecondRowText>
          </HomeContentRow>
          <HomeContentRow>
            <HomeThirdRowText>
              I create software.
            </HomeThirdRowText>
          </HomeContentRow>
          <HomeContentRow>
            <HomeFourthRowText>
              {"I\'m"} <HighlightedBrandText>software engineer</HighlightedBrandText> specializing in {" "}<HighlightedBrandText>backend development</HighlightedBrandText> ( but I do like frontend as well ).
              <br/>
              <br/>
              Currently {" I\'m "} <HighlightedBrandText>open</HighlightedBrandText> for new opportunities.
            </HomeFourthRowText>
          </HomeContentRow>
          <HomeContentRow>
            <HomeFifthRowText>
              <Button onClick={() => scrollToModule('about')} text="More about me" />
            </HomeFifthRowText>
          </HomeContentRow>
        </HomeContent>
      </HomeContentWrapper>
    </ModuleWrapper>
  )
}
