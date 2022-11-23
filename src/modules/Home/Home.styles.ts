import styled from 'styled-components'

export const HomeContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;  
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const HomeContentRow = styled.div`
  display: flex;
`;

export const HomeFirstRowText = styled.span`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.text.brand};
`;

export const HomeSecondRowText = styled.span`
  font-size: 8rem;
  font-weight: bold;
`;

export const HomeThirdRowText = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.faded};
  margin-bottom: 3rem;
`;

export const HomeFourthRowText = styled.span`
  line-height: 3rem;
  font-size: 2rem;
  width: 75%;
  color: ${({theme}) => theme.colors.text.faded};
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const HomeFifthRowText = styled.span`
  margin-top: 5rem;
`;
