import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const HR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(4);
  return (
    <FlagIconBase ref={ref} height={height} viewBox="0 0 16 12" width={width}>
      <g clipPath={`url(#${ids[3]})`}>
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
            fill="#F7FCFF"
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
            <path
              clipRule="evenodd"
              d="M0 0v4h16V0H0Z"
              fill="#E31D1C"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d="M0 8v4h16V8H0Z"
              fill="#3D58DB"
              fillRule="evenodd"
            />
            <path d="M5.038 3.199h5.7v2h-5.7z" fill="#E31D1C" />
            <path
              d="M5.326 4.48h5.064c.009.384.011 1.055.011 1.7 0 .418 0 .82-.002 1.116l-.001.357v.113l-.001.002a2.472 2.472 0 0 1-.073.296 2.73 2.73 0 0 1-.346.716C9.63 9.286 9 9.808 7.825 9.808c-1.174 0-1.774-.52-2.093-1.023a2.584 2.584 0 0 1-.37-1.01v-.03l-.001-.098-.005-.354a1916.752 1916.752 0 0 1-.03-2.813Zm.035 3.28Z"
              fill="#F7FCFF"
              stroke="#E31D1C"
              strokeWidth=".563"
            />
            <mask
              height="7"
              id={`${ids[2]}`}
              maskUnits="userSpaceOnUse"
              width="6"
              x="5"
              y="4"
            >
              <path
                d="M5.326 4.48h5.064c.009.384.011 1.055.011 1.7 0 .418 0 .82-.002 1.116l-.001.357v.113l-.001.002a2.472 2.472 0 0 1-.073.296 2.73 2.73 0 0 1-.346.716C9.63 9.286 9 9.808 7.825 9.808c-1.174 0-1.774-.52-2.093-1.023a2.584 2.584 0 0 1-.37-1.01v-.03l-.001-.098-.005-.354a1916.752 1916.752 0 0 1-.03-2.813Zm.035 3.28Z"
                fill="#fff"
                stroke="#fff"
                strokeWidth=".563"
              />
            </mask>
            <g mask={`url(#${ids[2]})`}>
              <path
                clipRule="evenodd"
                d="M5.25 4.52h1.054v1.071H5.249V4.52Zm2.109 1.071H6.304v1.07H5.249v1.072h1.055v1.07H5.249v1.072h1.055V8.804h1.055v1.07h1.054v-1.07h1.055v1.07h1.055v-1.07H9.468V7.733h1.055V6.662H9.468V5.59h1.055V4.52H9.468v1.071H8.413V4.52H7.36v1.071Zm0 1.07v-1.07h1.054v1.07H7.36Zm0 1.072V6.662H6.304v1.07h1.055Zm1.054 0v1.07H7.36v-1.07h1.054Zm0 0V6.662h1.055v1.07H8.413Z"
                fill="#F50100"
                fillRule="evenodd"
              />
            </g>
            <path
              clipRule="evenodd"
              d="M5.227 4.081s.326-.174.604-.264c.278-.09.498-.139.498-.139l-.414-1.526-.829-.31-.47.775.61 1.464Zm2.043-.543s.279-.025.57-.02c.293.006.54.009.54.009l.143-1.505-.626-.566-.696.58.07 1.502Z"
              fill="#56C6F5"
              fillRule="evenodd"
              stroke="#fff"
              strokeWidth=".15"
            />
            <path
              d="m6.234 3.666.022.073.073-.023h.003l.01-.004.04-.012.13-.037c.104-.03.23-.06.322-.073a4.597 4.597 0 0 1 .422-.036l.035-.001h.011v-.001l.08-.003-.008-.078-.126-1.463-.003-.034-.028-.02-.681-.484-.053-.037-.045.046-.62.642-.03.031.013.042.433 1.472Zm3.236-.002-.02.076-.075-.024h-.003l-.01-.004-.04-.012a5.925 5.925 0 0 0-.13-.037 2.826 2.826 0 0 0-.322-.073 4.598 4.598 0 0 0-.423-.036l-.034-.001h-.011v-.001l-.08-.003.007-.078.127-1.463.003-.034.028-.02.681-.484.054-.039.045.05.584.639.028.03-.011.04-.398 1.474Z"
              fill="#2E42A5"
              stroke="#fff"
              strokeWidth=".15"
            />
            <path
              d="m10.63 4.073-.032.075-.072-.039-.003-.001-.01-.006-.04-.02a3.55 3.55 0 0 0-.538-.23 6.569 6.569 0 0 0-.455-.13l-.028-.006-.007-.002h-.002l-.078-.018.022-.076.423-1.488.01-.037.036-.013.829-.31.058-.021.032.053.47.774.02.033-.016.035-.619 1.427Z"
              fill="#56C6F5"
              stroke="#fff"
              strokeWidth=".15"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[3]}`}>
          <rect fill="#fff" height="12" rx="1" width="16" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
