import { useCallback, useEffect, useRef, useState } from 'react';

import {
  type ExtendedRefs,
  type Placement,
  autoUpdate,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';

type Params = {
  /**
   * @default 0
   */
  offsetCrossAxis?: number;
  /**
   * @default 0
   */
  offsetMainAxis?: number;
  /**
   * @default 'bottom-start'
   */
  placement?: Placement;
};

type Return<
  WrapperRef extends HTMLElement = HTMLDivElement,
  TriggerRef extends HTMLElement = HTMLButtonElement,
> = {
  floatingStyles: React.CSSProperties;
  refs: ExtendedRefs<TriggerRef>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visibility: 'visible' | 'hidden';
  visible: boolean;
  wrapperRef: React.RefObject<WrapperRef>;
};

export const useDropdown = <
  WrapperRef extends HTMLElement = HTMLDivElement,
  TriggerRef extends HTMLElement = HTMLButtonElement,
>(
  params?: Params,
): Return<WrapperRef, TriggerRef> => {
  const {
    offsetCrossAxis = 0,
    offsetMainAxis = 0,
    placement = 'bottom-start',
  } = params ?? {};

  const [visible, setVisible] = useState(false);

  const visibility: 'visible' | 'hidden' = visible ? 'visible' : 'hidden';

  const wrapperRef = useRef<WrapperRef>(null);

  const { floatingStyles, refs } = useFloating<TriggerRef>({
    middleware: [
      shift(),
      offset({
        crossAxis: offsetCrossAxis,
        mainAxis: offsetMainAxis,
      }),
    ],
    placement,
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
