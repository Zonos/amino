import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const MT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
      <path fill="#F7FCFF" d="M0 0h16v12H0z" />
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
        <mask id={`${ids[1]}`} fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3H3v1.496a.5.5 0 00-.384.487V5H1v2h1.665A.501.501 0 003 7.27V9h2V7.276A.5.5 0 005.366 7H7V5H5.416v-.017A.5.5 0 005 4.49V3z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3H3v1.496a.5.5 0 00-.384.487V5H1v2h1.665A.501.501 0 003 7.27V9h2V7.276A.5.5 0 005.366 7H7V5H5.416v-.017A.5.5 0 005 4.49V3z"
          fill="#A0A0A0"
        />
        <path
          d="M3 3v-.5h-.5V3H3zm2 0h.5v-.5H5V3zM3 4.496l.115.487.385-.091v-.396H3zm-.384.487h-.5v.008l.5-.008zm0 .017v.5h.509l-.009-.508-.5.008zM1 5v-.5H.5V5H1zm0 2H.5v.5H1V7zm1.665 0l.45-.218L2.98 6.5h-.314V7zM3 7.27h.5v-.396l-.385-.091L3 7.269zM3 9h-.5v.5H3V9zm2 0v.5h.5V9H5zm0-1.724l-.084-.493-.416.07v.423H5zM5.366 7v-.5h-.313l-.137.282.45.218zM7 7v.5h.5V7H7zm0-2h.5v-.5H7V5zM5.416 5l-.5-.008-.009.508h.509V5zm0-.017l.5.008v-.008h-.5zM5 4.49h-.5v.422l.416.07L5 4.49zM3 3.5h2v-1H3v1zm.5.996V3h-1v1.496h1zm-.384.487l-.231-.973a1 1 0 00-.77.973h1zm0 .009v-.018l-1 .017v.017l1-.016zM1 5.5h1.616v-1H1v1zM1.5 7V5h-1v2h1zm1.165-.5H1v1h1.665v-1zm.45.283l-.9.434c.129.267.373.468.67.539l.23-.973zM3.5 9V7.27h-1V9h1zM5 8.5H3v1h2v-1zm-.5-1.224V9h1V7.276h-1zm.584.493a1 1 0 00.733-.551l-.9-.436.167.987zM7 6.5H5.366v1H7v-1zM6.5 5v2h1V5h-1zm-1.084.5H7v-1H5.416v1zm-.5-.526v.018l1 .016v-.017l-1-.017zm0 .009h1a1 1 0 00-.832-.986l-.168.986zM4.5 3v1.49h1V3h-1z"
          fill="#FECA00"
          mask={`url(#${ids[1]})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0h8v12H8V0z"
          fill="#E31D1C"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="8"
          y="0"
          width="8"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0h8v12H8V0z"
            fill="#fff"
          />
        </mask>
      </g>
    </CountryIconBase>
  );
});
