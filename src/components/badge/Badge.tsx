import type { ReactNode } from 'react';

import styled from 'styled-components';

import type { FontWeight } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { StyledProps } from 'src/types';

const BadgeWrapper = styled.div`
  display: inline-block;
`;

type StyledBadgeProps = {
  fontWeight: FontWeight;
  iconRight: boolean;
  rounded: boolean;
};

const StyledBadge = styled.div<StyledProps<StyledBadgeProps>>`
  display: flex;
  gap: ${theme.space4};
  font-size: ${theme.fontSizeS};
  padding: 4px 8px;
  text-align: center;
  border-radius: ${p => (p.$rounded ? '20px' : theme.radius6)};
  background-color: ${theme.gray100};
  color: ${theme.gray800};
  align-items: center;

  p {
    margin: 0;
    font-weight: ${p => p.$fontWeight};
    line-height: 16px;
  }
  svg {
    order: ${p => (p.$iconRight ? '2' : '')};
    height: 16px;
    width: 16px;
  }

  &.bold {
    // bold config default (gray)
    background-color: ${theme.gray600};
    color: ${theme.gray100};
    & svg {
      color: ${theme.gray100};
    }
  }

  // size
  &.small {
    padding: 2px ${theme.space4};
    border-radius: ${theme.radius4};
    gap: 2px;
  }

  &.blue {
    // color config
    background-color: ${theme.blue100};
    color: ${theme.blue800};
    &.bold {
      // bold config
      background-color: ${theme.blue600};
      color: ${theme.blue100};
      & svg {
        color: ${theme.blue100};
      }
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
      & svg {
        color: ${theme.green100};
      }
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
      & svg {
        color: ${theme.red100};
      }
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
      & svg {
        color: ${theme.orange100};
      }
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
      & svg {
        color: ${theme.purple100};
      }
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

type BadgeColor =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

type Size = 'small' | 'default';

export interface BadgeProps {
  bold?: boolean;
  children?: ReactNode | string;
  className?: string;
  color?: BadgeColor;
  /**
   * @default 600
   */
  fontWeight?: FontWeight;
  icon?: ReactNode;
  /**
   * @default false
   */
  iconRight?: boolean;
  rounded?: boolean;
  /**
   * @default default
   */
  size?: Size;
}

export const Badge = ({
  bold,
  children,
  className,
  color = 'gray',
  fontWeight = 600,
  icon,
  iconRight = false,
  rounded = false,
  size = 'default',
}: BadgeProps) => (
  <BadgeWrapper className={className}>
    <StyledBadge
      $fontWeight={fontWeight}
      $iconRight={iconRight}
      $rounded={rounded}
      className={[color, size, bold ? 'bold' : ''].join(' ')}
    >
      {icon}
      <p>{children}</p>
    </StyledBadge>
  </BadgeWrapper>
);
