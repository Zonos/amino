/**
 * Vendored from react-split-it@2.0.0 — MIT, © Gregg Tavares
 * https://github.com/greggman/react-split-it
 *
 * The published package inlines a copy of React 17's JSX runtime, so the
 * elements it creates carry `$$typeof: Symbol.for('react.element')`. React 19
 * renamed that to `react.transitional.element` and throws
 * "A React Element from an older version of React was rendered" on the
 * gutter. The package was last released in 2022 and has no fix, so its source
 * lives here instead.
 *
 * Ported to TypeScript and function components. The rendered DOM and class
 * names are unchanged, so `src/styles/split-react.css` still applies.
 *
 * Deliberately dropped from upstream: the `computeNewSizesFn` prop and its
 * alternative `moveGutters` strategy (nothing could reach them through
 * `SplitPanel`'s props), and `propTypes`/`defaultProps`.
 */
import {
  Children,
  type CSSProperties,
  isValidElement,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from 'src/utils/cn';

export type SplitDirection = 'horizontal' | 'vertical';

type DirectionProps = {
  clientAxis: 'clientX' | 'clientY';
  clientSize: 'clientWidth' | 'clientHeight';
};

const getDirectionProps = (direction: SplitDirection): DirectionProps =>
  direction === 'horizontal'
    ? { clientAxis: 'clientX', clientSize: 'clientWidth' }
    : { clientAxis: 'clientY', clientSize: 'clientHeight' };

const normalizeSizes = (sizes: number[]): number[] => {
  const totalSize = sizes.reduce((sum, v) => sum + v, 0);
  return sizes.map(v => v / totalSize);
};

const equalSizes = (count: number): number[] =>
  new Array<number>(count).fill(1 / count);

const getMouseOrTouchPosition = (
  event: MouseEvent | TouchEvent,
  clientAxis: DirectionProps['clientAxis'],
): number => {
  if ('touches' in event) {
    return event.touches[0]?.[clientAxis] ?? 0;
  }
  return event[clientAxis];
};

/**
 * Resize the pane on either side of the dragged gutter, leaving every other
 * pane — and therefore every other gutter — where it is.
 */
const computeNewSizes = ({
  delta,
  minSize,
  prevPaneNdx,
  startSizes,
}: {
  delta: number;
  minSize: number;
  prevPaneNdx: number;
  startSizes: number[];
}): number[] => {
  const prevPaneStartSize = startSizes[prevPaneNdx] ?? 0;
  const nextPaneStartSize = startSizes[prevPaneNdx + 1] ?? 0;
  const pairSize = prevPaneStartSize + nextPaneStartSize;
  const prevPaneNewSize = Math.min(
    Math.max(minSize, prevPaneStartSize + delta),
    pairSize - minSize,
  );
  return [
    ...startSizes.slice(0, prevPaneNdx),
    prevPaneNewSize,
    pairSize - prevPaneNewSize,
    ...startSizes.slice(prevPaneNdx + 2),
  ];
};

type GutterProps = {
  className: string;
  /**
   * Attached natively rather than as an `onMouseDown` prop so it can be
   * registered with `{ passive: false }` — React's synthetic touch listeners
   * are passive, which makes `preventDefault()` a no-op and lets mobile
   * browsers scroll the page while you drag.
   */
  onMouseDownAndTouchStart: (event: MouseEvent | TouchEvent) => void;
  style: CSSProperties;
};

const Gutter = ({
  className,
  onMouseDownAndTouchStart,
  style,
}: GutterProps): ReactNode => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = elementRef.current;
    if (!elem) {
      return undefined;
    }
    elem.addEventListener('mousedown', onMouseDownAndTouchStart, {
      passive: false,
    });
    elem.addEventListener('touchstart', onMouseDownAndTouchStart, {
      passive: false,
    });
    return () => {
      elem.removeEventListener('mousedown', onMouseDownAndTouchStart);
      elem.removeEventListener('touchstart', onMouseDownAndTouchStart);
    };
  }, [onMouseDownAndTouchStart]);

  return <div ref={elementRef} className={className} style={style} />;
};

export type SplitProps = {
  children: ReactNode;
  /** @default 'split' */
  className?: string;
  /** @default 'horizontal' */
  direction?: SplitDirection;
  /** @default 'gutter' */
  gutterClassName?: string;
  /** @default 10 */
  gutterSize?: number;
  /**
   * Minimum pane size in pixels.
   * @default 10
   */
  minSize?: number;
  /**
   * When supplied, `Split` is controlled: it reports new sizes here and
   * renders whatever `sizes` prop it is given back.
   */
  onSetSizes?: (sizes: number[]) => void;
  /** @default 'pane' */
  paneClassName?: string;
  sizes?: number[];
  style?: CSSProperties;
};

export const Split = ({
  children,
  className = 'split',
  direction = 'horizontal',
  gutterClassName = 'gutter',
  gutterSize = 10,
  minSize = 10,
  onSetSizes,
  paneClassName = 'pane',
  sizes: propSizes,
  style,
}: SplitProps): ReactNode => {
  const numPanes = Children.count(children);
  const elementRef = useRef<HTMLDivElement>(null);

  const [stateSizes, setStateSizes] = useState<number[]>(() => {
    if (!propSizes) {
      return equalSizes(numPanes);
    }
    return onSetSizes ? propSizes : normalizeSizes(propSizes);
  });
  const [dragging, setDragging] = useState(false);
  /** Index of the pane immediately before the gutter being dragged. */
  const [draggingPaneNdx, setDraggingPaneNdx] = useState(-1);

  const controlled = !!onSetSizes;
  const sizes = controlled ? (propSizes ?? stateSizes) : stateSizes;

  /** Snapshot taken on mousedown and read by the document-level move handler. */
  const dragRef = useRef({ mouseStart: 0, prevPaneNdx: 0, startSizes: sizes });
  /** Latest render's values, so the document listeners never go stale. */
  const latestRef = useRef({
    direction,
    gutterSize,
    minSize,
    onSetSizes,
    sizes,
  });
  useEffect(() => {
    latestRef.current = { direction, gutterSize, minSize, onSetSizes, sizes };
  });

  const handleMouseAndTouchMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      // Stop mobile browsers scrolling the page while the gutter is dragged.
      event.preventDefault();

      const {
        direction: currentDirection,
        gutterSize: currentGutterSize,
        minSize: currentMinSize,
        onSetSizes: currentOnSetSizes,
      } = latestRef.current;
      const { mouseStart, prevPaneNdx, startSizes } = dragRef.current;
      const { clientAxis, clientSize } = getDirectionProps(currentDirection);

      const totalGutterSizePX = (startSizes.length - 1) * currentGutterSize;
      const outerSizePX = elementRef.current?.[clientSize] ?? 0;
      const innerSizePX = outerSizePX - totalGutterSizePX;
      if (innerSizePX <= 0) {
        return;
      }

      const deltaPX = getMouseOrTouchPosition(event, clientAxis) - mouseStart;
      const newSizes = computeNewSizes({
        delta: deltaPX / innerSizePX,
        minSize: currentMinSize / innerSizePX,
        prevPaneNdx,
        startSizes,
      });

      if (currentOnSetSizes) {
        currentOnSetSizes(newSizes);
      } else {
        setStateSizes(newSizes);
      }
    },
    [],
  );

  const handleMouseUpAndTouchEnd = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseAndTouchMove);
    document.removeEventListener('mouseup', handleMouseUpAndTouchEnd);
    document.removeEventListener('touchmove', handleMouseAndTouchMove);
    document.removeEventListener('touchend', handleMouseUpAndTouchEnd);
    setDragging(false);
  }, [handleMouseAndTouchMove]);

  const handleMouseDownAndTouchStart = useCallback(
    (event: MouseEvent | TouchEvent) => {
      event.preventDefault();

      const { direction: currentDirection, sizes: currentSizes } =
        latestRef.current;
      const { clientAxis } = getDirectionProps(currentDirection);

      const target = event.currentTarget as HTMLElement | null;
      const siblings = target?.parentElement?.children;
      const gutterNdx = siblings
        ? Array.prototype.indexOf.call(siblings, target)
        : -1;
      // Panes and gutters alternate, so gutter n sits after pane (n - 1) / 2.
      const prevPaneNdx = (gutterNdx - 1) / 2;

      dragRef.current = {
        mouseStart: getMouseOrTouchPosition(event, clientAxis),
        prevPaneNdx,
        startSizes: currentSizes.slice(),
      };
      setDragging(true);
      setDraggingPaneNdx(prevPaneNdx);

      document.addEventListener('mousemove', handleMouseAndTouchMove, {
        passive: false,
      });
      document.addEventListener('mouseup', handleMouseUpAndTouchEnd);
      document.addEventListener('touchmove', handleMouseAndTouchMove, {
        passive: false,
      });
      document.addEventListener('touchend', handleMouseUpAndTouchEnd);
    },
    [handleMouseAndTouchMove, handleMouseUpAndTouchEnd],
  );

  // Don't leave document listeners behind if we unmount mid-drag.
  useEffect(
    () => () => {
      document.removeEventListener('mousemove', handleMouseAndTouchMove);
      document.removeEventListener('mouseup', handleMouseUpAndTouchEnd);
      document.removeEventListener('touchmove', handleMouseAndTouchMove);
      document.removeEventListener('touchend', handleMouseUpAndTouchEnd);
    },
    [handleMouseAndTouchMove, handleMouseUpAndTouchEnd],
  );

  // Children were added or removed while uncontrolled — we have no way to know
  // which pane should keep its size, so fall back to something sensible.
  useEffect(() => {
    if (controlled) {
      return;
    }
    setStateSizes(prev => {
      if (prev.length === numPanes) {
        return prev;
      }
      return numPanes < prev.length
        ? normalizeSizes(prev.slice(0, numPanes))
        : equalSizes(numPanes);
    });
  }, [controlled, numPanes]);

  const gutterStyle: CSSProperties = {
    flexBasis: gutterSize ? `${gutterSize}px` : '0',
  };

  const panes: ReactNode[] = [];
  let childNdx = 0;
  Children.forEach(children, child => {
    if (!isValidElement(child)) {
      return;
    }
    if (childNdx > 0) {
      panes.push(
        <Gutter
          key={`gutter${panes.length}`}
          className={cn(
            gutterClassName,
            `${gutterClassName}-${direction}`,
            dragging &&
              childNdx === draggingPaneNdx + 1 &&
              `${gutterClassName}-dragging`,
          )}
          onMouseDownAndTouchStart={handleMouseDownAndTouchStart}
          style={gutterStyle}
        />,
      );
    }
    panes.push(
      <div
        key={`pane${panes.length}`}
        className={cn(paneClassName, dragging && `${paneClassName}-dragging`)}
        style={{ flexBasis: `${(sizes[childNdx] ?? 0) * 100}%` }}
      >
        {child}
      </div>,
    );
    childNdx += 1;
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        `${className}-${direction}`,
        dragging && `${className}-dragging`,
      )}
      style={{ ...style, ...(dragging && { userSelect: 'none' }) }}
    >
      {panes}
      {dragging && (
        <style>{`iframe { pointer-events: none !important; }`}</style>
      )}
    </div>
  );
};
