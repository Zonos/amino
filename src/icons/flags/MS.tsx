import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const MS = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(6);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[5]})`}>
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
            fill="#2E42A5"
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
          <g mask={`url(#${ids[1]})`}>
            <mask
              height="7"
              id={`${ids[2]}`}
              maskUnits="userSpaceOnUse"
              width="9"
              x="0"
              y="0"
            >
              <path d="M0 0h9v7H0z" fill="#fff" />
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
                fill="#000"
                height="9"
                id={`${ids[3]}`}
                maskUnits="userSpaceOnUse"
                width="11"
                x="-1"
                y="-1"
              >
                <path d="M-1-1h11v9H-1z" fill="#fff" />
                <path
                  clipRule="evenodd"
                  d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                  fillRule="evenodd"
                />
              </mask>
              <path
                clipRule="evenodd"
                d="M4.992 0h-1v3H0v1h3.992v3h1V4H9V3H4.992V0Z"
                fill="#F50100"
                fillRule="evenodd"
              />
              <path
                d="M3.992 0v-.75h-.75V0h.75Zm1 0h.75v-.75h-.75V0Zm-1 3v.75h.75V3h-.75ZM0 3v-.75h-.75V3H0Zm0 1h-.75v.75H0V4Zm3.992 0h.75v-.75h-.75V4Zm0 3h-.75v.75h.75V7Zm1 0v.75h.75V7h-.75Zm0-3v-.75h-.75V4h.75ZM9 4v.75h.75V4H9Zm0-1h.75v-.75H9V3ZM4.992 3h-.75v.75h.75V3Zm-1-2.25h1v-1.5h-1v1.5ZM4.742 3V0h-1.5v3h1.5ZM0 3.75h3.992v-1.5H0v1.5ZM.75 4V3h-1.5v1h1.5Zm3.242-.75H0v1.5h3.992v-1.5ZM4.742 7V4h-1.5v3h1.5Zm.25-.75h-1v1.5h1v-1.5ZM4.242 4v3h1.5V4h-1.5ZM9 3.25H4.992v1.5H9v-1.5ZM8.25 3v1h1.5V3h-1.5Zm-3.258.75H9v-1.5H4.992v1.5ZM4.242 0v3h1.5V0h-1.5Z"
                fill="#F7FCFF"
                mask={`url(#${ids[3]})`}
              />
            </g>
            <path
              d="M12.464 10.957c-.647 0-1.102-.15-1.427-.414-.326-.265-.537-.659-.672-1.177-.135-.52-.19-1.154-.21-1.889a52.512 52.512 0 0 1-.01-1.677c.002-.215.003-.434.003-.658h4.688c.083 1.479.115 2.926-.181 4.011-.152.555-.387 1.004-.735 1.314-.346.308-.815.49-1.456.49Z"
              fill="#6DC2FF"
              stroke="#F7FCFF"
              strokeWidth=".25"
            />
            <mask
              height="7"
              id={`${ids[4]}`}
              maskUnits="userSpaceOnUse"
              width="6"
              x="10"
              y="5"
            >
              <path
                d="M12.464 10.957c-.647 0-1.102-.15-1.427-.414-.326-.265-.537-.659-.672-1.177-.135-.52-.19-1.154-.21-1.889a52.512 52.512 0 0 1-.01-1.677c.002-.215.003-.434.003-.658h4.688c.083 1.479.115 2.926-.181 4.011-.152.555-.387 1.004-.735 1.314-.346.308-.815.49-1.456.49Z"
                fill="#fff"
                stroke="#fff"
                strokeWidth=".25"
              />
            </mask>
            <g mask={`url(#${ids[4]})`}>
              <path d="M9.966 5h5.035v4.056H9.966z" fill="#2EBED7" />
              <path d="M9.9 9.023h5.3V11.1H9.9z" fill="#A95601" />
              <path
                d="M12.873 6.76s-.934.216-.843 0c.09-.214.331-.99.331-.99"
                stroke="#FFC6B5"
                strokeWidth=".5"
              />
              <path
                clipRule="evenodd"
                d="M13.154 6.914s-.17-.106-.17-.3c0-.192-.416-.265-.123-.567.293-.302.419-.169.419 0 0 .17.235.568.235.568l-.361.3Z"
                fill="#FFC6B5"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M12.682 5.165h-.463v.461h-.928v.462h.928v4.023h.463V6.088h.928v-.462h-.928v-.461Z"
                fill="#272727"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M13.681 10.247s-.169-.794-.169-1.337c0-.544-.282-.932-.202-1.22.081-.287.276-.605.178-.802-.097-.196.095-.292-.178-.196-.273.096-.346-.096-.61 0-.263.096-.296.548-.296.677s.117.998.117 1.27c0 .27-.097 1.938.18 1.938.276 0 .577-.434.682-.434.106 0 .298.104.298.104Z"
                fill="#0C7C38"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M12.015 8.122c-.168 0-.014.398-.442.572-.429.174-.513.42-.378.42s1.203 1.22 1.203 1.22l.261-.412v-1.3s-.476-.5-.644-.5Z"
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
                clipRule="evenodd"
                d="M12.874 5.916s.168.203.262.538.367.45.367.293c0-.157.202-.83 0-.83h-.629Z"
                fill="#FF9A06"
                fillRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[5]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
