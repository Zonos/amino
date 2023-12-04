import { useEffect } from 'react';

export type RippleProps = {
  className: string;
  /** duration of the ripple */
  duration: number;
  rippleStyle: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  style?: React.CSSProperties;
  /** Removes the ripple */
  destroy: () => void;
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
