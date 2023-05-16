import * as React from 'react';

import type { IRippleActions } from './RippleGroup';

interface IRippleEventHandlers {
  onMouseDown: React.MouseEventHandler;
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

  const handleMouseDown = useRippleHandler('start');

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers: IRippleEventHandlers = {
      onMouseDown: handleMouseDown,
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
  }, [handleMouseDown]);

  return {
    rippleEnabled: rippleEnabled && !disabled,
    getRippleHandlers,
  };
};
