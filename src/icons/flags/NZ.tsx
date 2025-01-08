import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const NZ = forwardRef<SVGSVGElement, Props>(
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
            <path d="M0 0h600v300H0z" />
          </clipPath>
          <clipPath id={`${uniqueId}-1`}>
            <path d="m0 0 300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
          </clipPath>
          <g id={`${uniqueId}-2`}>
            <g id={`${uniqueId}-3`}>
              <path d="M0-.3v.5l1-.5z" />
              <path d="M.213.256-.081-.15l1.103-.183z" />
            </g>
            <use transform="scale(-1 1)" xlinkHref={`#${uniqueId}-3`} />
            <use transform="rotate(72 0 0)" xlinkHref={`#${uniqueId}-3`} />
            <use transform="rotate(-72 0 0)" xlinkHref={`#${uniqueId}-3`} />
            <use
              transform="scale(-1 1) rotate(72)"
              xlinkHref={`#${uniqueId}-3`}
            />
          </g>
        </defs>
        <path d="M0 0h640v480H0z" fill="#00247d" fillRule="evenodd" />
        <g transform="translate(-93 36.1) scale(.66825)">
          <use
            fill="#fff"
            height="100%"
            transform="matrix(45.4 0 0 45.4 900 120)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            fill="#cc142b"
            height="100%"
            transform="matrix(30 0 0 30 900 120)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
        </g>
        <g transform="rotate(82 534.2 125) scale(.66825)">
          <use
            fill="#fff"
            height="100%"
            transform="rotate(-82 519 -457.7) scale(40.4)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            fill="#cc142b"
            height="100%"
            transform="rotate(-82 519 -457.7) scale(25)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
        </g>
        <g transform="rotate(82 534.2 125) scale(.66825)">
          <use
            fill="#fff"
            height="100%"
            transform="rotate(-82 668.6 -327.7) scale(45.4)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            fill="#cc142b"
            height="100%"
            transform="rotate(-82 668.6 -327.7) scale(30)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
        </g>
        <g transform="translate(-93 36.1) scale(.66825)">
          <use
            fill="#fff"
            height="100%"
            transform="matrix(50.4 0 0 50.4 900 480)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
          <use
            fill="#cc142b"
            height="100%"
            transform="matrix(35 0 0 35 900 480)"
            width="100%"
            xlinkHref={`#${uniqueId}-2`}
          />
        </g>
        <path
          clipPath={`url(#${uniqueId}-0)`}
          d="m0 0 600 300M0 300 600 0"
          stroke="#fff"
          strokeWidth="60"
          transform="scale(.60681 .73139)"
        />
        <path
          clipPath={`url(#${uniqueId}-1)`}
          d="m0 0 600 300M0 300 600 0"
          stroke="#cc142b"
          strokeWidth="40"
          transform="scale(.60681 .73139)"
        />
        <path
          clipPath={`url(#${uniqueId}-0)`}
          color="#000"
          d="M151.7 0v79.4H0V140h151.7v79.4h60.7v-79.3H364V79.4H212.4V0z"
          fill="#fff"
          fontFamily="sansSerif"
          fontWeight="400"
          overflow="visible"
        />
        <path
          color="#000"
          d="M163.8 0v91.5H0v36.4h163.8v91.5h36.4V128h163.9V91.5H200.2V0z"
          fill="#cc142b"
          fontFamily="sansSerif"
          fontWeight="400"
          overflow="visible"
        />
      </FlagIconBase>
    );
  },
);
