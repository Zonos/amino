import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const IM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
            d="M3.047 2.07c-.004-.046.051-.068.083-.034.224.246.818.858 1.16.858.43 0 2.117-1.421 2.616-1.19.498.232 1.508 2.653 1.508 2.653l-.658.825-.85-.464-.236-1.546s-1.561.782-2.38.477l-.459.167s-.442-.876-.617-1.144c-.115-.178-.154-.442-.167-.601Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m4 4.138-.588.309.112-.655-.475-.463.657-.096L4 2.638l.294.595.657.096-.475.463.112.655L4 4.137Zm2.566-2.37a.18.18 0 0 1 .36.03l-.11 1.381a.18.18 0 1 1-.36-.029l.11-1.382Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.61 2.552c.041.021.031.08-.015.088-.327.06-1.16.24-1.343.53-.227.365.084 2.548-.376 2.849-.46.3-3.049-.127-3.049-.127l-.35-.995.843-.476 1.481.59s.14-1.678.832-2.21l.08-.51s.979.09 1.298.084c.212-.004.457.104.6.177Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.253 2.428.049-.662.496.442.645-.158-.268.608.35.565-.661-.066-.43.506-.14-.648-.615-.252.574-.335Zm.724 3.172a.195.195 0 1 1-.235.31l-.962-.746a.177.177 0 0 1 .213-.282l.984.717Z"
            fill="#FECA00"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.431 10.492c-.039.025-.085-.014-.069-.057.112-.314.373-1.125.212-1.428-.201-.38-2.248-1.202-2.278-1.75-.03-.55 1.634-2.577 1.634-2.577l1.037.193-.01.969-1.346.986s1.516.95 1.63 1.816l.363.335s-.566.803-.72 1.083c-.103.185-.319.344-.453.43Z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m8.946 8.457.549.374-.63.208-.187.638-.393-.536-.663.02.387-.539-.224-.625.633.202.525-.406.003.664Zm-3.394-.979a.203.203 0 0 1-.147-.379l1.01-.394a.207.207 0 1 1 .148.385l-1.011.388Z"
            fill="#FECA00"
          />
          <path
            d="M6.831 4.883a.123.123 0 0 1-.074-.155c.021-.064.12-.17.183-.149l.868.304a.121.121 0 0 1 .08.105l.078.952c.005.067-.092.121-.158.127a.12.12 0 0 1-.128-.112l-.072-.818-.777-.254Z"
            fill="#FECA00"
          />
          <path
            d="M8.34 4.384c.052-.042.145.006.185.06.04.053.031.13-.02.17l-.602.617c-.052.041-.168-.04-.209-.093-.04-.053-.052-.197 0-.239l.646-.515Z"
            fill="#FECA00"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
