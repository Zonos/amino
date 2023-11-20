import { forwardRef } from 'react';

// eslint-disable-next-line import/no-internal-modules
import * as flags from 'src/icons/flags/_FlagIndex';

export type Flag = keyof typeof flags;
export type FlagScale = 'small' | 'medium' | 'large';

export type FlagIconProps = { iconScale: FlagScale } & {
  code: Flag;
};

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
  ({ code, iconScale }, ref) => {
    const Icon = flags[code];
    if (iconScale === 'small') {
      return <Icon ref={ref} height={12} width={16} />;
    }
    if (iconScale === 'medium') {
      return <Icon ref={ref} height={15} width={20} />;
    }

    return Icon ? <Icon ref={ref} height={24} width={32} /> : null;
  },
);
