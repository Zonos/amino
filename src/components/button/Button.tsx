import {
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
  useRef,
} from 'react';

import clsx from 'clsx';

import {
  type RippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { type SpinnerProps, Spinner } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';
import type { Theme } from 'src/types/Theme';
import type { Variant } from 'src/types/Variant';
import { getAminoColor } from 'src/utils/getAminoColor';

import styles from './Button.module.scss';

type ButtonBase = BaseProps & {
  background?: Color | 'inherit';
  /** @param borderColor only available for intent 'outline' */
  borderColor?: Color | 'inherit';
  children?: ReactNode;
  color?: Color | 'inherit';
  disabled?: boolean;
  fitContentWidth?: boolean;
  hoverBackground?: Color | 'inherit';
  icon?: ReactNode;
  iconRight?: boolean;
  /** @default false */
  loading?: boolean;
  loadingText?: string;
  /**
   * Disable ripple effect
   * @default false
   */
  noRipple?: boolean;
  outline?: boolean;
  /**
   * @default 'sm'
   */
  size?: Size;
  /** Color for the spinner when in a loading state */
  spinnerColor?: SpinnerProps['color'];
  tabIndex?: number;
  themeOverride?: Theme;
  type?: 'button' | 'reset' | 'submit';
  /** @default 'standard' */
  variant?: Variant;
};

export type GroupTag = 'div' | 'a' | 'button';

const DEFAULT_TAG = 'button' as const;

type ButtonProps<T extends GroupTag = typeof DEFAULT_TAG> = ButtonBase & {
  tag?: T | GroupTag;
} & (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLElement>);

export function Button<T extends GroupTag = typeof DEFAULT_TAG>({
  children,
  className,
  disabled = false,
  icon,
  iconRight,
  loading = false,
  loadingText,
  noRipple = false,
  outline = false,
  size = 'sm',
  spinnerColor,
  tag = DEFAULT_TAG,
  themeOverride,
  type = 'button',
  variant = 'standard',
  ...props
}: ButtonProps<T>) {
  const Tag: GroupTag = tag;

  const getSpinnerSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'lg':
      case 'xl':
        return 24;
      case 'md':
      default:
        return 20;
    }
  };

  const renderContent = (_spinnerColor?: SpinnerProps['color']) => (
    <>
      <span className={styles.content}>{!iconRight && icon}</span>
      <div className={clsx(styles.content, styles.text)}>{children}</div>
      <span className={styles.content}>{iconRight && icon}</span>
      {variant !== 'plain' && variant !== 'text' && loading && (
        <span className={styles.spinnerWrapper}>
          <Spinner color={_spinnerColor} size={getSpinnerSize()} />
          {loadingText}
        </span>
      )}
    </>
  );

  const buttonClassName = clsx([
    'amino-button',
    styles.aminoButton,
    variant === 'plain' ? '' : styles[`${variant}Button`],
    outline && styles.outline,
    className || '',
    icon && !children ? styles.onlyIcon : '',
    iconRight ? styles.iconRight : '',
    icon ? styles.hasIcon : '',
    loading ? styles.loading : '',
    themeOverride,
  ]);

  const rippleRef = useRef<RippleActions>(null);

  const { getRippleHandlers, rippleEnabled } = useRipple({
    disabled: disabled || loading,
    rippleEnabled: !noRipple && !['plain', 'text'].includes(variant),
    rippleRef,
  });

  const baseProps = {
    className: buttonClassName,
    disabled: disabled || loading,
    size,
  };

  const buttonProps: ButtonProps = {
    type,
    ...baseProps,
    ...(props as ButtonProps),
    ...getRippleHandlers(props),
  };

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return `${theme.space4} ${theme.space8}`;
      case 'lg':
      case 'xl':
        return `${theme.space12} ${theme.space24}`;
      case 'md':
      default:
        return `${theme.space8} ${theme.space16}`;
    }
  };

  const getRadius = () => {
    switch (size) {
      case 'sm':
        return `${theme.radius6}`;
      case 'lg':
      case 'xl':
        return `${theme.radius10}`;
      case 'md':
      default:
        return `${theme.radius8}`;
    }
  };

  const getFontWeight = () => {
    switch (size) {
      case 'lg':
      case 'xl':
        return 600;
      case 'sm':
      case 'md':
      default:
        return 500;
    }
  };

  const getDefaultSpinnerColor = () => {
    switch (variant) {
      case 'primary':
        if (outline) {
          return 'info';
        }
        return 'white';
      case 'success':
        if (outline) {
          return 'success';
        }
        return 'white';
      case 'warning':
        if (outline) {
          return 'warning';
        }
        return 'white';
      case 'danger':
        if (outline) {
          return 'danger';
        }
        return 'white';
      case 'link':
        return 'info';
      case 'plain':
      case 'subtle':
      case 'text':
      case 'standard':
      default:
        return 'black';
    }
  };

  const getColor = () => {
    if (props.color) {
      return getAminoColor(props.color) || '';
    }
    switch (variant) {
      case 'primary':
      case 'success':
      case 'warning':
      case 'danger':
        return theme.gray0;
      case 'link':
        return theme.primary;
      case 'subtle':
        return theme.textColorSecondary;
      case 'plain':
      case 'text':
      case 'standard':
      default:
        return theme.textColor;
    }
  };

  const getHoverBackground = () => {
    if (props.hoverBackground && props.hoverBackground !== 'inherit') {
      const aminoColor = getAminoColor(props.hoverBackground);
      return `linear-gradient(${aminoColor}, ${aminoColor})`;
    }
    switch (variant) {
      case 'primary':
        return theme.buttonPrimaryHover;
      case 'success':
        return theme.buttonSuccessHover;
      case 'warning':
        return theme.buttonWarningHover;
      case 'danger':
        return theme.buttonDangerHover;
      case 'standard':
        return theme.buttonStandardHover;
      case 'subtle':
        return `linear-gradient(${theme.gray100}, ${theme.gray100})`;
      case 'link':
        return `linear-gradient(${theme.blue100}, ${theme.blue100})`;
      case 'text':
        return `linear-gradient(${theme.gray500}, ${theme.gray500})`;
      default:
        return '';
    }
  };

  const getBackgroundColor = () => {
    if (props.background) {
      return getAminoColor(props.background) || '';
    }
    switch (variant) {
      case 'primary':
        return theme.primary;
      case 'success':
        return theme.success;
      case 'warning':
        return theme.warning;
      case 'danger':
        return theme.danger;
      case 'standard':
        return theme.surfaceColor;
      case 'subtle':
        return 'none';
      default:
        return '';
    }
  };

  return (
    <Tag
      className={buttonClassName}
      style={{
        '--amino-background-color': getBackgroundColor(),
        '--amino-color': getColor(),
        '--button-font-weight': getFontWeight(),
        '--button-padding': getPadding(),
        '--button-radius': getRadius(),
        '--button-size': `var(--amino-size-${size})`,
        '--button-width': props.fitContentWidth ? 'fit-content' : '',
        '--disabled-opacity': outline ? 0.6 : 1,
        '--hover-background-color': getHoverBackground(),
      }}
      tabIndex={tag === 'div' ? 0 : undefined}
      type={type}
      {...buttonProps}
    >
      {renderContent(spinnerColor || getDefaultSpinnerColor())}
      {rippleEnabled && <RippleGroup ref={rippleRef} />}
    </Tag>
  );
}
