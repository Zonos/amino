import { forwardRef } from 'react';

import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const HelloIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => {
    const ids = useStableUniqueId(5);
    return (
      <IconBase ref={ref} size={size} viewBox={viewBox}>
        <mask
          height="22"
          id={`${ids[0]}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="22"
          x="1"
          y="1"
        >
          <path
            clipRule="evenodd"
            d="M11.4583 2.58425C11.4583 1.61876 12.6242 1.1379 13.3056 1.81943L22.182 10.6906C22.606 11.1147 22.606 11.8 22.182 12.2241L12.2268 22.182C11.8028 22.606 11.1177 22.606 10.6937 22.182L1.82103 13.307C1.13589 12.6254 1.62041 11.4593 2.58565 11.4593H5.17477C5.17477 7.99013 7.98632 5.17786 11.4545 5.17786C11.4558 5.17786 11.4571 5.17786 11.4583 5.17786V2.58425Z"
            fill="#FFE37D"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#${ids[0]})`}>
          <path
            d="M11.4546 17.7407C14.9228 17.7407 17.7343 14.9284 17.7343 11.4593C17.7343 7.99017 14.9228 5.17789 11.4546 5.17789C7.98634 5.17789 5.17478 7.99017 5.17478 11.4593C5.17478 14.9284 7.98634 17.7407 11.4546 17.7407Z"
            fill={`url(#${ids[1]})`}
          />
          <path
            d="M13.3056 1.81943C12.6242 1.1379 11.4584 1.61876 11.4584 2.58426V7.93804C9.51272 7.93804 7.93804 9.51312 7.93804 11.4593H2.58565C1.62041 11.4593 1.13589 12.6254 1.82103 13.307L10.6937 22.182C11.1177 22.606 11.8028 22.606 12.2268 22.182L22.182 12.2241C22.606 11.8 22.606 11.1147 22.182 10.6906L13.3056 1.81943Z"
            fill={`url(#${ids[2]})`}
          />
          <g opacity="0.5">
            <g filter={`url(#${ids[3]})`}>
              <path
                d="M11.4546 18.863C14.9228 18.863 17.7343 16.0507 17.7343 12.5815C17.7343 9.11241 14.9228 6.30013 11.4546 6.30013C7.98634 6.30013 5.17479 9.11241 5.17479 12.5815C5.17479 16.0507 7.98634 18.863 11.4546 18.863Z"
                fill="#053326"
              />
            </g>
            <g filter={`url(#${ids[4]})`}>
              <path
                d="M11.4546 17.7407C14.9228 17.7407 17.7343 14.9284 17.7343 11.4593C17.7343 7.99017 14.9228 5.17789 11.4546 5.17789C7.98634 5.17789 5.17478 7.99017 5.17478 11.4593C5.17478 14.9284 7.98634 17.7407 11.4546 17.7407Z"
                fill="#FFE37D"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.5628"
            id={`${ids[3]}`}
            width="16.5596"
            x="3.17479"
            y="4.30013"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91293"
              stdDeviation="1"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16.5628"
            id={`${ids[4]}`}
            width="16.5596"
            x="3.17478"
            y="3.17789"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_4150_91293"
              stdDeviation="1"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[1]}`}
            x1="10.6861"
            x2="7.65728"
            y1="10.8194"
            y2="8.30233"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFE37D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${ids[2]}`}
            x1="14.8575"
            x2="4.26361"
            y1="14.8139"
            y2="4.39685"
          >
            <stop stopColor="#80B917" />
            <stop offset="1" stopColor="#0CC4E2" />
          </linearGradient>
        </defs>
      </IconBase>
    );
  },
);
