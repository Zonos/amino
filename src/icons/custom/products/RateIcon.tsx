import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';
import { IconBase } from 'src/icons/icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const RateIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase ref={ref} size={size} viewBox={viewBox}>
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
            d="M3 20.2336V3.76643C3 3.06638 3.56638 2.5 4.26643 2.5H18.9395C20.0687 2.5 20.6351 3.86493 19.8365 4.66349L17.6922 6.80785C19.0214 8.13709 19.8435 9.97341 19.8435 12.0018C19.8435 14.0301 19.0214 15.8664 17.6922 17.1957L19.833 19.3365C20.628 20.1351 20.0652 21.5 18.9359 21.5H4.26643C3.56638 21.5 3 20.9336 3 20.2336Z"
            fill={`url(#${ids[1]})`}
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M12.4982 19.3471C16.5549 19.3471 19.8436 16.0585 19.8436 12.0018C19.8436 7.94507 16.5549 4.65646 12.4982 4.65646C8.44155 4.65646 5.15294 7.94507 5.15294 12.0018C5.15294 16.0585 8.44155 19.3471 12.4982 19.3471Z"
            fill={`url(#${ids[2]})`}
          />
          <path
            d="M3 3.76995V20.2336C3 20.9336 3.56638 21.5 4.26643 21.5H18.9359C20.0652 21.5 20.628 20.1351 19.833 19.3365L15.4075 14.911C16.1533 14.1652 16.6141 13.138 16.6141 11.9982C16.6141 10.8585 16.1533 9.83475 15.411 9.08896L19.8365 4.66349C20.6351 3.86493 20.0687 2.5 18.9395 2.5H4.26643C3.56638 2.5 3 3.06638 3 3.76643V3.76995Z"
            fill={`url(#${ids[3]})`}
          />
          <g opacity="0.5">
            <g filter={`url(#${ids[5]})`}>
              <path
                d="M11.5904 18.6957C15.2873 18.6957 18.2843 15.6987 18.2843 12.0018C18.2843 8.30484 15.2873 5.30789 11.5904 5.30789C7.89344 5.30789 4.89649 8.30484 4.89649 12.0018C4.89649 15.6987 7.89344 18.6957 11.5904 18.6957Z"
                fill="#061238"
              />
            </g>
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M12.4561 18.6957C16.153 18.6957 19.15 15.6987 19.15 12.0018C19.15 8.30484 16.153 5.30789 12.4561 5.30789C8.75919 5.30789 5.76224 8.30484 5.76224 12.0018C5.76224 15.6987 8.75919 18.6957 12.4561 18.6957Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="19.3878"
            id={`${ids[5]}`}
            width="19.3878"
            x="1.89649"
            y="2.30789"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91294"
              stdDeviation="1.5"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="17.3878"
            id={`${ids[4]}`}
            width="17.3878"
            x="3.76224"
            y="3.30789"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91294"
              stdDeviation="1"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="22.1794"
            x2="-9.07332"
            y1="11.9771"
            y2="12.044"
          >
            <stop stopColor="#2740F3" />
            <stop offset="0.99" stopColor="#AA2DC9" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="13.6908"
            x2="19.2877"
            y1="12.0229"
            y2="12.1214"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[3]}`}
            x1="22.1794"
            x2="-9.07332"
            y1="11.9771"
            y2="12.044"
          >
            <stop stopColor="#2740F3" />
            <stop offset="0.99" stopColor="#AA2DC9" />
          </linearGradient>
        </defs>
      </IconBase>
    );
  },
);
