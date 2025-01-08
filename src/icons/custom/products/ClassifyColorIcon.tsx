import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClassifyColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
            d="m14.063 3.257 8.758 15.98v.003c.529.962-.179 2.132-1.283 2.132H3.462c-1.442 0-2.01-1.847-.812-2.644l1.58-.85a7.93 7.93 0 0 1-1.273-4.32c0-4.438 3.635-8.035 8.12-8.035h.245V3.946c0-1.497 2.018-2.005 2.741-.689"
            fill="#D9D9D9"
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M19.197 13.557c0 3.79-2.652 6.968-6.222 7.81H9.179c-3.57-.842-6.222-4.02-6.222-7.81 0-4.436 3.636-8.034 8.12-8.034 2.006 0 3.842.72 5.257 1.916l2.797 5.106q.064.498.066 1.012"
            fill={`url(#${uniqueId}-1)`}
          />
          <path
            d="M22.821 19.236 14.063 3.257c-.723-1.316-2.741-.808-2.741.689v4.929c-2.621 0-4.745 2.1-4.745 4.694 0 .97.296 1.866.805 2.616L2.65 18.728c-1.198.797-.63 2.644.812 2.644h18.076c1.104 0 1.812-1.17 1.283-2.132z"
            fill={`url(#${uniqueId}-2)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-3)`}>
              <path
                d="M11.987 21.75c4.065 0 7.361-3.26 7.361-7.283s-3.296-7.283-7.361-7.283c-4.066 0-7.362 3.26-7.362 7.283s3.296 7.284 7.362 7.284Z"
                fill="#3B093F"
              />
            </g>
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M11.121 20.885c4.066 0 7.362-3.26 7.362-7.283s-3.296-7.284-7.362-7.284c-4.065 0-7.361 3.261-7.361 7.284s3.296 7.283 7.361 7.283"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="9.696"
            x2="5.586"
            y1="12.734"
            y2="10.232"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="17.439"
            x2=".75"
            y1="18.101"
            y2="6.817"
          >
            <stop offset=".01" stopColor="#AA2DC9" />
            <stop offset="1" stopColor="#9297FA" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="20.567"
            id={`${uniqueId}-3`}
            width="20.723"
            x="1.625"
            y="4.184"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
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
            id={`${uniqueId}-4`}
            width="18.723"
            x="1.76"
            y="4.318"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91292"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
