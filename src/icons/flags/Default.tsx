import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const Default = forwardRef<SVGSVGElement, Props>(
  ({ height, width }, ref) => {
    const ids = useStableUniqueId(1);
    return (
      <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
        <mask
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`} fillRule="evenodd" clipRule="evenodd">
          <path d="M0 0h16v12H0V0Z" fill="#9898A0" />
          <path d="M0 0v4h16V0H0Z" fill="#D6D6D9" />
          <path d="M0 8v4h16V8H0Z" fill="#5B5B60" />
        </g>
      </FlagIconBase>
    );
  }
);
