import { FC } from 'react'
import { ModuleWrapper, HighlightedBrandLink, scrollToModule } from '../../_shared'
import {
  AboutContentWrapper,
  AboutContentRow,
  AboutContent,
  AboutHeader,
  AboutDescription,
  AboutPhotoWrapper,
  AboutTechnologies,
  Technology,
  AboutPhoto
} from './About.styles';

export const About: FC = () => {
  return (
    <ModuleWrapper id={'about-module'} color={'secondary'}>
      <AboutContentWrapper>
        <AboutContent>
          <AboutContentRow>
            <AboutHeader>
              About me
            </AboutHeader>
          </AboutContentRow>
          <AboutContentRow>
            <AboutDescription>
              <div>
                <span>
                  I’m a passionate developer. Creating software is something that I love doing, at work and after as well. Over the last several years {"I\'ve"} been working on various exiting projects.
                </span>
                <br />
                <span>
                  I’m constantly learning new technologies and solutions. Also, I’m working on {" "}<HighlightedBrandLink onClick={() => scrollToModule('projects')}>personal projects</HighlightedBrandLink>{" "} after hours.
                </span>
                <br />
                <br />
                <span>
                  I enjoy having challenging tasks, which encourage me to go outside of my comfort zone and learn new things.{" "}
                  {"I\'m"} a fast learner. Even if something is new to me, {"I\'m"} willing to get as much knowledge, as possible about it.
                </span>
                <br />
                <br />
                <span>
                  You can find out more about my experience on my <HighlightedBrandLink onClick={() => window.open("https://www.linkedin.com/in/nikodem-wrona/", "_blank")}>LinkedIn.</HighlightedBrandLink>
                </span>
                <br />
                <br />
                <span>
                  Some of technologies that {"I\'ve"} been working with:
                </span>
              </div>
              <AboutTechnologies>
                <Technology>
                  # TypeScript
                </Technology>
                <Technology>
                  # Node.js
                </Technology>
                <Technology>
                  # GCP / AWS
                </Technology>
                <Technology>
                  # Kubernetes
                </Technology>
                <Technology>
                  # Golang
                </Technology>
              </AboutTechnologies>
            </AboutDescription>
            <AboutPhotoWrapper>
                <AboutPhoto
                  alt="Me"
                  src="/me.jpeg"
                  placeholder="empty"
                  quality={100}
                  width={400}
                  height={400}
                  layout={'fixed'}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
            </AboutPhotoWrapper>
          </AboutContentRow>
        </AboutContent>
      </AboutContentWrapper>
    </ModuleWrapper>
  )
}
