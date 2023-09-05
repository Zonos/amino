import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const CheckoutColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, size }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase
        ref={ref}
        className={className}
        color={color}
        size={size}
        viewBox="0 0 24 24"
      >
        <mask
          height="20"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="19"
          x="3"
          y="2"
        >
          <path
            clipRule="evenodd"
            d="M6.257 2.5h9.386c.49 0 .944.263 1.188.686l4.693 8.128c.244.423.244.949 0 1.372l-4.693 8.128a1.377 1.377 0 0 1-1.188.686H6.257c-.492 0-.945-.263-1.189-.686l-.548-.948a1.371 1.371 0 0 1 .217-1.657l.589-.589A7.928 7.928 0 0 1 3 12a7.93 7.93 0 0 1 2.326-5.62l-.589-.589a1.378 1.378 0 0 1-.217-1.657l.548-.948A1.377 1.377 0 0 1 6.257 2.5Z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M10.954 19.953a7.953 7.953 0 1 0 0-15.906 7.953 7.953 0 0 0 0 15.906Z"
            fill={`url(#${ids[1]})`}
          />
          <path
            d="M15.646 2.5h-9.39c-.49 0-.94.263-1.188.686l-.548.948a1.378 1.378 0 0 0 .217 1.657L7.796 8.85A4.439 4.439 0 0 0 6.489 12c0 1.23.5 2.346 1.307 3.15l-3.059 3.06a1.371 1.371 0 0 0-.217 1.657l.548.948c.244.423.697.686 1.189.686h9.386c.49 0 .94-.263 1.188-.686l4.693-8.128a1.377 1.377 0 0 0 0-1.372L16.83 3.186a1.373 1.373 0 0 0-1.188-.686h.003Z"
            fill={`url(#${ids[2]})`}
          />
          <g opacity=".5">
            <g filter={`url(#${ids[3]})`}>
              <path
                d="M11.903 19.953a7.953 7.953 0 1 0 0-15.906 7.953 7.953 0 0 0 0 15.906Z"
                fill="#4F1D0A"
              />
            </g>
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M10.954 19.953a7.953 7.953 0 1 0 0-15.906 7.953 7.953 0 0 0 0 15.906Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="8.638"
            x2="4.04"
            y1="11.973"
            y2="11.92"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="11.715"
            x2="23.44"
            y1="12"
            y2="12"
          >
            <stop stopColor="#E7910A" />
            <stop offset="1" stopColor="#DF2B76" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.907"
            id={`${ids[3]}`}
            width="21.907"
            x=".95"
            y="1.046"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91290"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.907"
            id={`${ids[4]}`}
            width="19.907"
            x="1"
            y="2.046"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91290"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
