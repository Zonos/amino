import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  height: number;
  width: number;
  borderRadius?: number;
};
export const MD = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M21.333 4H16v17.333h5.333A2.667 2.667 0 0 0 24 18.667v-12A2.667 2.667 0 0 0 21.333 4Z"
        fill="#DD2E44"
      />
      <path
        d="M2.667 4A2.667 2.667 0 0 0 0 6.667v12a2.667 2.667 0 0 0 2.667 2.666H8V4H2.667Z"
        fill="#265FB5"
      />
      <path d="M8 4h8v17.333H8V4Z" fill="#FFCC4D" />
      <path d="M10.667 10.667h2.666v2h-2.666v-2Z" fill="#DD2E44" />
      <path
        d="M10.667 12.667V14l1.333.667L13.333 14v-1.333h-2.666Z"
        fill="#269"
      />
      <path
        d="M10.667 8v.667h.666V10h1.334V8h-2Zm2 6.667-.667.416-.667-.416-.666 2 1.333.666 1.333-.666-.666-2ZM10 9.333l-.667-.666-.666.666V16L10 14.667V10h.667L10 9.333Zm4.667-.666L14 9.333l-.667.667H14v4.667L15.333 16V9.333l-.666-.666Z"
        fill="#A0724A"
      />
      <path
        d="M10.823 12.396h.354v.27h-.354v-.27Zm2 0h.354v.27h-.354v-.27Z"
        fill="#FFCC4D"
      />
      <path
        d="M10.425 15.829c-.071.041-.176-.007-.234-.106l-1.488-2.578c-.057-.1-.046-.214.025-.255l.09-.052c.071-.041.176.007.233.106l1.488 2.578c.058.1.047.213-.024.255l-.09.052Z"
        fill="#77B255"
      />
      <path
        d="M15.211 12.929c.072.04.084.153.026.251l-1.46 2.532c-.058.098-.16.144-.232.103l-.09-.052c-.071-.041-.083-.153-.026-.252l1.461-2.532c.057-.097.16-.144.231-.102l.09.052Z"
        fill="#FFCC4D"
      />
      <path
        d="m10.667 14.667-.667.666V16l.667-.667v-.666Zm2.666 0v.666L14 16v-.667l-.667-.666Z"
        fill="#DD2E44"
      />
      <path
        d="m12 12-.667-.666v1.972L12 14l.667-.694v-1.972L12 12Z"
        fill="#FFCC4D"
      />
    </FlagIconBase>
  ),
);
