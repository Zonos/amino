import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const PS = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const uniqueId = useId();
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${uniqueId}-0`}>
            <path d="M-118 0h682.7v512H-118z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          transform="translate(110.6) scale(.9375)"
        >
          <g fillRule="evenodd" strokeWidth="1pt">
            <path d="M-246 0H778v170.7H-246z" />
            <path d="M-246 170.7H778v170.6H-246z" fill="#fff" />
            <path d="M-246 341.3H778V512H-246z" fill="#090" />
            <path d="m-246 512 512-256L-246 0v512z" fill="red" />
          </g>
        </g>
      </FlagIconBase>
    );
  },
);
