import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const LandedCostIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase ref={ref} size={size} viewBox={viewBox}>
        <mask
          height="20"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="21"
          x="2"
          y="2"
        >
          <path
            clipRule="evenodd"
            d="M12.048 4.17331V3.3392C12.048 2.50882 11.3033 1.88699 10.4841 2.0173C5.47204 2.80301 1.68881 7.28629 2.02021 12.5887C2.333 17.5934 6.40667 21.6707 11.4113 21.9798C16.7137 22.3112 21.2045 18.5243 21.9864 13.5122C22.113 12.693 21.4949 11.9483 20.6645 11.9483L19.8267 11.9483C19.8267 7.6543 16.3457 4.17331 12.0517 4.17331C12.0505 4.17331 12.0492 4.17331 12.048 4.17331Z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12.0517 19.7233C16.3457 19.7233 19.8267 16.2423 19.8267 11.9483C19.8267 7.65429 16.3457 4.17331 12.0517 4.17331C7.75773 4.17331 4.27675 7.65429 4.27675 11.9483C4.27675 16.2423 7.75773 19.7233 12.0517 19.7233Z"
            fill={`url(#${ids[1]})`}
          />
          <path
            d="M16.4084 11.9483C16.4084 9.54281 14.4572 7.59162 12.0517 7.59162C12.0517 7.59162 12.0517 7.59162 12.048 7.59162V3.3392C12.048 2.50883 11.3033 1.88698 10.4841 2.01731C5.47204 2.803 1.68881 7.28628 2.02021 12.5888C2.333 17.5933 6.40667 21.6707 11.4113 21.9798C16.7137 22.3112 21.2045 18.5243 21.9864 13.5122C22.113 12.693 21.4949 11.9483 20.6645 11.9483C18.9777 11.9483 16.4121 11.9483 16.4121 11.9483H16.4084Z"
            fill={`url(#${ids[2]})`}
          />
          <g opacity="0.5">
            <g filter={`url(#${ids[3]})`}>
              <path
                d="M11.0517 20.7233C15.3457 20.7233 18.8267 17.2423 18.8267 12.9483C18.8267 8.65429 15.3457 5.17331 11.0517 5.17331C6.75773 5.17331 3.27675 8.65429 3.27675 12.9483C3.27675 17.2423 6.75773 20.7233 11.0517 20.7233Z"
                fill="#420926"
              />
            </g>
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M12.0517 19.7233C16.3457 19.7233 19.8267 16.2423 19.8267 11.9483C19.8267 7.65429 16.3457 4.17331 12.0517 4.17331C7.75773 4.17331 4.27675 7.65429 4.27675 11.9483C4.27675 16.2423 7.75773 19.7233 12.0517 19.7233Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.55"
            id={`${ids[3]}`}
            width="21.55"
            x="0.276746"
            y="2.17331"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91291"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.55"
            id={`${ids[4]}`}
            width="19.55"
            x="2.27675"
            y="2.17331"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91291"
              stdDeviation="1"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="13.1912"
            x2="17.0824"
            y1="10.8759"
            y2="7.22298"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="8.5366"
            x2="18.3484"
            y1="15.8656"
            y2="4.93293"
          >
            <stop stopColor="#DF2B76" />
            <stop offset="1" stopColor="#FFB90D" />
          </linearGradient>
        </defs>
      </IconBase>
    );
  },
);
