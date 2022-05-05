import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const TC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.523 5.016s.443 5.966 2.441 5.966c1.998 0 2.49-5.966 2.49-5.966h-4.93Z"
            fill="#FECA00"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.956 5.31.073-.082.347.221c.05-.078.14-.114.265-.108l-.127-.193.103-.055.24.29.024.007-.06-.376.12-.014.08.487h.005c.034 0 .072.016.111.042L14.223 5l.121.014-.06.376.023-.008.24-.289.103.055-.126.193c.125-.006.214.03.265.108l.347-.22.073.082-.38.242a.484.484 0 0 1 .007.09V5.7l.525-.115.04.097-.565.2v.068l.535-.043.016.103-.551.08v.118l.552.09-.022.102-.53-.079v1.15h-.081V6.308l-.356-.053c-.04.281-.085.635-.078.763.006.127.1.18.167.219.051.03.086.05.048.086-.085.083-.297.163-.51.163-.213 0-.423-.08-.468-.163-.008-.015-.007-.014 0-.006.034.039.2.23.212-.299a2.894 2.894 0 0 0-.084-.751l-.276.041V7.47h-.082V6.321l-.53.08-.022-.102.553-.091V6.09l-.552-.08.017-.103.534.043v-.068l-.564-.2.04-.097.524.115v-.056c0-.033.003-.063.008-.09l-.38-.243Zm.695.827.005.017-.246.04v-.092l.241.035Zm.005-.38-.01.012-.236-.051v-.074l.001-.043.245.156Zm.157-.155a1.51 1.51 0 0 0-.08.075l-.291-.185c.04-.071.121-.097.246-.079l.125.19Zm.534.128.375-.239c-.04-.07-.12-.096-.246-.078l-.174.265.045.052Zm.127.05.279-.179a.515.515 0 0 1 .002.043v.074l-.281.061Zm.112.19.169-.059v.046l-.169.014Zm-.13.175.299-.043v.092l-.299-.05ZM13.41 5.91v.046l.168.014-.168-.06Z"
            fill="#CF6900"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.439 7.921s-.657 1.1-.657 1.767c0 0 .448.355 1.218.355s1.166-.355 1.166-.355a23.99 23.99 0 0 0-.586-1.767h-1.141Z"
            fill="#00A727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.471 7.618a.549.549 0 0 1 1.097 0v.375h-1.097v-.375Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.76 6.417s.867.178.867.46c0 .282.349.383.434.307.086-.076.69-.13.69-.496 0-.367.05-.467-.096-.7-.147-.234-.453-1.022-.523-.706-.07.316-.177.55-.372.361-.196-.188-.448-.586-.536-.36-.088.224.28.45 0 .45s-.082.015-.082.206c0 .19.033.37-.175.37-.207 0-.207.108-.207.108Z"
            fill="#FF927F"
          />
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
        </g>
      </g>
    </FlagIconBase>
  );
});
