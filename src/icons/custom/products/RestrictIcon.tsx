import { forwardRef } from 'react';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const RestrictIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => (
    <IconBase size={size} ref={ref} viewBox={viewBox}>
      <mask
        id="mask0_4150_91296"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          d="M12.0278 19.7115C16.298 19.7115 19.7597 16.2498 19.7597 11.9796C19.7597 7.70943 16.298 4.24773 12.0278 4.24773C7.75757 4.24773 4.29588 7.70943 4.29588 11.9796C4.29588 16.2498 7.75757 19.7115 12.0278 19.7115Z"
          fill="url(#paint0_linear_4150_91296)"
        />
        <path
          d="M15.5864 2.0037H8.40992C8.05814 2.0037 7.71746 2.14442 7.46565 2.39252L2.38882 7.46936C2.13701 7.72116 2 8.05814 2 8.41363V10.6465C2 11.3834 2.59619 11.9796 3.33309 11.9796H7.69524C7.69524 14.3718 9.63562 16.3122 12.0278 16.3122V20.6669C12.0278 21.4038 12.624 22 13.3609 22H15.5901C15.9419 22 16.2825 21.8593 16.5343 21.6112L21.6112 16.5343C21.863 16.2825 22 15.9456 22 15.5901V8.40992C22 8.05814 21.8593 7.71746 21.6112 7.46565L16.5343 2.38882C16.2825 2.13701 15.9456 2 15.5901 2L15.5864 2.0037Z"
          fill="url(#paint1_linear_4150_91296)"
        />
      </mask>
      <g mask="url(#mask0_4150_91296)">
        <path
          d="M12.0278 19.7115C16.298 19.7115 19.7597 16.2499 19.7597 11.9796C19.7597 7.70943 16.298 4.24774 12.0278 4.24774C7.75756 4.24774 4.29587 7.70943 4.29587 11.9796C4.29587 16.2499 7.75756 19.7115 12.0278 19.7115Z"
          fill="url(#paint2_linear_4150_91296)"
        />
        <path
          d="M15.5864 2.0037H8.40992C8.05814 2.0037 7.71746 2.14442 7.46565 2.39252L2.38882 7.46936C2.13701 7.72116 2 8.05814 2 8.41363V10.6465C2 11.3834 2.59619 11.9796 3.33309 11.9796H7.69524C7.69524 14.3718 9.63562 16.3122 12.0278 16.3122V20.6669C12.0278 21.4038 12.624 22 13.3609 22H15.5901C15.9419 22 16.2825 21.8593 16.5343 21.6112L21.6112 16.5343C21.863 16.2825 22 15.9456 22 15.5901V8.40992C22 8.05814 21.8593 7.71746 21.6112 7.46565L16.5343 2.38882C16.2825 2.13701 15.9456 2 15.5901 2L15.5864 2.0037Z"
          fill="url(#paint3_linear_4150_91296)"
        />
        <g opacity="0.5">
          <g filter="url(#filter0_f_4150_91296)">
            <path
              d="M13.0278 18.7115C17.298 18.7115 20.7597 15.2499 20.7597 10.9796C20.7597 6.70943 17.298 3.24774 13.0278 3.24774C8.75757 3.24774 5.29588 6.70943 5.29588 10.9796C5.29588 15.2499 8.75757 18.7115 13.0278 18.7115Z"
              fill="#2D255E"
            />
          </g>
          <g filter="url(#filter1_f_4150_91296)">
            <path
              d="M12.0278 19.7115C16.298 19.7115 19.7597 16.2499 19.7597 11.9796C19.7597 7.70943 16.298 4.24774 12.0278 4.24774C7.75757 4.24774 4.29588 7.70943 4.29588 11.9796C4.29588 16.2499 7.75757 19.7115 12.0278 19.7115Z"
              fill="#FFE37D"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_4150_91296"
          x="2.29588"
          y="0.247742"
          width="21.4638"
          height="21.4638"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_4150_91296"
          />
        </filter>
        <filter
          id="filter1_f_4150_91296"
          x="2.29588"
          y="2.24774"
          width="19.4638"
          height="19.4638"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_4150_91296"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4150_91296"
          x1="9.61015"
          y1="14.4713"
          x2="5.86973"
          y2="18.3506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFE37D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4150_91296"
          x1="10.0096"
          y1="13.6756"
          x2="25.7956"
          y2="0.396594"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="#9297FA" />
          <stop offset="1" stopColor="#3122F9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4150_91296"
          x1="10.18"
          y1="13.8904"
          x2="7.28791"
          y2="16.8898"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFE37D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4150_91296"
          x1="10.0096"
          y1="13.6756"
          x2="25.7956"
          y2="0.396594"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor="#9297FA" />
          <stop offset="1" stopColor="#3122F9" />
        </linearGradient>
      </defs>
    </IconBase>
  )
);
