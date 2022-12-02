import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[4]})`}>
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
            fill="#2E42A5"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask={`url(#${ids[1]})`}>
            <path
              fill="#fff"
              stroke="#E6E617"
              strokeWidth=".5"
              d="M12.37 10.562c-.603 0-1.008-.138-1.291-.367-.284-.23-.477-.576-.602-1.055-.126-.481-.178-1.075-.198-1.774-.014-.491-.011-1.023-.009-1.596l.002-.501h4.256c.075 1.37.094 2.683-.177 3.667-.142.515-.358.917-.667 1.191-.305.27-.723.435-1.314.435Z"
            />
            <path
              fill="#82E5FF"
              fillRule="evenodd"
              d="M10.242 8.967c0 1.031.853 2.05 2.116 2.05a2.332 2.332 0 0 0 2.347-2.085l-4.463.035Z"
              clipRule="evenodd"
            />
            <path
              fill="#E18600"
              fillRule="evenodd"
              d="M10.867 7.1c0 .774.648 1.4 1.446 1.4.798 0 1.446-.626 1.446-1.4 0-.774-.648-1.4-1.446-1.4-.798 0-1.446.626-1.446 1.4Zm2.292 0c0 .451-.379.817-.846.817-.467 0-.846-.366-.846-.817 0-.451.379-.817.846-.817.467 0 .846.366.846.817Z"
              clipRule="evenodd"
            />
            <path
              fill="#E18600"
              fillRule="evenodd"
              d="M12.069 5.505s-.526.232-.412.668c.114.436.243.499.243.499s.186-.945.937-.945l-.768-.222Zm-.943 2.357s.433.379.78.091c.347-.288.35-.431.35-.431s-.935.23-1.252-.45l.122.79Zm2.604-.058s.021-.574-.42-.663c-.443-.088-.555 0-.555 0s.767.581.438 1.256l.536-.593Z"
              clipRule="evenodd"
            />
            <mask
              id={`${ids[2]}`}
              width="9"
              height="7"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M0 0h9v7H0z" />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                fill="#F7FCFF"
                d="m-1.002 6.5 1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m-.731 7.108 1.009.505 9.436-8.08H8.298L-.731 7.109Z"
              />
              <path
                fill="#F7FCFF"
                d="m10.002 6.5-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972Z"
              />
              <mask
                id={`${ids[3]}`}
                width="11"
                height="9"
                x="-1"
                y="-1"
                fill="#000"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#fff" d="M-1-1h11v9H-1z" />
                <path
                  fillRule="evenodd"
                  d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                  clipRule="evenodd"
                />
              </mask>
              <path
                fill="#F50100"
                fillRule="evenodd"
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                clipRule="evenodd"
              />
              <path
                fill="#F7FCFF"
                d="M3.992 0v-.75h-.75V0h.75Zm1 0h.75v-.75h-.75V0Zm-1 3v.75h.75V3h-.75ZM0 3v-.75h-.75V3H0Zm0 1h-.75v.75H0V4Zm3.992 0h.75v-.75h-.75V4Zm0 3h-.75v.75h.75V7Zm1 0v.75h.75V7h-.75Zm0-3v-.75h-.75V4h.75ZM9 4v.75h.75V4H9Zm0-1h.75v-.75H9V3ZM4.992 3h-.75v.75h.75V3Zm-1-2.25h1v-1.5h-1v1.5ZM4.742 3V0h-1.5v3h1.5ZM0 3.75h3.992v-1.5H0v1.5ZM.75 4V3h-1.5v1h1.5Zm3.242-.75H0v1.5h3.992v-1.5ZM4.742 7V4h-1.5v3h1.5Zm.25-.75h-1v1.5h1v-1.5ZM4.242 4v3h1.5V4h-1.5ZM9 3.25H4.992v1.5H9v-1.5ZM8.25 3v1h1.5V3h-1.5Zm-3.258.75H9v-1.5H4.992v1.5ZM4.242 0v3h1.5V0h-1.5Z"
                mask={`url(#${ids[3]})`}
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[4]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
