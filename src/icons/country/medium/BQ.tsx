import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BQ = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V15H0V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.83333V0H10L0 6.83333Z"
          fill="#FEDA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15H20.0056V0L0 15Z"
          fill="#00268D"
        />
        <mask id={`${ids[1]}`} fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.84583 3.125L6.17513 3.83201C7.51626 3.99205 8.56101 5.11729 8.59498 6.49332L9.19167 6.79167L8.53978 7.11761C8.30627 8.25684 7.36827 9.13929 6.20094 9.28978L5.84583 10L5.49073 9.28978C4.3234 9.13929 3.3854 8.25684 3.15189 7.11761L2.5 6.79167L3.09669 6.49332C3.13047 5.12494 4.16382 4.00458 5.49418 3.83477L5.84583 3.125Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.84583 3.125L6.17513 3.83201C7.51626 3.99205 8.56101 5.11729 8.59498 6.49332L9.19167 6.79167L8.53978 7.11761C8.30627 8.25684 7.36827 9.13929 6.20094 9.28978L5.84583 10L5.49073 9.28978C4.3234 9.13929 3.3854 8.25684 3.15189 7.11761L2.5 6.79167L3.09669 6.49332C3.13047 5.12494 4.16382 4.00458 5.49418 3.83477L5.84583 3.125Z"
          fill="white"
        />
        <path
          d="M6.17513 3.83201L5.72188 4.04312L5.83943 4.2955L6.11589 4.32849L6.17513 3.83201ZM5.84583 3.125L6.29908 2.91389L5.85975 1.97064L5.39781 2.90303L5.84583 3.125ZM8.59498 6.49332L8.09513 6.50567L8.10255 6.80613L8.37137 6.94054L8.59498 6.49332ZM9.19167 6.79167L9.41527 7.23888L10.3097 6.79167L9.41527 6.34445L9.19167 6.79167ZM8.53978 7.11761L8.31617 6.6704L8.09877 6.7791L8.04996 7.01721L8.53978 7.11761ZM6.20094 9.28978L6.13701 8.79389L5.87284 8.82795L5.75373 9.06618L6.20094 9.28978ZM5.84583 10L5.39862 10.2236L5.84583 11.118L6.29305 10.2236L5.84583 10ZM5.49073 9.28978L5.93794 9.06618L5.81882 8.82795L5.55466 8.79389L5.49073 9.28978ZM3.15189 7.11761L3.6417 7.01721L3.59289 6.7791L3.37549 6.6704L3.15189 7.11761ZM2.5 6.79167L2.27639 6.34445L1.38197 6.79167L2.27639 7.23888L2.5 6.79167ZM3.09669 6.49332L3.32029 6.94054L3.58912 6.80613L3.59653 6.50566L3.09669 6.49332ZM5.49418 3.83477L5.55749 4.33075L5.82326 4.29683L5.94221 4.05674L5.49418 3.83477ZM6.62838 3.62091L6.29908 2.91389L5.39258 3.33611L5.72188 4.04312L6.62838 3.62091ZM9.09483 6.48098C9.05466 4.85414 7.81994 3.52474 6.23438 3.33554L6.11589 4.32849C7.21258 4.45936 8.06735 5.38043 8.09513 6.50567L9.09483 6.48098ZM9.41527 6.34445L8.81859 6.04611L8.37137 6.94054L8.96806 7.23888L9.41527 6.34445ZM8.76339 7.56482L9.41527 7.23888L8.96806 6.34445L8.31617 6.6704L8.76339 7.56482ZM6.26488 9.78568C7.64561 9.60767 8.7535 8.56499 9.0296 7.21801L8.04996 7.01721C7.85904 7.94869 7.09092 8.6709 6.13701 8.79389L6.26488 9.78568ZM5.75373 9.06618L5.39862 9.77639L6.29305 10.2236L6.64816 9.51339L5.75373 9.06618ZM6.29305 9.77639L5.93794 9.06618L5.04351 9.51339L5.39862 10.2236L6.29305 9.77639ZM2.66207 7.21801C2.93817 8.56499 4.04606 9.60767 5.42679 9.78568L5.55466 8.79389C4.60074 8.6709 3.83263 7.94869 3.6417 7.01721L2.66207 7.21801ZM2.27639 7.23888L2.92828 7.56482L3.37549 6.6704L2.72361 6.34445L2.27639 7.23888ZM2.87308 6.04611L2.27639 6.34445L2.72361 7.23888L3.32029 6.94054L2.87308 6.04611ZM5.43088 3.3388C3.85805 3.53955 2.63678 4.86316 2.59684 6.48098L3.59653 6.50566C3.62416 5.38672 4.46959 4.46961 5.55749 4.33075L5.43088 3.3388ZM5.39781 2.90303L5.04615 3.6128L5.94221 4.05674L6.29386 3.34697L5.39781 2.90303Z"
          fill="black"
          mask={`url(#${ids[1]})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.85988 5.1875L5.45424 5.86816H4.65417L5.05312 6.58327L4.65417 7.26921H5.45424L5.85988 7.96904L6.27171 7.26921H7.06457L6.67539 6.58327L7.06457 5.86816H6.27171L5.85988 5.1875Z"
          fill="#F00A17"
        />
      </g>
    </svg>
  );
};
