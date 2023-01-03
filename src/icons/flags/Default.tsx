import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const Default = forwardRef<SVGSVGElement, Props>(
  ({ height, width }, ref) => {
    const ids = useStableUniqueId(2);
    return (
      <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
        <g clipPath={`url(#${ids[1]})`}>
          <mask
            id={`${ids[0]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" d="M0 0h16v12H0z" />
          </mask>
          <g fillRule="evenodd" clipRule="evenodd" mask={`url(#${ids[0]})`}>
            <path fill="#9898A0" d="M0 0h16v12H0V0Z" />
            <path fill="#D6D6D9" d="M0 0v4h16V0H0Z" />
            <path fill="#5B5B60" d="M0 8v4h16V8H0Z" />
          </g>
        </g>
        <defs>
          <clipPath id={`${ids[1]}`}>
            <rect width="16" height="12" fill="#fff" rx="1" />
          </clipPath>
        </defs>
      </FlagIconBase>
    );
  }
);
