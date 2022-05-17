import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const FK = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
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
              d="m-.731 7.108 1.009.505 9.436-8.08H8.298L-.731 7.109Z"
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
            d="M12.975 9.857c-.514 0-.872-.121-1.127-.333-.256-.213-.424-.53-.531-.952-.107-.423-.152-.94-.168-1.541-.011-.423-.01-.881-.007-1.373l.002-.517h3.708c.066 1.204.09 2.377-.146 3.257-.121.452-.308.815-.582 1.065-.272.247-.64.394-1.149.394Z"
            fill="#6DC2FF"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <mask
            id={`${ids[4]}`}
            maskUnits="userSpaceOnUse"
            x="11"
            y="5"
            width="5"
            height="5"
          >
            <path
              d="M12.975 9.857c-.514 0-.872-.121-1.127-.333-.256-.213-.424-.53-.531-.952-.107-.423-.152-.94-.168-1.541-.011-.423-.01-.881-.007-1.373l.002-.517h3.708c.066 1.204.09 2.377-.146 3.257-.121.452-.308.815-.582 1.065-.272.247-.64.394-1.149.394Z"
              fill="#fff"
              stroke="#fff"
              strokeWidth=".25"
            />
          </mask>
          <g mask={`url(#${ids[4]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.26 6.793s-.196-.146-.281-.382a8.826 8.826 0 0 1-.252-.92c0-.055-.223 0-.223 0s.003-.267.087-.267c.084 0 .088-.247.292-.184.204.062.364.29.572.29.208 0 1.077.066 1.216.066.14 0 .508.295.508.515 0 .221-.1.55-.18.55-.078 0-.178.191-.328.128-.15-.063-.508-.193-.83-.128-.32.065-.386.024-.386.128 0 .104-.194.204-.194.204Z"
              fill="#E1E5E8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8 6.64h2.578l-.444.573h-1.822l-.312-.574Z"
              fill="#49801E"
            />
            <path
              d="M11.766 9.148s.446.16.632.14c.206-.022.389-.257.527-.257.137 0 .402.235.608.257.186.02.55-.14.55-.14M11.277 8.468c.154-.13.49-.14.49-.14s.445.16.631.14c.206-.022.389-.257.527-.257.137 0 .402.236.608.257.186.02.55-.14.55-.14s.203-.229.458.013"
              stroke="#fff"
              strokeWidth=".533"
            />
            <path
              d="m11.23 7.765-.337-.413c.132-.108.354-.215.678-.332l.158-.008c.336.087.56.124.643.116a.44.44 0 0 0 .155-.08c.235-.156.258-.169.398-.169.127 0 .154.013.42.157l.095.049c.057.027.097.04.12.043.063.006.192-.024.373-.096.235-.214.532-.192.788.042.17.155.308.28.411.376l-.362.392-.408-.374c-.068-.062-.053-.061-.083-.029l-.092.065c-.28.118-.502.173-.68.155a.883.883 0 0 1-.297-.093 2.674 2.674 0 0 1-.118-.061c-.129-.07-.178-.092-.167-.092.022 0-.009.017-.103.08-.152.1-.258.152-.397.166-.155.015-.396-.022-.748-.11-.229.087-.38.162-.447.216Z"
              fill="#fff"
            />
          </g>
          <path
            d="M11.482 9.197s.492.471.195.79c-.298.32-.57.134-.57.134M14.525 9.197s-.492.471-.195.79c.297.32.57.134.57.134"
            stroke="#B85F3C"
            strokeWidth=".5"
          />
          <path
            d="M11.16 9.576s.848.81 1.89.81c1.042 0 1.88-.618 1.88-.618"
            stroke="#CB8B73"
            strokeWidth=".5"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
