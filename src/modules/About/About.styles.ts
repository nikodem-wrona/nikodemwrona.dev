import styled from 'styled-components'
import Image from 'next/image'

export const AboutContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const AboutContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const AboutHeader = styled.div`
  font-size: 3.5rem;
`;

export const AboutDescription = styled.div`
  flex: 1;
  font-size: 1.5rem;
  line-height: 2em;
`;

export const AboutPhotoWrapper = styled.div`
  flex: 1;
  padding-left: 15rem;
  padding-top: 3rem;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AboutPhoto = styled(Image)`
  border-radius: .4rem;
  filter: grayscale(80%);
`;

export const AboutTechnologies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 2rem;
`;

export const Technology = styled.div`
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.text.brand};
  font-weight: bold;
`

