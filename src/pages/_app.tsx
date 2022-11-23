import type { AppProps } from 'next/app'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import {
  BACKGROUND_PRIMARY,
  TEXT_PRIMARY,
  BACKGROUND_FADED,
  TEXT_FADED,
  BACKGROUND_BRAND,
  TEXT_BRAND,
  BACKGROUND_SECONDARY, TEXT_SECONDARY, BACKGROUND_BRAND_FADED, BACKGROUND_BRAND_HIGHLIGHTED
} from '../styles/colors'

const theme: DefaultTheme = {
  colors: {
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
      brand: TEXT_BRAND,
      faded: TEXT_FADED,
    },
    background: {
      primary: BACKGROUND_PRIMARY,
      secondary: BACKGROUND_SECONDARY,
      brand: BACKGROUND_BRAND,
      brand_faded: BACKGROUND_BRAND_FADED,
      brand_highlighted: BACKGROUND_BRAND_HIGHLIGHTED,
      faded: BACKGROUND_FADED,
    }
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
