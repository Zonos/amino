import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const TaxColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          x="1"
          y="2"
        >
          <path
            d="M9.937 20.743 1.179 4.763V4.76c-.529-.962.179-2.132 1.283-2.132h18.076c1.442 0 2.01 1.847.812 2.644l-1.58.85a7.94 7.94 0 0 1 1.273 4.32c0 4.438-3.635 8.035-8.12 8.035h-.245v1.577c0 1.497-2.018 2.005-2.741.689"
            fill="#D9D9D9"
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M4.803 10.443c0-3.79 2.653-6.968 6.222-7.81h3.796c3.57.842 6.222 4.02 6.222 7.81 0 4.436-3.636 8.034-8.12 8.034a8.1 8.1 0 0 1-5.257-1.916l-2.797-5.106a8 8 0 0 1-.066-1.012"
            fill={`url(#${uniqueId}-1)`}
          />
          <path
            d="m1.179 4.764 8.758 15.979c.723 1.316 2.741.808 2.741-.689v-4.929c2.621 0 4.745-2.1 4.745-4.694 0-.97-.296-1.866-.805-2.616l4.732-2.543c1.198-.797.63-2.644-.812-2.644H2.462C1.358 2.628.65 3.798 1.18 4.76z"
            fill={`url(#${uniqueId}-2)`}
          />
          <g opacity=".5">
            <g filter={`url(#${uniqueId}-3)`}>
              <path
                d="M12.013 2.25c-4.065 0-7.361 3.26-7.361 7.283s3.296 7.283 7.361 7.283c4.066 0 7.362-3.26 7.362-7.283s-3.296-7.284-7.362-7.284Z"
                fill="#074A2E"
              />
            </g>
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M12.879 3.115c-4.066 0-7.362 3.26-7.362 7.283s3.296 7.284 7.362 7.284c4.065 0 7.361-3.261 7.361-7.284s-3.296-7.283-7.361-7.283"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="14.304"
            x2="18.414"
            y1="11.266"
            y2="13.768"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="10.979"
            x2="18.319"
            y1="9.554"
            y2="15.521"
          >
            <stop stopColor="#10A74C" />
            <stop offset="1" stopColor="#93F317" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="20.567"
            id={`${uniqueId}-3`}
            width="20.723"
            x="1.652"
            y="-.751"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7076"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="18.567"
            id={`${uniqueId}-4`}
            width="18.723"
            x="3.517"
            y="1.115"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7076"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
