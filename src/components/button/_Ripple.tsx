import { useEffect } from 'react';

export type RippleProps = {
  className: string;
  /** Removes the ripple */
  destroy: () => void;
  /** duration of the ripple */
  duration: number;
  rippleStyle: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  style?: React.CSSProperties;
};

export const Ripple = ({
  className,
  destroy,
  duration,
  rippleStyle,
  style,
}: RippleProps) => {
  useEffect(() => {
    const id = setTimeout(() => {
      destroy();
    }, duration);

    return () => {
      clearTimeout(id);
    };
  }, [destroy, duration]);

  return (
    <span
      className={className}
      style={{
        ...style,
        height: `${rippleStyle.height}px`,
        left: `${rippleStyle.left}px`,
        top: `${rippleStyle.top}px`,
        width: `${rippleStyle.width}px`,
      }}
    />
  );
};
