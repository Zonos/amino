import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const LC = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="M0 0h640v480H0z" fill="#65cfff" />
        <path d="m318.9 42 162.7 395.3-322.6.9L318.9 42z" fill="#fff" />
        <path d="m319 96.5 140.8 340-279 .8L319 96.5z" />
        <path
          d="m318.9 240.1 162.7 197.6-322.6.5 159.9-198.1z"
          fill="#ffce00"
        />
      </g>
    </FlagIconBase>
  ),
);
