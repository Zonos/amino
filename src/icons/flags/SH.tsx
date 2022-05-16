import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const SH = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(6);
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
          fill="#2E42A5"
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
        <g mask={`url(#${ids[1]})`}>
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="9"
            height="7"
          >
            <path fill="#fff" d="M0 0h9v7H0z" />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              d="m-1.002 6.5 1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5Z"
              fill="#F7FCFF"
            />
            <path
              d="m-.731 7.108 1.009.505 9.437-8.08H8.298L-.731 7.109Z"
              fill="#F50100"
            />
            <path
              d="m10.002 6.5-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5Z"
              fill="#F7FCFF"
            />
            <path
              d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972Z"
              fill="#F50100"
            />
            <mask
              id={`${ids[3]}`}
              maskUnits="userSpaceOnUse"
              x="-1"
              y="-1"
              width="11"
              height="9"
              fill="#000"
            >
              <path fill="#fff" d="M-1-1h11v9H-1z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
              fill="#F50100"
            />
            <path
              d="M3.992 0v-.75h-.75V0h.75Zm1 0h.75v-.75h-.75V0Zm-1 3v.75h.75V3h-.75ZM0 3v-.75h-.75V3H0Zm0 1h-.75v.75H0V4Zm3.992 0h.75v-.75h-.75V4Zm0 3h-.75v.75h.75V7Zm1 0v.75h.75V7h-.75Zm0-3v-.75h-.75V4h.75ZM9 4v.75h.75V4H9Zm0-1h.75v-.75H9V3ZM4.992 3h-.75v.75h.75V3Zm-1-2.25h1v-1.5h-1v1.5ZM4.742 3V0h-1.5v3h1.5ZM0 3.75h3.992v-1.5H0v1.5ZM.75 4V3h-1.5v1h1.5Zm3.242-.75H0v1.5h3.992v-1.5ZM4.742 7V4h-1.5v3h1.5Zm.25-.75h-1v1.5h1v-1.5ZM4.242 4v3h1.5V4h-1.5ZM9 3.25H4.992v1.5H9v-1.5ZM8.25 3v1h1.5V3h-1.5Zm-3.258.75H9v-1.5H4.992v1.5ZM4.242 0v3h1.5V0h-1.5Z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
          <path
            d="M10.023 4.895h-.125v.125c0 .26-.001.515-.003.763-.002.592-.005 1.15.01 1.661.019.727.072 1.372.209 1.91.137.539.36.98.728 1.286.369.307.867.463 1.528.463.667 0 1.18-.194 1.564-.544.382-.348.626-.838.78-1.41.304-1.14.26-2.65.175-4.137l-.007-.117h-4.859Z"
            fill="#B7E1FF"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <mask
            id={`${ids[4]}`}
            maskUnits="userSpaceOnUse"
            x="9"
            y="4"
            width="7"
            height="8"
          >
            <path
              d="M10.023 4.895h-.125v.125c0 .26-.001.515-.003.763-.002.592-.005 1.15.01 1.661.019.727.072 1.372.209 1.91.137.539.36.98.728 1.286.369.307.867.463 1.528.463.667 0 1.18-.194 1.564-.544.382-.348.626-.838.78-1.41.304-1.14.26-2.65.175-4.137l-.007-.117h-4.859Z"
              fill="#fff"
              stroke="#fff"
              strokeWidth=".25"
            />
          </mask>
          <g mask={`url(#${ids[4]})`}>
            <path fill="#2E42A5" d="M11.2 9.8h3.6V11h-3.6z" />
            <g filter={`url(#${ids[5]})`}>
              <path fill="#FDFF00" d="M8.8 3.8H16v3.6H8.8z" />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4 7.04a.84.84 0 1 0 0-1.68.84.84 0 0 0 0 1.68Z"
              fill="#272727"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m10.07 8.412.537-.494s.724-.073.809.087c.085.16.035-.074.17.293.137.367.191-.158.266.367.075.525.138.705.138.828 0 .122.683.485.42.735-.26.25-.272.828-.272.993 0 .165-.02.24-.286.202-.265-.037-.588.095-.652.095-.064 0-.841-.158-.841-.484 0-.326-.288-2.622-.288-2.622Z"
              fill="#CE6201"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={`${ids[5]}`}
          x="8.8"
          y="3.8"
          width="7.2"
          height="3.85"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".25" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_65947"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_157_65947"
            result="shape"
          />
        </filter>
      </defs>
    </FlagIconBase>
  );
});
