import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CollectColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
            d="M12.542 21.416c0 .965-1.166 1.446-1.848.765l-8.876-8.872a1.083 1.083 0 0 1 0-1.533l9.955-9.958a1.083 1.083 0 0 1 1.533 0l8.873 8.875c.685.682.2 1.848-.765 1.848h-2.589a6.28 6.28 0 0 1-6.28 6.281h-.003z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M12.545 6.26a6.28 6.28 0 0 0-6.28 6.28 6.28 6.28 0 1 0 12.56 0 6.28 6.28 0 0 0-6.28-6.28"
            fill={`url(#${uniqueId}-1)`}
          />
          <path
            d="M10.694 22.18c.682.682 1.848.201 1.848-.764v-5.354a3.52 3.52 0 0 0 3.52-3.521h5.352c.966 0 1.45-1.166.765-1.848l-8.873-8.875a1.083 1.083 0 0 0-1.533 0l-9.955 9.958a1.083 1.083 0 0 0 0 1.533z"
            fill={`url(#${uniqueId}-2)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-3)`}>
              <path
                d="M12.545 5.137a6.28 6.28 0 0 0-6.28 6.282 6.28 6.28 0 1 0 12.56 0 6.28 6.28 0 0 0-6.28-6.282"
                fill="#550B33"
              />
            </g>
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M12.545 6.26a6.28 6.28 0 0 0-6.28 6.28 6.28 6.28 0 1 0 12.56 0 6.28 6.28 0 0 0-6.28-6.28"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="13.314"
            x2="16.343"
            y1="13.181"
            y2="15.698"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="11.5"
            x2="18"
            y1="11"
            y2="18"
          >
            <stop stopColor="#DC2A54" />
            <stop offset="1" stopColor="#D078FC" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.563"
            id={`${uniqueId}-3`}
            width="16.56"
            x="4.266"
            y="3.137"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7077"
              stdDeviation="1"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.563"
            id={`${uniqueId}-4`}
            width="16.56"
            x="4.266"
            y="4.259"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7077"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
