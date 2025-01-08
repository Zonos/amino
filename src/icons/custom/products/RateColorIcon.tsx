import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RateColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          width="18"
          x="3"
          y="2"
        >
          <path
            d="M3 20.234V3.766c0-.7.566-1.266 1.266-1.266H18.94c1.13 0 1.696 1.365.898 2.163l-2.145 2.145a7.32 7.32 0 0 1 2.151 5.194 7.32 7.32 0 0 1-2.15 5.194l2.14 2.14c.795.8.232 2.164-.897 2.164H4.266c-.7 0-1.266-.566-1.266-1.266"
            fill={`url(#${uniqueId}-1)`}
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M12.498 19.347a7.345 7.345 0 1 0 0-14.69 7.345 7.345 0 0 0 0 14.69"
            fill={`url(#${uniqueId}-2)`}
          />
          <path
            d="M3 3.77v16.464c0 .7.566 1.266 1.266 1.266h14.67c1.13 0 1.692-1.365.897-2.163l-4.425-4.426a4.1 4.1 0 0 0 1.206-2.913c0-1.14-.46-2.163-1.203-2.909l4.426-4.426c.798-.798.232-2.163-.898-2.163H4.266C3.566 2.5 3 3.066 3 3.766z"
            fill={`url(#${uniqueId}-3)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M11.59 18.696a6.694 6.694 0 1 0 0-13.388 6.694 6.694 0 0 0 0 13.388"
                fill="#061238"
              />
            </g>
            <g filter={`url(#${uniqueId}-5)`}>
              <path
                d="M12.456 18.696a6.694 6.694 0 1 0 0-13.388 6.694 6.694 0 0 0 0 13.388"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="22.179"
            x2="-9.073"
            y1="11.977"
            y2="12.044"
          >
            <stop stopColor="#2740F3" />
            <stop offset=".99" stopColor="#AA2DC9" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="13.691"
            x2="19.288"
            y1="12.023"
            y2="12.121"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-3`}
            x1="22.179"
            x2="-9.073"
            y1="11.977"
            y2="12.044"
          >
            <stop stopColor="#2740F3" />
            <stop offset=".99" stopColor="#AA2DC9" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.388"
            id={`${uniqueId}-4`}
            width="19.388"
            x="1.896"
            y="2.308"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91294"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="17.388"
            id={`${uniqueId}-5`}
            width="17.388"
            x="3.762"
            y="3.308"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91294"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
