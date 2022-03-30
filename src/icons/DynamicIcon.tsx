import React, { ReactElement } from 'react';

import * as icons from 'icons';
import { IconProps } from 'types';

export type DynamicIconType = Exclude<
  keyof typeof icons,
  'IconBase' | 'DynamicIcon'
>;
export type DynamicIconProps = IconProps & { type: DynamicIconType };

export const DynamicIcon = ({
  size,
  color,
  type,
}: DynamicIconProps): ReactElement => {
  if (type && icons[type]) {
    const Icon = icons[type];
    return <Icon size={size} color={color} />;
  }
  return (
    <div
      title={`No icon type "${type}" available.`}
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
