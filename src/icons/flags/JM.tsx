import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const JM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 640 480"
      width={width}
    >
      <g fillRule="evenodd">
        <path d="m0 0 320 240L0 480zm640 0L320 240l320 240z" />
        <path d="m0 0 320 240L640 0zm0 480 320-240 320 240z" fill="#090" />
        <path d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" fill="#fc0" />
        <path d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" fill="#fc0" />
      </g>
    </FlagIconBase>
  ),
);
