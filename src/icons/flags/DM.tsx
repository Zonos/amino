import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const DM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(3);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <g clipPath={`url(#${ids[2]})`}>
        <mask
          id={`${ids[0]}`}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h16v12H0z" />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            fill="#279E19"
            fillRule="evenodd"
            d="M0 0v12h16V0H0Z"
            clipRule="evenodd"
          />
          <mask
            id={`${ids[1]}`}
            width="16"
            height="12"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M0 0v12h16V0H0Z"
              clipRule="evenodd"
            />
          </mask>
          <g fillRule="evenodd" clipRule="evenodd" mask={`url(#${ids[1]})`}>
            <path fill="#F7FCFF" d="M8 0h1v7h7v1H9v4H8V8H0V7h8V0Z" />
            <path fill="#272727" d="M7 0h1v6h8v1H8v5H7V7H0V6h7V0Z" />
            <path fill="#FECA00" d="M6 0h1v5h9v1H7v6H6V6H0V5h6V0Z" />
            <path fill="#C51918" d="M8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path
              fill="#804BFF"
              d="M7.363 4.207s.19-.617.631-.298c.692.34.92.732 1.188 1.175.267.444-.655.12-.827-.13-.172-.25-1.127-.331-.992-.54.135-.207 0-.207 0-.207Z"
            />
            <path
              fill="#A95601"
              d="M7.207 7.363s-.47.643 0 .643 2.374-.139 2.146-.322c-.228-.183-1.92 0-1.92 0l-.226-.321Z"
            />
            <path
              fill="#804BFF"
              d="M7.909 7.343c-.049-.055-.905-1.998-.507-2.402.398-.404.632-.166.632.44 0 .605.023 2.111-.125 1.962Z"
            />
            <path
              fill="#279E19"
              d="M7.859 7.027s-.05.472.193 1.024c.243.55.733.54.733.089 0-.451.358-.028.496.273.137.301-.219-2.673-.724-3.339-.505-.666-.992-.708-.845-.278.147.43.147 2.231.147 2.231Z"
            />
            <path
              fill="#FECA00"
              d="M7.564 3.8s-.214.137-.214.514c0 .378.506-.116.506-.116L7.564 3.8Zm.046-.143.44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49Zm0 5.9.44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49Zm2.8-2.8.083-.491-.356-.348.493-.071.22-.447.22.447.493.071-.356.348.084.49-.441-.231-.44.232Zm-5.7 0 .44-.232.44.232-.083-.491.356-.348-.493-.071-.22-.447-.22.447-.493.071.356.348-.084.49ZM6.233 4.35l-.14.478-.294-.401-.498.015.29-.405-.167-.468.474.151.394-.305.002.498.412.28-.473.157Zm4.104 4.38.14-.479.473-.156-.412-.28-.002-.499-.394.305-.474-.152.168.47-.29.404.497-.015.294.401Zm.07-4.438-.139.478-.294-.402-.498.015.29-.404-.167-.469.474.152.394-.305.002.498.412.28-.473.157ZM6.212 8.87l.14-.478.472-.156-.411-.28-.003-.499-.394.305-.474-.152.168.47-.29.404.497-.015.295.401Z"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id={`${ids[2]}`}>
          <rect width="16" height="12" fill="#fff" rx="1" />
        </clipPath>
      </defs>
    </FlagIconBase>
  );
});
