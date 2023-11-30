import { useEffect } from 'react';

export type RippleProps = {
  className: string;
  /** duration of the ripple */
  duration: number;
  style: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  /** Removes the ripple */
  destroy: () => void;
};

export const Ripple = ({
  className,
  destroy,
  duration,
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
        height: `${style.height}px`,
        left: `${style.left}px`,
        top: `${style.top}px`,
        width: `${style.width}px`,
      }}
    />
  );
};
