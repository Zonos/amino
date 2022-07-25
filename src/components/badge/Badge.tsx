import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { FontWeight } from '../text/Text';

type ColorList =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'yellow';

type Size = 'small' | 'large';

export interface BadgeProps {
  children?: ReactNode | string;
  className?: string;
  color?: ColorList;
  fontWeight?: FontWeight;
  icon?: ReactNode;
  iconRight?: boolean;
  bold?: boolean;
  rounded?: boolean;
  size?: Size;
}

const BadgeWrapper = styled.div`
  display: inline-block;
`;
const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  gap: var(--amino-space-quarter);
  font-size: var(--amino-text-sm);
  padding: 3px var(--amino-space-half);
  text-align: center;
  border-radius: ${({ rounded }) => (rounded ? 'var(--amino-radius)' : '20px')};
  // default background color (gray)
  background-color: var(--amino-gray-200);
  color: var(--amino-gray-700);
  align-items: center;

  p {
    margin: 0;
    font-weight: ${p => p.fontWeight || '700'};
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }

  &.bold {
    // bold config default (gray)
    background-color: var(--amino-gray-600);
    color: var(--amino-gray-200);
  }

  // size
  &.large {
    padding: 10px var(--amino-space-half);
  }

  &.blue {
    // color config
    background-color: var(--amino-blue-100);
    color: var(--amino-blue-700);
    &.bold {
      // bold config
      background-color: var(--amino-blue-500);
      color: var(--amino-blue-100);
    }
  }

  &.green {
    // color config
    background-color: var(--amino-green-100);
    color: var(--amino-green-700);
    &.bold {
      // bold config
      background-color: var(--amino-green-500);
      color: var(--amino-green-100);
    }
  }

  &.red {
    // color config
    background-color: var(--amino-red-100);
    color: var(--amino-red-700);
    &.bold {
      // bold config
      background-color: var(--amino-red-500);
      color: var(--amino-red-100);
    }
  }

  &.orange {
    // color config
    background-color: var(--amino-orange-100);
    color: var(--amino-orange-700);
    &.bold {
      // bold config
      background-color: var(--amino-orange-500);
      color: var(--amino-orange-100);
    }
  }

  &.purple {
    // color config
    background-color: var(--amino-purple-100);
    color: var(--amino-purple-700);
    &.bold {
      // bold config
      background-color: var(--amino-purple-500);
      color: var(--amino-purple-100);
    }
  }

  &.cyan {
    // color config
    background-color: var(--amino-cyan-100);
    color: var(--amino-cyan-700);
    &.bold {
      // bold config
      background-color: var(--amino-cyan-500);
      color: var(--amino-cyan-100);
    }
  }

  &.yellow {
    // color config
    background-color: var(--amino-yellow-100);
    color: var(--amino-yellow-700);
    &.bold {
      // bold config
      background-color: var(--amino-yellow-500);
      color: black;
    }
  }
`;
export const Badge = ({
  children,
  className,
  color,
  fontWeight,
  icon,
  iconRight,
  bold,
  rounded,
  size,
}: BadgeProps) => {
  return (
    <BadgeWrapper className={className}>
      <StyledBadge
        rounded={!!rounded}
        bold={!!bold}
        fontWeight={fontWeight}
        iconRight={iconRight}
        color={color}
        size={size}
        className={[color || 'gray', size || 'small', bold ? 'bold' : ''].join(
          ' '
        )}
      >
        {icon}
        <p>{children}</p>
      </StyledBadge>
    </BadgeWrapper>
  );
};
