import type { ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import type { BaseProps } from 'src/types/BaseProps';
import type { Depth } from 'src/types/Depth';
import { cn } from 'src/utils/cn';

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

const surfaceVariants = cva(
  'elevated rounded-amino-8 bg-surface p-amino-24 text-foreground',
  {
    defaultVariants: {
      dense: false,
      depth: 'depth4',
    },
    variants: {
      dense: {
        false: '',
        true: 'rounded-amino-6',
      },
      depth: {
        depth1: '',
        depth16:
          'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]',
        depth4: 'border border-amino shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
        depth64:
          'shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]',
        depth8:
          'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]',
      },
    },
  },
);

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
}: Props) => (
  <div
    className={cn(surfaceVariants({ dense, depth }), className)}
    style={style}
  >
    {children}
  </div>
);
