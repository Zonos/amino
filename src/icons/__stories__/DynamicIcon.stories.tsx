import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { DynamicIcon, DynamicIconProps } from 'src/icons/icon-base/DynamicIcon';
import * as icons from 'src/icons/IconIndex';

const IconsMeta: Meta = {
  argTypes: {
    size: {
      type: 'number',
    },
    type: {
      options: Object.keys(icons),
      mapping: Object.values(icons),
      control: {
        type: 'select',
      },
    },
  },
};

export default IconsMeta;

const DynamicIconTemplate: Story<DynamicIconProps> = ({
  size,
  type,
}: DynamicIconProps) => <DynamicIcon size={size} type={type} />;

export const DynamicIconDemo = DynamicIconTemplate.bind({});
DynamicIconDemo.args = {
  size: 30,
  type: 'WarningIcon',
};
