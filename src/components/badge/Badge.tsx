import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { FontWeight } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Badge.module.scss';

type BadgeColor =
  | 'blue'
  | 'cyan'
  | 'gray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red';

type Size = 'small' | 'default';

export type BadgeProps = BaseProps & {
  bold?: boolean;
  children?: ReactNode | string;
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
};

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
  style,
}: BadgeProps) => (
  <div
    className={clsx(styles.badgeWrapper, className)}
    style={{
      ...style,
      '--amino-badge-border-radius': rounded ? '20px' : theme.radius6,
      '--amino-badge-font-weight': fontWeight,
      '--amino-badge-order': iconRight ? '2' : '',
    }}
  >
    <div
      className={clsx(
        styles.styledBadge,
        color !== 'gray' ? styles[color] : '',
        size === 'small' ? styles[size] : '',
        bold ? styles.bold : '',
      )}
    >
      {icon}
      <p>{children}</p>
    </div>
  </div>
);
