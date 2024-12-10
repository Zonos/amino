import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';
import { Tabs, type TabsProps } from 'src/components/tabs/Tabs';
import { Text } from 'src/components/text/Text';

const TabsMeta: Meta = {
  component: Tabs,
};

export default TabsMeta;

const items = ['Tab 1', 'Tab 2', 'Tab 3'];

const Template: StoryFn<TabsProps> = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <VStack>
      <Tabs
        {...props}
        items={items}
        onChange={setSelectedIndex}
        selected={selectedIndex}
      />
      <Text type="bold-label">{items[selectedIndex]}</Text>
    </VStack>
  );
};

export const BasicTabs = Template.bind({});

export const Subtle = Template.bind({});
Subtle.args = {
  align: 'center',
  subtle: true,
};
