import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const ScreenIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase ref={ref} size={size} viewBox={viewBox}>
        <mask
          height="19"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="20"
          x="2"
          y="3"
        >
          <path
            d="M17.4683 6.12989C16.0688 4.73963 14.1355 3.87974 12 3.87974C9.8645 3.87974 7.93116 4.73963 6.53171 6.12989L4.27778 3.89077C3.43704 3.05556 2 3.64794 2 4.82901V11.3599C2 16.7722 6.27037 21.3493 11.7185 21.4965C17.1667 21.6437 22 17.1438 22 11.5659V4.82901C22 3.64794 20.563 3.05924 19.7222 3.89077L17.4683 6.12989Z"
            fill={`url(#${ids[1]})`}
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12 19.2447C16.271 19.2447 19.7333 15.8051 19.7333 11.5622C19.7333 7.3193 16.271 3.87973 12 3.87973C7.72899 3.87973 4.26666 7.3193 4.26666 11.5622C4.26666 15.8051 7.72899 19.2447 12 19.2447Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="M15.0667 8.5194C14.2815 7.73938 13.2 7.25738 12 7.25738C10.8 7.25738 9.71852 7.73938 8.93704 8.5194L4.27778 3.89077C3.43704 3.05556 2 3.64794 2 4.82901V11.3599C2 16.7722 6.27037 21.3493 11.7185 21.4965C17.1667 21.6437 22 17.1438 22 11.5659V4.82901C22 3.64794 20.563 3.05924 19.7222 3.89077L15.063 8.5194H15.0667Z"
            fill={`url(#${ids[3]})`}
          />
          <g opacity="0.65">
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M12 19.9806C16.271 19.9806 19.7333 16.541 19.7333 12.2981C19.7333 8.05515 16.271 4.61559 12 4.61559C7.72899 4.61559 4.26666 8.05515 4.26666 12.2981C4.26666 16.541 7.72899 19.9806 12 19.9806Z"
                fill="#36490C"
              />
            </g>
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M12 19.2447C16.271 19.2447 19.7333 15.8051 19.7333 11.5622C19.7333 7.3193 16.271 3.87973 12 3.87973C7.72899 3.87973 4.26666 7.3193 4.26666 11.5622C4.26666 15.8051 7.72899 19.2447 12 19.2447Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.365"
            id={`${ids[5]}`}
            width="21.4667"
            x="1.26666"
            y="1.61559"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
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
            id={`${ids[4]}`}
            width="19.4667"
            x="2.26666"
            y="1.87973"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91295"
              stdDeviation="1"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="12"
            x2="12"
            y1="0.480012"
            y2="18.0489"
          >
            <stop stopColor="#80BC17" />
            <stop offset="1" stopColor="#FFD900" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="12"
            x2="12"
            y1="8.34279"
            y2="5.01665"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="12"
            x2="12"
            y1="0.480012"
            y2="18.0489"
          >
            <stop stopColor="#80BC17" />
            <stop offset="1" stopColor="#FFD900" />
          </linearGradient>
        </defs>
      </IconBase>
    );
  }
);
