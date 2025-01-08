import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const HN = forwardRef<SVGSVGElement, Props>(
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
        <path d="M0 0h640v480H0z" fill="#0073cf" />
        <path d="M0 160h640v160H0z" fill="#fff" />
        <g
          fill="#0073cf"
          id={`${uniqueId}-0`}
          transform="translate(320 240) scale(26.66665)"
        >
          <g id={`${uniqueId}-1`}>
            <path d="m-.3 0 .5.1L0-1z" id={`${uniqueId}-2`} />
            <use
              height="100%"
              transform="scale(-1 1)"
              width="100%"
              xlinkHref={`#${uniqueId}-2`}
            />
          </g>
          <use
            height="100%"
            transform="rotate(72)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <use
            height="100%"
            transform="rotate(-72)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <use
            height="100%"
            transform="rotate(144)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
          <use
            height="100%"
            transform="rotate(-144)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
        </g>
        <use
          height="100%"
          transform="translate(133.3 -42.7)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(133.3 37.3)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(-133.3 -42.7)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="translate(-133.3 37.3)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
      </FlagIconBase>
    );
  },
);
