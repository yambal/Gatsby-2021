import React from "react"
import {AppProvider} from './src/app/AppProvider'

/**
 * いわゆる React の index.tsx のようなもの
 * Gatsby は Context-Provider をここ（gatsby-browser.js）に書く
 * GlobalStyle には GlobalStyle で設定された props を持たせることができます
 * See https://styled-components.com/docs/api#createglobalsSee 
 **/
export const wrapRootElement = ({ element }) => (
  <AppProvider>
    {element}
  </AppProvider>
)