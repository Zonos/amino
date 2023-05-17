import type { ReactNode } from 'react';

import type { FontWeight } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

type ColorList =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

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
  /**
   * @default large
   */
  size?: Size;
}

const BadgeWrapper = styled.div`
  display: inline-block;
`;
const StyledBadge = styled.div<BadgeProps>`
  display: flex;
  gap: ${theme.space8};
  font-size: ${theme.fontSizeS};
  padding: 2px 6px;
  text-align: center;
  border-radius: ${({ rounded }) => (rounded ? '20px' : theme.radius6)};
  // default background color (gray)
  background-color: ${theme.gray100};
  color: ${theme.gray800};
  align-items: center;

  p {
    margin: 0;
    font-weight: ${p => p.fontWeight || '600'};
    line-height: 16px;
  }
  svg {
    order: ${({ iconRight }) => (iconRight ? '2' : '')};
  }

  &.bold {
    // bold config default (gray)
    background-color: ${theme.gray600};
    color: ${theme.gray100};
  }

  // size
  &.large {
    padding: 4px 8px;
  }

  &.blue {
    // color config
    background-color: ${theme.blue100};
    color: ${theme.blue800};
    &.bold {
      // bold config
      background-color: ${theme.blue600};
      color: ${theme.blue100};
    }
  }

  &.green {
    // color config
    background-color: ${theme.green100};
    color: ${theme.green800};
    &.bold {
      // bold config
      background-color: ${theme.green600};
      color: ${theme.green100};
    }
  }

  &.red {
    // color config
    background-color: ${theme.red100};
    color: ${theme.red800};
    &.bold {
      // bold config
      background-color: ${theme.red600};
      color: ${theme.red100};
    }
  }

  &.orange {
    // color config
    background-color: ${theme.orange100};
    color: ${theme.orange800};
    &.bold {
      // bold config
      background-color: ${theme.orange600};
      color: ${theme.orange100};
    }
  }

  &.purple {
    // color config
    background-color: ${theme.purple100};
    color: ${theme.purple800};
    &.bold {
      // bold config
      background-color: ${theme.purple600};
      color: ${theme.purple100};
    }
  }

  &.cyan {
    // color config
    background-color: ${theme.cyan100};
    color: ${theme.cyan800};
    &.bold {
      // bold config
      background-color: ${theme.cyan600};
      color: ${theme.cyan100};
    }
  }
`;
export const Badge = ({
  children,
  className,
  color = 'gray',
  fontWeight,
  icon,
  iconRight,
  bold,
  rounded = false,
  size = 'large',
}: BadgeProps) => (
  <BadgeWrapper className={className}>
    <StyledBadge
      rounded={rounded}
      bold={!!bold}
      fontWeight={fontWeight}
      iconRight={iconRight}
      color={color}
      size={size}
      className={[color, size, bold ? 'bold' : ''].join(' ')}
    >
      {icon}
      <p>{children}</p>
    </StyledBadge>
  </BadgeWrapper>
);
