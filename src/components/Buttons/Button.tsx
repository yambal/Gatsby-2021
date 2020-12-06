import React, { ComponentProps } from 'react'
import styled, { Box, css } from '@xstyled/styled-components'
import { variant } from '@xstyled/system'

/**
 * xstyled:Box をラップした例
 */
export type ButtonProps = ComponentProps<typeof Box> & {
  purpose?: '' | 'normal' | 'alert' | 'primary'
  buttonSize?: '' | 'lg' | 'sm'
}

const colorVariants = variant({
  default: 'primary',
  prop: 'purpose',
  variants: {
    primary: css`
      color: #fff;
      background-color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      &:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
      }
      &:disabled {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
    `,
    normal: css`
      color: blue;
    `
  }
})

const sizeVariants = variant({
  default: 'normal',
  prop: 'buttonSize',
  variants: {
    normal: css`
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
    `,
    lg: css`
      padding: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    `,
    sm: css`
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    `
  }
})

export const Button = (styled(Box).attrs({as: 'button'}) as typeof styled.buttonBox)<ButtonProps>`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: .65;
  }

  ${colorVariants}
  ${sizeVariants}
`

