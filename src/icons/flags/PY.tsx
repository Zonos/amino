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
            fill="#F7FCFF"
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
              fill="#272727"
              fillRule="evenodd"
              d="M6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              clipRule="evenodd"
            />
            <path
              fill="#F05234"
              fillRule="evenodd"
              d="M0 0v4h16V0H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#3D58DB"
              fillRule="evenodd"
              d="M0 8v4h16V8H0Z"
              clipRule="evenodd"
            />
            <path
              fill="#73BE4A"
              d="m7.289 4.928.285.411c-.285.197-.37.47-.262.875.107.398.343.584.76.599l-.018.5c-.636-.023-1.061-.359-1.225-.97-.16-.6-.006-1.092.46-1.415Z"
            />
            <path
              fill="#73BE4A"
              d="m8.712 4.928-.284.411c.284.197.37.47.261.875-.106.398-.342.584-.76.599l.018.5c.636-.023 1.061-.359 1.225-.97.161-.6.007-1.092-.46-1.415Z"
            />
            <path
              fill="#FBCD17"
              fillRule="evenodd"
              d="M8.001 6.374a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
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
