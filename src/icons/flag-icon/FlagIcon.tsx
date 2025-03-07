import { forwardRef } from 'react';

import * as flags from 'src/icons/flags/_FlagIndex';

export type Flag = keyof typeof flags;
export type FlagScale = 'small' | 'medium' | 'large';
export type FlagIconProps = { iconScale: FlagScale } & {
  code: Flag;
};

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
  ({ code, iconScale }, ref) => {
    const Icon = flags[code];
    // The props sometimes need to get typecast upstream, so we need to check
    if (!Icon) {
      return null;
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
