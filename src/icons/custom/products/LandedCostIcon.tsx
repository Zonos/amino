import { forwardRef } from 'react';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const LandedCostIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => (
    <IconBase size={size} ref={ref} viewBox={viewBox}>
      <mask
        id="mask0_4150_91291"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="21"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.048 4.17331V3.3392C12.048 2.50882 11.3033 1.88699 10.4841 2.0173C5.47204 2.80301 1.68881 7.28629 2.02021 12.5887C2.333 17.5934 6.40667 21.6707 11.4113 21.9798C16.7137 22.3112 21.2045 18.5243 21.9864 13.5122C22.113 12.693 21.4949 11.9483 20.6645 11.9483L19.8267 11.9483C19.8267 7.6543 16.3457 4.17331 12.0517 4.17331C12.0505 4.17331 12.0492 4.17331 12.048 4.17331Z"
          fill="#FFE37D"
        />
      </mask>
      <g mask="url(#mask0_4150_91291)">
        <path
          d="M12.0517 19.7233C16.3457 19.7233 19.8267 16.2423 19.8267 11.9483C19.8267 7.65429 16.3457 4.17331 12.0517 4.17331C7.75773 4.17331 4.27675 7.65429 4.27675 11.9483C4.27675 16.2423 7.75773 19.7233 12.0517 19.7233Z"
          fill="url(#paint0_linear_4150_91291)"
        />
        <path
          d="M16.4084 11.9483C16.4084 9.54281 14.4572 7.59162 12.0517 7.59162C12.0517 7.59162 12.0517 7.59162 12.048 7.59162V3.3392C12.048 2.50883 11.3033 1.88698 10.4841 2.01731C5.47204 2.803 1.68881 7.28628 2.02021 12.5888C2.333 17.5933 6.40667 21.6707 11.4113 21.9798C16.7137 22.3112 21.2045 18.5243 21.9864 13.5122C22.113 12.693 21.4949 11.9483 20.6645 11.9483C18.9777 11.9483 16.4121 11.9483 16.4121 11.9483H16.4084Z"
          fill="url(#paint1_linear_4150_91291)"
        />
        <g opacity="0.5">
          <g filter="url(#filter0_f_4150_91291)">
            <path
              d="M11.0517 20.7233C15.3457 20.7233 18.8267 17.2423 18.8267 12.9483C18.8267 8.65429 15.3457 5.17331 11.0517 5.17331C6.75773 5.17331 3.27675 8.65429 3.27675 12.9483C3.27675 17.2423 6.75773 20.7233 11.0517 20.7233Z"
              fill="#420926"
            />
          </g>
          <g filter="url(#filter1_f_4150_91291)">
            <path
              d="M12.0517 19.7233C16.3457 19.7233 19.8267 16.2423 19.8267 11.9483C19.8267 7.65429 16.3457 4.17331 12.0517 4.17331C7.75773 4.17331 4.27675 7.65429 4.27675 11.9483C4.27675 16.2423 7.75773 19.7233 12.0517 19.7233Z"
              fill="#FFE37D"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_4150_91291"
          x="0.276746"
          y="2.17331"
          width="21.55"
          height="21.55"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_4150_91291"
          />
        </filter>
        <filter
          id="filter1_f_4150_91291"
          x="2.27675"
          y="2.17331"
          width="19.55"
          height="19.55"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_4150_91291"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4150_91291"
          x1="13.1912"
          y1="10.8759"
          x2="17.0824"
          y2="7.22298"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFE37D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4150_91291"
          x1="8.5366"
          y1="15.8656"
          x2="18.3484"
          y2="4.93293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF2B76" />
          <stop offset="1" stopColor="#FFB90D" />
        </linearGradient>
      </defs>
    </IconBase>
  )
);
