import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
        <g mask={`url(#${ids[0]})`}>
          <path d="M0 0h16v12H0z" fill="#F7FCFF" />
          <path
            clipRule="evenodd"
            d="M0 8h16v4H0V8Z"
            fill="#C51918"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M8.229.633h-.947v.848h.467l-.033 2.33H6.334V2.753h.474v-.847H5.86v.424h-.474v-.424h-.948v.847h.474v1.06h-.999v.847h.474v2.543h-.474v.848h9v-.848h-.947V4.66h.947v-.847h-.928l.023-1.06h.483v-.847h-.947v.424h-.474v-.424h-.947v.847h.464l-.023 1.06H9.137L9.17 1.48h.48V.633h-.947v.424h-.474V.633Z"
            fill="#DB000B"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M5.808 6.845a.553.553 0 1 1 1.105 0v.914H5.808v-.914Zm4.052 0a.553.553 0 0 1 1.106 0v.914H9.86v-.914Zm-2.21-.182a.737.737 0 0 1 1.474 0v1.463H7.65V6.663Z"
            fill="#272727"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="m8.661 7.599-.09.166-.169-.252-1.379.925 1.538.732 1.356-.887-1.256-.684Zm-.63.765.444-.297.469.255-.422.276-.49-.234Zm-.452 1.903h.737V11h-.737v-.733Z"
            fill="#E8AA00"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="M8 9h.874v2H8V9Z"
            fill="#E8AA00"
            fillRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[1]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
