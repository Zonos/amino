import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

import { theme } from './src/styles/constants/theme';

/**
 * Maps amino theme tokens to Tailwind CSS config.
 *
 * All values reference CSS custom properties (var(--amino-*))
 * via the generated theme object in src/styles/constants/theme.ts.
 * This ensures Tailwind utility classes stay in sync with the amino
 * design system and automatically support dark mode (day/night).
 */
const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      /* ─── Animation ─── */
      animation: {
        'amino-pulse': 'amino-pulse 2s ease-in-out infinite',
        dropdown: 'dropdown 250ms ease-in-out both',
        'dropdown-inverse': 'dropdown-inverse 250ms ease-in-out both',
        'fade-in': 'fade-in 0.2s ease',
        float:
          'float var(--particle-duration) ease-in-out var(--particle-delay) infinite alternate',
        ripple: 'ripple var(--amino-ripple-group-duration) ease-out',
        shimmer: 'shimmer 1.4s linear 0.5s infinite',
        'slide-up': 'slide-up 0.25s ease',
        'spinner-dash': 'spinner-dash 1.5s ease-in-out infinite',
        'spinner-rotate': 'spinner-rotate 2s linear infinite',
        wiggle: 'wiggle 0.4s ease',
      },

      /* ─── Background Image (gradients) ─── */
      backgroundImage: {
        'btn-cyan-hover': theme.buttonCyanHover,
        'btn-danger-hover': theme.buttonDangerHover,
        'btn-primary-hover': theme.buttonPrimaryHover,
        'btn-purple-hover': theme.buttonPurpleHover,
        'btn-standard-hover': theme.buttonStandardHover,
        'btn-success-hover': theme.buttonSuccessHover,
        'btn-warning-hover': theme.buttonWarningHover,
      },

      /* ─── Border ─── */
      borderColor: {
        amino: {
          DEFAULT: theme.borderColor,
          blue: theme.blue500,
          cyan: theme.cyan500,
          green: theme.green500,
          orange: theme.orange500,
          purple: theme.purple500,
          red: theme.red500,
          subtle: theme.gray100,
        },
      },

      /* ─── Border Radius ─── */
      borderRadius: {
        'amino-10': theme.radius10,
        'amino-12': theme.radius12,
        'amino-4': theme.radius4,
        'amino-6': theme.radius6,
        'amino-8': theme.radius8,
      },

      /* ─── Box Shadow ─── */
      boxShadow: {
        /* V3 shadows */
        'amino-base': theme.v3ShadowBase,
        'amino-inset': theme.v3ShadowInset,
        'amino-large': theme.v3ShadowLarge,
        'amino-medium': theme.v3ShadowMedium,
        'amino-xl': theme.v3ShadowXl,
        'amino-xxl': theme.v3ShadowXxl,
        'btn-cyan': theme.shadowButtonCyan,
        'btn-cyan-focus': theme.shadowButtonCyanFocus,
        'btn-danger': theme.shadowButtonDanger,
        'btn-danger-focus': theme.shadowButtonDangerFocus,
        'btn-disabled': theme.shadowButtonDisabled,
        'btn-focus-ring': theme.buttonFocusRing,
        /* Button shadows */
        'btn-primary': theme.shadowButtonPrimary,
        'btn-primary-focus': theme.shadowButtonPrimaryFocus,
        'btn-purple': theme.shadowButtonPurple,
        'btn-purple-focus': theme.shadowButtonPurpleFocus,
        'btn-success': theme.shadowButtonSuccess,
        'btn-success-focus': theme.shadowButtonSuccessFocus,
        'btn-warning': theme.shadowButtonWarning,
        'btn-warning-focus': theme.shadowButtonWarningFocus,
        'focus-btn': theme.focusButton,
        /* Button focus */
        'focus-btn-standard': theme.focusButtonStandard,
        'glow-blue': theme.glowBlue,
        'glow-cyan': theme.glowCyan,
        /* Glow shadows */
        'glow-error': theme.glowError,
        'glow-green': theme.glowGreen,
        'glow-orange': theme.glowOrange,
        'glow-purple': theme.glowPurple,
        'glow-red': theme.glowRed,
        /* Input shadows */
        'input-base': theme.shadowInputBase,
        'input-error': theme.shadowInputError,
        'input-error-focus': theme.shadowInputErrorFocus,
        'input-focus': theme.shadowInputFocus,
        'raised-active': theme.shadowRaisedActive,
        'raised-error': theme.shadowRaisedError,
        'raised-error-focus': theme.shadowRaisedErrorFocus,
        'raised-focus': theme.shadowRaisedFocus,
        /* Raised shadows */
        'raised-standard': theme.shadowRaisedStandard,
        'select-active': theme.shadowSelectActive,
        /* Select shadows */
        'select-base': theme.shadowSelectBase,
        'select-error': theme.shadowSelectError,
      },
      /* ─── Colors ─── */
      colors: {
        /* shadcn semantic tokens mapped to amino theme */
        accent: {
          DEFAULT: theme.hoverColor,
          foreground: theme.textColor,
        },
        'amino-cyan': theme.cyan,
        'amino-purple': theme.purple,
        backdrop: theme.backdropColor,
        background: theme.pageBackground,
        /* Blue palette */
        blue: {
          100: theme.blue100,
          200: theme.blue200,
          300: theme.blue300,
          400: theme.blue400,
          50: theme.blue50,
          500: theme.blue500,
          600: theme.blue600,
          700: theme.blue700,
          800: theme.blue800,
          900: theme.blue900,
          950: theme.blue950,
        },
        border: theme.borderColor,
        'border-color': theme.borderColor,
        card: {
          DEFAULT: theme.surfaceColor,
          foreground: theme.textColor,
        },
        /* Cyan palette */
        cyan: {
          100: theme.cyan100,
          200: theme.cyan200,
          300: theme.cyan300,
          400: theme.cyan400,
          50: theme.cyan50,
          500: theme.cyan500,
          600: theme.cyan600,
          700: theme.cyan700,
          800: theme.cyan800,
          900: theme.cyan900,
          950: theme.cyan950,
        },
        danger: {
          DEFAULT: theme.danger,
          dark: theme.dangerDark,
        },
        destructive: {
          DEFAULT: theme.danger,
          foreground: theme.gray0,
        },
        error: theme.error,
        foreground: theme.textColor,
        /* Glass palette */
        glass: {
          0: theme.glass0,
          100: theme.glass100,
          1000: theme.glass1000,
          200: theme.glass200,
          300: theme.glass300,
          400: theme.glass400,
          50: theme.glass50,
          500: theme.glass500,
          600: theme.glass600,
          700: theme.glass700,
          800: theme.glass800,
          900: theme.glass900,
          950: theme.glass950,
        },
        /* Gray palette */
        gray: {
          0: theme.gray0,
          100: theme.gray100,
          1000: theme.gray1000,
          200: theme.gray200,
          300: theme.gray300,
          400: theme.gray400,
          50: theme.gray50,
          500: theme.gray500,
          600: theme.gray600,
          700: theme.gray700,
          800: theme.gray800,
          900: theme.gray900,
          950: theme.gray950,
        },
        /* Green palette */
        green: {
          100: theme.green100,
          200: theme.green200,
          300: theme.green300,
          400: theme.green400,
          50: theme.green50,
          500: theme.green500,
          600: theme.green600,
          700: theme.green700,
          800: theme.green800,
          900: theme.green900,
          950: theme.green950,
        },
        header: theme.headerColor,
        hover: theme.hoverColor,
        input: {
          DEFAULT: theme.inputBackground,
        },
        muted: {
          DEFAULT: theme.surfaceColorSecondary,
          foreground: theme.textColorSecondary,
        },
        /* Orange palette */
        orange: {
          100: theme.orange100,
          200: theme.orange200,
          300: theme.orange300,
          400: theme.orange400,
          50: theme.orange50,
          500: theme.orange500,
          600: theme.orange600,
          700: theme.orange700,
          800: theme.orange800,
          900: theme.orange900,
          950: theme.orange950,
        },
        /* Layout colors */
        page: theme.pageBackground,
        /* Intent colors */
        popover: {
          DEFAULT: theme.surfaceColor,
          foreground: theme.textColor,
        },
        primary: {
          DEFAULT: theme.primary,
          dark: theme.primaryDark,
          foreground: theme.gray0,
          light: theme.primaryLight,
        },
        pure: theme.pureBackgroundColor,
        /* Purple palette */
        purple: {
          100: theme.purple100,
          200: theme.purple200,
          300: theme.purple300,
          400: theme.purple400,
          50: theme.purple50,
          500: theme.purple500,
          600: theme.purple600,
          700: theme.purple700,
          800: theme.purple800,
          900: theme.purple900,
          950: theme.purple950,
        },
        raised: {
          DEFAULT: theme.raisedSurfaceColor,
          secondary: theme.raisedColorSecondary,
        },
        /* Red palette */
        red: {
          100: theme.red100,
          200: theme.red200,
          300: theme.red300,
          400: theme.red400,
          50: theme.red50,
          500: theme.red500,
          600: theme.red600,
          700: theme.red700,
          800: theme.red800,
          900: theme.red900,
          950: theme.red950,
        },
        ring: theme.primary,
        secondary: {
          DEFAULT: theme.surfaceColorSecondary,
          foreground: theme.textColor,
        },
        sidebar: theme.sidebarColor,
        /* Spinner colors */
        spinner: {
          'stroke-black': theme.spinnerStrokeBlack,
          'stroke-white': theme.spinnerStrokeWhite,
          'track-black': theme.spinnerTrackBlack,
          'track-white': theme.spinnerTrackWhite,
        },
        success: {
          DEFAULT: theme.success,
          dark: theme.successDark,
        },
        surface: {
          DEFAULT: theme.surfaceColor,
          secondary: theme.surfaceColorSecondary,
        },
        'text-color': {
          DEFAULT: theme.textColor,
          secondary: theme.textColorSecondary,
        },
        'transparent-black': theme.transparentBlack,
        'transparent-gray-600': theme.transparentGray600,
        /* Transparent colors */
        'transparent-white': theme.transparentWhite,
        warning: {
          DEFAULT: theme.warning,
          dark: theme.warningDark,
        },
      },

      /* ─── Font Family ─── */
      fontFamily: {
        'harmonized-codes': theme.fontHarmonizedCodes,
        mono: theme.fontMono,
        sans: theme.fontSans,
      },

      /* ─── Font Size ─── */
      fontSize: {
        'amino-2xl': theme.fontSize2xl,
        'amino-3xl': theme.fontSize3xl,
        'amino-base': theme.fontSizeBase,
        'amino-base-docs': theme.fontSizeBaseDocs,
        'amino-l': theme.fontSizeL,
        'amino-s': theme.fontSizeS,
        'amino-xl': theme.fontSizeXl,
        'amino-xs': theme.fontSizeXs,
      },

      /* ─── Sizing ─── */
      height: {
        'amino-lg': theme.sizeLg,
        'amino-md': theme.sizeMd,
        'amino-sm': theme.sizeSm,
        'amino-xl': theme.sizeXl,
      },

      /* ─── Keyframes ─── */
      keyframes: {
        'amino-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        dots: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."' },
          '60%': { content: '"..."' },
          '90%, 100%': { content: '""' },
        },
        dropdown: {
          from: { opacity: '0', transform: 'translateY(-5px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'dropdown-inverse': {
          from: { opacity: '0', transform: 'translateY(5px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          from: { transform: 'translateY(0) translateX(0)' },
          to: { transform: 'translateY(-10px) translateX(5px)' },
        },
        ripple: {
          '0%': {
            opacity: '0.1',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: 'var(--amino-ripple-group-opacity)',
            transform: 'scale(4)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '75%, 100%': { transform: 'translateX(100%)' },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px) scale(0.98)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'spinner-dash': {
          '0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
          /* eslint-disable sort-keys/sort-keys-fix */
          '50%': { strokeDasharray: '90, 150', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '90, 150', strokeDashoffset: '-124' },
          /* eslint-enable sort-keys/sort-keys-fix */
        },
        'spinner-rotate': {
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg) scale(1.1)' },
          '75%': { transform: 'rotate(8deg) scale(1.1)' },
        },
      },

      /* ─── Line Height ─── */
      lineHeight: {
        'amino-2xl': theme.lineHeight2xl,
        'amino-3xl': theme.lineHeight3xl,
        'amino-base': theme.lineHeightBase,
        'amino-l': theme.lineHeightL,
        'amino-s': theme.lineHeightS,
        'amino-xl': theme.lineHeightXl,
        'amino-xs': theme.lineHeightXs,
      },
      minHeight: {
        'amino-lg': theme.sizeLg,
        'amino-md': theme.sizeMd,
        'amino-sm': theme.sizeSm,
        'amino-xl': theme.sizeXl,
      },

      /* ─── Opacity ─── */
      opacity: {
        disabled: theme.opacityDisabled,
      },

      /* ─── Spacing ─── */
      spacing: {
        'amino-0': theme.space0,
        'amino-12': theme.space12,
        'amino-16': theme.space16,
        'amino-20': theme.space20,
        'amino-24': theme.space24,
        'amino-28': theme.space28,
        'amino-32': theme.space32,
        'amino-36': theme.space36,
        'amino-4': theme.space4,
        'amino-40': theme.space40,
        'amino-44': theme.space44,
        'amino-48': theme.space48,
        'amino-52': theme.space52,
        'amino-56': theme.space56,
        'amino-60': theme.space60,
        'amino-64': theme.space64,
        'amino-68': theme.space68,
        'amino-72': theme.space72,
        'amino-76': theme.space76,
        'amino-8': theme.space8,
        'amino-80': theme.space80,
        'amino-n12': theme.spaceNegative12,
        'amino-n16': theme.spaceNegative16,
        'amino-n20': theme.spaceNegative20,
        'amino-n24': theme.spaceNegative24,
        'amino-n28': theme.spaceNegative28,
        'amino-n32': theme.spaceNegative32,
        'amino-n36': theme.spaceNegative36,
        /* Negative spacing */
        'amino-n4': theme.spaceNegative4,
        'amino-n40': theme.spaceNegative40,
        'amino-n44': theme.spaceNegative44,
        'amino-n48': theme.spaceNegative48,
        'amino-n52': theme.spaceNegative52,
        'amino-n56': theme.spaceNegative56,
        'amino-n60': theme.spaceNegative60,
        'amino-n64': theme.spaceNegative64,
        'amino-n68': theme.spaceNegative68,
        'amino-n72': theme.spaceNegative72,
        'amino-n76': theme.spaceNegative76,
        'amino-n8': theme.spaceNegative8,
        'amino-n80': theme.spaceNegative80,
        /* Layout dimensions */
        appbar: theme.appbarHeight,
        sidebar: theme.sidebarWidth,
      },

      /* ─── Transition ─── */
      transitionProperty: {
        amino: theme.transition,
      },
      width: {
        'amino-lg': theme.sizeLg,
        'amino-md': theme.sizeMd,
        'amino-sm': theme.sizeSm,
        'amino-xl': theme.sizeXl,
      },

      /* ─── Z-Index ─── */
      zIndex: {
        'amino-0': theme.elevation0,
        'amino-100': theme.elevation100,
        'amino-200': theme.elevation200,
        'amino-300': theme.elevation300,
        'amino-400': theme.elevation400,
        'amino-500': theme.elevation500,
        appbar: theme.appbarElevation,
        dialog: theme.dialogElevation,
        toast: theme.toastElevation,
      },
    },
  },
};

export default config;
