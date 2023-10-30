import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactNode,
  useRef,
} from 'react';

import styled from 'styled-components';

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

const getRadius = (size?: Size) => {
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

const getFontWeight = (size?: Size) => {
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

const getSpinnerSize = (size?: Size) => {
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

const StyledSpinnerWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius6};
  gap: ${theme.space8};
`;

const AminoButton = styled.button<ButtonProps<GroupTag>>`
  position: relative;
  outline: none;
  height: ${p => `var(--amino-size-${p.size})`};
  line-height: ${p => `var(--amino-size-${p.size})`};
  font-size: ${theme.fontSizeBase};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 ${theme.space16};
  border-radius: ${p => getRadius(p.size)};
  transition:
    ${theme.transition},
    visibility 0;
  font-weight: ${p => getFontWeight(p.size)};
  user-select: none;
  font-family: ${theme.fontSans};
  letter-spacing: normal;
  cursor: pointer;
  white-space: nowrap;
  padding: ${p => getPadding(p.size)};
  width: ${p => p.fitContentWidth && 'fit-content'};
  text-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.02),
    0px 1px 2px rgba(0, 0, 0, 0.04);

  svg path:not([data-is-secondary-color]) {
    fill: currentColor;
  }

  .text {
    padding: 0 ${theme.space4};
  }

  &.only-icon {
    width: ${p => `var(--amino-size-${p.size})`};
    padding: 0;
  }

  &.only-icon .text {
    padding: 0;
  }

  &:active,
  &:focus {
    svg path:not([data-is-secondary-color]) {
      fill: currentColor;
    }
  }

  &:focus {
    outline: none;
  }

  &:active:not([disabled]) {
    transform: scale(0.99);
  }

  &.loading .content {
    visibility: hidden;
  }

  &:not(.only-icon).has-icon {
    &.icon-right {
      svg:not(.amino-spinner) {
        margin-left: 2px;
        margin-right: 0;
        opacity: 80%;
      }
    }
    svg:not(.amino-spinner) {
      margin-right: 2px;
      margin-left: 0;
      opacity: 80%;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: ${p => (p.outline ? 0.6 : 1)};
  }
`;

const Primary = styled(AminoButton)`
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.primary : theme.gray0};
  box-shadow: ${p =>
    p.outline
      ? `0px 0px 0px 1px ${theme.primary} inset`
      : theme.shadowButtonPrimary};
  background: ${p =>
    getAminoColor(p.background) || p.outline ? 'transparent' : theme.primary};

  &:not([disabled]) {
    &:hover {
      background-color: ${p =>
        getAminoColor(p.hoverBackground) || p.outline ? theme.blue100 : ''};
      background-image: ${p => (p.outline ? '' : theme.buttonPrimaryHover)};
    }
    &:active {
      background: ${p => (p.outline ? theme.blue200 : theme.blue700)};
    }
    &:focus {
      box-shadow: ${theme.focusButton};
    }
  }

  &[disabled] {
    background: ${p => (p.outline ? 'transparent' : theme.gray400)};
    box-shadow: ${p =>
      p.outline
        ? `0px 0px 0px 1px ${theme.primary} inset`
        : theme.shadowButtonDisabled};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? 'transparent' : theme.primary)};
  }
`;

const Success = styled(AminoButton)`
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.success : theme.gray0};
  box-shadow: ${p =>
    p.outline ? `0px 0px 0px 1px ${theme.success}` : theme.shadowButtonSuccess};
  background: ${p =>
    getAminoColor(p.background) || p.outline ? 'transparent' : theme.success};

  &:not([disabled]) {
    &:hover {
      background-color: ${p =>
        getAminoColor(p.hoverBackground) || p.outline ? theme.green100 : ''};
      background-image: ${p => (p.outline ? '' : theme.buttonSuccessHover)};
      &:active {
        background: ${p => (p.outline ? theme.green200 : theme.green700)};
      }
    }
    &:focus {
      box-shadow: ${p =>
        p.outline
          ? `0px 0px 0px 1px ${theme.success} inset, ${theme.buttonFocusRing}`
          : theme.focusButton};
    }
  }
  &[disabled] {
    background: ${p => (p.outline ? 'transparent' : theme.gray400)};
    box-shadow: ${p =>
      p.outline
        ? `0px 0px 0px 1px ${theme.success} inset`
        : theme.shadowButtonDisabled};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? 'transparent' : theme.success)};
  }
`;

const Standard = styled(AminoButton)`
  color: ${p => getAminoColor(p.color) || theme.textColor};
  background: ${p =>
    p.outline
      ? 'transparent'
      : getAminoColor(p.background) || theme.surfaceColor};
  box-shadow: ${p =>
    p.outline
      ? `0px 0px 0px 1px ${theme.gray300} inset`
      : theme.shadowButtonStandard};

  &:not([disabled]) {
    &:hover {
      background-color: ${p =>
        getAminoColor(p.hoverBackground) || p.outline ? theme.gray100 : ''};
      background-image: ${p => (p.outline ? '' : theme.buttonStandardHover)};
    }
    &:active {
      background: ${p => (p.outline ? theme.gray200 : theme.gray100)};
    }
    &:focus {
      box-shadow: ${theme.focusButtonStandard};
    }
  }

  &[disabled] {
    .content {
      opacity: 0.6;
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? 'transparent' : theme.surfaceColor)};
  }
`;

const Danger = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? 'transparent' : theme.danger};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.danger : theme.gray0};
  box-shadow: ${p =>
    p.outline ? `0px 0px 0px 1px ${theme.danger}` : theme.shadowButtonDanger};

  &:not([disabled]) {
    &:hover {
      background-color: ${p =>
        getAminoColor(p.hoverBackground) || p.outline ? theme.red100 : ''};
      background-image: ${p => (p.outline ? '' : theme.buttonDangerHover)};
    }
    &:active {
      background: ${p => (p.outline ? theme.red200 : theme.red700)};
    }
    &:focus {
      box-shadow: ${p =>
        p.outline
          ? `0px 0px 0px 1px ${theme.danger} inset, ${theme.buttonFocusRing}`
          : theme.focusButton};
    }
  }
  &[disabled] {
    background: ${p => (p.outline ? 'transparent' : theme.gray400)};
    box-shadow: ${p =>
      p.outline
        ? `0px 0px 0px 1px ${theme.danger} inset`
        : theme.shadowButtonDisabled};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? 'transparent' : theme.danger)};
  }
`;

const Warning = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? 'transparent' : theme.warning};
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.warning : theme.gray0};
  box-shadow: ${p =>
    p.outline ? `0px 0px 0px 1px ${theme.warning}` : theme.shadowButtonWarning};

  &:not([disabled]) {
    &:hover {
      background-color: ${p =>
        getAminoColor(p.hoverBackground) || p.outline ? theme.orange100 : ''};
      background-image: ${p => (p.outline ? '' : theme.buttonWarningHover)};
    }
    &:active {
      background: ${p => (p.outline ? theme.orange200 : theme.orange700)};
    }
    &:focus {
      box-shadow: ${p =>
        p.outline
          ? `0px 0px 0px 1px ${theme.warning} inset, ${theme.buttonFocusRing}`
          : theme.focusButton};
    }
  }

  &[disabled] {
    background: ${p => (p.outline ? 'transparent' : theme.gray400)};
    box-shadow: ${p =>
      p.outline
        ? `0px 0px 0px 1px ${theme.warning} inset`
        : theme.shadowButtonDisabled};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? 'transparent' : theme.warning)};
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

  &:focus {
    box-shadow: ${theme.buttonFocusRing};
  }

  &[disabled] {
    .content {
      opacity: 0.6;
    }
  }
`;

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

  &:focus {
    box-shadow: ${theme.buttonFocusRing};
  }

  &[disabled] {
    .content {
      opacity: 0.6;
    }
  }
`;

const TextButton = styled(AminoButton)<
  ButtonProps<GroupTag> & { href?: string }
>`
  color: ${p => (p.href ? theme.primary : theme.textColorSecondary)};
  &:not([disabled]) {
    &:hover {
      color: ${p => (p.href ? theme.blue500 : theme.gray700)};
    }
  }
  &[disabled] {
    color: ${p => (p.href ? theme.blue300 : theme.gray300)};
  }
  &.loading {
    color: transparent;
  }
`;

const PlainButton = AminoButton;

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
      <div className="content text">{children}</div>
      <span className="content">{iconRight && icon}</span>
      {variant !== 'plain' && variant !== 'text' && loading && (
        <StyledSpinnerWrapper>
          <Spinner color={_spinnerColor} size={getSpinnerSize(size)} />
          {loadingText}
        </StyledSpinnerWrapper>
      )}
    </>
  );

  const buttonClassName = [
    'amino-button',
    className || '',
    icon && !children ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
    loading ? 'loading' : '',
    themeOverride,
  ]
    .filter(Boolean)
    .join(' ');

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

  switch (variant) {
    case 'primary':
      return (
        <Primary
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(
            spinnerColor || buttonProps.outline ? 'info' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Primary>
      );
    case 'success':
      return (
        <Success
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(
            spinnerColor || buttonProps.outline ? 'success' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Success>
      );
    case 'warning':
      return (
        <Warning
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(
            spinnerColor || buttonProps.outline ? 'warning' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Warning>
      );
    case 'danger':
      return (
        <Danger
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(
            spinnerColor || buttonProps.outline ? 'danger' : 'white',
          )}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Danger>
      );
    case 'subtle':
      return (
        <Subtle
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(spinnerColor || 'black')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Subtle>
      );
    case 'link':
      return (
        <LinkButton
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(spinnerColor || 'info')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </LinkButton>
      );
    case 'plain':
      return (
        <PlainButton
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(spinnerColor)}
        </PlainButton>
      );
    case 'text':
      return (
        <TextButton
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(spinnerColor)}
        </TextButton>
      );
    case 'standard':
    default:
      return (
        <Standard
          as={tag}
          tabIndex={tag === 'div' ? 0 : undefined}
          {...buttonProps}
        >
          {renderContent(spinnerColor || 'black')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Standard>
      );
  }
}
