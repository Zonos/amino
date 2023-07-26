import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
  useRef,
} from 'react';

import styled from 'styled-components';

import {
  type IRippleActions,
  RippleGroup,
} from 'src/components/button/RippleGroup';
import { useRipple } from 'src/components/button/useRipple';
import { type SpinnerProps, Spinner } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';
import type { Size } from 'src/types/Size';
import type { Theme } from 'src/types/Theme';
import type { Variant } from 'src/types/Variant';

const getAminoColor = (color?: Color | 'inherit') => {
  if (color === 'inherit') {
    return 'inherit';
  }
  if (color) {
    return theme[color];
  }
  return undefined;
};

const getPadding = (size?: Size) => {
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

const StyledSpinnerWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius4};
  gap: ${theme.space8};
`;

const AminoButton = styled.button<ButtonProps<GroupTag>>`
  position: relative;
  outline: none;
  height: ${p => `var(--amino-size-${p.size})`};
  line-height: ${p => `var(--amino-size-${p.size})`};
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 ${theme.space16};
  border-radius: ${theme.radius6};
  transition: ${theme.transition};
  font-weight: 500;
  user-select: none;
  font-family: ${theme.fontSans};
  letter-spacing: normal;
  cursor: pointer;
  white-space: nowrap;
  padding: ${p => getPadding(p.size)};

  svg path:not([data-is-secondary-color]) {
    fill: currentColor;
  }

  &.only-icon {
    width: ${p => `var(--amino-size-${p.size})`};
    padding: 0;
  }

  &:active,
  &:focus {
    outline: none;
    svg path:not([data-is-secondary-color]) {
      fill: currentColor;
    }
  }

  &:focus {
    box-shadow: ${theme.buttonFocusRing};
    border: 1px solid ${theme.gray0};
  }

  &:active {
    transform: scale(0.99);
  }

  &:not(.only-icon).has-icon {
    &.icon-right {
      svg {
        margin-left: ${theme.space8};
        margin-right: 0;
      }
    }
    svg {
      margin-right: ${theme.space8};
      margin-left: 0;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    .content {
      opacity: ${p => (p.outline ? 0.6 : 1)};
    }
  }
`;

const Primary = styled(AminoButton)`
  background-color: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.primary};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.primary : theme.gray0};
  box-shadow: ${p => (p.outline ? 'none' : theme.shadowButtonPrimary)};
  ${p =>
    p.outline
      ? `border: 1px solid ${theme.blue300}; border-radius: ${theme.radius6};`
      : ''}

  &:not([disabled]) {
    &:hover {
      background: ${p => {
        if (p.hoverBackground) {
          return p.hoverBackground;
        }
        if (p.outline) {
          return theme.blue100;
        }
        return theme.buttonPrimaryHover;
      }};
    }
    &:active {
      background: ${p => (p.outline ? theme.blue200 : theme.blue700)};
    }
  }

  &[disabled] {
    background: ${p => (p.outline ? theme.gray0 : theme.blue400)};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.primary)};
  }
`;

const Success = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.success};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.success : theme.gray0};
  box-shadow: ${p => (p.outline ? 'none' : theme.shadowButtonSuccess)};

  ${p =>
    p.outline
      ? `border: 1px solid ${theme.green300}; border-radius: ${theme.radius6};`
      : ''}

  &:not([disabled]) {
    &:hover {
      background: ${p => {
        if (p.hoverBackground) {
          return getAminoColor(p.hoverBackground);
        }
        if (p.outline) {
          return theme.green100;
        }
        return theme.buttonSuccessHover;
      }};

      &:active {
        background: ${p => (p.outline ? theme.green200 : theme.green700)};
      }
    }
  }
  &[disabled] {
    background: ${p => (p.outline ? theme.gray0 : theme.green400)};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.success)};
  }
`;

const Standard = styled(AminoButton)`
  color: ${p => getAminoColor(p.color) || theme.textColor};
  background: ${p => getAminoColor(p.background) || theme.surfaceColor};
  border: 1px solid ${p => (p.outline ? theme.gray300 : `${theme.gray600}1F`)};
  box-shadow: ${p => (p.outline ? 'none' : theme.shadowButtonStandard)};

  &:not([disabled]) {
    &:hover {
      background: ${p => {
        if (p.hoverBackground) {
          return p.hoverBackground;
        }
        if (p.outline) {
          return theme.gray100;
        }
        return theme.buttonStandardHover;
      }};
    }
    &:active {
      background: ${p => (p.outline ? theme.gray200 : theme.gray100)};
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.surfaceColor};
  }
`;

const Danger = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.danger};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.danger : theme.gray0};

  ${p =>
    p.outline
      ? `border: 1px solid ${theme.red300}; border-radius: ${theme.radius6};`
      : ''}

  &:not([disabled]) {
    &:hover {
      background: ${p => {
        if (p.hoverBackground) {
          return p.hoverBackground;
        }
        if (p.outline) {
          return theme.red100;
        }
        return theme.buttonDangerHover;
      }};
    }
    &:active {
      background: ${p => (p.outline ? theme.red200 : theme.red700)};
    }
  }
  &[disabled] {
    background: ${p => (p.outline ? theme.gray0 : theme.red400)};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.red600)};
  }
`;

const Warning = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.warning};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.warning : theme.gray0};

  ${p =>
    p.outline
      ? `border: 1px solid ${theme.orange300}; border-radius: ${theme.radius6};`
      : ''}

  &:not([disabled]) {
    &:hover {
      background: ${p => {
        if (p.hoverBackground) {
          return p.hoverBackground;
        }
        if (p.outline) {
          return theme.orange100;
        }
        return theme.buttonWarningHover;
      }};
    }
    &:active {
      background: ${p => (p.outline ? theme.orange200 : theme.orange700)};
    }
  }

  &[disabled] {
    background: ${p => (p.outline ? theme.gray0 : theme.orange400)};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.orange600)};
  }
`;

const Subtle = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || 'none'};
  color: ${p => getAminoColor(p.color) || theme.textColorSecondary};

  &:not([disabled]) {
    &:hover {
      background: ${p => getAminoColor(p.hoverBackground) || theme.gray100};
    }
    &:active {
      background: ${theme.gray200};
    }
  }

  &.loading {
    color: transparent;
  }

  &[disabled] {
    .content {
      opacity: 0.6;
    }
  }
`;

const PlainButton = AminoButton;

const LinkButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: ${p => getAminoColor(p.color) || theme.primary};

  &:not([disabled]) {
    &:hover {
      background: ${p => getAminoColor(p.hoverBackground) || theme.blue100};
    }
    &:active {
      background: ${theme.blue200};
    }
  }

  &.loading {
    color: transparent;
  }

  &[disabled] {
    .content {
      opacity: 0.6;
    }
  }
`;

type ButtonBase = {
  background?: Color | 'inherit';
  /** @param borderColor only available for intent 'outline' */
  borderColor?: Color | 'inherit';
  children?: ReactNode;
  className?: string;
  color?: Color | 'inherit';
  disabled?: boolean;
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
  size?: Size;
  /** Color for the spinner when in a loading state */
  spinnerColor?: SpinnerProps['color'];
  tabIndex?: number;
  themeOverride?: Theme;
  type?: 'button' | 'reset' | 'submit';
  /** @default 'secondary' */
  variant?: Variant;
};

export type GroupTag = 'div' | 'a' | 'button';

/* These types are kind of hacked because styled components makes it difficult to do polymorphic components. */

type MyHtmlElement<T extends GroupTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'div'
  ? HTMLDivElement
  : HTMLButtonElement;

export type ButtonProps<T extends GroupTag = 'button'> = ButtonBase &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBase | 'onClick'> & {
    onClick?: MouseEventHandler<MyHtmlElement<T>>;
    tag?: T;
  };

export function Button<T extends GroupTag = 'button'>({
  children,
  className,
  disabled = false,
  icon,
  iconRight,
  loading = false,
  loadingText,
  noRipple = false,
  size = 'sm',
  spinnerColor,
  tag: _tag,
  themeOverride,
  type = 'button',
  variant = 'standard',
  ...props
}: ButtonProps<T>) {
  const tag = _tag || 'button';
  const renderContent = (_spinnerColor?: SpinnerProps['color']) => (
    <>
      <span className="content">{!iconRight && icon}</span>
      <span className="content">{children}</span>
      <span className="content">{iconRight && icon}</span>
      {variant !== 'plain' && loading && (
        <StyledSpinnerWrapper>
          <Spinner color={_spinnerColor} size={16} />
          {loadingText}
        </StyledSpinnerWrapper>
      )}
    </>
  );

  const buttonClassName = [
    className || '',
    icon && !children ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
    loading ? 'loading' : '',
    themeOverride,
  ]
    .filter(Boolean)
    .join(' ');

  const rippleRef = useRef<IRippleActions>(null);

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

  switch (variant) {
    case 'primary':
      return (
        <Primary as={tag} {...buttonProps}>
          {renderContent(
            spinnerColor || buttonProps.outline ? 'info' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Primary>
      );
    case 'success':
      return (
        <Success as={tag} {...buttonProps}>
          {renderContent(
            spinnerColor || buttonProps.outline ? 'success' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Success>
      );
    case 'warning':
      return (
        <Warning as={tag} {...buttonProps}>
          {renderContent(
            spinnerColor || buttonProps.outline ? 'warning' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Warning>
      );
    case 'danger':
      return (
        <Danger as={tag} {...buttonProps}>
          {renderContent(
            spinnerColor || buttonProps.outline ? 'danger' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Danger>
      );
    case 'subtle':
      return (
        <Subtle as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'black')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Subtle>
      );
    case 'link':
      return (
        <LinkButton as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'info')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </LinkButton>
      );
    case 'plain':
      return (
        <PlainButton as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
        </PlainButton>
      );
    case 'standard':
    default:
      return (
        <Standard as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'black')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Standard>
      );
  }
}
