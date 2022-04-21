import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const MX = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 16 12"
    >
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
          d="M11 0h5v12h-5V0z"
          fill="#D9071E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h6v12H0V0z"
          fill="#006923"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0h6v12H5V0z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.192 3.957s-.343.266-.28.55c.065.284.742 0 .66-.275-.082-.275-.38-.275-.38-.275z"
          fill="#FCCA3D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.668 4.634c-.257 0-.364-.214-.311-.442.028-.121.102-.275.222-.476l.429.257a2.864 2.864 0 00-.11.198.96.96 0 01.25.113c.234.154.32.428.07.631-.048.04-.127.173-.17.302.119.007.204.025.283.071.221.13.2.37.032.553-.12.13-.279.237-.429.291-.25.09-.516.056-.516-.264v-.002c0-.013-.002-.036.11-.038h.021-.021c-.19-.003-.231-.103-.255-.283a1.852 1.852 0 01-.012-.182l-.002-.06-.003-.06V5.23c-.004-.057-.007-.097.123-.097h-.29v-.5h.29c.164 0 .255.055.307.17.03-.052.06-.101.094-.145a.386.386 0 00-.112-.024zm.318.878l.008-.008-.003.004-.005.004zm-.218.149s-.001 0 0 0zm0-.189v.008-.015.007z"
          fill="#A8AC71"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.633 6.202s.463-1.371-.272-2.08c-.736-.71-1.585-.663-1.585-.663s-.245.182 0 .32c.244.14.142.272.142.272s-.41-.416-.682-.173c-.272.243.254.206.198.39-.055.182-.291.995.054 1.405.344.41-.326.321-.19.321s.62.096.62 0c0-.095.168.372.312.372s.255-.164.255-.164.201.164.324.164.552-.108.552-.108l-.81-.682s.049-.301-.066-.366.92.577 1.002.784c.08.208.146.208.146.208z"
          fill="#8F4620"
        />
        <path
          d="M5.533 5.863s.075-.239.156-.256c.07-.014.216.115.216.115.26 1.445.889 2.01 1.932 2.01 1.056 0 1.696-.43 2.07-1.762 0 0 .198-.203.268-.18.077.024.172.292.172.292-.095 1.559-1.22 2.482-2.492 2.482-1.284 0-2.333-1.035-2.322-2.7z"
          fill="#9FAB2F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.667 6.828s1.502.319 2.095.319c.593 0-.52.484-.954.484-.435 0-1.14-.803-1.14-.803z"
          fill="#2FC2DC"
        />
        <rect
          x="7.333"
          y="7.05"
          width="1"
          height=".536"
          rx=".083"
          fill="#F9AA51"
        />
        <path
          d="M6.088 6.068l.41-.287c.532.76 1.328 1.009 2.443.748l.114.487c-1.303.305-2.31-.01-2.967-.948z"
          fill="#259485"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.296 6.175s-.607.32-.405.32c.202 0 .994.16.84 0-.154-.16-.435-.32-.435-.32zM7.578 5.794s-.115-.333-.355-.333-.172.273-.288.273c-.115 0 .108.193.207.193.1 0 .436-.133.436-.133z"
          fill="#FCCA3D"
        />
      </g>
    </CountryIconBase>
  );
});
