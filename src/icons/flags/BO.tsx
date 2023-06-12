import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BO = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[2]})`}>
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
        <g mask={`url(#${ids[0]})`}>
          <path
            clipRule="evenodd"
            d="M0 0v12h16V0H0Z"
            fill="#FECA00"
            fillRule="evenodd"
          />
          <mask
            height="12"
            id={`${ids[1]}`}
            maskUnits="userSpaceOnUse"
            width="16"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0v12h16V0H0Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              clipRule="evenodd"
              d="M0 0v4h16V0H0Z"
              fill="#DB501C"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M0 8v4h16V8H0Z"
              fill="#5EAA22"
              fillRule="evenodd"
            />
            <path
              d="M5.824 5.63S5.638 7.534 7.33 7.534h1.261s1.781-.116 1.574-1.904"
              stroke="#DB501C"
              strokeWidth=".75"
            />
            <path
              d="M9.125 5.9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z"
              fill="#FECA00"
              stroke="#68B9E8"
              strokeWidth=".75"
            />
            <path
              clipRule="evenodd"
              d="M8 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              fill="#DB501C"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M8.05 6.8c.47 0 .85-.18.85-.4 0-.22-.38-.4-.85-.4s-.85.18-.85.4c0 .22.38.4.85.4Z"
              fill="#5EAA22"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M8.05 5c.663 0 1.2-.18 1.2-.4 0-.221-.537-.4-1.2-.4-.663 0-1.2.179-1.2.4 0 .22.537.4 1.2.4Z"
              fill="#674F28"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
