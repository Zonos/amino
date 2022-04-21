import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const EG = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          fill="#F7FCFF"
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
            fill="#BF2714"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0z"
            fill="#272727"
          />
          <path
            d="M6.13 5.11l.5.023-.126 2.735-.5-.023.126-2.735zM6.652 5.28l.5.028-.126 2.218-.5-.029.126-2.217z"
            fill="#C09302"
          />
          <path
            d="M7.174 5.446l.499.04-.126 1.529-.498-.04.125-1.529zM9.87 5.11l-.5.023.126 2.735.5-.023L9.87 5.11zM9.348 5.28l-.5.028.126 2.218.5-.029-.126-2.217z"
            fill="#C09302"
          />
          <path
            d="M8.826 5.446l-.499.04.126 1.529.498-.04-.125-1.529zM7.987 7.663l-.488-.111.207-.9.487.111-.206.9z"
            fill="#C09302"
          />
          <path
            d="M8.36 7.663l.487-.111-.206-.9-.488.111.207.9z"
            fill="#C09302"
          />
          <path
            d="M8.236 7.655h-.5v-.884h.5v.884zM7.317 5.457l.5.012-.03 1.19-.499-.012.03-1.19zM8.187 5.457l.5.012-.03 1.19-.5-.012.03-1.19z"
            fill="#C09302"
          />
          <path
            d="M6.669 7.961l.13-.482c.53.142.938.213 1.215.213.278 0 .686-.07 1.216-.213l.13.482c-.57.153-1.016.23-1.346.23-.33 0-.776-.077-1.345-.23zM6.141 5.111c-.033-.33.16-.554.488-.525.108.01.229.041.39.096l.093.032c.221.079.281.1.294.102-.05-.011.095-.273.128-.317.004.028-.012.024-.052.016l-.451-.09.32-.33a.585.585 0 01.433-.171c.018 0 .034-.001.088-.005l.085-.004c.312-.01.536.078.536.399 0 .115.015.3.039.44.008.046.023.09-.023.11.002-.017.111-.06.281-.13l.02-.01c.494-.206.552-.225.711-.128.106.065.207.18.32.353l-.418.274a.872.872 0 00-.159-.198c.063.044-.149.114-.26.16l-.02.01c-.385.16-.436.18-.546.18-.299 0-.406-.307-.436-.746-.092.304-.367.687-.594.687-.1 0-.052.016-.464-.13l-.086-.03a1.346 1.346 0 00-.272-.072.227.227 0 01.02-.02l-.465.047z"
            fill="#C09302"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
