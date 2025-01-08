import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const DashboardColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          height="18"
          id={`${uniqueId}-0`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="18"
          x="3"
          y="3"
        >
          <path
            d="m20.966 20.041-2.296-7.834a.76.76 0 0 1 0-.418l2.296-7.834a.747.747 0 0 0-.925-.924l-7.834 2.295a.76.76 0 0 1-.418 0L3.955 3.034a.747.747 0 0 0-.924.925l2.295 7.834c.04.136.04.282 0 .418l-2.295 7.834a.747.747 0 0 0 .924.924l7.834-2.296a.76.76 0 0 1 .418 0l7.834 2.296a.747.747 0 0 0 .925-.924z"
            fill={`url(#${uniqueId}-6)`}
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <g filter={`url(#${uniqueId}-1)`}>
            <circle cx="6.5" cy="6.5" fill="#B004A4" r="6.5" />
          </g>
          <g filter={`url(#${uniqueId}-2)`}>
            <circle cx="17.5" cy="6.5" fill="#FEBD10" r="6.5" />
          </g>
          <g filter={`url(#${uniqueId}-3)`}>
            <circle cx="17.5" cy="17.5" fill="#98C729" r="6.5" />
          </g>
          <g filter={`url(#${uniqueId}-4)`}>
            <circle cx="6.5" cy="17.5" fill="#536CFE" r="6.5" />
          </g>
          <g filter={`url(#${uniqueId}-5)`}>
            <path
              d="m16.485 16.022-1.149-3.918a.4.4 0 0 1 0-.208l1.149-3.918a.372.372 0 0 0-.463-.462l-3.918 1.148a.4.4 0 0 1-.208 0L7.978 7.516a.372.372 0 0 0-.462.462l1.148 3.918a.4.4 0 0 1 0 .208l-1.148 3.918a.372.372 0 0 0 .462.463l3.918-1.149a.4.4 0 0 1 .208 0l3.918 1.149a.372.372 0 0 0 .463-.463"
              fill="#F9D984"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21"
            id={`${uniqueId}-1`}
            width="21"
            x="-4"
            y="-4"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91298"
              stdDeviation="2"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21"
            id={`${uniqueId}-2`}
            width="21"
            x="7"
            y="-4"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91298"
              stdDeviation="2"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21"
            id={`${uniqueId}-3`}
            width="21"
            x="7"
            y="7"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91298"
              stdDeviation="2"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21"
            id={`${uniqueId}-4`}
            width="21"
            x="-4"
            y="7"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91298"
              stdDeviation="2"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="13"
            id={`${uniqueId}-5`}
            width="13"
            x="5.5"
            y="5.5"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91298"
              stdDeviation="1"
            />
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="matrix(-8.9982 -9.00008 9.53138 -9.52939 11.998 12)"
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-6`}
            r="1"
          >
            <stop stopColor="#B003A4" />
            <stop offset=".083" stopColor="#D2434E" />
            <stop offset=".167" stopColor="#EB8315" />
            <stop offset=".25" stopColor="#FEBD10" />
            <stop offset=".333" stopColor="#FCBC05" />
            <stop offset=".417" stopColor="#E4C217" />
            <stop offset=".5" stopColor="#93C729" />
            <stop offset=".583" stopColor="#2CC2A2" />
            <stop offset=".667" stopColor="#17B8E5" />
            <stop offset=".75" stopColor="#536BFE" />
            <stop offset=".833" stopColor="#5F60F1" />
            <stop offset=".917" stopColor="#9A2AB0" />
            <stop offset="1" stopColor="#B003A4" />
          </radialGradient>
        </defs>
      </IconBase>
    );
  },
);
