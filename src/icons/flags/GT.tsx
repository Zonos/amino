import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#58A5FF"
            fillRule="evenodd"
            d="M11 0h5v12h-5V0ZM0 0h6v12H0V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M5 0h6v12H5V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#C6C6C6"
            d="m6.382 8.519-.363-.344 3.844-4.064.363.344-3.844 4.064Z"
          />
          <path
            fill="#5AB92D"
            fillRule="evenodd"
            d="M6.492 4.053s-1.23.742-1.23 2.604c0 1.861 2.996 2.113 2.996 2.113S6.465 7.677 6.23 6.894c-.234-.783.262-2.841.262-2.841Z"
            clipRule="evenodd"
          />
          <path
            fill="#5AB92D"
            fillRule="evenodd"
            d="M9.527 4.053s1.23.742 1.23 2.604c0 1.861-2.995 2.113-2.995 2.113S9.646 7.69 9.91 6.657c.264-1.033-.383-2.604-.383-2.604Z"
            clipRule="evenodd"
          />
          <path
            fill="#5AB92D"
            d="m7.404 3.8.498.045c-.017.18.082.364.326.561.784.635 1.206 1.426.875 2.325-.24.653-.565 1.204-.977 1.651l-.368-.339c.366-.397.658-.891.876-1.484.237-.646-.084-1.25-.72-1.764-.364-.294-.543-.629-.51-.995Z"
          />
          <path
            fill="#EFE298"
            fillRule="evenodd"
            d="m7.087 4.905.525 1.483h-.386s-.14.468.123.468h1.614s.176-.118.088-.468c-.088-.351-.532-1.32-.532-1.32s.19-.16.19-.279c0-.119-.19-.132-.19-.132H7.322c-.153.026-.235.248-.235.248Z"
            clipRule="evenodd"
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
