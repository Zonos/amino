import { forwardRef } from 'react';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const ClassifyIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => (
    <IconBase ref={ref} size={size} viewBox={viewBox}>
      <mask
        height="20"
        id="mask0_4150_91292"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="21"
        x="2"
        y="2"
      >
        <path
          d="M14.0634 3.25713L22.8211 19.2362V19.24C23.35 20.2019 22.6422 21.3716 21.5378 21.3716H3.46238C2.01962 21.3716 1.45185 19.5248 2.64961 18.7283L4.23055 17.8787C3.42422 16.6309 2.95683 15.148 2.95683 13.5571C2.95683 9.1202 6.59225 5.52336 11.0768 5.52336H11.3218V3.94585C11.3218 2.44913 13.3401 1.94125 14.0634 3.25713Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_4150_91292)">
        <path
          d="M19.1967 13.5571C19.1967 17.347 16.5445 20.5251 12.9745 21.3677H9.179C5.60903 20.5251 2.95683 17.347 2.95683 13.5571C2.95683 9.12086 6.59291 5.52336 11.0768 5.52336C13.0834 5.52336 14.9189 6.24286 16.3345 7.43946L19.1306 12.5452C19.1733 12.8761 19.1967 13.2147 19.1967 13.5571Z"
          fill="url(#paint0_linear_4150_91292)"
        />
        <path
          d="M22.8211 19.2362L14.0634 3.25713C13.3401 1.94125 11.3218 2.44913 11.3218 3.94585V8.87461C8.70067 8.87461 6.57735 10.9754 6.57735 13.5687C6.57735 14.5383 6.87291 15.4348 7.38235 16.185L2.64961 18.7283C1.45185 19.5248 2.01962 21.3716 3.46238 21.3716H21.5378C22.6422 21.3716 23.35 20.2019 22.8211 19.24V19.2362Z"
          fill="url(#paint1_linear_4150_91292)"
        />
        <g opacity="0.5">
          <g filter="url(#filter0_f_4150_91292)">
            <path
              d="M11.9867 21.7506C16.0524 21.7506 19.3484 18.4897 19.3484 14.4671C19.3484 10.4445 16.0524 7.18359 11.9867 7.18359C7.92102 7.18359 4.6251 10.4445 4.6251 14.4671C4.6251 18.4897 7.92102 21.7506 11.9867 21.7506Z"
              fill="#3B093F"
            />
          </g>
          <g filter="url(#filter1_f_4150_91292)">
            <path
              d="M11.1213 20.8852C15.187 20.8852 18.483 17.6243 18.483 13.6017C18.483 9.57912 15.187 6.31818 11.1213 6.31818C7.05562 6.31818 3.7597 9.57912 3.7597 13.6017C3.7597 17.6243 7.05562 20.8852 11.1213 20.8852Z"
              fill="#FFE37D"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="20.567"
          id="filter0_f_4150_91292"
          width="20.7233"
          x="1.6251"
          y="4.18359"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_4150_91292"
            stdDeviation="1.5"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="18.567"
          id="filter1_f_4150_91292"
          width="18.7233"
          x="1.7597"
          y="4.31818"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_4150_91292"
            stdDeviation="1"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_4150_91292"
          x1="9.69622"
          x2="5.58594"
          y1="12.7338"
          y2="10.2325"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFE37D" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_4150_91292"
          x1="17.4389"
          x2="0.750329"
          y1="18.1011"
          y2="6.81706"
        >
          <stop offset="0.01" stopColor="#AA2DC9" />
          <stop offset="1" stopColor="#9297FA" />
        </linearGradient>
      </defs>
    </IconBase>
  )
);
