import React, { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';

import { Spinner } from 'src/components/spinner/Spinner';
import { Intent } from 'src/types/Intent';
import styled, { css } from 'styled-components';

const AminoButton = styled.button<ButtonProps>`
  position: relative;
  outline: none;
  height: 32px;
  line-height: 32px;
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
    width: 32px;
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
    opacity: 0.5;
  }
  ${props =>
    props.size === 'md' &&
    css`
      height: 40px;
      line-height: 40px;
      &.only-icon {
        width: 40px;
      }
    `}

  ${props =>
    props.size === 'lg' &&
    css`
      height: 48px;
      line-height: 48px;
      &.only-icon {
        width: 48px;
      }
    `}

  ${props =>
    props.size === 'xl' &&
    css`
      height: 56px;
      line-height: 56px;
      &.only-icon {
        width: 56px;
      }
    `}
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
`;

type IntentProps = 'outline' | 'subtle' | Intent;

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconRight?: boolean;
  intent?: IntentProps;
  loading?: boolean;
  loadingText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tabIndex?: number;
  tooltip?: ReactNode;
  type?: 'button' | 'reset' | 'submit';
};

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
  const content = loading ? (
    <>
      <Spinner size={16} />
      {loadingText}
    </>
  ) : (
    <>
      {tooltip && <ReactTooltip />}
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </>
  );

  const buttonClassName = [
    className || '',
    icon && !children ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
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
          disabled={disabled}
          type={type}
        >
          {content}
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
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
          disabled={disabled}
          type={type}
          {...props}
        >
          {content}
        </Secondary>
      );
  }
};
