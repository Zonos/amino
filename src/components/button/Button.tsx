import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { Spinner, SpinnerProps } from 'src/components/spinner/Spinner';
import { theme } from 'src/styles/constants/theme';
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
  border-radius: ${theme.radiusSm};
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
  padding: 0 ${theme.spaceHalf};
  border-radius: ${theme.radius};
  transition: ${theme.transition};
  font-weight: 500;
  user-select: none;
  font-family: ${theme.fontSans};
  letter-spacing: normal;
  cursor: pointer;

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
        margin-left: ${theme.spaceQuarter};
        margin-right: 0;
      }
    }
    svg {
      margin-right: ${theme.spaceQuarter};
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
  background: ${theme.primary};
  color: ${theme.textLight};

  &:hover {
    background: ${theme.blueL20};
  }
  &:active,
  &:focus {
    background: ${theme.blueD20};
    color: white;
  }
  ${StyledSpinnerWrapper} {
    background: ${theme.primary};
  }
`;

const Secondary = styled(AminoButton)`
  color: ${theme.textColor};
  background: ${theme.grayL80};

  &:hover {
    background: ${theme.grayL60};
  }
  &:active,
  &:focus {
    background: ${theme.blueL80};
    color: ${theme.blueBase};
    svg path {
      fill: currentColor;
    }
  }
  ${StyledSpinnerWrapper} {
    background: ${theme.grayL80};
  }

  /** Dark mode */
  &.dark {
    color: white;
    background: ${theme.grayD80};

    &:hover {
      background: ${theme.grayD60};
    }
    &:active,
    &:focus {
      background: ${theme.blueD80};
      color: ${theme.blueL40};
      svg path {
        fill: currentColor;
      }
    }
    ${StyledSpinnerWrapper} {
      background: ${theme.grayD80};
    }
  }
`;

const Danger = styled(AminoButton)`
  background: ${theme.redBase};
  color: white;

  &:hover {
    background: ${theme.redL20};
  }

  &:active,
  &:focus {
    background: ${theme.redD20};
  }
  ${StyledSpinnerWrapper} {
    background: ${theme.redBase};
  }
`;

const Warning = styled(AminoButton)`
  background: ${theme.orangeBase};
  color: white;

  &:hover {
    background: ${theme.orangeL20};
  }

  &:active,
  &:focus {
    background: ${theme.orangeD20};
  }
  ${StyledSpinnerWrapper} {
    background: ${theme.orangeBase};
  }
`;

const Outline = styled(AminoButton)`
  background: white;
  color: ${theme.textColor};
  border: 1px solid ${theme.grayL60};

  &:hover {
    background: ${theme.grayL80};
    border: 1px solid ${theme.grayL60};
  }

  &:active,
  &:focus {
    background: ${theme.blueL80};
    color: ${theme.blueBase};
    border: 1px solid ${theme.blueL40};
  }
  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

const Subtle = styled(AminoButton)`
  background: none;
  color: ${theme.grayD40};

  &:hover {
    background: ${theme.grayL80};
  }

  &:active,
  &:focus {
    background: ${theme.blueL80};
    color: ${theme.blueBase};
  }
  &.loading {
    color: transparent;
  }
`;

const TextButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: ${theme.grayD40};
  height: 20px;
  line-height: 20px;
  padding: 0;

  &[disabled] {
    color: ${theme.grayL20};
    &:not(.loading) {
      opacity: inherit;
    }
    &:active,
    &:focus {
      color: ${theme.grayL20};
    }
  }

  &:active,
  &:focus {
    color: ${theme.black};
  }

  &.loading {
    color: transparent;
  }
`;

const LinkButton = styled(AminoButton)<ButtonProps<GroupTag>>`
  color: ${theme.blueBase};
  background: white;

  &:hover {
    background: ${theme.grayL80};
  }
  &:active,
  &:focus {
    background: ${theme.blueL80};
    color: ${theme.blueD40};
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
  theme: _theme,
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
    _theme,
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
