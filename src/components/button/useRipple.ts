import * as React from 'react';

import { IRippleActions } from './RippleGroup';

// /**
//  * https://github.com/facebook/react/issues/14099#issuecomment-440013892
//  */
// export function useEventCallback<Args extends unknown[], Return>(
//   fn: (...args: Args) => Return
// ): (...args: Args) => Return {
//   const ref = React.useRef(fn);
//   useEnhancedEffect(() => {
//     ref.current = fn;
//   });
//   return React.useCallback(
//     (...args: Args) =>
//       // @ts-expect-error hide `this`
//       // tslint:disable-next-line:ban-comma-operator
//       (0, ref.current!)(...args),
//     []
//   );
// }

interface IRippleEventHandlers {
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

type Props = {
  rippleRef: React.RefObject<IRippleActions>;
  disabled: boolean;
  rippleEnabled: boolean;
};

type Return = {
  /** Combines event handlers */
  getRippleHandlers(
    otherEvents: Partial<IRippleEventHandlers>
  ): IRippleEventHandlers;
  rippleEnabled: boolean;
};

export const useRipple = ({
  rippleRef,
  disabled,
  rippleEnabled,
}: Props): Return => {
  function useRippleHandler(
    rippleAction: keyof IRippleActions,
    skipRippleAction = !rippleEnabled
  ) {
    return React.useCallback(
      (event: React.SyntheticEvent) => {
        if (!skipRippleAction && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
      },
      [rippleAction, skipRippleAction]
    );
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

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers: IRippleEventHandlers = {
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onContextMenu: handleContextMenu,
      onDragLeave: handleDragLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
    };

    return (otherEvents: Partial<IRippleEventHandlers>) => {
      const eventNames = Object.keys(
        rippleHandlers
      ) as (keyof IRippleEventHandlers)[];
      const wrappedEvents = eventNames.map(eventName => ({
        name: eventName,
        handler: ev => {
          otherEvents[eventName]?.(ev);
          rippleHandlers[eventName](ev);
        },
      }));

      return wrappedEvents.reduce((acc, current) => {
        acc[current.name] = current.handler;
        return acc;
      }, {} as IRippleEventHandlers);
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
    rippleEnabled: rippleEnabled && !disabled,
    getRippleHandlers,
  };
};
