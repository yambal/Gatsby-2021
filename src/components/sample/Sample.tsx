import React, { ComponentProps } from 'react'
import styled from '@xstyled/styled-components'
import { Box } from '@xstyled/styled-components'

/**
 * xstyled:Box をラップした例
 */

const Wrapper = styled(Box)``
export type wrapperProps = ComponentProps<typeof Wrapper> & {}

export function Sample ({children, ...wrapperProps}: wrapperProps) {
  return (
    <Wrapper {...wrapperProps}>{children}</Wrapper>
  )
}
