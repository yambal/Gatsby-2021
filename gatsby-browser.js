import React from "react"
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from './src/themes/theme'

/**
 * Gatsby は Context-Provider をここ（gatsby-browser.js）に書く
 * @param {*} param0 
 */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      {element}
    </ColorModeProvider>
  </ThemeProvider>
)