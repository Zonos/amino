import type { ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import type { Intent } from 'src/types/Intent';
import { cn } from 'src/utils/cn';

export type RoundedIconProps = BaseProps & {
  background?: Color;
  children: ReactNode;
  color?: Color;
  intent?: Intent;
};

const roundedIconVariants = cva(
  'flex size-amino-32 items-center justify-center rounded-[32px] bg-gray-300 text-gray-600 [&_svg]:size-amino-20',
  {
    defaultVariants: {
      intent: undefined,
    },
    variants: {
      intent: {
        danger: 'bg-red-100 text-red-600',
        primary: 'bg-blue-100 text-blue-600',
        success: 'bg-green-100 text-green-600',
        warning: 'bg-orange-100 text-orange-600',
      },
    },
  },
);

/**
 * RoundedIcon component displays an icon or element inside a circular or rounded background,
 * supporting color, intent, and background customization. Useful for avatars, status indicators,
 * or decorative iconography in lists, buttons, and cards.
 *
 * @example Basic usage
 * ```tsx
 * <RoundedIcon>
 *   <TruckDuotoneIcon />
 * </RoundedIcon>
 * ```
 *
 * @example With intent color
 * ```tsx
 * <RoundedIcon intent="primary">
 *   <TruckDuotoneIcon />
 * </RoundedIcon>
 * ```
 *
 * @example With custom background and icon color
 * ```tsx
 * <RoundedIcon background="gray1000" color="purple400">
 *   <TruckDuotoneIcon />
 * </RoundedIcon>
 * ```
 *
 * @example With success intent
 * ```tsx
 * <RoundedIcon intent="success">
 *   <TruckDuotoneIcon />
 * </RoundedIcon>
 * ```
 *
 * @example In a list item
 * ```tsx
 * <ListItem
 *   decorator={
 *     <RoundedIcon intent="warning">
 *       <AlertIcon />
 *     </RoundedIcon>
 *   }
 *   label="Warning"
 * />
 * ```
 */
export const RoundedIcon = ({
  background,
  children,
  className,
  color,
  intent,
  style,
}: RoundedIconProps) => {
  const intentValue =
    intent === 'danger' ||
    intent === 'primary' ||
    intent === 'warning' ||
    intent === 'success'
      ? intent
      : undefined;

  return (
    <div
      className={cn(roundedIconVariants({ intent: intentValue }), className)}
      style={{
        ...style,
        ...(background || color
          ? {
              '--amino-rounded-icon-background': background
                ? theme[background]
                : undefined,
              '--amino-rounded-icon-color': color ? theme[color] : undefined,
              backgroundColor: background
                ? 'var(--amino-rounded-icon-background)'
                : undefined,
              color: color ? 'var(--amino-rounded-icon-color)' : undefined,
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
};
