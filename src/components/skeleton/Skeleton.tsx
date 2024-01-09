import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Skeleton.module.scss';

export type SkeletonProps = BaseProps & {
  animation?: boolean;
  children?: ReactNode;
  height?: number;
  width?: number;
};

/**
 * Displays a blocky outline of content that can be used as a loader
 *
 * @param width - Optional width in pixels
 * @param height - Optional height in em
 */
export const Skeleton = ({
  animation = true,
  children,
  className,
  height,
  style,
  width,
}: SkeletonProps) => (
  <div
    className={clsx(
      className,
      styles.skeletonWrapper,
      animation && styles.animation,
    )}
    style={{
      ...style,
      '--amino-skeleton-height': height ? `${height}px` : '1em',
      '--amino-skeleton-width': width ? `${width}px` : '100%',
    }}
  >
    {children}
  </div>
);
