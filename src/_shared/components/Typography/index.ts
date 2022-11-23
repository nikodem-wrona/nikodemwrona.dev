import styled from 'styled-components'

export const HighlightedBrandText = styled.span`
  color: ${({theme}) => theme.colors.text.brand};
  font-weight: bold;
`;

export const HighlightedBrandLink = styled.a`
  color: ${({theme}) => theme.colors.text.brand};
  font-weight: bold;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const HighlightedText = styled.span`
  font-weight: bold;
`;
