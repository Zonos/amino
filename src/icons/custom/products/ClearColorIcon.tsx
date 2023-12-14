import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const ClearColorIcon = forwardRef<SVGSVGElement, IconProps>(
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
          width="20"
          x="2"
          y="2"
        >
          <path
            clipRule="evenodd"
            d="M11.963 4.267v-.934c0-.737-.596-1.333-1.333-1.333H7.904A5.905 5.905 0 0 0 2 7.904v12.763C2 21.404 2.596 22 3.333 22h12.763A5.905 5.905 0 0 0 22 16.096v-2.74c0-.738-.596-1.334-1.333-1.334h-.934V12a7.733 7.733 0 0 0-7.77-7.733Z"
            fill={`url(#${ids[1]})`}
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12 19.733a7.733 7.733 0 1 0 0-15.466 7.733 7.733 0 0 0 0 15.466Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="M16.333 12.022V12A4.334 4.334 0 0 0 12 7.667h-.037V3.333c0-.737-.596-1.333-1.333-1.333H7.904A5.905 5.905 0 0 0 2 7.904v12.763C2 21.404 2.596 22 3.333 22h12.763A5.905 5.905 0 0 0 22 16.096v-2.74c0-.738-.596-1.334-1.333-1.334h-4.334Z"
            fill={`url(#${ids[3]})`}
          />
          <g opacity=".5">
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M11 20.733a7.733 7.733 0 1 0 0-15.466 7.733 7.733 0 0 0 0 15.466Z"
                fill="#092642"
              />
            </g>
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M12 19.733a7.733 7.733 0 1 0 0-15.466 7.733 7.733 0 0 0 0 15.466Z"
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
            y1="12.067"
            y2="29.637"
          >
            <stop stopColor="#00B9B7" />
            <stop offset="1" stopColor="#3122F6" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="12.689"
            x2="16.8"
            y1="11.426"
            y2="7.974"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="11.937"
            x2="-4.689"
            y1="12.067"
            y2="29.637"
          >
            <stop stopColor="#00B9B7" />
            <stop offset="1" stopColor="#3122F6" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.467"
            id={`${ids[4]}`}
            width="21.467"
            x=".267"
            y="2.267"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91297"
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
            y="2.267"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91297"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
