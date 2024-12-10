import { useCallback, useEffect, useRef, useState } from 'react';

import {
  autoUpdate,
  type ExtendedRefs,
  flip,
  offset,
  type Placement,
  shift,
  useFloating,
  type UseFloatingOptions,
} from '@floating-ui/react';

export type UseDropdownParams = {
  /**
   * Passed to `useFloating`.
   * @link https://floating-ui.com/docs/useFloating
   */
  floatingOptions?: Partial<UseFloatingOptions>;
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

  startOpen?: boolean;
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
  params?: UseDropdownParams,
): Return<WrapperRef, TriggerRef> => {
  const {
    floatingOptions = {},
    offsetCrossAxis = 0,
    offsetMainAxis = 0,
    placement = 'bottom-start',
    startOpen = false,
  } = params ?? {};

  const [visible, setVisible] = useState(startOpen);

  const visibility = visible ? 'visible' : 'hidden';

  const wrapperRef = useRef<WrapperRef>(null);

  const { floatingStyles, refs } = useFloating<TriggerRef>({
    middleware: [
      shift(),
      offset({
        crossAxis: offsetCrossAxis,
        mainAxis: offsetMainAxis,
      }),
      flip(),
    ],
    placement,
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
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
