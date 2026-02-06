import type { ReactNode } from 'react';

import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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
    className={cn(
      'relative overflow-hidden rounded-[20px] bg-gray-100',
      animation && [
        "after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer after:content-['']",
        'after:bg-linear-to-r after:from-transparent after:via-black/8 after:to-transparent',
      ],
      className,
    )}
    style={{
      ...style,
      height: height ? `${height}px` : '1em',
      width: width ? `${width}px` : '100%',
    }}
  >
    {children}
  </div>
);
