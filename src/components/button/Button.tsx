import {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
  useRef,
} from 'react';

import { Spinner, SpinnerProps } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import { Intent } from 'src/types/Intent';
import { Size } from 'src/types/Size';
import { Theme } from 'src/types/Theme';
import styled from 'styled-components';

import { IRippleActions, RippleGroup } from './RippleGroup';
import { useRipple } from './useRipple';

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
      return '6px 10px';
    case 'lg':
      return '14px 18px';
    case 'md':
    default:
      return '10px 14px';
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
    box-shadow: none;
    &:not(.loading) {
      opacity: 0.5;
    }
  }
`;

const Primary = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || theme.primary};
  color: ${p => getAminoColor(p.color) || theme.textLight};

  &:not([disabled]) {
    &:hover {
      background: ${theme.blue400};
    }
    &:active,
    &:focus {
      background: ${theme.blue700};
      color: white;
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.primary};
  }
`;

const Secondary = styled(AminoButton)`
  color: ${p => getAminoColor(p.color) || theme.textColor};
  background: ${p => getAminoColor(p.background) || theme.gray100};

  &:not([disabled]) {
    &:hover {
      background: ${theme.gray200};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue600};
      svg path {
        fill: currentColor;
      }
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.gray100};
  }

  /** Dark mode */
  &.dark {
    color: white;
    background: ${theme.gray1000};

    &:not([disabled]) {
      &:hover {
        background: ${theme.gray900};
      }
      &:active,
      &:focus {
        background: ${theme.blue1000};
        color: ${theme.blue300};
        svg path {
          fill: currentColor;
        }
      }
    }

    ${StyledSpinnerWrapper} {
      background: ${theme.gray1000};
    }
  }
`;

const Danger = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || theme.red600};
  color: ${p => getAminoColor(p.color) || 'white'};

  &:not([disabled]) {
    &:hover {
      background: ${theme.red400};
    }
    &:active {
      background: ${theme.red700};
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.red600};
  }
`;

const Warning = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || theme.orange600};
  color: ${p => getAminoColor(p.color) || 'white'};

  &:not([disabled]) {
    &:hover {
      background: ${theme.orange400};
    }
    &:active {
      background: ${theme.orange700};
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.orange600};
  }
`;

const Outline = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || 'white'};
  color: ${p => getAminoColor(p.color) || theme.textColor};
  border: 1px solid ${p => getAminoColor(p.borderColor) || theme.gray200};

  &:not([disabled]) {
    &:hover {
      background: ${theme.gray100};
      border: 1px solid ${theme.gray200};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue600};
      border: 1px solid ${theme.blue300};
    }
  }

  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

const Subtle = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || 'none'};
  color: ${p => getAminoColor(p.color) || theme.gray800};

  &:not([disabled]) {
    &:hover {
      background: ${theme.gray100};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue600};
    }
  }

  &.loading {
    color: transparent;
  }
`;

const TextButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: ${p => getAminoColor(p.color) || theme.gray800};
  height: 20px;
  line-height: 20px;
  padding: 0;

  &[disabled] {
    color: ${theme.gray400};
    &:not(.loading) {
      opacity: inherit;
    }
  }

  &:not([disabled]) {
    &:hover {
      color: ${theme.gray700};
    }
    &:active {
      color: ${theme.black};
    }
  }

  &.loading {
    color: transparent;
  }
`;

const LinkButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: ${p => getAminoColor(p.color) || theme.blue600};
  background: ${p => getAminoColor(p.background) || 'white'};

  &:not([disabled]) {
    &:hover {
      background: ${theme.gray100};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue800};
    }
  }

  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

type IntentProps = 'outline' | 'subtle' | 'text' | 'link' | Intent;

type ButtonBase = {
  background?: Color | 'inherit';
  /** @param borderColor only available for intent 'outline' */
  borderColor?: Color | 'inherit';
  children?: ReactNode;
  className?: string;
  color?: Color | 'inherit';
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: boolean;
  intent?: IntentProps;
  loading?: boolean;
  loadingText?: string;
  /** Disable ripple effect */
  noRipple?: boolean;
  size?: Size;
  /** Color for the spinner when in a loading state */
  spinnerColor?: SpinnerProps['color'];
  tabIndex?: number;
  theme?: Theme | 'space';
  type?: 'button' | 'reset' | 'submit';
};

export type GroupTag = 'div' | 'a' | 'button';

/* These types are kind of hacked because styled components makes it difficult to do polymorphic components. */

type MyHTMLElement<T extends GroupTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'div'
  ? HTMLDivElement
  : HTMLButtonElement;

export type ButtonProps<T extends GroupTag = 'button'> = ButtonBase &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBase | 'onClick'> & {
    onClick?: MouseEventHandler<MyHTMLElement<T>>;
    tag?: T;
  };

export function Button<T extends GroupTag = 'button'>({
  children,
  className,
  disabled = false,
  icon,
  iconRight,
  intent,
  loading,
  loadingText,
  noRipple = false,
  size = 'sm',
  spinnerColor,
  tag: _tag,
  theme: _theme,
  type = 'button',
  ...props
}: ButtonProps<T>) {
  const tag = _tag || 'button';
  const renderContent = (_spinnerColor?: SpinnerProps['color']) => (
    <>
      {!iconRight && icon}
      {children}
      {iconRight && icon}
      {loading && (
        <StyledSpinnerWrapper>
          <Spinner size={16} color={_spinnerColor} />
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
    _theme,
  ]
    .filter(Boolean)
    .join(' ');

  const rippleRef = useRef<IRippleActions>(null);

  const { rippleEnabled, getRippleHandlers } = useRipple({
    rippleRef,
    rippleEnabled: !noRipple,
    disabled,
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

  switch (intent) {
    case 'primary':
      return (
        <Primary as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'white')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Primary>
      );
    case 'subtle':
      return (
        <Subtle as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Subtle>
      );
    case 'outline':
      return (
        <Outline as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Outline>
      );
    case 'warning':
      return (
        <Warning as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'white')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Warning>
      );
    case 'danger':
      return (
        <Danger as={tag} {...buttonProps}>
          {renderContent(spinnerColor || 'white')}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Danger>
      );
    case 'text':
      return (
        <TextButton as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </TextButton>
      );
    case 'link':
      return (
        <LinkButton as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </LinkButton>
      );
    case 'secondary':
    default:
      return (
        <Secondary as={tag} {...buttonProps}>
          {renderContent(spinnerColor)}
          {rippleEnabled && <RippleGroup ref={rippleRef} />}
        </Secondary>
      );
  }
}
