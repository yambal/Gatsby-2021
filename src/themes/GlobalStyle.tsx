import { createGlobalStyle } from '@xstyled/styled-components'

/**
 * See https://styled-components.com/docs/api#createglobalstyle
 * props を受け付ける、theme も受け取れる
 **/

type GlobalstyleProps = {
  font?: 'bootstrap' 
}

export const GlobalStyle = createGlobalStyle<GlobalstyleProps>`
  /**
   * 1. Change the line height in all browsers (opinionated).
   * 2. Breaks words to prevent overflow in all browsers (opinionated).
   * 3. Use a 4-space tab width in all browsers (opinionated).
   * 4. Use the default cursor in all browsers (opinionated).
   * 5. Remove the grey highlight on links in iOS (opinionated).
   * 6. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   */
  html {
    line-height: 1.15; /* 1 */
    word-break: break-word; /* 2 */
    tab-size: 4; /* 3 */
    cursor: default; /* 4 */
    -webkit-tap-highlight-color: transparent /* 5 */;
    text-size-adjust: 100%; /* 6 */

    font-family: sans-serif;
  }
  /**
   * Remove the margin in all browsers (opinionated).
   */
  body {
    display: block;
    margin: 0;
    font-family: ${props => props.font ? props.theme.fonts[props.font] : props.theme.fonts.base};
    font-size: 1rem;
    line-height: 1.5;
    color: ${props => props.theme.colors.baseText};
    text-align: left;
    background-color: ${props => props.theme.colors.baseBg};
  }

  *, ::after, ::before {
      box-sizing: border-box;
  }

  main {
    display: block;
  }
`