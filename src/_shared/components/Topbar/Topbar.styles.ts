import styled from 'styled-components';
import { motion } from 'framer-motion'

export const TopbarWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.faded};
  padding: 3rem;
`;

export const TopbarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
`;

export const TopbarLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 490px) {
    display: none;
  }
`;

export const TopbarLink = styled.a`
  display: flex;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const TopbarLinkNumber = styled.div`
  margin-right: .5rem;
  color: ${({theme}) => theme.colors.text.brand};
`;

export const TopbarLinkText = styled.div`
  margin-right: 2rem;
  transition: color .2s ease-in;
  color: ${({theme}) => theme.colors.text.primary};
  &:hover {
    color: ${({theme}) => theme.colors.text.brand};
  }
`;
