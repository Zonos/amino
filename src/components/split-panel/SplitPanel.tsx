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

type SplitPanelProps = BaseProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  collapseAll?: boolean;
  direction?: 'horizontal' | 'vertical';
  /**
   * @param gutterSize The size of the gutter in pixels
   * @default 10
   */
  gutterSize?: number;
  lineBar?: boolean;
  /**
   * @param minSize The minumum size in css pixel
   * @default 10
   */
  minSize?: number;
  onSetSizes?: Dispatch<SetStateAction<number[]>>;
  /**
   * @param sizes The initial sizes of the panes
   * @default 1 (make sure the sum of all sizes is 1)
   */
  sizes?: number[];
};

/**
 * Split panel component
 * @ref https://greggman.github.io/react-split-it/
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
