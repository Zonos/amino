import { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';

type Props = {
  borderRadius?: number;
  height: number;
  width: number;
};
export const IR = forwardRef<SVGSVGElement, Props>(
  ({ borderRadius, height, width }, ref) => (
    <FlagIconBase
      borderRadius={borderRadius}
      height={height}
      ref={ref}
      viewBox="0 0 24 25"
      width={width}
    >
      <path
        d="M0 18.333A2.667 2.667 0 0 0 2.667 21h18.666A2.667 2.667 0 0 0 24 18.333v-2.666H0v2.666Z"
        fill="#DA0001"
      />
      <path d="M0 9h24v6.667H0V9Z" fill="#EEE" />
      <path
        d="M24 9V6.333a2.667 2.667 0 0 0-2.667-2.667H2.667A2.667 2.667 0 0 0 0 6.333V9h24Z"
        fill="#239F40"
      />
      <path d="M0 15.666h24v.667H0v-.666Z" fill="#E96667" />
      <path
        d="M12.977 10.313c.638.326 2.025 1.968.532 3.82.927-.205 2.108-2.938-.532-3.82Zm-1.958 0c-2.64.882-1.46 3.615-.532 3.82-1.494-1.852-.106-3.494.532-3.82Zm.968-.096c.027.132.734.291.65-.382-.112.272-.436.264-.646.138-.288.161-.556.122-.658-.151-.099.503.391.65.654.395Z"
        fill="#BE1931"
      />
      <path
        d="M13.692 12.27c-.01-.833-.451-1.569-.886-1.867.287.352 1.168 2.29-.523 3.568l.031-3.398-.317-.28-.316.266.053 3.43-.012-.01c-1.709-1.275-.822-3.224-.535-3.576-.434.298-.876 1.034-.886 1.866-.008.714.318 1.496 1.223 2.137a4.21 4.21 0 0 1-1.119.134c.31.169.894.128 1.338.087l.001.046.265.29.267-.302v-.035c.448.041 1.045.086 1.36-.085a4.201 4.201 0 0 1-1.155-.142c.896-.641 1.22-1.418 1.211-2.13Z"
        fill="#BE1931"
      />
      <path d="M0 8.333h24V9H0v-.667Z" fill="#7BC58C" />
    </FlagIconBase>
  ),
);
