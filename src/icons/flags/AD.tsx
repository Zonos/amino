import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const AD = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
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
          d="M4 0h8v12H4V0Z"
          fill="#FFD018"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h4v12H0V0Z"
          fill="#2E42A5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0h4v12h-4V0Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9 3.607a1 1 0 0 1 1.007-1l4.395.031a1 1 0 0 1 .993 1v4.007s-.444 2-3.146 2S4.9 7.6 4.9 7.6V3.607Z"
          fill="#BF9937"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.15 4.2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.15 6.4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.15 8.2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.85 4.2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.85 6.4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.85 8.2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          fill="#BF9937"
        />
        <path
          d="m5.912 8.335.052-.127c.604.26 1.291.389 2.062.389.77 0 1.44-.13 2.007-.388l.055.126c-.586.266-1.273.4-2.062.4-.788 0-1.493-.133-2.114-.4Z"
          fill="#805440"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.115 3.81h3.77v3.514s0 .31-.329.446c-.328.136-.713.087-.713.087s-.37-.08-.564 0c-.12.049-.206.073-.255.084v.01L8 7.946a.393.393 0 0 1-.024.005v-.01a1.711 1.711 0 0 1-.255-.084c-.195-.08-.564 0-.564 0s-.385.049-.713-.087c-.328-.136-.33-.446-.33-.446V3.81Z"
          fill="#BF9937"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="6"
          y="3"
          width="4"
          height="5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.115 3.81h3.77v3.514s0 .31-.329.446c-.328.136-.713.087-.713.087s-.37-.08-.564 0c-.12.049-.206.073-.255.084v.01L8 7.946a.393.393 0 0 1-.024.005v-.01a1.711 1.711 0 0 1-.255-.084c-.195-.08-.564 0-.564 0s-.385.049-.713-.087c-.328-.136-.33-.446-.33-.446V3.81Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path fill="#D00F3A" d="M6.062 3.765H7.89v1.95H6.062z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.094 3.765h1.895v1.95H8.094v-1.95ZM8.094 5.932h1.828v2.022H8.094V5.932Z"
            fill="#FEDF00"
          />
          <path fill="#FEDF00" d="M6.062 5.932H7.89v2.022H6.062z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.062 7.265a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
            fill="#D00F3A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.015 5.218V4.104l.47.533-.241.58c-.09-.03-.12.035-.074.152.027.07.049.12.07.16-.08-.082-.114-.133-.114-.187a.21.21 0 0 0-.015-.095c-.005-.01-.047-.018-.074-.024a.239.239 0 0 1-.022-.005Zm-.22 0-.242-.581.46-.529v1.114l-.02.004c-.025.005-.06.012-.065.021a.21.21 0 0 0-.015.095c0 .054-.033.105-.114.186.022-.038.043-.089.07-.159.046-.117.015-.182-.074-.151Z"
            fill="#FEDF00"
          />
          <path fill="#D00F3A" d="M8.505 4.29h1v1h-1z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.562 6.38h1v1h-1v-1Z"
            fill="#D00F3A"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
