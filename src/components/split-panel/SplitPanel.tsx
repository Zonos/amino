import {
  Children,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from 'react';
import Split from 'react-split-it';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './SplitPanel.module.scss';

const normalizeSizes = ({
  childrenCount,
  sizes,
}: {
  childrenCount: number;
  sizes: number[];
}) => {
  if (sizes.length === 0) {
    return [1, ...new Array(childrenCount - 1).fill(0)];
  }
  if (sizes.length !== childrenCount) {
    // get absolute number of missing children (not negative)
    const numberOfMissingChildren = Math.abs(childrenCount - sizes.length);
    return [...sizes, ...new Array(numberOfMissingChildren).fill(1)];
  }
  const total = sizes.reduce((acc, size) => acc + size, 0);
  return sizes.map(size => size / total);
};

export type SplitPanelProps = BaseProps & {
  /**
   * Content to render within the split panels
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  /**
   * Whether to collapse all panels except the first one
   * @default false
   */
  collapseAll?: boolean;
  /**
   * Direction in which the panels should be split
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Size of the resize gutter between panels in pixels
   * @default 3
   */
  gutterSize?: number;
  /**
   * Whether to display a line in the gutter
   * @default false
   */
  lineBar?: boolean;
  /**
   * Minimum size of each panel in pixels
   * @default 10
   */
  minSize?: number;
  /**
   * Callback function invoked when panel sizes change
   */
  onSetSizes?: Dispatch<SetStateAction<number[]>>;
  /**
   * Initial sizes of panels as proportions, where the sum should equal 1
   * @default [1]
   */
  sizes?: number[];
};

/**
 * SplitPanel component creates resizable panels with draggable dividers.
 * It allows users to adjust the relative sizes of content sections either
 * horizontally or vertically.
 *
 * @example Basic usage
 * ```tsx
 * <SplitPanel>
 *   <div>Left panel content</div>
 *   <div>Right panel content</div>
 * </SplitPanel>
 * ```
 *
 * @example With custom initial sizes
 * ```tsx
 * <SplitPanel sizes={[0.7, 0.3]}>
 *   <div>Larger panel (70%)</div>
 *   <div>Smaller panel (30%)</div>
 * </SplitPanel>
 * ```
 *
 * @example Vertical split
 * ```tsx
 * <SplitPanel direction="vertical" sizes={[0.4, 0.6]}>
 *   <div>Top panel</div>
 *   <div>Bottom panel</div>
 * </SplitPanel>
 * ```
 *
 * @example With state management
 * ```tsx
 * const [sizes, setSizes] = useState([0.5, 0.5]);
 *
 * <SplitPanel
 *   sizes={sizes}
 *   onSetSizes={setSizes}
 * >
 *   <div>Panel 1</div>
 *   <div>Panel 2</div>
 * </SplitPanel>
 * ```
 *
 * @example With collapsible panels
 * ```tsx
 * const [collapsed, setCollapsed] = useState(false);
 *
 * <>
 *   <Button onClick={() => setCollapsed(!collapsed)}>
 *     {collapsed ? 'Expand' : 'Collapse'}
 *   </Button>
 *
 *   <SplitPanel
 *     collapseAll={collapsed}
 *     sizes={[0.3, 0.7]}
 *   >
 *     <div>Navigation panel</div>
 *     <div>Content panel</div>
 *   </SplitPanel>
 * </>
 * ```
 *
 * @example With multiple panels
 * ```tsx
 * <SplitPanel sizes={[0.2, 0.5, 0.3]}>
 *   <div>Left sidebar</div>
 *   <div>Main content</div>
 *   <div>Right sidebar</div>
 * </SplitPanel>
 * ```
 */
export const SplitPanel = ({
  children,
  className,
  collapseAll,
  direction,
  gutterSize = 3,
  onSetSizes,
  sizes = [1],
  style,
  ...props
}: SplitPanelProps) => {
  const childrenCount = Children.count(children);
  const [defaultSizes] = useState<number[]>(
    normalizeSizes({ childrenCount, sizes }),
  );

  useEffect(() => {
    const firstDefaultSize = defaultSizes[0];
    // if the first default size is already 1, if state is expand, set size equally
    if (firstDefaultSize === 1 && !collapseAll) {
      const euqalSize = 1 / childrenCount;
      onSetSizes?.(new Array(childrenCount).fill(euqalSize));
    } else if (collapseAll) {
      // collapse all the items except the first one
      onSetSizes?.([1, ...new Array(childrenCount - 1).fill(0)]);
    } else {
      // set the sizes back to the default sizes
      onSetSizes?.(normalizeSizes({ childrenCount, sizes: defaultSizes }));
    }
  }, [childrenCount, collapseAll, defaultSizes, onSetSizes]);

  return (
    <div className={clsx(className, styles.styledWrapper)} style={style}>
      <Split
        direction={direction}
        gutterSize={!collapseAll ? gutterSize : 0}
        onSetSizes={onSetSizes}
        sizes={normalizeSizes({ childrenCount, sizes })}
        {...props}
      >
        {children}
      </Split>
    </div>
  );
};
