import type { ReactNode } from 'react';

import clsx from 'clsx';

import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './AvatarBase.module.scss';

export type ImageSize = 16 | 24 | 32 | 40 | 48 | 56 | 64;

export const avatarShapes = {
  round: '50%',
  rounded: '10px',
  square: '0px',
} as const;

type AvatarShape = keyof typeof avatarShapes;

type AvatarStyleProps = {
  backgroundColor?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundUrl?: string;
};

export type AvatarProps = {
  /** @default false */
  bordered?: boolean;
  /** @default round */
  shape?: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
};

export type FullAvatarProps = BaseProps & {
  /** @default false */
  bordered?: boolean;
  /** @default round */
  shape?: AvatarShape;
  /** @default 32 px */
  size?: ImageSize;
};

type AvatarBaseProps = BaseProps & {
  children?: ReactNode;
} & Required<AvatarProps> &
  AvatarStyleProps;

export const AvatarBase = ({
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  backgroundUrl,
  bordered,
  children,
  className,
  shape,
  size,
  style,
}: AvatarBaseProps) => (
  <div
    className={clsx(styles.wrapper, className)}
    style={{
      ...style,
      '--amino-avatar-base-background-color':
        backgroundColor || `${theme.gray100}`,
      '--amino-avatar-base-background-image': `url(${backgroundUrl})`,
      '--amino-avatar-base-background-position': backgroundPosition || 'center',
      '--amino-avatar-base-background-size': backgroundSize || '',
      '--amino-avatar-base-border': bordered
        ? `${size / 16}px solid ${theme.gray0}`
        : '',
      '--amino-avatar-base-border-radius': avatarShapes[shape],
      '--amino-avatar-base-height': `${size}px`,
      '--amino-avatar-base-width': `${size}px`,
    }}
  >
    {children || <div className={styles.styledAvatarBase} />}
  </div>
);
