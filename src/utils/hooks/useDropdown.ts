import { useCallback, useEffect, useRef, useState } from 'react';

import { autoUpdate, offset, shift, useFloating } from '@floating-ui/react';

type Params = {
  /**
   * @default 0
   */
  offsetCrossAxis?: number;
  /**
   * @default 0
   */
  offsetMainAxis?: number;
};

export const useDropdown = <
  WrapperRef extends HTMLElement = HTMLDivElement,
  TriggerRef extends HTMLElement = HTMLButtonElement,
>(
  params?: Params,
) => {
  const { offsetCrossAxis = 0, offsetMainAxis = 0 } = params ?? {};

  const [visible, setVisible] = useState(false);

  const visibility: 'visible' | 'hidden' = visible ? 'visible' : 'hidden';

  const wrapperRef = useRef<WrapperRef | null>(null);

  const { floatingStyles, refs } = useFloating<TriggerRef>({
    middleware: [
      shift(),
      offset({
        crossAxis: offsetCrossAxis,
        mainAxis: offsetMainAxis,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as WrapperRef;

      // Open and left-click
      if (visible && e.button === 0) {
        // Click outside
        if (!wrapperRef?.current?.contains(target)) {
          e.preventDefault();
          e.stopPropagation();
          setVisible(false);
        }
      }
    },
    [visible],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', handleClick);
      }
    };
  }, [handleClick]);

  return {
    floatingStyles,
    refs,
    setVisible,
    visibility,
    visible,
    wrapperRef,
  };
};
