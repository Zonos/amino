import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const CheckoutIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase ref={ref} size={size} viewBox={viewBox}>
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
            d="M6.25682 2.5H15.6425C16.1339 2.5 16.5872 2.76283 16.831 3.18565L21.5239 11.3144C21.7676 11.7372 21.7676 12.2628 21.5239 12.6856L16.831 20.8144C16.5834 21.2372 16.1339 21.5 15.6425 21.5H6.25682C5.76544 21.5 5.31215 21.2372 5.06836 20.8144L4.51985 19.8659C4.2075 19.325 4.29892 18.647 4.73697 18.2089L5.32572 17.6201C3.88866 16.1812 3 14.1943 3 12C3 9.80563 3.88865 7.81883 5.32571 6.37984L4.73697 5.7911C4.29892 5.34924 4.21131 4.67121 4.51985 4.13412L5.06836 3.18565C5.31596 2.76283 5.76544 2.5 6.25682 2.5Z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M10.9535 19.9535C15.3461 19.9535 18.907 16.3926 18.907 12C18.907 7.60739 15.3461 4.04649 10.9535 4.04649C6.5609 4.04649 3 7.60739 3 12C3 16.3926 6.5609 19.9535 10.9535 19.9535Z"
            fill={`url(#${ids[1]})`}
          />
          <path
            d="M15.6463 2.5H6.25682C5.76544 2.5 5.31596 2.76283 5.06836 3.18565L4.51985 4.13412C4.21131 4.67121 4.29892 5.34924 4.73697 5.7911L7.79571 8.84984C6.98817 9.65738 6.48917 10.7696 6.48917 12C6.48917 13.2304 6.98817 14.3464 7.79571 15.1502L4.73697 18.2089C4.29892 18.647 4.2075 19.325 4.51985 19.8659L5.06836 20.8144C5.31215 21.2372 5.76544 21.5 6.25682 21.5H15.6425C16.1339 21.5 16.5834 21.2372 16.831 20.8144L21.5239 12.6856C21.7676 12.2628 21.7676 11.7372 21.5239 11.3144L16.831 3.18565C16.5872 2.76283 16.1339 2.5 15.6425 2.5H15.6463Z"
            fill={`url(#${ids[2]})`}
          />
          <g opacity="0.5">
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M11.9035 19.9535C16.2961 19.9535 19.857 16.3926 19.857 12C19.857 7.60739 16.2961 4.04649 11.9035 4.04649C7.5109 4.04649 3.95 7.60739 3.95 12C3.95 16.3926 7.5109 19.9535 11.9035 19.9535Z"
                fill="#4F1D0A"
              />
            </g>
            <g filter={`url(#${ids[3]})`}>
              <path
                d="M10.9535 19.9535C15.3461 19.9535 18.907 16.3926 18.907 12C18.907 7.60739 15.3461 4.04649 10.9535 4.04649C6.5609 4.04649 3 7.60739 3 12C3 16.3926 6.5609 19.9535 10.9535 19.9535Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="21.907"
            id={`${ids[4]}`}
            width="21.907"
            x="0.949999"
            y="1.04649"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
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
            id={`${ids[3]}`}
            width="19.907"
            x="1"
            y="2.04649"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91290"
              stdDeviation="1"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="8.63753"
            x2="4.0399"
            y1="11.9733"
            y2="11.92"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="11.7153"
            x2="23.4399"
            y1="12"
            y2="12"
          >
            <stop stopColor="#E7910A" />
            <stop offset="1" stopColor="#DF2B76" />
          </linearGradient>
        </defs>
      </IconBase>
    );
  },
);
