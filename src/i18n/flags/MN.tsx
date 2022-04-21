import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';

type Props = {
  height: number;
  width: number;
};
export const MN = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <CountryIconBase
      height={height}
      width={width}
      ref={ref}
      viewBox="0 0 640 480"
    >
      <path fill="#c4272f" d="M0 0h640v480H0z" />
      <path fill="#015197" d="M213.3 0h213.4v480H213.3z" />
      <circle cx="107" cy="189.1" r="35" fill="#f9cf02" />
      <circle cx="107" cy="173.2" r="38.2" fill="#c4272f" />
      <path
        fill="#f9cf02"
        fillRule="evenodd"
        d="M91.1 131.8a15.9 15.9 0 0031.8 0c0-6.3-4-7.2-4-9.5 0-2.4 2.4-5.6-2.4-9.6 2.4 4-1.6 4.8-1.6 8.8 0 4 1.6 4 1.6 7.1a3.2 3.2 0 01-6.3 0c0-3.1 3.1-6.3 3.1-11 0-4.9-.7-6.5-3.1-10.4-2.4-4-6.4-7.2-3.2-10.4-4.8 1.6-2.4 8-2.4 12s-3.2 6.3-3.2 11 2.4 5.7 2.4 8.8a3.2 3.2 0 01-6.3 0c0-3.1 1.6-3.1 1.6-7.1s-4-4.8-1.6-8.8c-4.8 4-2.4 7.2-2.4 9.6 0 2.4-4 3.1-4 9.5z"
      />
      <circle cx="107" cy="179.5" r="25.4" fill="#f9cf02" />
      <path
        fill="#f9cf02"
        d="M37 230.4v152.7h31.8V230.4zm108.2 0v152.7H177V230.4zm-70 25.5v12.7h63.6v-12.7zm0 89v12.8h63.6V345zm0-114.5h63.6L107 249.5zm0 133.7h63.6L107 383z"
      />
      <circle
        cx="107"
        cy="306.8"
        r="33.7"
        fill="#f9cf02"
        stroke="#c4272f"
        strokeWidth="3.8"
      />
      <path
        fill="none"
        stroke="#c4272f"
        strokeWidth="3.8"
        d="M107 273a16.9 16.9 0 010 33.8 16.9 16.9 0 100 33.7"
      />
      <circle cx="107" cy="289.9" r="6.4" fill="#c4272f" />
      <circle cx="107" cy="323.6" r="6.4" fill="#c4272f" />
    </CountryIconBase>
  );
});
