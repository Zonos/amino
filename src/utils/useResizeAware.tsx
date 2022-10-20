import React, { ReactNode, useCallback, useMemo, useState } from 'react';

import { ResizeListener } from './useResizeAware/_ResizeListener';

const defaultReporter = (target: HTMLElement | null) => {
  return {
    width: target?.offsetWidth || null,
    height: target?.offsetHeight || null,
  };
};

export type UseResizeAwareProps = [
  ReactNode,
  ReturnType<typeof defaultReporter>
];

/** @resource https://github.com/FezVrasta/react-resize-aware */
/**
 * Hook to detect element when it changes in size (height / width)
 * @NOTE Make sure the measured element has `position != initial`
 * (`relative`, `absolute`, or `fixed` will work)
 * @example
 * import React from 'react';
  import { useResizeAware } from 'src/utils/useResizeAware';

  const App = () => {
    const [resizeListener, sizes] = useResizeAware();

    return (
      <div style={{ position: 'relative' }}>
        {resizeListener}
        Your content here. (div sizes are {sizes.width} x {sizes.height})
      </div>
    );
  };
 */
export const useResizeAware = (): UseResizeAwareProps => {
  const [sizes, setSizes] = useState(defaultReporter(null));
  const onResize = useCallback(
    ref => setSizes(defaultReporter(ref.current)),
    []
  );

  const resizeListenerNode = useMemo(
    () => <ResizeListener onResize={onResize} />,
    [onResize]
  );

  return [resizeListenerNode, sizes];
};
