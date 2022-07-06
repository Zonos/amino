import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { Spinner, SpinnerProps } from 'src/components/spinner/Spinner';
import { Intent } from 'src/types/Intent';
import { Size } from 'src/types/Size';
import { Theme } from 'src/types/Theme';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--amino-radius-sm);
`;

const AminoButton = styled.button<ButtonProps<GroupTag>>`
  position: relative;
  outline: none;
  height: ${p => `var(--amino-size-${p.size})`};
  line-height: ${p => `var(--amino-size-${p.size})`};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(--amino-space-half);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  font-weight: 500;
  user-select: none;
  font-family: var(--amino-font-sans);
  letter-spacing: normal;

  svg path {
    fill: currentColor;
  }

  &.only-icon {
    width: ${p => `var(--amino-size-${p.size})`};
    padding: 0;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:not(.only-icon).has-icon {
    &.icon-right {
      svg {
        margin-left: var(--amino-space-quarter);
        margin-right: 0;
      }
    }
    svg {
      margin-right: var(--amino-space-quarter);
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
  background: var(--amino-primary);
  color: var(--amino-text-light);

  &:hover {
    background: var(--amino-blue-l20);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-d20);
    color: white;
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-primary);
  }
`;

const Secondary = styled(AminoButton)`
  color: var(--amino-text-color);
  background: var(--amino-gray-l80);

  &:hover {
    background: var(--amino-gray-l60);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-l80);
    color: var(--amino-blue-base);
    svg path {
      fill: currentColor;
    }
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-gray-l80);
  }

  /** Dark mode */
  &.dark {
    color: white;
    background: var(--amino-gray-d80);

    &:hover {
      background: var(--amino-gray-d60);
    }
    &:active,
    &:focus {
      background: var(--amino-blue-d80);
      color: var(--amino-blue-l40);
      svg path {
        fill: currentColor;
      }
    }
    ${StyledSpinnerWrapper} {
      background: var(--amino-gray-d80);
    }
  }
`;

const Danger = styled(AminoButton)`
  background: var(--amino-red-base);
  color: white;

  &:hover {
    background: var(--amino-red-l20);
  }

  &:active,
  &:focus {
    background: var(--amino-red-d20);
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-red-base);
  }
`;

const Warning = styled(AminoButton)`
  background: var(--amino-orange-base);
  color: white;

  &:hover {
    background: var(--amino-orange-l20);
  }

  &:active,
  &:focus {
    background: var(--amino-orange-d20);
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-orange-base);
  }
`;

const Outline = styled(AminoButton)`
  background: white;
  color: var(--amino-text-color);
  border: 1px solid var(--amino-gray-l60);

  &:hover {
    background: var(--amino-gray-l80);
    border: 1px solid var(--amino-gray-l60);
  }

  &:active,
  &:focus {
    background: var(--amino-blue-l80);
    color: var(--amino-blue-base);
    border: 1px solid var(--amino-blue-l40);
  }
  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

const Subtle = styled(AminoButton)`
  background: none;
  color: var(--amino-gray-d40);

  &:hover {
    background: var(--amino-gray-l80);
  }

  &:active,
  &:focus {
    background: var(--amino-blue-l80);
    color: var(--amino-blue-base);
  }
  &.loading {
    color: transparent;
  }
`;

const TextButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  height: 16px;
  line-height: 14px;
  padding: 0;

  &.loading {
    color: transparent;
  }
`;

const LinkButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: var(--amino-blue-base);
  background: white;

  &:hover {
    background: var(--amino-gray-l80);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-l80);
    color: var(--amino-blue-d40);
    svg path {
      fill: currentColor;
    }
  }
  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

type IntentProps = 'outline' | 'subtle' | 'text' | 'link' | Intent;

type ButtonBase = {
  children?: ReactNode;
  className?: string;
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
};

type GroupTag = 'div' | 'a' | 'button';

type HTMLElement<T extends GroupTag> = T extends 'a'
  ? HTMLAnchorElement
  : T extends 'div'
  ? HTMLDivElement
  : HTMLButtonElement;
type HTMLAttribute<T> = T extends HTMLAnchorElement
  ? AnchorHTMLAttributes<T>
  : T extends HTMLDivElement
  ? HTMLAttributes<T>
  : ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps<T extends GroupTag = 'button'> = ButtonBase &
  Omit<HTMLAttribute<HTMLElement<T>>, keyof ButtonBase | 'onClick'> & {
    onClick?: MouseEventHandler<HTMLElement<T>>;
    tag?: T;
  };
export function Button<T extends GroupTag = 'button'>({
  children,
  className,
  disabled,
  icon,
  iconRight,
  intent,
  loading,
  loadingText,
  size = 'sm',
  tag,
  theme,
  type = 'button',
  ...props
}: ButtonProps<T>) {
  const renderContent = (color?: SpinnerProps['color']) => (
    <>
      {!iconRight && icon}
      {children}
      {iconRight && icon}
      {loading && (
        <StyledSpinnerWrapper>
          <Spinner size={16} color={color} />
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
    theme,
  ]
    .filter(Boolean)
    .join(' ');

  const baseProps = {
    className: buttonClassName,
    disabled: disabled || loading,
    size,
  };

  if (tag === 'a') {
    const buttonProps = {
      ...baseProps,
      ...(props as ButtonProps<'a'>),
    };
    switch (intent) {
      case 'primary':
        return (
          <Primary as="a" {...buttonProps}>
            {renderContent('white')}
          </Primary>
        );
      case 'subtle':
        return (
          <Subtle as="a" {...buttonProps}>
            {renderContent()}
          </Subtle>
        );
      case 'outline':
        return (
          <Outline as="a" {...buttonProps}>
            {renderContent()}
          </Outline>
        );
      case 'warning':
        return (
          <Warning as="a" {...buttonProps}>
            {renderContent()}
          </Warning>
        );
      case 'danger':
        return (
          <Danger as="a" {...buttonProps}>
            {renderContent()}
          </Danger>
        );
      case 'text':
        return (
          <TextButton as="a" {...buttonProps}>
            {renderContent()}
          </TextButton>
        );
      case 'link':
        return (
          <LinkButton as="a" {...buttonProps}>
            {renderContent()}
          </LinkButton>
        );
      case 'secondary':
      default:
        return (
          <Secondary as="a" {...buttonProps}>
            {renderContent()}
          </Secondary>
        );
    }
  }

  if (tag === 'div') {
    const buttonProps = {
      ...baseProps,
      ...(props as ButtonProps<'div'>),
    };
    switch (intent) {
      case 'primary':
        return (
          <Primary as="div" {...buttonProps}>
            {renderContent('white')}
          </Primary>
        );
      case 'subtle':
        return (
          <Subtle as="div" {...buttonProps}>
            {renderContent()}
          </Subtle>
        );
      case 'outline':
        return (
          <Outline as="div" {...buttonProps}>
            {renderContent()}
          </Outline>
        );
      case 'warning':
        return (
          <Warning as="div" {...buttonProps}>
            {renderContent()}
          </Warning>
        );
      case 'danger':
        return (
          <Danger as="div" {...buttonProps}>
            {renderContent()}
          </Danger>
        );
      case 'text':
        return (
          <TextButton as="div" {...buttonProps}>
            {renderContent()}
          </TextButton>
        );
      case 'link':
        return (
          <LinkButton as="div" {...buttonProps}>
            {renderContent()}
          </LinkButton>
        );
      case 'secondary':
      default:
        return (
          <Secondary as="div" {...buttonProps}>
            {renderContent()}
          </Secondary>
        );
    }
  }

  const buttonProps = {
    ...baseProps,
    ...(props as ButtonProps<'button'>),
    type,
  };
  switch (intent) {
    case 'primary':
      return <Primary {...buttonProps}>{renderContent('white')}</Primary>;
    case 'subtle':
      return <Subtle {...buttonProps}>{renderContent()}</Subtle>;
    case 'outline':
      return <Outline {...buttonProps}>{renderContent()}</Outline>;
    case 'warning':
      return <Warning {...buttonProps}>{renderContent()}</Warning>;
    case 'danger':
      return <Danger {...buttonProps}>{renderContent()}</Danger>;
    case 'text':
      return <TextButton {...buttonProps}>{renderContent()}</TextButton>;
    case 'link':
      return <LinkButton {...buttonProps}>{renderContent()}</LinkButton>;
    case 'secondary':
    default:
      return <Secondary {...buttonProps}>{renderContent()}</Secondary>;
  }
}
