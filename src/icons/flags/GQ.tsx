import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const GQ = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
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
          d="M0 0v12.288h16.384V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="17"
          height="13"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12.288h16.384V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} fillRule="evenodd" clipRule="evenodd">
          <path d="M0 0v4.096h16.384V0H0Z" fill="#009D00" />
          <path d="M0 4.096v4.096h16.384V4.096H0Z" fill="#fff" />
          <path d="M0 8.192v4.096h16.384V8.192H0Z" fill="#F80000" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12.288l4.096-6.066L0 0Z"
          fill="#0075D5"
        />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="5"
          height="13"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v12.288l4.096-6.066L0 0Z"
            fill="#fff"
          />
        </mask>
        <path
          d="m7.46 4.55.003.011-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.028.138.092-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03ZM7.972 4.55l.003.011-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.028.138.092-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03ZM8.484 4.55l.003.011-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.028.138.092-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03ZM8.996 4.55 9 4.561l-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.028.138.092-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03ZM9.508 4.55l.003.011-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.027.138.093-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03ZM10.02 4.55l.003.011-.016-.014-.103-.095-.012.139.011.001-.019.01-.122.069.128.055.005-.01.004.02.028.138.092-.105-.009-.008.022.003.138.016-.071-.12-.01.006.01-.02.058-.126-.137.03Z"
          fill="#FFD500"
          stroke="#000"
          strokeWidth=".03"
        />
        <path
          d="M7.71 5.15h1.988v1.506a.994.994 0 0 1-1.988 0V5.15Z"
          stroke="#373737"
          strokeWidth=".06"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.564 6.123s-.103 1.212-.206 1.285c-.104.073.494.11.55.055.058-.055-.26-1.042-.15-1.34.109-.297.285-.321.285-.321s-.222-.047-.286.042c-.063.09-.252-.042-.252-.042l.059.321Z"
          fill="#6F3E1D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.541 6.055h-.08s-.053.21-.176.105c-.124-.105-.298-.068-.298-.068s.016-.126.205-.176c.19-.05.27-.456.27-.456s.268-.1.431.105c.163.204.393.117.393.117s.168.095.084.234-.227.24-.352.139c-.125-.101-.477 0-.477 0Z"
          fill="#009D29"
        />
      </g>
    </FlagIconBase>
  );
});
