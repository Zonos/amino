import { forwardRef } from 'react';

import * as flags from 'src/icons/flags/_FlagIndex';

export type Flag = keyof typeof flags;
export type FlagScale = 'small' | 'medium' | 'large';
export type FlagIconProps = {
  iconScale: FlagScale;
  /**
   * Size of the flag icon in pixels. If provided, size will be used instead of iconScale.
   */
  size?: 16 | 20 | 24 | 32;
} & {
  code: Flag;
};

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
  ({ code, iconScale, size }, ref) => {
    const Icon = flags[code];
    // The props sometimes need to get typecast upstream, so we need to check
    if (!Icon) {
      return null;
    }

    if (size) {
      const radius = size === 32 ? 11 : undefined;
      return (
        <Icon ref={ref} borderRadius={radius} height={size} width={size} />
      );
    }

    if (iconScale === 'small') {
      return <Icon ref={ref} height={16} width={16} />;
    }
    if (iconScale === 'medium') {
      return <Icon ref={ref} height={20} width={20} />;
    }

    return <Icon ref={ref} borderRadius={11} height={32} width={32} />;
  },
);
