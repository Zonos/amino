import React, { forwardRef } from 'react';

import { CountryIconBase } from '../CountryIconBase';
import { useStableUniqueId } from '../hooks';

type Props = {
  height: number;
  width: number;
};
export const DM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          fill="#279E19"
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
        <g mask={`url(#${ids[1]})`} fillRule="evenodd" clipRule="evenodd">
          <path d="M8 0h1v7h7v1H9v4H8V8H0V7h8V0z" fill="#F7FCFF" />
          <path d="M7 0h1v6h8v1H8v5H7V7H0V6h7V0z" fill="#272727" />
          <path d="M6 0h1v5h9v1H7v6H6V6H0V5h6V0z" fill="#FECA00" />
          <path d="M8 10a4 4 0 100-8 4 4 0 000 8z" fill="#C51918" />
          <path
            d="M7.363 4.207s.19-.617.631-.298c.692.34.92.732 1.188 1.175.267.444-.655.12-.827-.13-.172-.25-1.127-.331-.992-.54.135-.207 0-.207 0-.207z"
            fill="#804BFF"
          />
          <path
            d="M7.207 7.363s-.47.643 0 .643 2.374-.139 2.146-.322c-.228-.183-1.92 0-1.92 0l-.226-.321z"
            fill="#A95601"
          />
          <path
            d="M7.909 7.343c-.049-.055-.905-1.998-.507-2.402.398-.404.631-.166.631.44 0 .605.024 2.111-.124 1.962z"
            fill="#804BFF"
          />
          <path
            d="M7.859 7.027s-.05.472.193 1.024c.243.55.733.54.733.089 0-.451.358-.028.496.273.137.301-.219-2.673-.724-3.339-.505-.666-.992-.708-.845-.278.147.43.147 2.231.147 2.231z"
            fill="#279E19"
          />
          <path
            d="M7.564 3.8s-.214.137-.214.514c0 .378.506-.116.506-.116L7.564 3.8zM7.61 3.657l.44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49zm0 5.9l.44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49zm2.8-2.8l.083-.491-.356-.348.492-.071.221-.447.22.447.493.071-.356.348.084.49-.441-.231-.44.232zm-5.7 0l.44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49zM6.233 4.35l-.14.478-.294-.401-.498.015.29-.405-.167-.468.474.151.394-.305.002.498.412.28-.473.157zm4.104 4.38l.14-.479.473-.156-.412-.28-.002-.499-.394.305-.474-.152.168.47-.29.404.497-.015.294.401zm.07-4.438l-.139.478-.294-.402-.498.015.29-.404-.167-.469.474.152.394-.305.002.498.412.28-.473.157zM6.212 8.87l.14-.478.472-.156-.411-.28-.003-.499-.394.305-.474-.152.168.47-.29.404.497-.015.295.401z"
            fill="#FECA00"
          />
        </g>
      </g>
    </CountryIconBase>
  );
});
