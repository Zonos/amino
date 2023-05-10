import { forwardRef } from 'react';

import { IconBase } from '../../icon-base/_IconBase';

type Props = {
  size?: number;
  viewBox?: string;
};
export const ClearIcon = forwardRef<SVGSVGElement, Props>(
  ({ size = 24, viewBox }, ref) => (
    <IconBase size={size} ref={ref} viewBox={viewBox}>
      <mask
        id="mask0_4150_91297"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.963 4.26675V3.33333C11.963 2.5963 11.3667 2 10.6296 2H7.9037C4.64444 2 2 4.64444 2 7.9037V20.6667C2 21.4037 2.5963 22 3.33333 22H16.0963C19.3556 22 22 19.3556 22 16.0963V13.3556C22 12.6185 21.4037 12.0222 20.6667 12.0222H19.7333C19.7333 12.0148 19.7333 12.0074 19.7333 12C19.7333 7.72899 16.271 4.26666 12 4.26666C11.9876 4.26666 11.9753 4.26669 11.963 4.26675Z"
          fill="url(#paint0_linear_4150_91297)"
        />
      </mask>
      <g mask="url(#mask0_4150_91297)">
        <path
          d="M12 19.7333C16.271 19.7333 19.7333 16.271 19.7333 12C19.7333 7.72899 16.271 4.26666 12 4.26666C7.72899 4.26666 4.26666 7.72899 4.26666 12C4.26666 16.271 7.72899 19.7333 12 19.7333Z"
          fill="url(#paint1_linear_4150_91297)"
        />
        <path
          d="M16.3333 12.0222C16.3333 12.0222 16.3333 12.0074 16.3333 12C16.3333 9.60741 14.3926 7.66667 12 7.66667C11.9889 7.66667 11.9778 7.66667 11.963 7.66667V3.33333C11.963 2.5963 11.3667 2 10.6296 2H7.9037C4.64444 2 2 4.64444 2 7.9037V20.6667C2 21.4037 2.5963 22 3.33333 22H16.0963C19.3556 22 22 19.3556 22 16.0963V13.3556C22 12.6185 21.4037 12.0222 20.6667 12.0222H16.3333Z"
          fill="url(#paint2_linear_4150_91297)"
        />
        <g opacity="0.5">
          <g filter="url(#filter0_f_4150_91297)">
            <path
              d="M11 20.7333C15.271 20.7333 18.7333 17.271 18.7333 13C18.7333 8.72899 15.271 5.26666 11 5.26666C6.72899 5.26666 3.26666 8.72899 3.26666 13C3.26666 17.271 6.72899 20.7333 11 20.7333Z"
              fill="#092642"
            />
          </g>
          <g filter="url(#filter1_f_4150_91297)">
            <path
              d="M12 19.7333C16.271 19.7333 19.7333 16.271 19.7333 12C19.7333 7.72899 16.271 4.26666 12 4.26666C7.72899 4.26666 4.26666 7.72899 4.26666 12C4.26666 16.271 7.72899 19.7333 12 19.7333Z"
              fill="#FFE37D"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_4150_91297"
          x="0.266663"
          y="2.26666"
          width="21.4667"
          height="21.4667"
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
            result="effect1_foregroundBlur_4150_91297"
          />
        </filter>
        <filter
          id="filter1_f_4150_91297"
          x="2.26666"
          y="2.26666"
          width="19.4667"
          height="19.4667"
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
            result="effect1_foregroundBlur_4150_91297"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4150_91297"
          x1="11.937"
          y1="12.0667"
          x2="-4.68889"
          y2="29.637"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B9B7" />
          <stop offset="1" stopColor="#3122F6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4150_91297"
          x1="12.6889"
          y1="11.4259"
          x2="16.8"
          y2="7.97407"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFE37D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4150_91297"
          x1="11.937"
          y1="12.0667"
          x2="-4.68889"
          y2="29.637"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B9B7" />
          <stop offset="1" stopColor="#3122F6" />
        </linearGradient>
      </defs>
    </IconBase>
  )
);