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
 * Skeleton displays a placeholder block to indicate loading content.
 * It can be used to mimic the shape of text, cards, or other UI elements while data is loading.
 * Supports custom width, height, animation, and children for more advanced skeleton states.
 *
 * @example Basic usage
 * ```tsx
 * <Skeleton height={20} width={200} />
 * ```
 *
 * @example Animated skeleton
 * ```tsx
 * <Skeleton animation height={32} width={300} />
 * ```
 *
 * @example Skeleton inside a card
 * ```tsx
 * <Card label="Loading...">
 *   <Skeleton height={24} width={180} />
 *   <Skeleton height={16} width={220} />
 * </Card>
 * ```
 *
 * @example With children (content overlay)
 * ```tsx
 * <Skeleton height={100} width={400}>
 *   <Text color="gray600" type="subheader">
 *     Generating report...
 *   </Text>
 * </Skeleton>
 * ```
 *
 * @example Multiple skeleton lines
 * ```tsx
 * <VStack spacing={8}>
 *   <Skeleton height={16} width={180} />
 *   <Skeleton height={16} width={220} />
 *   <Skeleton height={16} width={200} />
 * </VStack>
 * ```
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
