import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const LI = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
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
          fill="#E31D1C"
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
            d="M0 0v6h16V0H0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.4 5.527s.603.375 2 .375c1.399 0 2.14-.375 2.14-.375s-1.096-.638-2.076-.638-2.065.638-2.065.638Z"
            fill="#000"
          />
          <path
            d="m2.435 3.371-.108.063.036.062H6.69l.028-.087-.12-.038.12.038v-.001l.001-.003.003-.01a1.616 1.616 0 0 0 .041-.165c.023-.107.047-.256.054-.422.014-.324-.04-.747-.354-1.02-.296-.257-.71-.385-1.1-.451a6.302 6.302 0 0 0-1.035-.072c-.53 0-1.015.063-1.802.508a.838.838 0 0 0-.404.487 1.16 1.16 0 0 0-.02.552 2.055 2.055 0 0 0 .218.608l.006.01.001.003h.001v.001l.108-.063Z"
            fill="#FFD83D"
            stroke="#000"
            strokeWidth=".25"
          />
          <path
            d="m1.943 3.453.058.11-.058-.11h.001l.003-.002.009-.004a2.363 2.363 0 0 1 .154-.067c.106-.042.265-.097.476-.152a7.568 7.568 0 0 1 1.902-.22c.846 0 1.478.11 1.9.22a4.222 4.222 0 0 1 .6.204l.032.015.008.004.003.001.001.001-.058.11.058-.11.097.051-.038.103-.593 1.585-.04.11-4.515-1.849Zm0 0-.096.05.037.103.576 1.585.04.11.113-.033-.67-1.815Zm4.402 1.814H2.613h.003l.007-.002.031-.009.119-.031c.103-.027.25-.062.427-.097.355-.07.826-.14 1.297-.14.47 0 .933.07 1.279.14a7.53 7.53 0 0 1 .53.128l.03.008.006.003h.002Z"
            fill="#FFD83D"
            stroke="#000"
            strokeWidth=".25"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="3.059"
            y="-1"
            width="3"
            height="3"
            fill="#000"
          >
            <path fill="#fff" d="M3.059-1h3v3h-3z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.563 0h-.252l.032.461L4.06.423V.74L4.348.7l-.037.726h.252L4.526.7l.29.04V.424l-.285.04L4.563 0Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.563 0h-.252l.032.461L4.06.423V.74L4.348.7l-.037.726h.252L4.526.7l.29.04V.424l-.285.04L4.563 0Z"
            fill="#FFD83D"
          />
          <path
            d="M4.31 0v-.25h-.267l.019.268L4.31 0Zm.253 0 .25.017.018-.267h-.268V0Zm-.22.461L4.31.71l.304.042-.021-.307-.25.017ZM4.06.423l.034-.248L3.81.136v.287h.25Zm0 .317h-.25v.286l.284-.039L4.059.74ZM4.348.7l.25.012.015-.301-.3.041.035.248Zm-.037.726-.25-.012-.013.262h.263v-.25Zm.252 0v.25h.263l-.013-.262-.25.012ZM4.526.7 4.56.45l-.3-.04.015.302.25-.012Zm.29.04L4.78.988l.285.04V.74h-.25Zm0-.316h.25v-.29L4.78.175l.035.248Zm-.285.04-.25-.017-.02.309.305-.044-.035-.248ZM4.311.25h.252v-.5h-.252v.5Zm.282.194L4.56-.018l-.498.036.032.46.499-.034ZM4.025.67l.285.04.067-.496-.284-.04-.068.496Zm.284.07V.423h-.5V.74h.5Zm.005-.288-.29.04.069.495.289-.04-.068-.495Zm.247.987.036-.727-.499-.025-.037.727.5.025Zm.002-.263h-.252v.5h.252v-.5ZM4.276.711l.037.728.5-.025-.038-.728-.499.025ZM4.85.492l-.29-.04-.07.494.29.041.07-.495Zm-.285-.07V.74h.5V.423h-.5Zm.001.289.285-.04L4.78.174l-.285.041.071.495Zm-.252-.728-.032.463.498.035.032-.464-.498-.034Z"
            fill="#000"
            mask={`url(#${ids[2]})`}
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
