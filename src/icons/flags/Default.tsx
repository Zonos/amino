import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const Default = forwardRef<SVGSVGElement, Props>(
  ({ height, width }, ref) => (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 24 25" width={width}>
      <path d="M0 10.111h24v6H0v-6Z" fill="#9898A0" />
      <path
        d="M21.333 4.111H2.667A2.667 2.667 0 0 0 0 6.778v3.333h24V6.778a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#D6D6D9"
      />
      <path
        d="M21.333 21.445H2.667A2.667 2.667 0 0 1 0 18.778V16.11h24v2.667a2.667 2.667 0 0 1-2.667 2.667Z"
        fill="#5B5B60"
      />
    </FlagIconBase>
  ),
);
