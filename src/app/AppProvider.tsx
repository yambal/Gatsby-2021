import React, { ReactNode }  from "react"

// Redux
import { Provider } from 'react-redux'
import { store } from './store'

// Theming
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../themes/themes'
import { GlobalStyle } from '../themes/GlobalStyle'

// Site Metadata (My Idea)
import { SiteMetadataProvider } from '../provider/SiteMetadataProvider'

/**
 * Provider は まとめておく
 * Gatsby は Context-Provider を gatsby-browser.js　に書く
 **/
type ProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: ProviderProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle font="bootstrap"/>
        <SiteMetadataProvider>
          {children}
        </SiteMetadataProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </Provider>
)