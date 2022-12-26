import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, createTheme, keyframes, globalCss } =
  createStitches({
    theme: {
      colors: {
        backgroundPrimary: '#fff',
        textPrimary: '#000',
      },
      space: {
        extraSmall: '0.4rem',
        small: '0.8rem',
        medium: '1.6rem',
        large: '2.4rem',
        extraLarge: '3.2rem',
      },
      sizes: {
        navbarHeight: '8.5rem',
      },
      fontSizes: {
        font12: '1.2rem',
        font14: '1.4rem',
        font18: '1.8rem',
        font20: '2rem',
        font24: '2.4rem',
        font25: '2.5rem',
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        heavy: '900',
      },
      radii: {
        small: '0.2rem',
        medium: '0.4rem',
        large: '0.8rem',
        xlarge: '1rem',
      },
      fonts: {
        ambit: 'Ambit, sans-serif',
        abcdiatype: 'Chivo Mono, monospace',
      },
    },
    media: {
      'bp-xs': '(min-width: 0px)',
      'bp-sm': '(min-width: 568px)',
      'bp-md': '(min-width: 768px)',
      'bp-lg': '(min-width: 992px)',
      'bp-xl': '(min-width: 1366px)',
      'bp-xxl': '(min-width: 1680px)',
      dark: '(prefers-color-scheme: dark)',
    },
  });

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '10px',
    verticalAlign: 'baseline',
  },
  body: {
    backgroundColor: '$backgroundPrimary',
    color: '$textPrimary',
    fontFamily: 'Chivo Mono, monospace',
    fontSize: '100%',
    fontWeight: '$regular',
    height: '100%',
    margin: 0,
    padding: 0,
    border: 0,
    lineHeight: 1,
  },
  'div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: 'none',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'button, input, textarea': {
    fontFamily: 'Chivo Mono, monospace',
  },
});
