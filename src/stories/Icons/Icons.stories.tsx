import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconsConsumer } from './IconsConsumer';

const IconsMeta: Meta = {
  title: 'Amino/Icons',
  component: IconsConsumer,
};

export default IconsMeta;

const Template: Story = () => <IconsConsumer />;

export const AllIcons = Template.bind({});
AllIcons.args = {};
