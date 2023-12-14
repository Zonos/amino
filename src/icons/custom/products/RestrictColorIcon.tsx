import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';
import type { IconProps } from 'src/types/IconProps';

export const RestrictColorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, color, inlineBlock, size }, ref) => {
    const ids = useStableUniqueId(7);
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
            d="M12.028 19.712a7.732 7.732 0 1 0 0-15.464 7.732 7.732 0 0 0 0 15.463Z"
            fill={`url(#${ids[1]})`}
          />
          <path
            d="M15.586 2.004H8.41c-.352 0-.693.14-.944.389L2.389 7.469A1.328 1.328 0 0 0 2 8.414v2.232c0 .737.596 1.334 1.333 1.334h4.362a4.333 4.333 0 0 0 4.333 4.332v4.355c0 .737.596 1.333 1.333 1.333h2.23c.35 0 .691-.14.943-.389l5.077-5.077c.252-.252.389-.588.389-.944V8.41c0-.352-.14-.693-.389-.944l-5.077-5.077A1.327 1.327 0 0 0 15.59 2l-.004.004Z"
            fill={`url(#${ids[2]})`}
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12.028 19.712a7.732 7.732 0 1 0 0-15.464 7.732 7.732 0 0 0 0 15.463Z"
            fill={`url(#${ids[3]})`}
          />
          <path
            d="M15.586 2.004H8.41c-.352 0-.693.14-.944.389L2.389 7.469A1.328 1.328 0 0 0 2 8.414v2.232c0 .737.596 1.334 1.333 1.334h4.362a4.333 4.333 0 0 0 4.333 4.332v4.355c0 .737.596 1.333 1.333 1.333h2.23c.35 0 .691-.14.943-.389l5.077-5.077c.252-.252.389-.588.389-.944V8.41c0-.352-.14-.693-.389-.944l-5.077-5.077A1.327 1.327 0 0 0 15.59 2l-.004.004Z"
            fill={`url(#${ids[4]})`}
          />
          <g opacity=".5">
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M13.028 18.712a7.732 7.732 0 1 0 0-15.464 7.732 7.732 0 0 0 0 15.463Z"
                fill="#2D255E"
              />
            </g>
            <g filter={`url(#${ids[6]})`}>
              <path
                d="M12.028 19.712a7.732 7.732 0 1 0 0-15.464 7.732 7.732 0 0 0 0 15.463Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="9.61"
            x2="5.87"
            y1="14.471"
            y2="18.351"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="10.01"
            x2="25.796"
            y1="13.676"
            y2=".397"
          >
            <stop offset=".01" stopColor="#9297FA" />
            <stop offset="1" stopColor="#3122F9" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="10.18"
            x2="7.288"
            y1="13.89"
            y2="16.89"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[4]}`}
            x1="10.01"
            x2="25.796"
            y1="13.676"
            y2=".397"
          >
            <stop offset=".01" stopColor="#9297FA" />
            <stop offset="1" stopColor="#3122F9" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.464"
            id={`${ids[5]}`}
            width="21.464"
            x="2.296"
            y=".248"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91296"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.464"
            id={`${ids[6]}`}
            width="19.464"
            x="2.296"
            y="2.248"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91296"
              stdDeviation="1"
            />
          </filter>
        </defs>
      </IconBase>
    );
  },
);
