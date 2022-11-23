import { FC } from 'react';

import { Button as StyledButton } from './Button.styles';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, text, active }) => {
  return (
    <StyledButton 
      onClick={onClick}
      active={active}
    >
      {text}
    </StyledButton>
  )
}
