import type { ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import type { FontWeight } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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

const badgeVariants = cva(
  'inline-flex items-center text-amino-s text-center [&_p]:m-0 [&_p]:leading-4 [&_p]:px-amino-4 [&_svg]:h-5 [&_svg]:w-5',
  {
    compoundVariants: [
      {
        bold: true,
        className:
          'bg-blue-500 border-blue-600 text-gray-0 [&_svg]:text-gray-0 dark:text-gray-1000 dark:[&_svg]:text-gray-1000',
        color: 'blue',
      },
      {
        bold: true,
        className:
          'bg-cyan-600 border-cyan-700 text-gray-0 [&_svg]:text-gray-0',
        color: 'cyan',
      },
      {
        bold: true,
        className:
          'bg-gray-1000 border-gray-900 text-gray-100 [&_svg]:text-gray-100',
        color: 'gray',
      },
      {
        bold: true,
        className:
          'bg-green-500 border-green-600 text-gray-0 [&_svg]:text-gray-0 dark:text-gray-1000 dark:[&_svg]:text-gray-1000',
        color: 'green',
      },
      {
        bold: true,
        className:
          'bg-orange-500 border-orange-600 text-gray-0 [&_svg]:text-gray-0 dark:text-gray-1000 dark:[&_svg]:text-gray-1000',
        color: 'orange',
      },
      {
        bold: true,
        className:
          'bg-purple-500 border-purple-600 text-gray-0 [&_svg]:text-gray-0 dark:text-gray-1000 dark:[&_svg]:text-gray-1000',
        color: 'purple',
      },
      {
        bold: true,
        className:
          'bg-red-500 border-red-600 text-gray-0 [&_svg]:text-gray-0 dark:text-gray-1000 dark:[&_svg]:text-gray-1000',
        color: 'red',
      },
    ],
    defaultVariants: {
      bold: false,
      color: 'gray',
      size: 'default',
    },
    variants: {
      bold: {
        false: '',
        true: '',
      },
      color: {
        blue: 'bg-blue-50 border border-blue-200 text-blue-800',
        cyan: 'bg-cyan-50 border border-cyan-200 text-cyan-800',
        gray: 'bg-gray-50 border border-gray-200 text-gray-800',
        green: 'bg-green-50 border border-green-200 text-green-800',
        orange: 'bg-orange-50 border border-orange-200 text-orange-800',
        purple: 'bg-purple-50 border border-purple-200 text-purple-800',
        red: 'bg-red-50 border border-red-200 text-red-800',
      },
      size: {
        default: 'py-[3px] px-1 gap-amino-0',
        small: 'py-px px-amino-4 rounded-amino4 gap-0 [&_p]:px-amino-4',
      },
    },
  },
);

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
  bold = false,
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
    className={cn('inline-block', className)}
    style={{
      ...style,
      '--amino-badge-border-radius': rounded ? '20px' : theme.radius6,
      '--amino-badge-font-weight': fontWeight,
      '--amino-badge-order': iconRight ? '2' : '',
    }}
  >
    <div
      className={badgeVariants({ bold, color, size })}
      style={{
        borderRadius: 'var(--amino-badge-border-radius)',
        fontWeight: 'var(--amino-badge-font-weight)' as unknown as number,
        order: 'var(--amino-badge-order)' as unknown as number,
      }}
    >
      {icon}
      <p>{children}</p>
    </div>
  </div>
);
