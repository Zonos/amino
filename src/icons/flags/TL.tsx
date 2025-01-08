import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const TL = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0 0h682.7v512H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="scale(.9375)"
        >
          <path d="M0 0h1031.2v512H0z" fill="#cb000f" />
          <path d="M0 0c3.2 0 512 256.7 512 256.7L0 512V0z" fill="#f8c00c" />
          <path d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512V0z" />
          <path
            d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
