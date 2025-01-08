import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const KE = forwardRef<SVGSVGElement, Props>(
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
          <path
            d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
            id={`${uniqueId}-0`}
            strokeMiterlimit="10"
          />
        </defs>
        <path d="M0 0h640v480H0z" fill="#fff" />
        <path d="M0 0h640v144H0z" />
        <path d="M0 336h640v144H0z" fill="#060" />
        <g id={`${uniqueId}-1`} transform="matrix(3 0 0 3 320 240)">
          <use
            height="100%"
            stroke="#000"
            width="100%"
            xlinkHref={`#${uniqueId}-0`}
          />
          <use
            fill="#fff"
            height="100%"
            width="100%"
            xlinkHref={`#${uniqueId}-0`}
          />
        </g>
        <use
          height="100%"
          transform="matrix(-1 0 0 1 640 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-1`}
        />
        <path
          d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
          fill="#b00"
        />
        <path
          d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
          id={`${uniqueId}-2`}
        />
        <use
          height="100%"
          transform="matrix(-1 0 0 1 640 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-2`}
        />
        <g fill="#fff" transform="matrix(3 0 0 3 320 240)">
          <ellipse rx="4" ry="6" />
          <path d="M1 5.8s4 8 4 21-4 21-4 21z" id={`${uniqueId}-3`} />
          <use
            height="100%"
            transform="scale(-1)"
            width="100%"
            xlinkHref={`#${uniqueId}-3`}
          />
          <use
            height="100%"
            transform="scale(-1 1)"
            width="100%"
            xlinkHref={`#${uniqueId}-3`}
          />
          <use
            height="100%"
            transform="scale(1 -1)"
            width="100%"
            xlinkHref={`#${uniqueId}-3`}
          />
        </g>
      </FlagIconBase>
    );
  },
);
