import { colors } from './colors'
import { fonts } from './fonts'
import { darken, transparentize } from 'polished'

export const theme = {
  colors: {
    baseBg: colors.bootstrap.white,
    baseText: colors.bootstrap.body,

    primary: colors.bootstrap.primary,
    secondary: colors.bootstrap.secondary,
    success: colors.bootstrap.success,
    danger: colors.bootstrap.danger,
    warning: colors.bootstrap.warning,
    info: colors.bootstrap.info,
    light: colors.bootstrap.light,
    dark: colors.bootstrap.dark,
    body: colors.bootstrap.body,
    muted: colors.bootstrap.muted,
    white: colors.bootstrap.white,
    black50: colors.bootstrap.black50,
    white50: colors.bootstrap.white50,

    /* btnPrimary */
    btnPrimaryText: colors.bootstrap.white,
    btnPrimaryBg: colors.bootstrap.primary,
    btnPrimaryBorder: colors.bootstrap.primary,
    btnPrimaryHoverText: colors.bootstrap.white,
    btnPrimaryHoverBg: darken(0.1, colors.bootstrap.primary),
    btnPrimaryHoverBorder: darken(0.15, colors.bootstrap.primary),
    btnPrimaryDisableText: colors.bootstrap.white,
    btnPrimaryDisableBg: colors.bootstrap.primary,
    btnPrimaryDisableBorder: colors.bootstrap.primary,

    /* btnSecondary */
    btnSecondaryText: colors.bootstrap.white,
    btnSecondaryBg: colors.bootstrap.secondary,
    btnSecondaryBorder: colors.bootstrap.secondary,
    btnSecondaryHoverText: colors.bootstrap.white,
    btnSecondaryHoverBg: darken(0.1, colors.bootstrap.secondary),
    btnSecondaryHoverBorder: darken(0.15, colors.bootstrap.secondary),
    btnSecondaryDisableText: colors.bootstrap.white,
    btnSecondaryDisableBg: colors.bootstrap.secondary,
    btnSecondaryDisableBorder: colors.bootstrap.secondary,

    /* btnSuccess */
    btnSuccessText: colors.bootstrap.white,
    btnSuccessBg: colors.bootstrap.success,
    btnSuccessBorder: colors.bootstrap.success,
    btnSuccessHoverText: colors.bootstrap.white,
    btnSuccessHoverBg: darken(0.1, colors.bootstrap.success),
    btnSuccessHoverBorder: darken(0.15, colors.bootstrap.success),
    btnSuccessDisableText: colors.bootstrap.white,
    btnSuccessDisableBg: colors.bootstrap.success,
    btnSuccessDisableBorder: colors.bootstrap.success,

    /* btnDanger */
    btnDangerText: colors.bootstrap.white,
    btnDangerBg: colors.bootstrap.danger,
    btnDangerBorder: colors.bootstrap.danger,
    btnDangerHoverText: colors.bootstrap.white,
    btnDangerHoverBg: darken(0.1, colors.bootstrap.danger),
    btnDangerHoverBorder: darken(0.15, colors.bootstrap.danger),
    btnDangerDisableText: colors.bootstrap.white,
    btnDangerDisableBg: colors.bootstrap.danger,
    btnDangerDisableBorder: colors.bootstrap.danger,

    /* btnWarning */
    btnWarningText: colors.bootstrap.body,
    btnWarningBg: colors.bootstrap.warning,
    btnWarningBorder: colors.bootstrap.warning,
    btnWarningHoverText: colors.bootstrap.body,
    btnWarningHoverBg: darken(0.1, colors.bootstrap.warning),
    btnWarningHoverBorder: darken(0.15, colors.bootstrap.warning),
    btnWarningDisableText: colors.bootstrap.body,
    btnWarningDisableBg: colors.bootstrap.warning,
    btnWarningDisableBorder: colors.bootstrap.warning,

    /* btnInfo */
    btnInfoText: colors.bootstrap.white,
    btnInfoBg: colors.bootstrap.info,
    btnInfoBorder: colors.bootstrap.info,
    btnInfoHoverText: colors.bootstrap.white,
    btnInfoHoverBg: darken(0.1, colors.bootstrap.info),
    btnInfoHoverBorder: darken(0.15, colors.bootstrap.info),
    btnInfoDisableText: colors.bootstrap.white,
    btnInfoDisableBg: colors.bootstrap.info,
    btnInfoDisableBorder: colors.bootstrap.info,

    /* btnLight */
    btnLightText: colors.bootstrap.body,
    btnLightBg: colors.bootstrap.light,
    btnLightBorder: darken(0.02, colors.bootstrap.light),
    btnLightHoverText: colors.bootstrap.body,
    btnLightHoverBg: darken(0.1, colors.bootstrap.light),
    btnLightHoverBorder: darken(0.12, colors.bootstrap.light),
    btnLightDisableText: colors.bootstrap.white,
    btnLightDisableBg: colors.bootstrap.light,
    btnLightDisableBorder: colors.bootstrap.light,

    /* btnDark */
    btnDarkText: colors.bootstrap.white,
    btnDarkBg: colors.bootstrap.dark,
    btnDarkBorder: colors.bootstrap.dark,
    btnDarkHoverText: colors.bootstrap.white,
    btnDarkHoverBg: darken(0.1, colors.bootstrap.dark),
    btnDarkHoverBorder: darken(0.15, colors.bootstrap.dark),
    btnDarkDisableText: colors.bootstrap.white,
    btnDarkDisableBg: colors.bootstrap.dark,
    btnDarkDisableBorder: colors.bootstrap.dark,

    /* btnLink */
    btnLinkText: colors.bootstrap.primary,
    btnLinkBg: colors.bootstrap.transparent,
    btnLinkBorder: colors.bootstrap.transparent,
    btnLinkHoverText: darken(0.15, colors.bootstrap.primary),
    btnLinkHoverBg: colors.bootstrap.transparent,
    btnLinkHoverBorder: colors.bootstrap.transparent,
    btnLinkDisableText: colors.bootstrap.primary,
    btnLinkDisableBg: colors.bootstrap.transparent,
    btnLinkDisableBorder: colors.bootstrap.transparent,

    modes: {
      dark: {
        primary: '#fff',
        text: '#fff',
        background: '#000',
        btnPrimaryText: colors.bootstrap.body,
        btnPrimaryBg: colors.bootstrap.white,
        btnPrimaryBorder: colors.bootstrap.white,
        btnPrimaryHoverText: colors.bootstrap.white,
        btnPrimaryHoverBg: darken(0.1, colors.bootstrap.primary),
        btnPrimaryHoverBorder: darken(0.15, colors.bootstrap.primary),
        btnPrimaryDisableText: colors.bootstrap.white,
        btnPrimaryDisableBg: colors.bootstrap.primary,
        btnPrimaryDisableBorder: colors.bootstrap.primary,
      },
    },
  },

  shadows: {
    primaryFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.primary)}`,
    secondaryFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.secondary)}`,
    successFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.success)}`,
    dangerFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.danger)}`,
    warningFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.warning)}`,
    infoFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.info)}`,
    lightFocus: `0 0 0 0.2rem ${transparentize(0.5, darken(0.1, colors.bootstrap.light))}`,
    darkFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.dark)}`,
    linkFocus: `0 0 0 0.2rem ${transparentize(0.75, colors.bootstrap.primary)}`
  },

  fonts: {
    bootstrap: fonts.bootstrap,
    base: fonts.bootstrap,
    mode: {
      bootstrap: {
        base: fonts.bootstrap
      }
    }
  }
}

export type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {
    demo?: unknown
  }
}