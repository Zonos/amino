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
      <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
        <g clipPath={`url(#${ids[1]})`}>
          <mask
            height="12"
            id={`${ids[0]}`}
            maskUnits="userSpaceOnUse"
            width="16"
            x="0"
            y="0"
          >
            <path d="M0 0h16v12H0z" fill="#fff" />
          </mask>
          <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[0]})`}>
            <path d="M0 0h16v12H0V0Z" fill="#9898A0" />
            <path d="M0 0v4h16V0H0Z" fill="#D6D6D9" />
            <path d="M0 8v4h16V8H0Z" fill="#5B5B60" />
          </g>
        </g>
        <defs>
          <clipPath id={`${ids[1]}`}>
            <rect fill="#fff" height="12" rx="1" width="16" />
          </clipPath>
        </defs>
      </FlagIconBase>
    );
  },
);
