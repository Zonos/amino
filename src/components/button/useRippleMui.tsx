import * as React from 'react';

import { useEventCallback } from '@mui/material/utils';

import { TouchRippleActions } from './TouchRipple.types';

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export default function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback(
    (...args: Args) =>
      // @ts-expect-error hide `this`
      // tslint:disable-next-line:ban-comma-operator
      (0, ref.current!)(...args),
    []
  );
}

interface UseTouchRippleProps {
  disabled: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
  rippleRef: React.RefObject<TouchRippleActions>;
}

interface RippleEventHandlers {
  onBlur: React.FocusEventHandler;
  onContextMenu: React.MouseEventHandler;
  onDragLeave: React.DragEventHandler;
  onMouseDown: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
  onTouchEnd: React.TouchEventHandler;
  onTouchMove: React.TouchEventHandler;
  onTouchStart: React.TouchEventHandler;
}

const useTouchRipple = (props: UseTouchRippleProps) => {
  const { disabled, disableRipple, disableTouchRipple, rippleRef } = props;

  function useRippleHandler(
    rippleAction: keyof TouchRippleActions,
    skipRippleAction = disableTouchRipple
  ) {
    return useEventCallback((event: React.SyntheticEvent) => {
      if (!skipRippleAction && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleBlur = useRippleHandler('stop', false);
  const handleMouseDown = useRippleHandler('start');
  const handleContextMenu = useRippleHandler('stop');
  const handleDragLeave = useRippleHandler('stop');
  const handleMouseUp = useRippleHandler('stop');
  const handleMouseLeave = useRippleHandler('stop');
  const handleTouchStart = useRippleHandler('start');
  const handleTouchEnd = useRippleHandler('stop');
  const handleTouchMove = useRippleHandler('stop');

  const [mountedState, setMountedState] = React.useState(false);

  React.useEffect(() => {
    setMountedState(true);
  }, []);

  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers = {
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onContextMenu: handleContextMenu,
      onDragLeave: handleDragLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    } as RippleEventHandlers;

    return (otherEvents: Partial<RippleEventHandlers> = {}) => {
      const eventNames = Object.keys(
        rippleHandlers
      ) as (keyof RippleEventHandlers)[];
      const wrappedEvents = eventNames.map(eventName => ({
        name: eventName,
        handler: (ev: any) => {
          otherEvents[eventName]?.(ev);
          rippleHandlers[eventName](ev);
        },
      }));

      return wrappedEvents.reduce((acc, current) => {
        acc[current.name] = current.handler;
        return acc;
      }, {} as RippleEventHandlers);
    };
  }, [
    handleBlur,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleContextMenu,
    handleDragLeave,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
  ]);

  return {
    enableTouchRipple,
    getRippleHandlers,
  };
};

export default useTouchRipple;
