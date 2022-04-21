import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const TC = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.523 5.016s.443 5.966 2.441 5.966c1.998 0 2.49-5.966 2.49-5.966h-4.93z"
            fill="#FECA00"
            stroke="#F7FCFF"
            strokeWidth=".25"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.956 5.31l.073-.082.347.221c.05-.078.14-.114.265-.108l-.127-.193.103-.055.24.29.024.007-.06-.376.12-.014.08.487h.005c.034 0 .072.016.111.042L14.223 5l.121.014-.06.376.023-.008.24-.289.103.055-.126.193c.125-.006.214.03.265.108l.347-.22.073.082-.38.242a.484.484 0 01.007.09V5.7l.525-.115.04.097-.565.2v.068l.535-.043.016.103-.551.08v.118l.552.09-.022.102-.53-.079v1.15h-.081V6.308l-.356-.053c-.04.281-.085.635-.078.763.006.127.1.18.167.219.051.03.086.05.048.086-.085.083-.297.163-.51.163-.213 0-.423-.08-.468-.163-.008-.015-.007-.014 0-.006.034.039.2.23.212-.299a2.894 2.894 0 00-.084-.751l-.276.041V7.47h-.082V6.321l-.53.08-.022-.102.553-.091V6.09l-.552-.08.017-.103.534.043v-.068l-.564-.2.04-.097.524.115v-.056c0-.033.003-.063.008-.09l-.38-.243zm.695.827l.005.017-.246.04v-.092l.241.035zm.005-.38l-.01.012-.236-.051v-.074l.001-.043.245.156zm.157-.155a1.51 1.51 0 00-.08.075l-.291-.185c.04-.071.121-.097.246-.079l.125.19zm.534.128l.375-.239c-.04-.07-.12-.096-.246-.078l-.174.265.045.052zm.127.05l.279-.179a.515.515 0 01.002.043v.074l-.281.061zm.112.19l.169-.059v.046l-.169.014zm-.13.175l.299-.043v.092l-.299-.05zM13.41 5.91v.046l.168.014-.168-.06z"
            fill="#CF6900"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.439 7.921s-.657 1.1-.657 1.767c0 0 .448.355 1.218.355s1.166-.355 1.166-.355a23.99 23.99 0 00-.586-1.767h-1.141z"
            fill="#00A727"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.471 7.618a.549.549 0 011.097 0v.375h-1.097v-.375z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.76 6.417s.867.178.867.46c0 .282.349.383.434.307.086-.076.69-.13.69-.496 0-.367.05-.467-.096-.7-.147-.234-.453-1.022-.523-.706-.07.316-.177.55-.372.361-.196-.188-.448-.586-.536-.36-.088.224.28.45 0 .45s-.082.015-.082.206c0 .19.033.37-.175.37-.207 0-.207.108-.207.108z"
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
              d="M-1.002 6.5l1.98.868L9.045.944l1.045-1.29-2.118-.29-3.29 2.768-2.649 1.865L-1.002 6.5z"
              fill="#F7FCFF"
            />
            <path
              d="M-.731 7.108l1.009.505 9.436-8.08H8.298L-.731 7.109z"
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
        </g>
      </g>
    </CountryIconBase>
  );
});
