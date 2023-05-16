import { useState } from '@storybook/addons';
import type { Meta, StoryFn } from '@storybook/react';
import { VStack } from 'src/components/stack/VStack';
import { type TabsProps, Tabs } from 'src/components/tabs/Tabs';
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
        selected={selectedIndex}
        onChange={setSelectedIndex}
      />
      <Text type="bold-label">{items[selectedIndex]}</Text>
    </VStack>
  );
};

export const BasicTabs = Template.bind({});

export const Subtle = Template.bind({});
Subtle.args = {
  subtle: true,
  align: 'center',
};
