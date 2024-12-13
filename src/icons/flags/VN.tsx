import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const VN = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M-85.3 0h682.6v512H-85.3z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${ids[0]})`}
          fillRule="evenodd"
          transform="translate(80) scale(.9375)"
        >
          <path d="M-128 0h768v512h-768z" fill="#ec0015" />
          <path
            d="M349.6 381 260 314.3l-89 67.3L204 272l-89-67.7 110.1-1 34.2-109.4L294 203l110.1.1-88.5 68.4 33.9 109.6z"
            fill="#ff0"
          />
        </g>
      </FlagIconBase>
    );
  },
);
