import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const KM = forwardRef<SVGSVGElement, Props>(
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
          <path d="M0 0h768.8v128H0z" fill="#ff0" />
          <path d="M0 128h768.8v128H0z" fill="#fff" />
          <path d="M0 256h768.8v128H0z" fill="#be0027" />
          <path d="M0 384h768.8v128H0z" fill="#3b5aa3" />
          <path d="M0 0v512l381.9-255.3L0 0z" fill="#239e46" />
          <path
            d="M157.2 141.4c-85-4.3-123.9 63.5-123.8 115.9-.2 62 58.6 113 112.8 110C117 353.5 81.2 314.6 81 257c-.3-52.1 29.5-97.5 76.3-115.6z"
            fill="#fff"
          />
          <path
            d="m156 197-12-9.3-14.6 4.6 5.2-14.4-8.8-12.4 15.2.6 9-12.3 4.3 14.7 14.4 4.8-12.6 8.5zm-.3 52.1-12-9.4-14.6 4.6 5.3-14.3-8.9-12.4 15.3.5 9-12.2 4.2 14.6 14.5 4.9-12.7 8.5zm.2 52.6-12-9.4-14.5 4.6 5.2-14.3-8.8-12.4 15.2.5 9-12.2 4.3 14.6 14.4 4.8-12.6 8.6zm-.2 53-12-9.3L129 350l5.3-14.4-8.9-12.4 15.3.6 9-12.3 4.2 14.7 14.5 4.8-12.7 8.5z"
            fill="#fff"
          />
        </g>
      </FlagIconBase>
    );
  },
);
