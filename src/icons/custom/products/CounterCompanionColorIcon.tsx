import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CounterCompanionColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => {
    const uniqueId = useId();
    return (
      <IconBase
        ref={ref}
        className={className}
        color={color}
        inlineBlock={inlineBlock}
        size={size}
        viewBox="0 0 24 24"
      >
        <g clipPath={`url(#${uniqueId}-5)`}>
          <mask
            height="18"
            id={`${uniqueId}-0`}
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'alpha' }}
            width="22"
            x="1"
            y="2"
          >
            <path
              clipRule="evenodd"
              d="M6.503 17.571a7.775 7.775 0 0 0 10.996 0l.002-.002.59.59c.587.587 1.554.5 2.04-.172 2.99-4.1 2.494-9.945-1.49-13.46-3.76-3.317-9.523-3.32-13.28 0C1.377 8.042.879 13.896 3.87 17.993a1.345 1.345 0 0 0 2.04.17l.592-.592Z"
              fill="#FFE37D"
              fillRule="evenodd"
            />
          </mask>
          <g mask={`url(#${uniqueId}-0)`}>
            <path
              d="M6.503 6.576A7.775 7.775 0 1 0 17.5 17.57 7.775 7.775 0 0 0 6.503 6.576"
              fill={`url(#${uniqueId}-1)`}
            />
            <path
              d="M8.92 15.154a4.36 4.36 0 0 0 6.162 0l.002-.002 3.007 3.007c.587.587 1.554.5 2.04-.172 2.99-4.1 2.494-9.945-1.49-13.46-3.76-3.317-9.523-3.32-13.28 0C1.377 8.042.879 13.896 3.87 17.993a1.345 1.345 0 0 0 2.04.17l3.007-3.006z"
              fill={`url(#${uniqueId}-2)`}
            />
            <g opacity=".5">
              <g filter={`url(#${uniqueId}-3)`}>
                <path
                  d="M6.503 5.162A7.775 7.775 0 1 0 17.5 16.157 7.775 7.775 0 0 0 6.503 5.162"
                  fill="#3B093F"
                />
              </g>
              <g filter={`url(#${uniqueId}-4)`}>
                <path
                  d="M6.503 6.576A7.775 7.775 0 1 0 17.5 17.57 7.775 7.775 0 0 0 6.503 6.576"
                  fill="#FFE37D"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="11.954"
            x2="11.785"
            y1="13.638"
            y2="18.972"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="13.03"
            x2="14.045"
            y1="8.03"
            y2="19.44"
          >
            <stop offset=".01" stopColor="#880DC2" />
            <stop offset="1" stopColor="#F229F7" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.55"
            id={`${uniqueId}-3`}
            width="21.55"
            x="1.226"
            y="-.116"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7075"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.55"
            id={`${uniqueId}-4`}
            width="19.55"
            x="2.226"
            y="2.299"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7075"
              stdDeviation="1"
            />
          </filter>
          <clipPath id={`${uniqueId}-5`}>
            <path d="M24 0v24H0V0z" fill="#fff" />
          </clipPath>
        </defs>
      </IconBase>
    );
  },
);
