import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';
import type { Depth } from 'src/types/Depth';

import styles from './Surface.module.scss';

type Props = BaseProps & {
  /**
   * Content to be displayed within the surface
   */
  children: ReactNode;
  /**
   * Reduces the surface's padding for more compact layouts
   * @default false
   */
  dense?: boolean;
  /**
   * Controls the elevation depth of the surface
   * @default 'depth4'
   */
  depth?: Depth;
};

/**
 * Surface component provides an elevated container with customizable depth
 * for creating visual hierarchy in layouts.
 *
 * @example Basic usage
 * ```tsx
 * <Surface>
 *   <Card>
 *     <Text>Content with default elevation</Text>
 *   </Card>
 * </Surface>
 * ```
 *
 * @example With custom depth
 * ```tsx
 * <Surface depth="depth8">
 *   <Card>
 *     <Text>Content with increased elevation</Text>
 *   </Card>
 * </Surface>
 * ```
 *
 * @example Dense surface for compact layouts
 * ```tsx
 * <Surface dense>
 *   <Card>
 *     <Text>Content with reduced padding</Text>
 *   </Card>
 * </Surface>
 * ```
 *
 * @example Multiple nested surfaces for hierarchy
 * ```tsx
 * <Surface depth="depth1">
 *   <Text>Base layer</Text>
 *   <Surface depth="depth4">
 *     <Text>Middle layer</Text>
 *     <Surface depth="depth8">
 *       <Text>Top layer</Text>
 *     </Surface>
 *   </Surface>
 * </Surface>
 * ```
 */
export const Surface = ({
  children,
  className,
  dense = false,
  depth = 'depth4',
  style,
}: Props) => {
  const classes = clsx(
    className,
    styles.surfaceBase,
    'elevated',
    dense && styles.dense,
    depth && styles[depth],
  );

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
