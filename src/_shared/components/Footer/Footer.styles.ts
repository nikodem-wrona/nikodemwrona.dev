import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

export const Copyrights = styled.div`
  font-size: 1rem;
`;

export const Contact = styled.div`
  font-size: 1rem;
`;
