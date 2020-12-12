import React, { ComponentProps } from 'react'
import styled, { Box, css } from '@xstyled/styled-components'
import { th, variant } from '@xstyled/system'

/**
 * xstyled:Box をラップした例
 */
export type ButtonProps = ComponentProps<typeof Box> & {
  purpose?: '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  btnSize?: '' | 'normal' | 'lg' | 'sm'
}

const colorVariants = variant({
  default: 'primary',
  prop: 'purpose',
  variants: {
    primary: css`
      color: ${props => props.theme.colors.btnPrimaryText};
      background-color: ${props => props.theme.colors.btnPrimaryBg};
      border-color: ${props => props.theme.colors.btnPrimaryBorder};
      &:hover {
        color: ${props => props.theme.colors.btnPrimaryHoverText};
        background-color: ${props => props.theme.colors.btnPrimaryHoverBg};
        border-color: ${props => props.theme.colors.btnPrimaryHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnPrimaryDisableText};
        background-color: ${props => props.theme.colors.btnPrimaryDisableBg};
        border-color: ${props => props.theme.colors.btnPrimaryDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('primaryFocus')};
      }
    `,
    secondary: css`
      color: ${props => props.theme.colors.btnSecondaryText};
      background-color: ${props => props.theme.colors.btnSecondaryBg};
      border-color: ${props => props.theme.colors.btnSecondaryBorder};
      &:hover {
        color: ${props => props.theme.colors.btnSecondaryText};
        background-color: ${props => props.theme.colors.btnSecondaryHoverBg};
        border-color: ${props => props.theme.colors.btnSecondaryHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnSecondaryDisableText};
        background-color: ${props => props.theme.colors.btnSecondaryDisableBorder};
        border-color: ${props => props.theme.colors.btnSecondaryDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('secondaryFocus')};
      }
    `,
    success: css`
      color: ${props => props.theme.colors.btnSuccessText};
      background-color: ${props => props.theme.colors.btnSuccessBg};
      border-color: ${props => props.theme.colors.btnSuccessBorder};
      &:hover {
        color: ${props => props.theme.colors.btnSuccessText};
        background-color: ${props => props.theme.colors.btnSuccessHoverBg};
        border-color: ${props => props.theme.colors.btnSuccessHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnSuccessDisableText};
        background-color: ${props => props.theme.colors.btnSuccessDisableBorder};
        border-color: ${props => props.theme.colors.btnSuccessDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('successFocus')};
      }
    `,
    danger: css`
      color: ${props => props.theme.colors.btnDangerText};
      background-color: ${props => props.theme.colors.btnDangerBg};
      border-color: ${props => props.theme.colors.btnDangerBorder};
      &:hover {
        color: ${props => props.theme.colors.btnDangerText};
        background-color: ${props => props.theme.colors.btnDangerHoverBg};
        border-color: ${props => props.theme.colors.btnDangerHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnDangerDisableText};
        background-color: ${props => props.theme.colors.btnDangerDisableBorder};
        border-color: ${props => props.theme.colors.btnDangerDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('dangerFocus')};
      }
    `,
    warning: css`
      color: ${props => props.theme.colors.btnWarningText};
      background-color: ${props => props.theme.colors.btnWarningBg};
      border-color: ${props => props.theme.colors.btnWarningBorder};
      &:hover {
        color: ${props => props.theme.colors.btnWarningText};
        background-color: ${props => props.theme.colors.btnWarningHoverBg};
        border-color: ${props => props.theme.colors.btnWarningHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnWarningDisableText};
        background-color: ${props => props.theme.colors.btnWarningDisableBorder};
        border-color: ${props => props.theme.colors.btnWarningDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('warningFocus')};
      }
    `,
    info: css`
      color: ${props => props.theme.colors.btnInfoText};
      background-color: ${props => props.theme.colors.btnInfoBg};
      border-color: ${props => props.theme.colors.btnInfoBorder};
      &:hover {
        color: ${props => props.theme.colors.btnInfoText};
        background-color: ${props => props.theme.colors.btnInfoHoverBg};
        border-color: ${props => props.theme.colors.btnInfoHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnInfoDisableText};
        background-color: ${props => props.theme.colors.btnInfoDisableBorder};
        border-color: ${props => props.theme.colors.btnInfoDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('infoFocus')};
      }
    `,
    light: css`
      color: ${props => props.theme.colors.btnLightText};
      background-color: ${props => props.theme.colors.btnLightBg};
      border-color: ${props => props.theme.colors.btnLightBorder};
      &:hover {
        color: ${props => props.theme.colors.btnLightText};
        background-color: ${props => props.theme.colors.btnLightHoverBg};
        border-color: ${props => props.theme.colors.btnLightHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnLightDisableText};
        background-color: ${props => props.theme.colors.btnLightDisableBorder};
        border-color: ${props => props.theme.colors.btnLightDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('lightFocus')};
      }
    `,
    dark: css`
      color: ${props => props.theme.colors.btnDarkText};
      background-color: ${props => props.theme.colors.btnDarkBg};
      border-color: ${props => props.theme.colors.btnDarkBorder};
      &:hover {
        color: ${props => props.theme.colors.btnDarkText};
        background-color: ${props => props.theme.colors.btnDarkHoverBg};
        border-color: ${props => props.theme.colors.btnDarkHoverBorder};
      }
      &:disabled {
        color: ${props => props.theme.colors.btnDarkDisableText};
        background-color: ${props => props.theme.colors.btnDarkDisableBg};
        border-color: ${props => props.theme.colors.btnDarkDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('darkFocus')};
      }
    `,
    link: css`
      color: ${props => props.theme.colors.btnLinkText};
      background-color: ${props => props.theme.colors.btnLinkBg};
      border-color: ${props => props.theme.colors.btnLinkBorder};
      &:hover {
        color: ${props => props.theme.colors.btnLinkHoverText};
        background-color: ${props => props.theme.colors.btnLinkHoverBg};
        border-color: ${props => props.theme.colors.btnLinkHoverBorder};
        text-decoration: underline;
      }
      &:disabled {
        color: ${props => props.theme.colors.btnLinkDisableText};
        background-color: ${props => props.theme.colors.btnLinkDisableBg};
        border-color: ${props => props.theme.colors.btnLinkDisableBorder};
      }
      &:focus {
        box-shadow: ${th.shadow('linkFocus')};
      }
    `,
  }
})

const sizeVariants = variant({
  default: 'normal',
  prop: 'btmSize',
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

  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: .65;
  }

  ${colorVariants}
  ${sizeVariants}
`

