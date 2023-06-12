import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
              d="M6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              fill="#272727"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M0 0v4h16V0H0Z"
              fill="#F05234"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M0 8v4h16V8H0Z"
              fill="#3D58DB"
              fillRule="evenodd"
            />
            <path
              d="m7.289 4.928.285.411c-.285.197-.37.47-.262.875.107.398.343.584.76.599l-.018.5c-.636-.023-1.061-.359-1.225-.97-.16-.6-.006-1.092.46-1.415Z"
              fill="#73BE4A"
            />
            <path
              d="m8.712 4.928-.284.411c.284.197.37.47.261.875-.106.398-.342.584-.76.599l.018.5c.636-.023 1.061-.359 1.225-.97.161-.6.007-1.092-.46-1.415Z"
              fill="#73BE4A"
            />
            <path
              clipRule="evenodd"
              d="M8.001 6.374a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              fill="#FBCD17"
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
