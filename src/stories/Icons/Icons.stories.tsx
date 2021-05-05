import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconProps } from 'types';

import { IconsConsumer } from './IconsConsumer';

const IconsMeta: Meta = {
  title: 'Amino/Icons',
  component: IconsConsumer,
};

export default IconsMeta;

const Template: Story<IconProps> = ({ size, color }: IconProps) => (
  <IconsConsumer size={size} color={color} />
);

export const AllIcons = Template.bind({});
AllIcons.args = {
  size: 20,
  color: 'gray-500',
};
