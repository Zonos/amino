import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MZ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[3]})`}>
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
            fill="#F7FCFF"
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
              fill="#FECA00"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M0 8v4h16V8H0Z"
              fill="#093"
              fillRule="evenodd"
            />
            <path d="M0 3.5h-.5v5h17v-5H0Z" fill="#272727" stroke="#fff" />
          </g>
          <path
            clipRule="evenodd"
            d="M0 0v12l9-6-9-6Z"
            fill="#F50100"
            fillRule="evenodd"
          />
          <mask
            height="12"
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            width="9"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d="M0 0v12l9-6-9-6Z"
              fill="#fff"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              clipRule="evenodd"
              d="m4.034 7.177-1.89 1.525.868-2.038-1.49-1.435H3.28L4.002 3.5l.766 1.73h1.754L4.955 6.663l.784 2.038-1.705-1.525Z"
              fill="#FECA00"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="m3.078 5.992-.32 1.07s1.081-.01 1.211.099c.392-.244 1.198-.099 1.198-.099l-.429-1.145s-.543-.246-.769-.111c-.552-.125-.891.186-.891.186Z"
              fill="#F7FCFF"
              fillRule="evenodd"
            />
            <path
              d="M5.782 7.608a.25.25 0 0 1-.4.3l-2.09-2.775a.25.25 0 1 1 .4-.3l2.09 2.775Z"
              fill="#000"
            />
            <path
              d="m3.487 4.92-.2-.24"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth=".5"
            />
            <path
              clipRule="evenodd"
              d="m2.802 4.681-.604.968.302.523.691-1.027.125-.318-.125-.146h-.389ZM2.02 7.554l.464.54L5.998 4.02l-1.597.996L2.02 7.554Z"
              fill="#000"
              fillRule="evenodd"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
