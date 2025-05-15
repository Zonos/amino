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

/**
 * Badge component used to highlight information, show status, or categorize content.
 * Available in different colors, sizes, and styles to fit various use cases.
 *
 * @example Basic badge
 * <Badge>New</Badge>
 *
 * @example With different colors
 * <Badge color="blue">Info</Badge>
 * <Badge color="green">Success</Badge>
 * <Badge color="red">Error</Badge>
 * <Badge color="orange">Warning</Badge>
 * <Badge color="purple">Beta</Badge>
 * <Badge color="cyan">Update</Badge>
 * <Badge color="gray">Default</Badge>
 *
 * @example With icon
 * <Badge icon={<CheckmarkIcon />}>Verified</Badge>
 *
 * @example With right aligned icon
 * <Badge icon={<ArrowRightIcon />} iconRight>View more</Badge>
 *
 * @example Small size
 * <Badge size="small">Tag</Badge>
 *
 * @example Bold style (inverted colors)
 * <Badge bold>Featured</Badge>
 * <Badge bold color="green">Approved</Badge>
 *
 * @example With rounded corners
 * <Badge rounded>Status</Badge>
 *
 * @example Custom font weight
 * <Badge fontWeight={800}>Important</Badge>
 *
 * @example Combining multiple props
 * <Badge
 *   color="purple"
 *   bold
 *   icon={<StarIcon />}
 *   rounded
 *   size="small"
 * >
 *   Featured
 * </Badge>
 */
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
