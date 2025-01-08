import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CU = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-32 0h682.7v512H-32z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="translate(30) scale(.94)"
        >
          <path d="M-32 0h768v512H-32z" fill="#0050f0" />
          <path
            d="M-32 102.4h768v102.4H-32zm0 204.8h768v102.4H-32z"
            fill="#fff"
          />
          <path d="m-32 0 440.7 255.7L-32 511V0z" fill="#ed0000" />
          <path
            d="M161.8 325.5 114.3 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3 18 58z"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
