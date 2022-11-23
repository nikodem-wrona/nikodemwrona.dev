import { motion } from 'framer-motion';
import styled from 'styled-components'

const RawButton = styled(motion.button)`
  border: none;
  box-shadow: none;
  outline: none;
`;

export const Button = styled(RawButton)<{ active?: boolean }>`
  background-color: ${({theme, active}) => active ? theme.colors.background.brand_highlighted : theme.colors.background.brand_faded};
  border: 1px solid ${({theme}) => theme.colors.background.brand};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  transition: background-color .5s ease;
  &:hover {
    background-color: ${({theme}) => theme.colors.background.brand_highlighted};
  }
  &:active {
    background-color: ${({theme}) => theme.colors.background.brand_highlighted};
  }
`;
