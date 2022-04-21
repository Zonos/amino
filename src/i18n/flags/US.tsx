import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const US = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(1);
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
          d="M0 0h16v12H0V0z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1v1h16V1H0zm0 2v1h16V3H0zm0 3V5h16v1H0zm0 1v1h16V7H0zm0 3V9h16v1H0zm0 2v-1h16v1H0z"
          fill="#F7FCFF"
        />
        <path fill="#2E42A5" d="M0 0h9v7H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.04 2.174l.53-.37.411.297h-.233l.47.416-.158.584h-.25l-.24-.537-.207.537H.748l.47.416-.178.657.53-.37.411.297h-.233l.47.416-.158.584h-.25l-.24-.537-.207.537H.748l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.178.657.53-.37.513.37-.16-.657.412-.416h-.524l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.513.369-.16-.657.412-.416h-.524L7.569.564l-.206.537h-.615l.47.416-.158.584h-.25l-.24-.537-.207.537h-.298l-.142-.584.412-.416h-.524L5.569.564l-.206.537h-.615l.47.416-.158.584h-.25l-.24-.537-.207.537h-.298l-.142-.584.412-.416h-.524L3.569.564l-.206.537h-.615l.47.416-.158.584h-.25l-.24-.537-.207.537h-.298l-.142-.584.412-.416h-.524L1.569.564l-.206.537H.748l.47.416-.178.657zM7.06 4.1l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249zm-1.079 0l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249l.159-.584-.47-.416h.232zm-1.762.416l-.16.584h-.248l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416zm.144-.416h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416-.158.584h-.25l-.24-.537-.207.537zm-1.303 0l.159-.584-.47-.416h.232l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249zm3.159-1.584l-.16.584h-.248l-.242-.537-.206.537h-.298l-.142-.584.412-.416h-.19l.425-.296.411.296h-.233l.47.416zM3.98 2.1l-.411-.296-.425.296h.19l-.412.416.142.584h.298l.206-.537.242.537h.249l.159-.584-.47-.416h.232z"
          fill="#F7FCFF"
        />
      </g>
    </CountryIconBase>
  );
});
