import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const SS = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M0 336h640v144H0z" fill="#078930" />
      <path d="M0 144h640v192H0z" fill="#fff" />
      <path d="M0 0h640v144H0z" />
      <path d="M0 168h640v144H0z" fill="#da121a" />
      <path d="m0 0 415.7 240L0 480z" fill="#0f47af" />
      <path d="M200.7 194.8 61.7 240l139 45.1L114.9 167v146z" fill="#fcdd09" />
    </FlagIconBase>
  ),
);
