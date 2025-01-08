import { forwardRef, useId } from 'react';

import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ScreenColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          height="19"
          id={`${uniqueId}-0`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="20"
          x="2"
          y="3"
        >
          <path
            d="M17.468 6.13A7.74 7.74 0 0 0 12 3.88c-2.136 0-4.069.86-5.468 2.25L4.278 3.89C3.437 3.057 2 3.649 2 4.83v6.53c0 5.413 4.27 9.99 9.719 10.138C17.166 21.643 22 17.144 22 11.566V4.829c0-1.181-1.437-1.77-2.278-.938z"
            fill={`url(#${uniqueId}-1)`}
          />
        </mask>
        <g mask={`url(#${uniqueId}-0)`}>
          <path
            d="M12 19.245c4.271 0 7.733-3.44 7.733-7.683S16.271 3.88 12 3.88s-7.733 3.44-7.733 7.682S7.729 19.245 12 19.245"
            fill={`url(#${uniqueId}-2)`}
          />
          <path
            d="M15.067 8.52A4.33 4.33 0 0 0 12 7.256c-1.2 0-2.281.482-3.063 1.262L4.277 3.89C3.438 3.056 2 3.648 2 4.829v6.53c0 5.413 4.27 9.99 9.719 10.138C17.166 21.643 22 17.144 22 11.566V4.829c0-1.181-1.437-1.77-2.278-.938l-4.659 4.628z"
            fill={`url(#${uniqueId}-3)`}
          />
          <g opacity=".65">
            <g filter={`url(#${uniqueId}-4)`}>
              <path
                d="M12 19.98c4.271 0 7.733-3.439 7.733-7.682S16.271 4.616 12 4.616s-7.733 3.44-7.733 7.682S7.729 19.981 12 19.981Z"
                fill="#36490C"
              />
            </g>
            <g filter={`url(#${uniqueId}-5)`}>
              <path
                d="M12 19.245c4.271 0 7.733-3.44 7.733-7.683S16.271 3.88 12 3.88s-7.733 3.44-7.733 7.682S7.729 19.245 12 19.245"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-1`}
            x1="12"
            x2="12"
            y1=".48"
            y2="18.049"
          >
            <stop stopColor="#80BC17" />
            <stop offset="1" stopColor="#FFD900" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-2`}
            x1="12"
            x2="12"
            y1="8.343"
            y2="5.017"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${uniqueId}-3`}
            x1="12"
            x2="12"
            y1=".48"
            y2="18.049"
          >
            <stop stopColor="#80BC17" />
            <stop offset="1" stopColor="#FFD900" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.365"
            id={`${uniqueId}-4`}
            width="21.467"
            x="1.267"
            y="1.616"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91295"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.365"
            id={`${uniqueId}-5`}
            width="19.467"
            x="2.267"
            y="1.88"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91295"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
