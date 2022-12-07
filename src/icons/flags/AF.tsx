import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AF = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          <path fill="#67BD38" d="M11 0h5v12h-5V0Z" />
          <path fill="#D51700" d="M5 0h6v12H5V0Z" />
          <path fill="#272727" d="M0 0h5v12H0V0Z" />
          <path
            fill="#F7FCFF"
            d="M5 6.05a3.05 3.05 0 1 0 5.48-1.844l-.443 1.338A2.055 2.055 0 0 1 9.3 7.675V5.3H9a1 1 0 0 0-2 0h-.3v2.293a2.045 2.045 0 0 1-.662-1.937H6l-.37-1.462A3.037 3.037 0 0 0 5 6.05Zm2.7.204V8.07a2.063 2.063 0 0 0 .6.015v-1.83a1 1 0 0 1-.6 0Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
