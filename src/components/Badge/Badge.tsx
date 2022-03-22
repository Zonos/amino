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
  img {
    align-self: center;
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }

  &.inverted {
    // inverted config default (gray)
    background-color: var(--amino-gray-700);
    color: var(--amino-gray-200);
  }

  // size
  &.large {
    padding: 10px var(--amino-space-half);
  }

  &.blue {
    // color config
    background-color: var(--amino-blue-200);
    color: var(--amino-blue-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-blue-700);
      color: var(--amino-blue-200);
    }
  }

  &.cyan {
    // color config
    background-color: var(--amino-cyan-200);
    color: var(--amino-cyan-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-cyan-700);
      color: var(--amino-cyan-200);
      img {
        border: 1px solid var(--amino-cyan-200);
      }
    }
  }

  &.green {
    // color config
    background-color: var(--amino-green-200);
    color: var(--amino-green-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-green-700);
      color: var(--amino-green-200);
    }
  }

  &.orange {
    // color config
    background-color: var(--amino-orange-200);
    color: var(--amino-orange-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-orange-700);
      color: var(--amino-orange-200);
    }
  }

  &.purple {
    // color config
    background-color: var(--amino-purple-200);
    color: var(--amino-purple-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-purple-700);
      color: var(--amino-purple-200);
    }
  }

  &.red {
    // color config
    background-color: var(--amino-red-200);
    color: var(--amino-red-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-red-700);
      color: var(--amino-red-200);
    }
  }

  &.yellow {
    // color config
    background-color: var(--amino-yellow-200);
    color: var(--amino-yellow-700);
    &.inverted {
      // inverted config
      background-color: var(--amino-yellow-700);
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
