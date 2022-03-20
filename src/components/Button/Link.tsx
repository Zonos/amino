import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

const AminoLink = styled.a<Pick<LinkProps, 'size' | 'disabled'>>`
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

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--amino-space-quarter);
  }
  svg path {
    fill: var(--amino-text-color);
  }

  &.only-icon {
    width: 32px;
    padding: 0;
  }

  &:active,
  &:focus {
    outline: none;
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
`;

const StyledLink = styled(AminoLink)`
  background: none;
  color: var(--amino-blue-500);
  svg path {
    fill: var(--amino-blue-500);
  }

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

export type LinkProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  href: string;
  size?: 'sm' | 'md' | 'lg';
  tabIndex?: number;
  tooltip?: ReactNode;
};

export const Link = ({
  children,
  className,
  disabled,
  href,
  size,
  tabIndex,
  tooltip,
}: LinkProps) => {
  return (
    <StyledLink
      className={className}
      href={href}
      data-tip={tooltip}
      tabIndex={tabIndex}
      size={size || 'sm'}
      disabled={disabled}
    >
      {children}
    </StyledLink>
  );
};
