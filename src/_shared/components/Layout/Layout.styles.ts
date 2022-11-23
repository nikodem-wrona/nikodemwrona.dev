import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1000px) {
    padding-top: 5rem;
  }
`;

export const ModuleWrapper = styled.div<{ color: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 10rem;
  background-color: ${({theme, color}) => theme.colors.background[color]};

  @media (max-width: 1500px) {
    padding: 4rem 10rem;
    height: auto;
  }

  @media (max-width: 1000px) {
    padding: 2rem 5rem;
  }
`;

