import type { Color } from 'src/types/Color';

export type IconProps = {
  className?: string;
  color?: Color;
  inlineBlock?: boolean;
  /**
   * @default 24
   */
  size?: number;
};
