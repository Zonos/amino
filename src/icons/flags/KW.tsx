import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const KW = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase
        borderRadius={borderRadius}
        height={height}
        ref={ref}
        viewBox="0 0 640 480"
        width={width}
      >
        <defs>
          <clipPath id={`${ids[0]}`}>
            <path d="M0 0h682.7v512H0z" fillOpacity=".7" />
          </clipPath>
        </defs>
        <g
          clipPath={`url(#${ids[0]})`}
          fillRule="evenodd"
          strokeWidth="1pt"
          transform="scale(.9375)"
        >
          <path d="M0 170.6h1024v170.7H0z" fill="#fff" />
          <path d="M0 341.3h1024V512H0z" fill="#f31830" />
          <path d="M0 0h1024v170.7H0z" fill="#00d941" />
          <path d="M0 0v512l255.4-170.7.6-170.8L0 0z" />
        </g>
      </FlagIconBase>
    );
  },
);
