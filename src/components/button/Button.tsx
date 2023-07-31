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
    svg path:not([data-is-secondary-color]) {
      fill: currentColor;
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
  }

  &:not(.only-icon).has-icon {
    &.icon-right {
      svg:not(.amino-spinner) {
        margin-left: ${theme.space8};
        margin-right: 0;
      }
    }
    svg:not(.amino-spinner) {
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
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.primary : theme.gray0};
  box-shadow: ${p =>
    p.outline
      ? `0px 0px 0px 1px ${theme.primary} inset`
      : theme.shadowButtonPrimary};
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.primary};

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
    background: ${p => (p.outline ? theme.gray0 : theme.blue400)};
    box-shadow: ${p => (p.outline ? `0px 0px 0px 1px ${theme.blue400}` : '')};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.primary)};
  }
`;

const Success = styled(AminoButton)`
  color: ${p =>
    getAminoColor(p.color) || p.outline ? theme.success : theme.gray0};
  box-shadow: ${p =>
    p.outline ? `0px 0px 0px 1px ${theme.success}` : theme.shadowButtonSuccess};
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.success};

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
    background: ${p => (p.outline ? theme.gray0 : theme.green400)};
    box-shadow: ${p => (p.outline ? `0px 0px 0px 1px ${theme.green400}` : '')};
  }

  ${StyledSpinnerWrapper} {
    background: ${p => (p.outline ? theme.gray0 : theme.success)};
  }
`;

const Standard = styled(AminoButton)`
  color: ${p => getAminoColor(p.color) || theme.textColor};
  background: ${p => getAminoColor(p.background) || theme.surfaceColor};
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
    background: ${theme.surfaceColor};
  }
`;

const Danger = styled(AminoButton)`
  background: ${p =>
    getAminoColor(p.background) || p.outline ? theme.gray0 : theme.danger};
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
    background: ${p => (p.outline ? theme.gray0 : theme.red400)};
    box-shadow: ${p => (p.outline ? `0px 0px 0px 1px ${theme.red400}` : '')};
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
    background: ${p => (p.outline ? theme.gray0 : theme.orange400)};
    box-shadow: ${p => (p.outline ? `0px 0px 0px 1px ${theme.orange400}` : '')};
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
      <div className="content">{children}</div>
      <span className="content">{iconRight && icon}</span>
      {variant !== 'plain' && loading && (
        <StyledSpinnerWrapper>
          <Spinner color={_spinnerColor} size={getSpinnerSize(size)} />
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
