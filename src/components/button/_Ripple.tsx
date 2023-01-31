export type RippleProps = {
  style: {
    width: number;
    height: number;
    left: number;
    top: number;
  };
};

export const Ripple = ({ style }: RippleProps) => (
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
