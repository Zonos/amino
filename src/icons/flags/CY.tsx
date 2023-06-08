import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const CY = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[4]})`}>
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
          <g clipRule="evenodd" fillRule="evenodd" mask={`url(#${ids[1]})`}>
            <path
              d="M12.284 2.38S9.643 3.839 9.31 3.93c-.332.093-.11.149-.683.112-.573-.037-1.7.206-1.958.04-.258-.167-.35-.462-.369.037-.019.498.388.923-.13.96-.516.037-.572-.444-.923-.148-.35.295-.646.96-.868.794-.221-.166-.535-.61-.443-.185.092.425.37 1.495 1.256 1.513.886.019 1.071-.295 1.108-.036.037.258.425.295.517-.037.092-.333.85.37 1.256.02.406-.351.739-.647.868-.85.13-.203.572-.166.997-.166.425 0 1.053.184.72-.222-.332-.406-.905-.59-.572-.997.332-.406 3.153-1.757 3.283-1.905.129-.148-.698-.702-1.085-.48Z"
              fill="#F57A01"
            />
            <path
              d="M12.284 2.38S9.643 3.839 9.31 3.93c-.332.093-.11.149-.683.112-.573-.037-1.7.206-1.958.04-.258-.167-.35-.462-.369.037-.019.498.388.923-.13.96-.516.037-.572-.444-.923-.148-.35.295-.646.96-.868.794-.221-.166-.535-.61-.443-.185.092.425.37 1.495 1.256 1.513.886.019 1.071-.295 1.108-.036.037.258.425.295.517-.037.092-.333.85.37 1.256.02.406-.351.739-.647.868-.85.13-.203.572-.166.997-.166.425 0 1.053.184.72-.222-.332-.406-.905-.59-.572-.997.332-.406 3.153-1.757 3.283-1.905.129-.148-.698-.702-1.085-.48Z"
              fill={`url(#${ids[2]})`}
            />
            <path
              d="M5.456 8.052c1.311 0 2.438 1.459 2.438 1.459l.052.055L8 9.511s1.314-1.459 2.625-1.459-.944 2.124-2.403 2.124c0 0-.15-.014-.275-.076a.89.89 0 0 1-.274.076c-1.459 0-3.527-2.124-2.216-2.124Z"
              fill="#006B49"
            />
            <path
              d="M5.456 8.052c1.311 0 2.438 1.459 2.438 1.459l.052.055L8 9.511s1.314-1.459 2.625-1.459-.944 2.124-2.403 2.124c0 0-.15-.014-.275-.076a.89.89 0 0 1-.274.076c-1.459 0-3.527-2.124-2.216-2.124Z"
              fill={`url(#${ids[3]})`}
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={`${ids[2]}`}
          x1="15"
          x2="15"
          y1="9"
          y2="1"
        >
          <stop stopColor="#EA5113" />
          <stop offset="1" stopColor="#FC9B58" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={`${ids[3]}`}
          x1="11.019"
          x2="11.019"
          y1="10.176"
          y2="8.052"
        >
          <stop stopColor="#008057" />
          <stop offset="1" stopColor="#00B77C" />
        </linearGradient>
        <clipPath id={`${ids[4]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
