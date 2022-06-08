import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';

import { Spinner, SpinnerProps } from 'src/components/spinner/Spinner';
import { Intent } from 'src/types/Intent';
import { Size } from 'src/types/Size';
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
  border-radius: var(--amino-radius);
`;

const AminoButton = styled.button<ButtonProps>`
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
    background: var(--amino-blue-400);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-600);
    color: white;
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-primary);
  }
`;

const Secondary = styled(AminoButton)`
  color: var(--amino-text-color);
  background: var(--amino-gray-100);

  &:hover {
    background: var(--amino-gray-200);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-100);
    color: var(--amino-blue-500);
    svg path {
      fill: currentColor;
    }
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-gray-100);
  }
`;

const Icon = styled(AminoButton)`
  background: var(--amino-input-background);
  color: var(--amino-text-color);
  padding: 0 var(--amino-space-half);
  border: var(--amino-border);
  box-shadow: var(--amino-shadow-small);

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    color: var(--amino-text-color);
  }

  &:hover {
    background: var(--amino-gray-200);
  }
  &:active,
  &:focus {
    background: var(--amino-blue-100);
    color: var(--amino-blue-500);
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-input-background);
  }
`;

const Danger = styled(AminoButton)`
  background: var(--amino-red-500);
  color: white;

  &:hover {
    background: var(--amino-red-400);
  }

  &:active,
  &:focus {
    background: var(--amino-red-600);
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-red-500);
  }
`;

const Warning = styled(AminoButton)`
  background: var(--amino-orange-500);
  color: white;

  &:hover {
    background: var(--amino-orange-400);
  }

  &:active,
  &:focus {
    background: var(--amino-orange-600);
  }
  ${StyledSpinnerWrapper} {
    background: var(--amino-orange-500);
  }
`;

const Outline = styled(AminoButton)`
  background: white;
  color: var(--amino-text-color);
  border: 1px solid var(--amino-gray-200);

  &:hover {
    background: var(--amino-gray-100);
    border: 1px solid var(--amino-gray-200);
  }

  &:active,
  &:focus {
    background: var(--amino-blue-100);
    color: var(--amino-blue-500);
    border: 1px solid var(--amino-blue-300);
  }
  ${StyledSpinnerWrapper} {
    background: white;
  }
`;

const Subtle = styled(AminoButton)`
  background: none;
  color: var(--amino-gray-700);

  &:hover {
    background: var(--amino-gray-100);
  }

  &:active,
  &:focus {
    background: var(--amino-blue-100);
    color: var(--amino-blue-500);
  }
  &.loading {
    color: transparent;
  }
  & > *:not(${StyledSpinnerWrapper}) {
    opacity: 0;
  }
`;

type IntentProps = 'outline' | 'subtle' | Intent;

type ButtonType = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: boolean;
  intent?: IntentProps;
  loading?: boolean;
  loadingText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
  tabIndex?: number;
  tooltip?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
};

export type ButtonProps = ButtonType &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonType>;

export const Button = ({
  children,
  className,
  disabled,
  icon,
  iconRight,
  intent,
  loading,
  loadingText,
  onClick,
  size = 'sm',
  tabIndex,
  tooltip,
  type = 'button',
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {tooltip && <ReactTooltip />}
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </>
  );

  const renderSpinner = (color?: SpinnerProps['color']) => (
    <StyledSpinnerWrapper>
      <Spinner size={16} color={color} />
      {loadingText}
    </StyledSpinnerWrapper>
  );

  const buttonClassName = [
    className || '',
    icon && !children ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
    loading ? 'loading' : '',
  ].join(' ');

  switch (intent) {
    case 'primary':
      return (
        <Primary
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner('white')}
        </Primary>
      );
    case 'subtle':
      return (
        <Subtle
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Subtle>
      );
    case 'outline':
      return (
        <Outline
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Outline>
      );
    case 'warning':
      return (
        <Warning
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Warning>
      );
    case 'danger':
      return (
        <Danger
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Danger>
      );
    case 'icon':
      return (
        <Icon
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Icon>
      );
    case 'secondary':
    default:
      return (
        <Secondary
          className={buttonClassName}
          data-tip={tooltip}
          onClick={onClick}
          tabIndex={tabIndex}
          size={size}
          disabled={disabled || loading}
          type={type}
          {...props}
        >
          {content}
          {loading && renderSpinner()}
        </Secondary>
      );
  }
};
