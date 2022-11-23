import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string;
        secondary: string;
        brand: string;
        faded: string;
      },
      background: {
        primary: string;
        secondary: string;
        brand: string;
        brand_highlighted: string;
        brand_faded: string;
        faded: string;
      }
    }
  }
}
