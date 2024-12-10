import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const MZ = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M24 18.222a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 18.222v-12a2.667 2.667 0 0 1 2.667-2.667h18.666A2.667 2.667 0 0 1 24 6.222v12Z"
        fill="#FCE100"
      />
      <path d="M0 8.889h24v6.667H0V8.889Z" fill="#141414" />
      <path
        d="M21.333 3.555H2.667A2.667 2.667 0 0 0 0 6.222V8.89h24V6.222a2.667 2.667 0 0 0-2.667-2.667Z"
        fill="#007168"
      />
      <path d="M0 8.889h24v.667H0v-.667Zm0 6h24v.667H0v-.667Z" fill="#EEE" />
      <path
        d="m.875 20.186 10.48-7.921L.887 4.25A2.65 2.65 0 0 0 0 6.222v12c0 .78.341 1.476.875 1.963Z"
        fill="#DD2E44"
      />
      <path
        d="M6.319 15.597 4.138 14 1.96 15.597l.845-2.567-2.192-1.578 2.703.01.823-2.572.826 2.573 2.7-.011-2.192 1.58.846 2.565Z"
        fill="#FCE100"
      />
      <path
        d="M2.246 14.023h1.57c.127.142.41.2.678 0 .492-.27 1.445 0 1.445 0l.187-.199-.457-1.5-.164-.176s-.352-.211-1.02-.14c-.668.07-.903-.025-.903-.025s-.586.071-.75.153c-.018.015-.188.187-.188.187l-.398 1.7Z"
        fill="#141414"
      />
      <path
        d="M2.246 13.806h1.57c.127.142.41.2.678-.001.492-.27 1.445.001 1.445.001l.187-.2-.457-1.5-.164-.175s-.352-.212-1.02-.14c-.668.07-.903-.025-.903-.025s-.586.07-.75.153a9.9 9.9 0 0 0-.188.187l-.398 1.7Z"
        fill="#fff"
      />
      <path
        d="m1.475 11.563.842-1.234.516.083.297-.307 1.027 1.26.824-.586.505-.422.303.187 1.071-.691-.969.908-.803.57-.64.289 2.162 2.547-.283.201-2.06-2.5-.668.537.878.28-.028.421-1.234-.34.056.873-.285.123-.252-.503-1.09 1.278-.393-.674 1.234-1.037.028-.365.674-.617.196-.028.561-.225-.842-.897-1.124 1.568-.481-.58"
        fill="#141414"
      />
    </FlagIconBase>
  ),
);
