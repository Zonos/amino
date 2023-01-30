import * as React from 'react';

import { IRippleActions } from './RippleGroup';

interface IRippleEventHandlers {
  onBlur: React.FocusEventHandler;
  onContextMenu: React.MouseEventHandler;
  onDragLeave: React.DragEventHandler;
  onMouseDown: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
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

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers: IRippleEventHandlers = {
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onContextMenu: handleContextMenu,
      onDragLeave: handleDragLeave,
    };

    return (otherEvents: Partial<IRippleEventHandlers>) => {
      const eventNames = Object.keys(
        rippleHandlers
      ) as (keyof IRippleEventHandlers)[];
      const wrappedEvents = eventNames.map(eventName => ({
        name: eventName,
        handler: (
          ev: React.FocusEvent<Element, Element> &
            React.MouseEvent<Element, MouseEvent> &
            React.DragEvent<Element>
        ) => {
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
  ]);

  return {
    rippleEnabled: rippleEnabled && !disabled,
    getRippleHandlers,
  };
};
