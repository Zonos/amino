import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { ColorPrefix } from 'src/types/Color';

import styles from './Thumbnail.module.scss';

const thumbnailShapes = {
  round: '50%',
  rounded: '20%',
  square: '0px',
} as const;

export type ThumbnailProps = BaseProps & {
  /** @default 'gray' */
  color?: ColorPrefix;
  icon: ReactNode;
  /** @default 'full' */
  intent?: 'full' | 'outline' | 'bordered';
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
      '--amino-thumbnail-svg-main-color': theme[`${color}800`],
      '--amino-thumbnail-svg-secondary-color': theme[`${color}400`],
    }}
  >
    {icon}
  </div>
);
