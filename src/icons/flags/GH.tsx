import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const GH = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 0h640v480H0z" fill="#006b3f" />
      <path d="M0 0h640v320H0z" fill="#fcd116" />
      <path d="M0 0h640v160H0z" fill="#ce1126" />
      <path d="m320 160 52 160-136.1-98.9H404L268 320z" />
    </FlagIconBase>
  ),
);
