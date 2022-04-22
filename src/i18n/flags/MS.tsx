import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
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
          d="M0 0v12h16V0H0z"
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
            d="M0 0v12h16V0H0z"
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
              d="M-1.002 6.5l1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5z"
              fill="#F7FCFF"
            />
            <path
              d="M-.731 7.108l1.009.505 9.437-8.08H8.298L-.731 7.109z"
              fill="#F50100"
            />
            <path
              d="M10.002 6.5l-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5z"
              fill="#F7FCFF"
            />
            <path
              d="M9.935 6.937l-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972z"
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
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0z"
              fill="#F50100"
            />
            <path
              d="M3.992 0v-.75h-.75V0h.75zm1 0h.75v-.75h-.75V0zm-1 3v.75h.75V3h-.75zM0 3v-.75h-.75V3H0zm0 1h-.75v.75H0V4zm3.992 0h.75v-.75h-.75V4zm0 3h-.75v.75h.75V7zm1 0v.75h.75V7h-.75zm0-3v-.75h-.75V4h.75zM9 4v.75h.75V4H9zm0-1h.75v-.75H9V3zM4.992 3h-.75v.75h.75V3zm-1-2.25h1v-1.5h-1v1.5zM4.742 3V0h-1.5v3h1.5zM0 3.75h3.992v-1.5H0v1.5zM.75 4V3h-1.5v1h1.5zm3.242-.75H0v1.5h3.992v-1.5zM4.742 7V4h-1.5v3h1.5zm.25-.75h-1v1.5h1v-1.5zM4.242 4v3h1.5V4h-1.5zM9 3.25H4.992v1.5H9v-1.5zM8.25 3v1h1.5V3h-1.5zm-3.258.75H9v-1.5H4.992v1.5zM4.242 0v3h1.5V0h-1.5z"
              fill="#F7FCFF"
              mask={`url(#${ids[3]})`}
            />
          </g>
          <path
            d="M12.464 10.957c-.647 0-1.102-.15-1.427-.414-.326-.265-.537-.659-.672-1.177-.135-.52-.19-1.154-.21-1.889-.015-.516-.012-1.077-.01-1.677.002-.215.003-.434.003-.658h4.688c.083 1.479.115 2.926-.181 4.011-.152.555-.387 1.004-.735 1.314-.346.308-.815.49-1.456.49z"
            fill="#6DC2FF"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <mask
            id={`${ids[4]}`}
            maskUnits="userSpaceOnUse"
            x="10"
            y="5"
            width="6"
            height="7"
          >
            <path
              d="M12.464 10.957c-.647 0-1.102-.15-1.427-.414-.326-.265-.537-.659-.672-1.177-.135-.52-.19-1.154-.21-1.889-.015-.516-.012-1.077-.01-1.677.002-.215.003-.434.003-.658h4.688c.083 1.479.115 2.926-.181 4.011-.152.555-.387 1.004-.735 1.314-.346.308-.815.49-1.456.49z"
              fill="#fff"
              stroke="#fff"
              strokeWidth=".25"
            />
          </mask>
          <g mask={`url(#${ids[4]})`}>
            <path fill="#2EBED7" d="M9.966 5h5.035v4.056H9.966z" />
            <path fill="#A95601" d="M9.9 9.023h5.3V11.1H9.9z" />
            <path
              d="M12.873 6.76s-.934.216-.843 0c.09-.214.331-.99.331-.99"
              stroke="#FFC6B5"
              strokeWidth=".5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.154 6.914s-.17-.106-.17-.3c0-.192-.416-.265-.123-.567.293-.302.42-.169.42 0 0 .17.234.568.234.568l-.361.3z"
              fill="#FFC6B5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.682 5.165h-.463v.461h-.928v.462h.928v4.023h.463V6.088h.928v-.462h-.928v-.461z"
              fill="#272727"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.681 10.247s-.169-.794-.169-1.337c0-.544-.282-.932-.202-1.22.081-.287.276-.605.178-.802-.097-.196.095-.292-.178-.196-.273.096-.346-.096-.61 0-.263.096-.296.548-.296.677s.117.998.117 1.27c0 .27-.097 1.938.18 1.938.276 0 .577-.434.682-.434.106 0 .298.104.298.104z"
              fill="#0C7C38"
            />
            <path
              clipRule="evenodd"
              d="M12.015 8.122c-.168 0-.014.398-.442.572-.429.174-.513.42-.378.42s1.203 1.22 1.203 1.22l.261-.412v-1.3s-.476-.5-.644-.5z"
              stroke="#FF9A06"
              strokeWidth=".5"
            />
            <path
              d="M13.272 10.164s.2.429 0 .429"
              stroke="#979797"
              strokeWidth=".5"
            />
            <path
              d="M13.207 6.927s-.088.49-.255.592c-.167.102-.854.3-.854.47 0 .17-.069.23-.069.23"
              stroke="#FFC6B5"
              strokeWidth=".5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.874 5.916s.168.203.262.538.367.45.367.293c0-.157.202-.83 0-.83h-.63z"
              fill="#FF9A06"
            />
          </g>
        </g>
      </g>
    </CountryIconBase>
  );
});
