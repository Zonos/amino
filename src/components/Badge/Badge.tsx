import React, { ReactNode } from 'react';

import styled from 'styled-components';

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
  icon?: ReactNode;
  iconRight?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  size?: Size;
}

const BadgeWrapper = styled.div`
  display: inline-block;
`;
const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  gap: var(--amino-space-quarter);
  font-size: var(--amino-type-scale-base);
  font-weight: normal;
  padding: 3px var(--amino-space-half);
  text-align: center;
  font-weight: 500;
  border-radius: ${({ rounded }) => (rounded ? 'var(--amino-radius)' : '20px')};
  // default background color (gray)
  background-color: var(--amino-gray-200);
  color: var(--amino-gray-700);
  align-items: center;

  p {
    margin: 0;
    font-weight: 700;
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }

  &.inverted {
    // inverted config default (gray)
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
    &.inverted {
      // inverted config
      background-color: var(--amino-blue-500);
      color: var(--amino-blue-100);
    }
  }

  &.green {
    // color config
    background-color: var(--amino-green-100);
    color: var(--amino-green-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-green-500);
      color: var(--amino-green-100);
    }
  }

  &.red {
    // color config
    background-color: var(--amino-red-100);
    color: var(--amino-red-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-red-500);
      color: var(--amino-red-100);
    }
  }

  &.orange {
    // color config
    background-color: var(--amino-orange-100);
    color: var(--amino-orange-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-orange-500);
      color: var(--amino-orange-100);
    }
  }

  &.purple {
    // color config
    background-color: var(--amino-purple-100);
    color: var(--amino-purple-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-purple-500);
      color: var(--amino-purple-100);
    }
  }

  &.cyan {
    // color config
    background-color: var(--amino-cyan-100);
    color: var(--amino-cyan-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-cyan-500);
      color: var(--amino-cyan-100);
    }
  }

  &.yellow {
    // color config
    background-color: var(--amino-yellow-100);
    color: var(--amino-yellow-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-yellow-500);
      color: black;
    }
  }
`;
export const Badge = ({
  children,
  className,
  color,
  icon,
  iconRight,
  inverted,
  rounded,
  size,
}: BadgeProps) => {
  return (
    <BadgeWrapper className={className}>
      <StyledBadge
        rounded={!!rounded}
        inverted={!!inverted}
        iconRight={iconRight}
        color={color}
        size={size}
        className={[
          color || 'gray',
          size || 'small',
          inverted ? 'inverted' : '',
        ].join(' ')}
      >
        {icon}
        <p>{children}</p>
      </StyledBadge>
    </BadgeWrapper>
  );
};
