import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BB = forwardRef<SVGSVGElement, Props>(
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
        <path d="M0 0h640v480H0z" fill="#00267f" />
        <path d="M213.3 0h213.4v480H213.3z" fill="#ffc726" />
        <path
          d="M319.8 135.5c-7 19-14 38.6-29.2 53.7 4.7-1.6 13-3 18.2-2.8v79.5l-22.4 3.3c-.8 0-1-1.3-1-3-2.2-24.7-8-45.5-14.8-67-.5-2.9-9-14-2.4-12 .8 0 9.5 3.6 8.2 1.9a85 85 0 0 0-46.4-24c-1.5-.3-2.4.5-1 2.2 22.4 34.6 41.3 75.5 41.1 124 8.8 0 30-5.2 38.7-5.2v56.1H320l2.5-156.7z"
          id={`${uniqueId}-0`}
        />
        <use
          height="100%"
          transform="matrix(-1 0 0 1 639.5 0)"
          width="100%"
          xlinkHref={`#${uniqueId}-0`}
        />
      </FlagIconBase>
    );
  },
);
