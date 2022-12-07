import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BN = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[2]})`}>
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
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#FFD221"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#313131"
              d="m-1.533 5.308 1.004-2.29 17.413 7.636-1.004 2.29-17.413-7.636Z"
            />
            <path
              fill="#FAF9F9"
              d="M-1.509 2.785-.505.495l18.28 8.012-1.004 2.29-18.28-8.012Z"
            />
            <path
              fill="#CF1225"
              fillRule="evenodd"
              d="M8 1.444a.5.5 0 0 0-.5.5v1.814a1.461 1.461 0 0 0-.634-.158c-.549 0-1.166.768-1.166.768s1.02.028 1.8.802v2.774c-.863-.229-1.234-1.107-1.136-2.903l-1.498-.082c-.157 2.884.908 4.546 3.155 4.546 2.235 0 3.337-1.647 3.262-4.525l-1.5.04c.048 1.833-.37 2.723-1.283 2.935v-2.88c.765-.682 1.7-.707 1.7-.707S9.583 3.6 9.034 3.6c-.198 0-.38.05-.534.113v-1.77a.5.5 0 0 0-.5-.5ZM2.91 5.492a.5.5 0 1 1 .18-.984c.999.183 1.542.878 1.542 1.94v2.026a.5.5 0 1 1-1 0V6.449c0-.593-.212-.864-.722-.957Zm10.614-.582a.5.5 0 0 1-.402.582c-.51.093-.722.364-.722.957v2.025a.5.5 0 1 1-1 0V6.449c0-1.063.543-1.758 1.542-1.94a.5.5 0 0 1 .582.4ZM4.87 9.22l.826-.563c.463.68 1.21 1.02 2.303 1.02 1.1 0 1.793-.265 2.133-.758l.823.568c-.557.806-1.56 1.19-2.956 1.19-1.404 0-2.467-.484-3.13-1.457Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
