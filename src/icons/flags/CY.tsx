import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} fillRule="evenodd" clipRule="evenodd">
          <path
            d="M12.284 2.38S9.643 3.839 9.31 3.93c-.332.093-.11.149-.683.112-.573-.037-1.7.206-1.958.04-.258-.167-.35-.462-.369.037-.019.498.388.923-.13.96-.516.037-.572-.444-.923-.148-.35.295-.646.96-.868.794-.221-.166-.535-.61-.443-.185.092.425.37 1.495 1.256 1.513.886.019 1.071-.295 1.108-.036.037.258.425.295.517-.037.092-.333.85.37 1.256.02.406-.351.739-.647.868-.85.13-.203.572-.166.997-.166.425 0 1.053.184.72-.222-.332-.406-.905-.59-.572-.997.332-.406 3.153-1.757 3.283-1.905.129-.148-.698-.702-1.085-.48Z"
            fill="#F57A01"
          />
          <path
            d="M12.284 2.38S9.643 3.839 9.31 3.93c-.332.093-.11.149-.683.112-.573-.037-1.7.206-1.958.04-.258-.167-.35-.462-.369.037-.019.498.388.923-.13.96-.516.037-.572-.444-.923-.148-.35.295-.646.96-.868.794-.221-.166-.535-.61-.443-.185.092.425.37 1.495 1.256 1.513.886.019 1.071-.295 1.108-.036.037.258.425.295.517-.037.092-.333.85.37 1.256.02.406-.351.739-.647.868-.85.13-.203.572-.166.997-.166.425 0 1.053.184.72-.222-.332-.406-.905-.59-.572-.997.332-.406 3.153-1.757 3.283-1.905.129-.148-.698-.702-1.085-.48Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="M5.456 8.052c1.311 0 2.438 1.459 2.438 1.459l.052.055A1.47 1.47 0 0 1 8 9.511s1.314-1.459 2.625-1.459c1.312 0-.944 2.124-2.403 2.124 0 0-.15-.014-.275-.076-.124.062-.274.076-.274.076-1.459 0-3.527-2.124-2.216-2.124Z"
            fill="#006B49"
          />
          <path
            d="M5.456 8.052c1.311 0 2.438 1.459 2.438 1.459l.052.055A1.47 1.47 0 0 1 8 9.511s1.314-1.459 2.625-1.459c1.312 0-.944 2.124-2.403 2.124 0 0-.15-.014-.275-.076-.124.062-.274.076-.274.076-1.459 0-3.527-2.124-2.216-2.124Z"
            fill={`url(#${ids[3]})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={`${ids[2]}`}
          x1="15"
          y1="9"
          x2="15"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EA5113" />
          <stop offset="1" stopColor="#FC9B58" />
        </linearGradient>
        <linearGradient
          id={`${ids[3]}`}
          x1="11.019"
          y1="10.176"
          x2="11.019"
          y2="8.052"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008057" />
          <stop offset="1" stopColor="#00B77C" />
        </linearGradient>
      </defs>
    </FlagIconBase>
  );
});
