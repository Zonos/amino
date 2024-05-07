import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color, ColorPrefix } from 'src/types/Color';

import styles from './Thumbnail.module.scss';

const thumbnailShapes = {
  round: '50%',
  rounded: '20%',
  square: '0px',
} as const;

export type ThumbnailProps = BaseProps & {
  /** @default 'gray' */
  /** @description automatically applies a color scheme based on the color passed */
  color?: ColorPrefix;
  icon: ReactNode;
  /** @default 'full' */
  intent?: 'full' | 'outline' | 'bordered';
  /** @description mainColorOverride is used if the "color" prop is not sufficient for your needs */
  mainColorOverride?: Color;
  /** @description secondaryColorOverride is used if the "color" prop is not sufficient for your needs */
  secondaryColorOverride?: Color;
  /** @default 'round' */
  shape?: keyof typeof thumbnailShapes;
  /** @default 32 */
  size?: ImageSize;
};

export const Thumbnail = ({
  className,
  color = 'gray',
  icon,
  intent = 'full',
  mainColorOverride,
  secondaryColorOverride,
  shape = 'round',
  size = 32,
  style,
}: ThumbnailProps) => (
  <div
    className={clsx(
      className,
      styles.wrapper,
      intent === 'bordered' && styles.bordered,
      intent === 'outline' && styles.outline,
    )}
    style={{
      ...style,
      '--amino-thumbnail-background-color': theme[`${color}100`],
      '--amino-thumbnail-border-radius': thumbnailShapes[shape],
      '--amino-thumbnail-size': `${size}px`,
      '--amino-thumbnail-svg-main-color':
        theme[mainColorOverride || `${color}800`],
      '--amino-thumbnail-svg-secondary-color':
        theme[secondaryColorOverride || `${color}400`],
    }}
  >
    {icon}
  </div>
);
