import React, { MutableRefObject, useCallback, useRef } from 'react';

// This automatically attaches to itself the resize event listener
// and adds onResize as callback
export const ResizeListener = ({
  onResize,
}: {
  onResize: (ref: MutableRefObject<HTMLIFrameElement | null>) => void;
}) => {
  const ref = useRef<HTMLIFrameElement | null>(null);

  const getTarget = () =>
    ref.current &&
    ref.current.contentDocument &&
    ref.current.contentDocument.defaultView;

  const load = useCallback(() => {
    // trigger onResize event on mount to provide initial sizes
    onResize(ref);
    const target = getTarget();
    if (target) {
      target.addEventListener('resize', () => onResize(ref));
    }
  }, [onResize]);

  React.useEffect(() => {
    if (getTarget()) {
      load();
    } else if (ref.current && ref.current.addEventListener) {
      ref.current.addEventListener('load', load);
    }

    // clean event listener on unmount
    return () => {
      // Ensure the target exists and is in fact an event listener
      // this fixes an issue where contentDocument.defaultView is not a real window object
      // as can be the case when used with React portals
      const target = getTarget();
      const isListener =
        target && typeof target.removeEventListener === 'function';
      if (isListener) {
        target.removeEventListener('resize', () => onResize(ref));
      }
    };
  }, [onResize, load]);

  return (
    <iframe
      style={{
        display: 'block',
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -999999,
      }}
      src="about:blank"
      title="blank iframe"
      ref={ref}
      aria-hidden
      tabIndex={-1}
    />
  );
};
