import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const TN = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-85.3 0h682.6v512H-85.3z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="translate(80) scale(.9375)"
        >
          <path d="M-128 0h768v512h-768z" fill="#e70013" />
          <path
            d="M385.8 255.8a129.1 129.1 0 1 1-258.2 0 129.1 129.1 0 0 1 258.2 0z"
            fill="#fff"
          />
          <path
            d="M256.7 341.4a85.7 85.7 0 0 1 0-171.3c11.8 0 25.3 2.8 34.4 9.5-62.6 2.3-78.5 55.5-78.5 76.9s10.1 69.1 78.5 76.2c-7.8 5-22.6 8.7-34.4 8.7z"
            fill="#e70013"
          />
          <path
            d="m332.1 291.8-38.9-14.2-25.7 32.4 1.5-41.3-38.8-14.5 39.8-11.4 1.7-41.3 23.2 34.3 39.8-11-25.5 32.5z"
            fill="#e70013"
          />
        </g>
      </FlagIconBase>
    );
  },
);
