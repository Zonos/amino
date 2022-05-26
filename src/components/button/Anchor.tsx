import React, { ReactNode } from 'react';
import ReactTooltip from 'react-tooltip';

import styled, { css } from 'styled-components';

const AminoAnchor = styled.a<Pick<AnchorProps, 'size' | 'disabled'>>`
  position: relative;
  outline: none;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  padding: 0 var(--amino-space-half);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  font-weight: 500;
  user-select: none;
  font-family: var(--amino-font-sans);
  letter-spacing: normal;

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

const StyledAnchor = styled(AminoAnchor)`
  background: none;
  color: var(--amino-blue-500);

  &:hover {
    background: var(--amino-gray-100);
  }

  &:active,
  &:focus {
    background: var(--amino-blue-100);
    color: var(--amino-blue-500);
    svg path {
      fill: var(--amino-blue-500);
    }
  }
`;

export type AnchorProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  iconRight?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tabIndex?: number;
  tooltip?: ReactNode;
};

export const Anchor = ({
  children,
  className,
  disabled,
  href,
  icon,
  iconRight,
  onClick,
  size,
  tabIndex,
  tooltip,
  ...props
}: AnchorProps) => {
  const anchorClassName = [
    className || '',
    icon && !children ? 'only-icon' : '',
    iconRight ? 'icon-right' : '',
    icon ? 'has-icon' : '',
  ].join(' ');
  return (
    <StyledAnchor
      className={anchorClassName}
      href={href}
      data-tip={tooltip}
      tabIndex={tabIndex}
      size={size || 'sm'}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {tooltip && <ReactTooltip />}
      {!iconRight && icon}
      {children}
      {iconRight && icon}
    </StyledAnchor>
  );
};
