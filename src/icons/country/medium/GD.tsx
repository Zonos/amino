import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GD = () => {
  const ids = useStableUniqueId(3);
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
          d="M0 0H20V13.75C20 14.4404 19.4404 15 18.75 15H1.25C0.559644 15 0 14.4404 0 13.75V0Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 3.75H16.25V11.25H3.75V3.75Z"
          fill="#FECA00"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="14"
          height="9"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 3.75H16.25V11.25H3.75V3.75Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 3.75L10 7.5L3.75 11.25V3.75Z"
            fill="#23875F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.25 3.75L10 7.5L16.25 11.25V3.75Z"
            fill="#23875F"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="10"
            y="3"
            width="7"
            height="9"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.25 3.75L10 7.5L16.25 11.25V3.75Z"
              fill="white"
            />
          </mask>
          <g mask={`url(#${ids[2]})`} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
            fill="#C51918"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.95591 8.32079L8.66158 9.21856L9.07517 7.6809L8.125 6.69863L9.41158 6.64552L9.95591 5.125L10.5002 6.64552H11.7846L10.8367 7.6809L11.3114 9.12781L9.95591 8.32079Z"
            fill="#FECA00"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.48549 2.77637L6.19285 2.33774L6.93363 2.73203L6.67417 2.02511L7.19225 1.51925H6.49032L6.19285 0.776367L5.89537 1.51925L5.19225 1.5452L5.71152 2.02511L5.48549 2.77637ZM9.23549 2.77637L9.94285 2.33774L10.6836 2.73203L10.4242 2.02511L10.9422 1.51925H10.2403L9.94285 0.776367L9.64537 1.51925L8.94225 1.5452L9.46152 2.02511L9.23549 2.77637ZM13.6928 2.33774L12.9855 2.77637L13.2115 2.02511L12.6922 1.5452L13.3954 1.51925L13.6928 0.776367L13.9903 1.51925H14.6922L14.1742 2.02511L14.4336 2.73203L13.6928 2.33774ZM5.4849 13.8546L6.19225 13.4159L6.93304 13.8102L6.67358 13.1033L7.19165 12.5975H6.48973L6.19225 11.8546L5.89477 12.5975L5.19165 12.6234L5.71092 13.1033L5.4849 13.8546ZM9.94225 13.4159L9.2349 13.8546L9.46092 13.1033L8.94165 12.6234L9.64477 12.5975L9.94225 11.8546L10.2397 12.5975H10.9417L10.4236 13.1033L10.683 13.8102L9.94225 13.4159ZM12.9849 13.8546L13.6922 13.4159L14.433 13.8102L14.1736 13.1033L14.6917 12.5975H13.9897L13.6922 11.8546L13.3948 12.5975L12.6917 12.6234L13.2109 13.1033L12.9849 13.8546Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.39679 7.9823C5.39679 7.9823 5.73339 8.28195 5.91672 8.38398C5.97993 8.1444 5.83889 7.60162 5.83889 7.60162C5.79932 7.47187 5.36526 7.23926 5.36526 7.23926C5.36526 7.23926 5.24334 7.64886 5.39679 7.9823Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.74737 8.70628C5.74737 8.70628 4.88285 8.30248 4.795 7.73136C4.70714 7.16023 4.89346 6.24976 4.89346 6.24976C4.89346 6.24976 6.29734 6.56924 6.39285 7.25374C6.48836 7.93824 6.17128 8.36826 6.17128 8.36826C6.17128 8.36826 5.84656 7.53383 5.54013 7.44128C5.54013 7.44128 5.54013 8.26825 5.74737 8.70628Z"
          fill="#FECA00"
        />
      </g>
    </svg>
  );
};
