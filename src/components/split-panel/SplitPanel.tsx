import {
  type Dispatch,
  type SetStateAction,
  Children,
  useEffect,
  useState,
} from 'react';
import Split from 'react-split-it';

import styled from 'styled-components';

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

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

type IProps = {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  /**
   * @param minSize The minumum size in css pixel
   * @default 10
   */
  minSize?: number;
  /**
   * @param gutterSize The size of the gutter in pixels
   * @default 10
   */
  gutterSize?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  /**
   * @param sizes The initial sizes of the panes
   * @default 1 (make sure the sum of all sizes is 1)
   */
  sizes?: number[];
  onSetSizes?: Dispatch<SetStateAction<number[]>>;
  collapseAll?: boolean;
  lineBar?: boolean;
};

/**
 * Split panel component
 * @ref https://greggman.github.io/react-split-it/
 */
export const SplitPanel = ({
  className,
  children,
  collapseAll,
  direction,
  gutterSize = 3,
  sizes = [1],
  onSetSizes,
  ...props
}: IProps) => {
  const childrenCount = Children.count(children);
  const [defaultSizes] = useState<number[]>(
    normalizeSizes({ childrenCount, sizes })
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
    <StyledWrapper className={className}>
      <Split
        sizes={normalizeSizes({ childrenCount, sizes })}
        onSetSizes={onSetSizes}
        gutterSize={!collapseAll ? gutterSize : 0}
        direction={direction}
        {...props}
      >
        {children}
      </Split>
    </StyledWrapper>
  );
};
