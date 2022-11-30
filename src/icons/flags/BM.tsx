import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[3]})`}>
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
            fill="#AF0100"
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
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M11.004 6c0 2.943.278 3.966 1.956 3.966 1.677 0 2.136-1.483 1.995-3.966h-3.951Z"
              clipRule="evenodd"
            />
            <path
              fill="#AF0100"
              fillRule="evenodd"
              d="M13.05 7.7c.47 0 .85-.448.85-1s-.38-1-.85-1-.85.448-.85 1 .38 1 .85 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M11.397 9.157c.298.667.821 1 1.568 1 .742 0 1.266-.329 1.574-.987l-3.142-.013Z"
              clipRule="evenodd"
            />
            <path
              fill="#82B2CB"
              d="m11.81 7.515-.28-.696a3.975 3.975 0 0 1 1.481-.31c.475 0 .969.105 1.48.31l-.278.696a3.235 3.235 0 0 0-1.202-.255c-.374 0-.774.084-1.201.255Z"
            />
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="M12.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#8A4E22"
              fillRule="evenodd"
              d="M12.8 8.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              clipRule="evenodd"
            />
            <path
              fill="#AF0100"
              fillRule="evenodd"
              d="M12 8.4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-.35 1.1c.193 0 .35-.224.35-.5s-.157-.5-.35-.5c-.193 0-.35.224-.35.5s.157.5.35.5Zm-1.2 0c.193 0 .35-.224.35-.5s-.157-.5-.35-.5c-.193 0-.35.224-.35.5s.157.5.35.5Z"
              clipRule="evenodd"
            />
            <path fill="#2E42A5" d="M0 0h9v7H0z" />
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
                fill="#fff"
                d="m-1.002 6.5 1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m-.731 7.108 1.009.505 9.436-8.08H8.298L-.731 7.109Z"
              />
              <path
                fill="#fff"
                d="m10.002 6.5-1.98.868L-.045.944-1.09-.346l2.118-.29 3.29 2.768 2.649 1.865L10.002 6.5Z"
              />
              <path
                fill="#F50100"
                d="m9.935 6.937-1.01.504-4.018-3.46-1.19-.386L-1.19-.342H.227L5.13 3.502l1.303.463 3.502 2.972Z"
              />
              <path
                fill="#fff"
                d="M3.5-.5V-1H3v.5h.5Zm0 2.532v.5H4v-.5h-.5Zm-3.992 0v-.5h-.5v.5h.5Zm0 3h-.5v.5h.5v-.5Zm3.992 0H4v-.5h-.5v.5Zm0 2.468H3V8h.5v-.5Zm2 0V8H6v-.5h-.5Zm0-2.468v-.5H5v.5h.5Zm4.008 0v.5h.5v-.5h-.5Zm0-3h.5v-.5h-.5v.5Zm-4.008 0H5v.5h.5v-.5ZM5.5-.5H6V-1h-.5v.5Zm-2 3.532H4v-.5h-.5v.5Zm-2.992 0v-.5h-.5v.5h.5Zm0 1h-.5v.5h.5v-.5Zm2.992 0v.5H4v-.5h-.5Zm2-1v-.5H5v.5h.5Zm0 1H5v.5h.5v-.5Zm3.008-1h.5v-.5h-.5v.5Zm0 1v.5h.5v-.5h-.5ZM3.5 0H4v-1h-.5v1ZM4 0v-.5H3V0h1Zm0 2.032V0H3v2.032h1Zm-3.992.5H3.5v-1H.008v1Zm-.5 0h.5v-1h-.5v1Zm.5 0v-.5h-1v.5h1Zm0 2v-2h-1v2h1Zm0 .5v-.5h-1v.5h1Zm0-.5h-.5v1h.5v-1Zm3.492 0H.008v1H3.5v-1ZM4 7V5.032H3V7h1Zm0 .5V7H3v.5h1ZM4 7h-.5v1H4V7Zm1 0H4v1h1V7Zm.5 0H5v1h.5V7ZM5 7v.5h1V7H5Zm0-1.968V7h1V5.032H5Zm4.008-.5H5.5v1h3.508v-1Zm.5 0h-.5v1h.5v-1Zm-.5 0v.5h1v-.5h-1Zm0-2v2h1v-2h-1Zm0-.5v.5h1v-.5h-1Zm0 .5h.5v-1h-.5v1Zm-3.508 0h3.508v-1H5.5v1ZM5 0v2.032h1V0H5Zm0-.5V0h1v-.5H5ZM5 0h.5v-1H5v1ZM4 0h1v-1H4v1Zm-.5 2.532H.508v1H3.5v-1Zm-3.492.5v1h1v-1h-1Zm.5 1.5H3.5v-1H.508v1ZM4 4.032v-1H3v1h1Zm1-1v1h1v-1H5Zm3.508-.5H5.5v1h3.008v-1Zm.5 1.5v-1h-1v1h1Zm-3.508.5h3.008v-1H5.5v1Z"
              />
              <path
                fill="#F50100"
                fillRule="evenodd"
                d="M5 0H4v2.532H.008v2H4V7h1V4.532h4.008v-2H5V0Z"
                clipRule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
