import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GD = forwardRef<SVGSVGElement, Props>(
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
          <g id={`${uniqueId}-0`}>
            <g id={`${uniqueId}-1`}>
              <path
                d="M0-1v1h.5"
                fill="#fcd116"
                id={`${uniqueId}-2`}
                transform="rotate(18 0 -1)"
              />
              <use transform="scale(-1 1)" xlinkHref={`#${uniqueId}-2`} />
            </g>
            <use transform="rotate(72)" xlinkHref={`#${uniqueId}-1`} />
            <use transform="rotate(144)" xlinkHref={`#${uniqueId}-1`} />
            <use transform="rotate(216)" xlinkHref={`#${uniqueId}-1`} />
            <use transform="rotate(288)" xlinkHref={`#${uniqueId}-1`} />
          </g>
        </defs>
        <path d="M0 0h640v480H0z" fill="#ce1126" />
        <path d="M67.2 67.2h505.6v345.6H67.2z" fill="#007a5e" />
        <path d="M67.2 67.3h505.6L67.2 412.9h505.6z" fill="#fcd116" />
        <circle cx="319.9" cy="240.1" fill="#ce1126" r="57.6" />
        <use
          height="100%"
          transform="matrix(52.8 0 0 52.8 320 240)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(-30.3)"
          width="100%"
          x="-100"
          xlinkHref={`#${uniqueId}-3`}
        />
        <use
          height="100%"
          id={`${uniqueId}-3`}
          transform="matrix(31.2 0 0 31.2 320 33.6)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(30.3)"
          width="100%"
          x="100"
          xlinkHref={`#${uniqueId}-3`}
        />
        <path
          d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45l-22.2 11.8z"
          fill="#ce1126"
        />
        <path
          d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8z"
          fill="#fcd116"
        />
        <use
          height="100%"
          transform="translate(-30.3 414.6)"
          width="100%"
          x="-100"
          xlinkHref={`#${uniqueId}-3`}
        />
        <use
          height="100%"
          transform="matrix(31.2 0 0 31.2 320 448.2)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(30.3 414.6)"
          width="100%"
          x="100"
          xlinkHref={`#${uniqueId}-3`}
        />
      </FlagIconBase>
    );
  },
);
