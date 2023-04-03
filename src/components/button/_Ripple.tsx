import { useEffect } from 'react';

export type RippleProps = {
  /** Removes the ripple */
  destroy: () => void;
  /** duration of the ripple */
  duration: number;
  style: {
    width: number;
    height: number;
    left: number;
    top: number;
  };
};

export const Ripple = ({ destroy, duration, style }: RippleProps) => {
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
      className="ripple"
      style={{
        width: `${style.width}px`,
        height: `${style.height}px`,
        top: `${style.top}px`,
        left: `${style.left}px`,
      }}
    />
  );
};
