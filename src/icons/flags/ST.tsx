import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const ST = forwardRef<SVGSVGElement, Props>(
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
        <path d="M0 0h640v480H0z" fill="#12ad2b" />
        <path d="M0 137.1h640V343H0z" fill="#ffce00" />
        <path d="M0 0v480l240-240" fill="#d21034" />
        <g id={`${uniqueId}-0`} transform="translate(351.6 240) scale(.34286)">
          <g id={`${uniqueId}-1`}>
            <path
              d="M0-200V0h100"
              id={`${uniqueId}-2`}
              transform="rotate(18 0 -200)"
            />
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
          <use
            height="100%"
            transform="rotate(-72)"
            width="100%"
            xlinkHref={`#${uniqueId}-1`}
          />
        </g>
        <use
          height="100%"
          transform="translate(-523.2)"
          width="100%"
          x="700"
          xlinkHref={`#${uniqueId}-0`}
        />
      </FlagIconBase>
    );
  },
);
