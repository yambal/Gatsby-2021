import React, { ReactNode }  from "react"

// Redux
import { Provider } from 'react-redux'
import { store } from './store'

// Theming
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../themes/themes'
import { GlobalStyle } from '../themes/GlobalStyle'

// React Query
// https://react-query.tanstack.com/
import { ReactQueryDevtools } from 'react-query-devtools'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
const queryCache = new QueryCache();

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
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <GlobalStyle font="bootstrap"/>
          <SiteMetadataProvider>
            <ReactQueryDevtools initialIsOpen />
            {children}
          </SiteMetadataProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  </Provider>
)