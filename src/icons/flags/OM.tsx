import { forwardRef, useId } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const OM = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => {
    const uniqueId = useId();
    return (
      <FlagIconBase
        ref={ref}
        borderRadius={borderRadius}
        height={height}
        viewBox="0 0 24 24"
        width={width}
      >
        <g clipPath={`url(#${uniqueId}-0)`}>
          <path
            d="M5.333 20.667h16A2.667 2.667 0 0 0 24 18v-2.667H5.333v5.334Z"
            fill="green"
          />
          <path
            d="M21.333 3.333h-16v5.334H24V6a2.667 2.667 0 0 0-2.667-2.667Z"
            fill="#EEE"
          />
          <path
            d="M24 8.667H6V3.333H2.667A2.667 2.667 0 0 0 0 6v12a2.667 2.667 0 0 0 2.667 2.667H6v-5.334h18V8.667Z"
            fill="#DB161B"
          />
          <path
            d="M2.417 5.635c.208.378.208.526.148.56-.06.033-.159-.06-.367-.438-.209-.378-.448-.897-.388-.93.06-.034.398.431.607.808Zm1.26-.232c-.208.378-.328.711-.268.744.06.034.278-.246.487-.623.208-.378.329-.711.268-.745-.06-.033-.279.246-.487.624Zm-.375.608-.198-.948-.019-.004c.069-.033.123-.084.123-.158 0-.107-.098-.193-.219-.193-.12 0-.218.087-.218.193 0 .072.05.129.116.162l-.189.958.604-.01Z"
            fill="#EEE"
          />
          <path
            d="M4.469 7.844c-.181-.15-.9-.773-1.241-1.144.03-.107.049-.221.041-.344h.012v.005h.594v.115h.729v-.354h-.73v.115h-.593v.005h-.02v-.18h-.542v.18H2.5v.01h-.427v-.146h-.688v.385h.688v-.145H2.5v.01h.184l-.024.25s-.693.03-.879.06c-.458.073-.312.209.063.334.173.057.345.08.507.089a6.474 6.474 0 0 1-.934.776c-.146.083-.146.187.135.125.273-.06.903-.617 1.123-.899l.19-.008c.1-.004.179-.066.246-.149.284.337.842.836 1.066.972.24.146.352.143.436.129.085-.014.043-.035-.144-.19Z"
            fill="#EEE"
          />
        </g>
        <defs>
          <clipPath id={`${uniqueId}-0`}>
            <path d="M0 0h24v24H0z" fill="#fff" />
          </clipPath>
        </defs>
      </FlagIconBase>
    );
  },
);
