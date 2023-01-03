import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MX = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            fill="#D9071E"
            fillRule="evenodd"
            d="M11 0h5v12h-5V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#006923"
            fillRule="evenodd"
            d="M0 0h6v12H0V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M5 0h6v12H5V0Z"
            clipRule="evenodd"
          />
          <path
            fill="#FCCA3D"
            fillRule="evenodd"
            d="M7.192 3.957s-.343.266-.28.55c.065.284.742 0 .66-.275-.082-.275-.38-.275-.38-.275Z"
            clipRule="evenodd"
          />
          <path
            fill="#A8AC71"
            fillRule="evenodd"
            d="M6.668 4.634c-.257 0-.364-.214-.311-.442.028-.121.102-.275.222-.476l.429.257a2.864 2.864 0 0 0-.11.198.96.96 0 0 1 .251.113c.233.154.32.428.069.631a.821.821 0 0 0-.17.302.602.602 0 0 1 .283.071c.221.13.2.37.032.553-.12.13-.279.237-.429.291-.25.09-.516.056-.516-.264v-.002c0-.013-.002-.036.11-.038h.022-.022c-.19-.003-.231-.103-.255-.283a1.852 1.852 0 0 1-.012-.182l-.002-.06-.003-.06V5.23c-.004-.057-.007-.097.123-.097h-.29v-.5h.29c.164 0 .255.055.307.17.03-.052.06-.101.094-.145a.386.386 0 0 0-.112-.024Zm.318.878.008-.008-.003.004-.005.004Zm-.218.149s-.001 0 0 0Zm0-.189v.008-.015.007Z"
            clipRule="evenodd"
          />
          <path
            fill="#8F4620"
            fillRule="evenodd"
            d="M9.633 6.202s.463-1.371-.272-2.08c-.736-.71-1.585-.663-1.585-.663s-.245.182 0 .32c.244.14.142.272.142.272s-.41-.416-.682-.173c-.272.243.254.206.198.39-.055.182-.291.995.054 1.405.344.41-.326.321-.19.321s.62.096.62 0c0-.095.168.372.312.372s.255-.164.255-.164.201.164.324.164.552-.108.552-.108l-.81-.682s.049-.301-.066-.366.92.577 1.002.784c.08.208.146.208.146.208Z"
            clipRule="evenodd"
          />
          <path
            fill="#9FAB2F"
            d="M5.533 5.863s.075-.239.156-.256c.07-.014.216.115.216.115.26 1.445.889 2.01 1.932 2.01 1.056 0 1.696-.43 2.07-1.762 0 0 .198-.203.268-.18.077.024.172.292.172.292-.095 1.559-1.22 2.482-2.492 2.482-1.284 0-2.333-1.035-2.322-2.7Z"
          />
          <path
            fill="#2FC2DC"
            fillRule="evenodd"
            d="M6.667 6.828s1.502.319 2.095.319c.593 0-.52.484-.954.484-.435 0-1.14-.803-1.14-.803Z"
            clipRule="evenodd"
          />
          <rect
            width="1"
            height=".536"
            x="7.333"
            y="7.05"
            fill="#F9AA51"
            rx=".083"
          />
          <path
            fill="#259485"
            d="m6.088 6.068.41-.287c.532.76 1.328 1.009 2.443.748l.114.487c-1.303.305-2.31-.01-2.967-.948Z"
          />
          <path
            fill="#FCCA3D"
            fillRule="evenodd"
            d="M8.296 6.175s-.607.32-.405.32c.202 0 .994.16.84 0a2.353 2.353 0 0 0-.435-.32Zm-.718-.381s-.115-.333-.355-.333-.172.273-.288.273c-.115 0 .108.193.207.193.1 0 .436-.133.436-.133Z"
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
