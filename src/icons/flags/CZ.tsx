import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const CZ = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-74 0h682.7v512H-74z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="translate(69.4) scale(.94)"
        >
          <path d="M-74 0h768v512H-74z" fill="#e80000" />
          <path d="M-74 0h768v256H-74z" fill="#fff" />
          <path d="m-74 0 382.7 255.7L-74 511V0z" fill="#00006f" />
        </g>
      </FlagIconBase>
    );
  },
);
