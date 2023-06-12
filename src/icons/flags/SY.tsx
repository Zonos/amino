import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const SY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 640 480" width={width}>
    <rect
      fill="#fff"
      fillRule="evenodd"
      height="160"
      rx="0"
      ry="0"
      width="640"
      y="160"
    />
    <rect fillRule="evenodd" height="160" rx="0" ry="0" width="640" y="320" />
    <path d="M0 0h640v160H0z" fill="red" fillRule="evenodd" />
    <path
      d="m201.9 281-28.8-20.9-28.7 21.1 10.7-34.2-28.7-21.2 35.4-.3 11-34.1 11.3 34h35.4L191 246.9l10.9 34.2zm307.6 0-28.8-20.9-28.7 21.1 10.7-34.2-28.6-21.2 35.4-.3 11-34.1 11.2 34h35.4l-28.5 21.4 11 34.2z"
      fill="#090"
      fillRule="evenodd"
    />
  </FlagIconBase>
));
