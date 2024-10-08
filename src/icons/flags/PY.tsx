import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const PY = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      ref={ref}
      borderRadius={borderRadius}
      height={height}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M0 18.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 24 18.667V16H0v2.667Z"
        fill="#0038A8"
      />
      <path d="M0 9.334h24V16H0V9.334Z" fill="#EEE" />
      <path
        d="M21.333 4H2.667A2.667 2.667 0 0 0 0 6.667v2.666h24V6.667A2.667 2.667 0 0 0 21.333 4Z"
        fill="#D52B1E"
      />
      <path
        d="M14.667 12.667a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Z"
        fill="#000"
      />
      <path
        d="M14.5 12.667a2.5 2.5 0 1 1-5-.001 2.5 2.5 0 0 1 5 0Z"
        fill="#EEE"
      />
      <path
        d="M14.167 12.667a2.167 2.167 0 1 1-4.334 0 2.167 2.167 0 0 1 4.334 0Z"
        fill="#000"
      />
      <path
        d="M14.084 12.667a2.084 2.084 0 1 1-4.169-.001 2.084 2.084 0 0 1 4.169 0Z"
        fill="#EEE"
      />
      <path
        d="M14.088 12.653a2.088 2.088 0 1 0-3.894 1.05l1.808-.995 1.805.994c.178-.309.281-.667.281-1.049Z"
        fill="#99AAB5"
      />
      <path
        d="M13.667 12.667a1.666 1.666 0 1 1-3.333 0 1.666 1.666 0 0 1 3.333 0Z"
        fill="#000"
      />
      <path
        d="M12 14.267a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
        fill="#EEE"
      />
      <path
        d="m12 12.121.123.377h.396l-.321.233.122.377-.32-.233-.32.233.122-.377-.32-.233h.395l.123-.377Z"
        fill="#FFAC33"
      />
      <path
        d="M12.331 11.678s.2-.046.318-.059c.117-.011.222.26.363.306.143.048.141.188.2.352.059.165.023.2.023.388s.106.282.082.423c-.023.14-.14.176-.21.27-.07.094-.012.21-.083.281-.07.07-.305.06-.387.13-.082.07-.235.176-.341.117-.105-.058-.329-.082-.329-.082s.059-.211.224-.282c.164-.07.234-.059.387-.105.153-.047.14-.118.247-.211.105-.095.117-.224.176-.318.059-.094.07-.165.047-.294a2.197 2.197 0 0 0-.118-.388 1.426 1.426 0 0 0-.223-.34c-.07-.082-.376-.188-.376-.188Z"
        fill="#007127"
      />
      <path
        d="M11.603 11.748s.117-.255 0-.27c-.47-.059-.564.364-.704.41-.142.049-.165.283-.223.447-.059.164-.035.199-.035.388 0 .188.003.222.027.364.023.14.055.246.125.34.071.094.098.141.168.211s.208.141.29.211c.082.07.332.094.438.036.106-.059.29-.082.29-.082s-.078-.142-.242-.212c-.165-.07-.176-.128-.329-.176-.153-.047-.14-.118-.247-.211-.105-.094-.117-.223-.176-.317-.058-.094-.027-.118-.003-.247.023-.13.07-.235.117-.352.047-.117.165-.27.235-.352.07-.082.27-.188.27-.188Z"
        fill="#007127"
      />
      <path
        d="m11.615 13.909.153.105.2-.14.187.129.247-.094-.247.176-.176-.14-.188.128-.188-.106.012-.058Z"
        fill="#007127"
      />
    </FlagIconBase>
  ),
);
