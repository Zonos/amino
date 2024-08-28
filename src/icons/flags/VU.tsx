import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const VU = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 3.667H2.667A2.667 2.667 0 0 0 0 6.332v6h24v-6a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#D21034"
      />
      <path
        d="M2.667 21h18.666A2.667 2.667 0 0 0 24 18.333v-6H0v6A2.667 2.667 0 0 0 2.667 21Z"
        fill="#009543"
      />
      <path
        d="M11.333 10.333 1.155 4.137a2.685 2.685 0 0 0-.78.833l-.002.001A2.66 2.66 0 0 0 0 6.333v12c0 .498.137.965.375 1.364v.002c.201.336.474.624.797.843l10.161-6.209H24v-4H11.333Z"
        fill="#141414"
      />
      <path
        d="m.375 4.97-.002.001A2.66 2.66 0 0 0 0 6.333l10 6-10 6c0 .498.137.965.375 1.364L11.333 13H24v-1.333H11.333L.375 4.97Z"
        fill="#FDCE12"
      />
      <path
        d="M2.917 14.737s2.166-.333 2.166-2.473c0-1.316-1.138-2.041-2.028-2.041-.888 0-1.833.666-1.833 1.833 0 1.167 1.083 1.528 1.611 1.528s1.334-.417 1.222-1.333c-.309 1.275-1.608 1.238-2.111.472-.555-.848.306-2.056 1.417-1.723 1.053.316 1.108 1.387.75 2.056-.444.833-1.18.792-1.18.792l-.014.89Z"
        fill="#FDCE12"
      />
      <path
        d="M3.584 12.347a2.731 2.731 0 0 0-.424-.435c.328-.337.607-.432.52-.481-.059-.034-.365.104-.693.344-.328-.24-.635-.378-.694-.344-.087.05.192.145.52.481a2.703 2.703 0 0 0-.424.435c-.132.176-.111.472-.111.472s.18-.072.333-.222c.125-.12.232-.297.376-.482.144.185.25.362.375.482.154.15.333.222.333.222s.022-.296-.111-.472Z"
        fill="#FDCE12"
      />
    </FlagIconBase>
  ),
);
