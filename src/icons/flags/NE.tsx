import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const NE = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#0db02b" />
      <path d="M0 0h640v320H0z" fill="#fff" />
      <path d="M0 0h640v160H0z" fill="#e05206" />
      <circle cx="320" cy="240" fill="#e05206" r="68" />
    </FlagIconBase>
  ),
);
