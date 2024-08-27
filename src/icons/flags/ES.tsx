import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const ES = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => (
  <FlagIconBase ref={ref} height={height} viewBox="0 0 24 25" width={width}>
    <path
      d="M24 18.333A2.667 2.667 0 0 1 21.333 21H2.667A2.667 2.667 0 0 1 0 18.333v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.333v12Z"
      fill="#C60A1D"
    />
    <path d="M0 8.333h24v8H0v-8Z" fill="#FFC400" />
    <path d="M6 11.666v2a2 2 0 1 0 4 0v-2H6Z" fill="#EA596E" />
    <path d="M8 11h2v2H8v-2Z" fill="#F4A2B2" />
    <path d="M6 11h2v2H6v-2Z" fill="#DD2E44" />
    <path
      d="M8 11c1.105 0 2-.448 2-1s-.895-1-2-1-2 .448-2 1 .895 1 2 1Z"
      fill="#EA596E"
    />
    <path
      d="M8 10c1.105 0 2-.224 2-.5S9.105 9 8 9s-2 .224-2 .5.895.5 2 .5Z"
      fill="#FFAC33"
    />
    <path
      d="M4.667 11h.666v4.667h-.666V11Zm6 0h.666v4.667h-.666V11Z"
      fill="#99AAB5"
    />
    <path
      d="M4 15h2v.667H4V15Zm6 0h2v.667h-2V15Zm-5.333-4.667h.666V11h-.666v-.667Zm6 0h.666V11h-.666v-.667Z"
      fill="#66757F"
    />
  </FlagIconBase>
));
