import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  MouseEvent,
  ReactNode,
  useRef,
} from 'react';

import { Spinner, SpinnerProps } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import { Intent } from 'src/types/Intent';
import { Size } from 'src/types/Size';
import { Theme } from 'src/types/Theme';
import styled, { keyframes } from 'styled-components';

const getAminoColor = (color?: Color | 'inherit') => {
  if (color === 'inherit') {
    return 'inherit';
  }
  if (color) {
    return theme[color];
  }
  return undefined;
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

const AminoButton = styled.button<ConcreteButtonProps>`
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
  overflow: hidden;

  svg path:not([data-is-secondary-color]) {
    fill: currentColor;
  }

  &.only-icon {
    width: ${p => `var(--amino-size-${p.size})`};
    padding: 0;
  }

  &:active {
    svg path:not([data-is-secondary-color]) {
      fill: currentColor;
    }
  }

  &:focus {
    outline: none;
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
      background: ${theme.blue500};
      box-shadow: ${theme.v3ShadowMedium};
    }
    &:active {
      background: ${theme.blue700};
      color: white;
      box-shadow: ${theme.v3ShadowLarge};
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
      background: ${theme.gray300};
      box-shadow: ${theme.v3ShadowBase};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue600};
      box-shadow: ${theme.v3ShadowMedium};
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
        box-shadow: ${theme.v3ShadowMedium};
      }
      &:active {
        background: ${theme.blue1000};
        color: ${theme.blue400};
        box-shadow: ${theme.v3ShadowLarge};
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
      background: ${theme.red500};
      box-shadow: ${theme.v3ShadowMedium};
    }
    &:active {
      background: ${theme.red700};
      box-shadow: ${theme.v3ShadowLarge};
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
      background: ${theme.orange500};
      box-shadow: ${theme.v3ShadowMedium};
    }
    &:active {
      background: ${theme.orange700};
      box-shadow: ${theme.v3ShadowLarge};
    }
  }

  ${StyledSpinnerWrapper} {
    background: ${theme.orange600};
  }
`;

const Outline = styled(AminoButton)`
  background: ${p => getAminoColor(p.background) || 'white'};
  color: ${p => getAminoColor(p.color) || theme.textColor};
  border: 1px solid ${p => getAminoColor(p.borderColor) || theme.gray300};

  &:not([disabled]) {
    &:hover {
      background: ${theme.gray100};
      border: 1px solid ${theme.gray300};
    }
    &:active {
      background: ${theme.blue100};
      color: ${theme.blue600};
      border: 1px solid ${theme.blue400};
    }
  }

  ${StyledSpinnerWrapper} {
    background: white;
  }

  /* span.ripple {
      background-color: rgba(107, 172, 246, 0.25);
    } */
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

  /* span.ripple {
      background-color: rgba(107, 172, 246, 0.25);
    } */
`;

const TextButton = styled(AminoButton)<ConcreteButtonProps>`
  color: ${p => getAminoColor(p.color) || theme.gray800};
  height: 20px;
  line-height: 20px;
  padding: 0;

  &[disabled] {
    color: ${theme.gray500};
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

const LinkButton = styled(AminoButton)<ConcreteButtonProps>`
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

  /* span.ripple {
      background-color: rgba(107, 172, 246, 0.25);
    } */
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
  theme?: Theme | 'space';
  size?: Size;
  tabIndex?: number;
  type?: 'button' | 'reset' | 'submit';
  noRipple?: boolean;
};

type SupportedTag = 'div' | 'a' | 'button';
type HTMLElement<T extends SupportedTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'div'
  ? HTMLDivElement
  : HTMLButtonElement;

// type HTMLAttribute<T> = T extends HTMLAnchorElement
//   ? AnchorHTMLAttributes<T>
//   : T extends HTMLDivElement
//   ? HTMLAttributes<T>
//   : ButtonHTMLAttributes<HTMLButtonElement>;
// export type ButtonProps<T extends GroupTag = 'button'> = ButtonBase &
//   Omit<HTMLAttribute<HTMLElement<T>>, keyof ButtonBase | 'onClick'> & {
//     onClick?: MouseEventHandler<HTMLElement<T>>;
//     tag?: GroupTag;
//   };

type ButtonProps2<T extends SupportedTag = 'button'> = {
  tag?: T;
} & ButtonBase &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBase>;

type ConcreteButtonProps<T extends SupportedTag = 'button'> = {
  tag: T;
} & ButtonBase &
  Omit<ComponentPropsWithRef<T>, keyof ButtonBase>;

export function Button<T extends SupportedTag>({
  children,
  className,
  disabled,
  icon,
  iconRight,
  intent,
  loading,
  loadingText,
  size = 'sm',
  tag: _tag,
  theme: _theme,
  type = 'button',
  noRipple = false,
  ...props
}: ButtonProps2<T>) {
  const tag: SupportedTag = _tag || 'button';

  const onlyIcon = icon && !children;
  const rippleEnabled = !noRipple && !onlyIcon && intent !== 'text';

  const renderContent = (spinnerColor?: SpinnerProps['color']) => (
    <>
      {!iconRight && icon}
      {children}
      {iconRight && icon}
      {loading && (
        <StyledSpinnerWrapper>
          <Spinner size={16} color={spinnerColor} />
          {loadingText}
        </StyledSpinnerWrapper>
      )}
    </>
  );

  const buttonClassName = [
    className || '',
    onlyIcon ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
    loading ? 'loading' : '',
    _theme,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonRef = useRef<
    HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
  >(null);

  const handleRipple = (event: MouseEvent<HTMLElement<typeof tag>>) => {
    const button = buttonRef.current;

    if (button) {
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    }
  };

  const handleOnMouseDown = (event: MouseEvent<HTMLElement<typeof tag>>) => {
    props.onMouseDown?.(event);
    rippleEnabled && handleRipple(event);
  };

  const handleOnMouseLeave = (event: MouseEvent<HTMLElement<typeof tag>>) => {
    props.onMouseLeave?.(event);
    if (rippleEnabled) {
      buttonRef.current?.getElementsByClassName('ripple')?.[0]?.remove();
    }
  };

  const baseProps = {
    className: buttonClassName,
    disabled: disabled || loading,
    size,
  };

  const buttonProps: ConcreteButtonProps<typeof tag> = {
    type,
    tag,
    ...baseProps,
    ...props,
    onMouseDown: handleOnMouseDown,
    onMouseLeave: handleOnMouseLeave,
    ref: buttonRef,
  } as ConcreteButtonProps<typeof tag>;

  switch (intent) {
    case 'primary':
      return (
        <Primary as={tag} {...buttonProps}>
          {renderContent('white')}
        </Primary>
      );
    case 'subtle':
      return <Subtle {...buttonProps}>{renderContent()}</Subtle>;
    case 'outline':
      return <Outline {...buttonProps}>{renderContent()}</Outline>;
    case 'warning':
      return <Warning {...buttonProps}>{renderContent('white')}</Warning>;
    case 'danger':
      return <Danger {...buttonProps}>{renderContent('white')}</Danger>;
    case 'text':
      return <TextButton {...buttonProps}>{renderContent()}</TextButton>;
    case 'link':
      return <LinkButton {...buttonProps}>{renderContent()}</LinkButton>;
    case 'secondary':
    default:
      return <Secondary {...buttonProps}>{renderContent()}</Secondary>;
  }
}
