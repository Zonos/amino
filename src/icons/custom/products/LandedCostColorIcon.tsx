import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const LandedCostColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          height="20"
          id={`${uniqueId}-0`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="21"
          x="2"
          y="2"
        >
          <path
            clipRule="evenodd"
            d="M12.048 4.173V3.34c0-.83-.745-1.452-1.564-1.322-5.012.786-8.795 5.27-8.464 10.572.313 5.004 4.387 9.082 9.391 9.39 5.303.332 9.793-3.455 10.575-8.467a1.346 1.346 0 0 0-1.322-1.564h-.837a7.775 7.775 0 0 0-7.775-7.775z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M12.052 19.723a7.775 7.775 0 1 0 0-15.55 7.775 7.775 0 0 0 0 15.55"
            fill={`url(#${uniqueId}-1)`}
          />
          <path
            d="M16.408 11.948a4.36 4.36 0 0 0-4.356-4.356h-.004V3.339c0-.83-.745-1.452-1.564-1.322-5.012.786-8.795 5.27-8.464 10.572.313 5.004 4.387 9.082 9.391 9.39 5.303.332 9.793-3.455 10.575-8.467a1.346 1.346 0 0 0-1.322-1.564h-4.255Z"
            fill={`url(#${uniqueId}-2)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-3)`}>
              <path
                d="M11.052 20.723a7.775 7.775 0 1 0 0-15.55 7.775 7.775 0 0 0 0 15.55"
                fill="#420926"
              />
            </g>
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M12.052 19.723a7.775 7.775 0 1 0 0-15.55 7.775 7.775 0 0 0 0 15.55"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="13.191"
            x2="17.082"
            y1="10.876"
            y2="7.223"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="8.537"
            x2="18.348"
            y1="15.866"
            y2="4.933"
          >
            <stop stopColor="#DF2B76" />
            <stop offset="1" stopColor="#FFB90D" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.55"
            id={`${uniqueId}-3`}
            width="21.55"
            x=".277"
            y="2.173"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
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
            id={`${uniqueId}-4`}
            width="19.55"
            x="2.277"
            y="2.173"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91291"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
