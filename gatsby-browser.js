import React from "react"

// Redux
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

// Theming
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from './src/themes/themes'
import { GlobalStyle } from './src/themes/GlobalStyle'

// Site Metadata (My Idea)
import { SiteMetadataProvider } from './src/provider/SiteMetadataProvider'


/**
 * Gatsby は Context-Provider をここ（gatsby-browser.js）に書く
 * @param {*} param0 
 * 
 * GlobalStyle には GlobalStyle で設定された props を持たせることができます
 * See https://styled-components.com/docs/api#createglobalsSee 
 **/
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle font="bootstrap"/>
        <SiteMetadataProvider>
          {element}
        </SiteMetadataProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </Provider>
)