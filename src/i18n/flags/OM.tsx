import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const OM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
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
          fill="#F50101"
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
            d="M0 0v4h16V0H0z"
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0z"
            fill="#5EAA22"
          />
          <path fill="#F50101" d="M0 0h6v12H0z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.385 1.017C5.39.97 5.332.953 5.308.993a19.138 19.138 0 01-1.385 2v-.459c-.071-.077-.299-.286-.299-.286V1.79l.412-.373L3.471 1l-.597.417.451.373v.458c0 .22-.273.286-.273.286l-.05.404a18.687 18.687 0 01-1.315-1.924c-.024-.041-.083-.022-.076.025.055.368.221 1.186.68 2.06h-.123v-.017a.043.043 0 00-.044-.043H1.07a.043.043 0 00-.043.043v.663c0 .024.019.044.043.044h1.054c.024 0 .044-.02.044-.044v-.348H2.3a.3.3 0 00.27.18c.084.13.175.26.275.388-.229-.023-1.74-.151-1.74.398 0 .328.368.502.829.592L.83 5.952c-.033.03-.007.08.036.07a7.128 7.128 0 002.2-.977h.029c.253 0 .428-.11.55-.258.914.745 1.947 1.09 2.396 1.213.046.013.071-.047.032-.075A13.586 13.586 0 014.048 4.18l.022-.026c.171-.202.32-.41.45-.619a.298.298 0 00.124-.138h.133v.348c0 .024.019.044.043.044h1.054c.024 0 .044-.02.044-.044v-.663a.043.043 0 00-.044-.043H4.82a.043.043 0 00-.029.01 6.178 6.178 0 00.594-2.032zm-.608 2.081v-.02l-.01.02h.01zm-1.957.183c0 .133-.11.241-.245.241a.243.243 0 01-.244-.241c0-.134.11-.242.244-.242.136 0 .245.108.245.242zm1.304 0c0 .133.11.241.245.241a.243.243 0 00.245-.241.243.243 0 00-.245-.242.243.243 0 00-.245.242z"
            fill="#F7FCFF"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
