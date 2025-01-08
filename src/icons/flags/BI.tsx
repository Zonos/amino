import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BI = forwardRef<SVGSVGElement, Props>(
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
            <path d="M-90.5 0H592v512H-90.5z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${uniqueId}-0)`}
          fillRule="evenodd"
          transform="translate(84.9) scale(.9375)"
        >
          <path
            d="m-178 0 428.8 256L-178 512zm857.6 0L250.8 256l428.8 256z"
            fill="#00cf00"
          />
          <path
            d="m-178 0 428.8 256L679.6 0zm0 512 428.8-256 428.8 256z"
            fill="red"
          />
          <path
            d="M679.6 0h-79.9L-178 464.3V512h79.9L679.6 47.7z"
            fill="#fff"
          />
          <path
            d="M398.9 256a148 148 0 1 1-296.1 0 148 148 0 0 1 296 0z"
            fill="#fff"
          />
          <path d="M-178 0v47.7L599.7 512h79.9v-47.7L-98.1 0z" fill="#fff" />
          <path
            d="m280 200.2-19.3.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm-64.6 111.6-19.2.3-10 16.4-9.9-16.4-19.2-.4 9.3-16.9-9.2-16.8 19.2-.4 10-16.4 9.9 16.5 19.2.4-9.3 16.8zm130.6 0-19.2.3-10 16.4-10-16.4-19.1-.4 9.3-16.9-9.3-16.8 19.2-.4 10-16.4 10 16.5 19.2.4-9.4 16.8z"
            fill="red"
            stroke="#00de00"
            strokeWidth="3.9"
          />
        </g>
      </FlagIconBase>
    );
  },
);
