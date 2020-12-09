import React from "react"
import { SiteMetadataProvider } from './src/provider/SiteMetadataProvider'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from './src/themes/themes'

/**
 * Gatsby は Context-Provider をここ（gatsby-browser.js）に書く
 * @param {*} param0 
 */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <SiteMetadataProvider>
        {element}
      </SiteMetadataProvider>
    </ColorModeProvider>
  </ThemeProvider>
)