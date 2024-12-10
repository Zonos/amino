import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const BR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="M24 18a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18V6a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6v12Z"
        fill="#009B3A"
      />
      <path
        d="M21.819 12 12 19.416 2.181 12 12 4.583 21.819 12Z"
        fill="#FEDF01"
      />
      <path
        d="M11.984 16.255a4.305 4.305 0 1 0 0-8.61 4.305 4.305 0 0 0 0 8.61Z"
        fill="#002776"
      />
      <path
        d="M8.185 9.925a4.27 4.27 0 0 0-.448 1.348c2.663-.193 6.278 1.261 7.829 3.064.268-.403.467-.854.589-1.336-1.915-1.872-5.278-3.087-7.97-3.076Z"
        fill="#CBE9D4"
      />
      <path
        d="M8 12.155h.667v.667H8v-.667Zm.667 1.334h.666v.666h-.666v-.666Z"
        fill="#88C9F9"
      />
      <path
        d="M10 12.155h.667v.667H10v-.667Zm1.333.667H12v.667h-.667v-.667ZM14 14.155h.667v.667H14v-.667Zm-2 .667h.667v.667H12v-.667Zm2-4h.667v.667H14v-.667Z"
        fill="#55ACEE"
      />
      <path d="M12.667 13.489h.666v.666h-.666v-.666Z" fill="#3B88C3" />
    </FlagIconBase>
  ),
);
