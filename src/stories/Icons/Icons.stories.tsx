import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconProps } from 'types';

import * as icons from 'icons';

export const AllIcons = ({ size, color }: IconProps) => {
  const iicons = Object.values(icons).map(icon => ({
    icon,
    iconName: icon.name,
  }));
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {iicons.map(({ icon: IconComponent, iconName }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: size,
            height: size,
            margin: 60,
          }}
        >
          <IconComponent size={20} color={color || 'gray-500'}>
            .
          </IconComponent>
          <div>{iconName}</div>
        </div>
      ))}
    </div>
  );
};
