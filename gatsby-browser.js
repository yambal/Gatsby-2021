import React from "react"
import { SiteMetadataProvider } from './src/provider/SiteMetadataProvider'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from './src/themes/themes'
import { GlobalStyle } from './src/themes/GlobalStyle'

/**
 * Gatsby は Context-Provider をここ（gatsby-browser.js）に書く
 * @param {*} param0 
 * 
 * GlobalStyle には GlobalStyle で設定された props を持たせることができます
 * See https://styled-components.com/docs/api#createglobalsSee 
 **/
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <GlobalStyle font="bootstrap"/>
      <SiteMetadataProvider>
        {element}
      </SiteMetadataProvider>
    </ColorModeProvider>
  </ThemeProvider>
)