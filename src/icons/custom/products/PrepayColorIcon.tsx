import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const PrepayColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => {
    const ids = useStableUniqueId(6);
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
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="18"
          x="3"
          y="2"
        >
          <path
            d="M5.63 6.532A7.735 7.735 0 0 0 3.38 12c0 2.136.86 4.069 2.25 5.468l-2.24 2.254c-.833.841-.241 2.278.94 2.278h6.53c5.413 0 9.99-4.27 10.138-9.719C21.143 6.833 16.644 2 11.066 2H4.329c-1.181 0-1.77 1.437-.938 2.278L5.63 6.532Z"
            fill={`url(#${ids[1]})`}
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M18.745 12c0-4.271-3.44-7.733-7.683-7.733S3.38 7.729 3.38 12c0 4.271 3.44 7.733 7.682 7.733 4.243 0 7.683-3.462 7.683-7.733Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="M8.02 8.933A4.333 4.333 0 0 0 6.756 12c0 1.2.482 2.281 1.262 3.063l-4.628 4.66c-.835.84-.243 2.277.938 2.277h6.53c5.413 0 9.99-4.27 10.138-9.719C21.143 6.833 16.644 2 11.066 2H4.329c-1.181 0-1.77 1.437-.938 2.278l4.628 4.659v-.004Z"
            fill={`url(#${ids[3]})`}
          />
          <g opacity=".65">
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M19.48 12c0-4.271-3.439-7.733-7.682-7.733S4.116 7.729 4.116 12c0 4.271 3.44 7.733 7.682 7.733 4.243 0 7.683-3.462 7.683-7.733Z"
                fill="#2791DE"
              />
            </g>
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M18.745 12c0-4.271-3.44-7.733-7.683-7.733S3.38 7.729 3.38 12c0 4.271 3.44 7.733 7.682 7.733 4.243 0 7.683-3.462 7.683-7.733Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="-.02"
            x2="17.549"
            y1="12"
            y2="12"
          >
            <stop stopColor="#80BC17" />
            <stop offset="1" stopColor="#FFD900" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="7.843"
            x2="4.517"
            y1="12"
            y2="12"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="15.5"
            x2="-3.291"
            y1="12.5"
            y2="10.517"
          >
            <stop stopColor="#4560EE" />
            <stop offset="1" stopColor="#65E4EF" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.467"
            id={`${ids[4]}`}
            width="21.365"
            x="1.116"
            y="1.267"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7078"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.467"
            id={`${ids[5]}`}
            width="19.365"
            x="1.38"
            y="2.267"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_6408_7078"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
