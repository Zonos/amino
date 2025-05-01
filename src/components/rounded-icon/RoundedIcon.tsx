import type { ReactNode } from 'react';

import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import type { Intent } from 'src/types/Intent';

import styles from './RoundedIcon.module.scss';

export type RoundedIconProps = BaseProps & {
  background?: Color;
  children: ReactNode;
  color?: Color;
  intent?: Intent;
};

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
  const getIntentClass = () => {
    switch (intent) {
      case 'danger':
      case 'primary':
      case 'warning':
      case 'success':
        return styles[intent];
      default:
        return '';
    }
  };

  return (
    <div
      className={clsx(className, styles.iconWrapper, getIntentClass())}
      style={{
        ...style,
        '--amino-rounded-icon-background': background
          ? theme[background]
          : theme.gray200,
        '--amino-rounded-icon-color': color ? theme[color] : theme.gray600,
      }}
    >
      {children}
    </div>
  );
};
