import * as React from 'react';

import type { RippleActions } from 'src/components/button/RippleGroup';

type RippleEventHandlers = {
  onMouseDown: React.MouseEventHandler;
};

type Props = {
  disabled: boolean;
  rippleEnabled: boolean;
  rippleRef: React.RefObject<RippleActions>;
};

type Return = {
  /** Combines event handlers */
  getRippleHandlers(
    otherEvents: Partial<RippleEventHandlers>,
  ): RippleEventHandlers;
  rippleEnabled: boolean;
};

export const useRipple = ({
  disabled,
  rippleEnabled,
  rippleRef,
}: Props): Return => {
  function useRippleHandler(
    rippleAction: keyof RippleActions,
    skipRippleAction = !rippleEnabled,
  ) {
    return React.useCallback(
      (event: React.SyntheticEvent) => {
        if (!skipRippleAction && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
      },
      [rippleAction, skipRippleAction],
    );
  }

  const handleMouseDown = useRippleHandler('start');

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers: RippleEventHandlers = {
      onMouseDown: handleMouseDown,
    };

    return (otherEvents: Partial<RippleEventHandlers>) => {
      const eventNames = Object.keys(
        rippleHandlers,
      ) as (keyof RippleEventHandlers)[];
      const wrappedEvents = eventNames.map(eventName => ({
        handler: (
          ev: React.FocusEvent<Element, Element> &
            React.MouseEvent<Element, MouseEvent> &
            React.DragEvent<Element>,
        ) => {
          otherEvents[eventName]?.(ev);
          rippleHandlers[eventName](ev);
        },
        name: eventName,
      }));

      return wrappedEvents.reduce((acc, current) => {
        acc[current.name] = current.handler;
        return acc;
      }, {} as RippleEventHandlers);
    };
  }, [handleMouseDown]);

  return {
    getRippleHandlers,
    rippleEnabled: rippleEnabled && !disabled,
  };
};
