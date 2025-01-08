import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const HelloColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
        <mask
          height="22"
          id={`${uniqueId}-0`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="22"
          x="1"
          y="1"
        >
          <path
            clipRule="evenodd"
            d="M11.458 2.584c0-.965 1.166-1.446 1.848-.765l8.876 8.872a1.083 1.083 0 0 1 0 1.533l-9.955 9.958a1.083 1.083 0 0 1-1.533 0L1.82 13.307c-.685-.682-.2-1.848.765-1.848h2.589a6.28 6.28 0 0 1 6.28-6.281h.003z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M11.455 17.74a6.28 6.28 0 0 0 6.28-6.28 6.28 6.28 0 1 0-12.56 0 6.28 6.28 0 0 0 6.28 6.28"
            fill={`url(#${uniqueId}-1)`}
          />
          <path
            d="M13.306 1.82c-.682-.682-1.848-.201-1.848.764v5.354a3.52 3.52 0 0 0-3.52 3.521H2.586c-.966 0-1.45 1.166-.765 1.848l8.873 8.875a1.083 1.083 0 0 0 1.533 0l9.955-9.958a1.083 1.083 0 0 0 0-1.533z"
            fill={`url(#${uniqueId}-2)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-3)`}>
              <path
                d="M11.455 18.863a6.28 6.28 0 0 0 6.28-6.281 6.28 6.28 0 1 0-12.56 0 6.28 6.28 0 0 0 6.28 6.281"
                fill="#053326"
              />
            </g>
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M11.455 17.74a6.28 6.28 0 0 0 6.28-6.28 6.28 6.28 0 1 0-12.56 0 6.28 6.28 0 0 0 6.28 6.28"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="10.686"
            x2="7.657"
            y1="10.819"
            y2="8.302"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="14.857"
            x2="4.264"
            y1="14.814"
            y2="4.397"
          >
            <stop stopColor="#80B917" />
            <stop offset="1" stopColor="#0CC4E2" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.563"
            id={`${uniqueId}-3`}
            width="16.56"
            x="3.175"
            y="4.3"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91293"
              stdDeviation="1"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.563"
            id={`${uniqueId}-4`}
            width="16.56"
            x="3.175"
            y="3.178"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91293"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
