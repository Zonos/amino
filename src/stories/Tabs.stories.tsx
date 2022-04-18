import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Tabs, type TabsProps } from '../components/Tabs';

const TabsMeta: Meta = {
  title: 'Amino/Tabs',
  component: Tabs,
};

export default TabsMeta;

const Template: Story<TabsProps> = ({
  items,
  selected,
  onChange,
}: TabsProps) => <Tabs items={items} selected={selected} onChange={onChange} />;

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  selected: 0,
};
