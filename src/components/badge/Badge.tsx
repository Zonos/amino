import React, { ReactNode } from 'react';

import { theme } from 'src/styles/constants/theme';
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
  gap: ${theme.spaceQuarter};
  font-size: ${theme.textSm};
  padding: 3px ${theme.spaceHalf};
  text-align: center;
  border-radius: ${({ rounded }) => (rounded ? '20px' : theme.radius)};
  // default background color (gray)
  background-color: ${theme.grayL60};
  color: ${theme.grayD40};
  align-items: center;

  p {
    margin: 0;
    font-weight: ${p => p.fontWeight || '600'};
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }

  &.bold {
    // bold config default (gray)
    background-color: ${theme.grayD20};
    color: ${theme.grayL60};
  }

  // size
  &.large {
    padding: 10px ${theme.spaceHalf};
  }

  &.blue {
    // color config
    background-color: ${theme.blueL80};
    color: ${theme.blueD40};
    &.bold {
      // bold config
      background-color: ${theme.blueBase};
      color: ${theme.blueL80};
    }
  }

  &.green {
    // color config
    background-color: ${theme.greenL80};
    color: ${theme.greenD40};
    &.bold {
      // bold config
      background-color: ${theme.greenBase};
      color: ${theme.greenL80};
    }
  }

  &.red {
    // color config
    background-color: ${theme.redL80};
    color: ${theme.redD40};
    &.bold {
      // bold config
      background-color: ${theme.redBase};
      color: ${theme.redL80};
    }
  }

  &.orange {
    // color config
    background-color: ${theme.orangeL80};
    color: ${theme.orangeD40};
    &.bold {
      // bold config
      background-color: ${theme.orangeBase};
      color: ${theme.orangeL80};
    }
  }

  &.purple {
    // color config
    background-color: ${theme.purpleL80};
    color: ${theme.purpleD40};
    &.bold {
      // bold config
      background-color: ${theme.purpleBase};
      color: ${theme.purpleL80};
    }
  }

  &.cyan {
    // color config
    background-color: ${theme.cyanL80};
    color: ${theme.cyanD40};
    &.bold {
      // bold config
      background-color: ${theme.cyanBase};
      color: ${theme.cyanL80};
    }
  }

  &.yellow {
    // color config
    background-color: ${theme.yellowL80};
    color: ${theme.yellowD40};
    &.bold {
      // bold config
      background-color: ${theme.yellowBase};
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
}: BadgeProps) => (
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
