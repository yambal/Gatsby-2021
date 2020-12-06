export const theme = {
  colors: {
    primary: '#007bff',
    text: '#333333',
    background: '#fff',
    modes: {
      dark: {
        primary: '#fff',
        text: '#fff',
        background: '#000',
      },
    },
  },
}

export type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    demo?: unknown
  }
}