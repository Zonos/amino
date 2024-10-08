import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const AZ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 640 480"
      width={width}
    >
      <path d="M.1 0h640v480H.1z" fill="#3f9c35" />
      <path d="M.1 0h640v320H.1z" fill="#ed2939" />
      <path d="M.1 0h640v160H.1z" fill="#00b9e4" />
      <circle cx="304" cy="240" fill="#fff" r="72" />
      <circle cx="320" cy="240" fill="#ed2939" r="60" />
      <path
        d="m384 200 7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200z"
        fill="#fff"
      />
    </FlagIconBase>
  ),
);
