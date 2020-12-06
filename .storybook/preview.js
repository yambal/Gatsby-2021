
import React from "react"
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import { theme } from '../src/components/Buttons/themes'
import { useColorMode } from '@xstyled/styled-components'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

/**
 * テーマをStorybookに登録
 */
export const globalTypes = {
  themeColorMode: {
    name: `Color Mode`,
    description: 'theme color mode',
    defaultValue: 'default',
    toolbar: {
      items: ['default', 'dark']
    }
  }
}

const ThemeColorInjector = ({
  children,
  colorMode
}) => {
  const [_, setColorMode] = useColorMode()

  React.useEffect(
    () => {
      setColorMode(colorMode)
    },
    [colorMode]
  )

  return (
    <>
      {children}
    </>
  )
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ThemeColorInjector colorMode={context.globals.themeColorMode}>
          <Story />
        </ThemeColorInjector>
      </ColorModeProvider>
    </ThemeProvider>
  ),
];
