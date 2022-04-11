import React, { ReactElement } from 'react';

import * as largeIcons from './large';
import * as mediumIcons from './medium';
import * as smallIcons from './small';

export type CountryCode = keyof typeof largeIcons;

export type CountryIconProps = { scale: 'small' | 'medium' | 'large' } & {
  type: CountryCode;
};

export const CountryIcon = ({
  scale,
  type,
}: CountryIconProps): ReactElement => {
  if (scale === 'small') {
    const SmallIcon = smallIcons[type] || smallIcons.Default;
    return <SmallIcon />;
  }
  if (scale === 'medium') {
    const MediumIcon = mediumIcons[type] || mediumIcons.Default;
    return <MediumIcon />;
  }

  const LargeIcon = largeIcons[type] || largeIcons.Default;
  return <LargeIcon />;
};
