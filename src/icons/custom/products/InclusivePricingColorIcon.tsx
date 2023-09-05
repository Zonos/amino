import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const InclusivePricingColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => {
    const ids = useStableUniqueId(6);
    return (
      <IconBase
        ref={ref}
        className={className}
        color={color}
        size={size}
        viewBox="0 0 24 24"
      >
        <mask
          height="22"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="24"
          x="0"
          y="1"
        >
          <path
            clipRule="evenodd"
            d="M17.484 3.78A7.71 7.71 0 0 0 12 1.5a7.71 7.71 0 0 0-5.494 2.291l-.66-.66a1.333 1.333 0 0 0-1.886 0L2.032 5.06a5.905 5.905 0 0 0 0 8.349l9.025 9.025a1.333 1.333 0 0 0 1.886 0l9.025-9.025a5.905 5.905 0 0 0 0-8.35L20.03 3.122a1.332 1.332 0 0 0-1.886 0l-.66.66Z"
            fill={`url(#${ids[1]})`}
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12 16.967A7.733 7.733 0 1 0 12 1.5a7.733 7.733 0 0 0 0 15.467Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="m15.08 6.185-.016-.016a4.334 4.334 0 0 0-6.128 0l-.026.026-3.064-3.064a1.333 1.333 0 0 0-1.886 0L2.032 5.06a5.905 5.905 0 0 0 0 8.349l9.025 9.025a1.333 1.333 0 0 0 1.886 0l9.025-9.025a5.905 5.905 0 0 0 0-8.35L20.03 3.122a1.332 1.332 0 0 0-1.886 0L15.08 6.185Z"
            fill={`url(#${ids[3]})`}
          />
          <g opacity=".5">
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M11 17.967A7.733 7.733 0 1 0 11 2.5a7.733 7.733 0 0 0 0 15.467Z"
                fill="#3B093F"
              />
            </g>
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M12 16.967A7.733 7.733 0 1 0 12 1.5a7.733 7.733 0 0 0 0 15.467Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="11.937"
            x2="-4.689"
            y1="9.3"
            y2="26.87"
          >
            <stop stopColor="#00B9B7" />
            <stop offset="1" stopColor="#3122F6" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="12.689"
            x2="16.8"
            y1="8.659"
            y2="5.207"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="12"
            x2="12"
            y1="7.5"
            y2="17"
          >
            <stop stopColor="#C8286B" />
            <stop offset="1" stopColor="#AA2EC9" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.467"
            id={`${ids[4]}`}
            width="21.467"
            x=".267"
            y="-.5"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_5694_107119"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.467"
            id={`${ids[5]}`}
            width="19.467"
            x="2.267"
            y="-.5"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_5694_107119"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
