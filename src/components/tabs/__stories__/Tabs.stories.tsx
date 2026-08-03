import { type ReactNode, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { VStack } from 'src/components/stack/VStack';
import { Tabs, type TabsProps } from 'src/components/tabs/Tabs';
import { Text } from 'src/components/text/Text';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { InfoIcon } from 'src/icons/InfoIcon';

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
  variant: 'primary',
};

const withTooltip = ({ label, tip }: { label: string; tip: string }) => (
  <span className="inline-flex items-center gap-1 align-middle">
    {label}
    <Tooltip title={tip}>
      <InfoIcon color="gray600" inlineBlock size={14} />
    </Tooltip>
  </span>
);

const itemsWithTooltip: ReactNode[] = [
  withTooltip({ label: 'Overview', tip: 'High-level summary of this section' }),
  withTooltip({ label: 'Activity', tip: 'Recent activity and events' }),
  withTooltip({ label: 'Settings', tip: 'Configuration options' }),
];

const ItemsWithTooltipTemplate: StoryFn<TabsProps> = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <VStack>
      <Tabs
        {...props}
        items={itemsWithTooltip}
        onChange={setSelectedIndex}
        selected={selectedIndex}
      />
      <Text type="bold-label">Selected index: {selectedIndex}</Text>
    </VStack>
  );
};

export const ItemsWithTooltip = ItemsWithTooltipTemplate.bind({});

export const ItemsWithTooltipSubtle = ItemsWithTooltipTemplate.bind({});
ItemsWithTooltipSubtle.args = {
  align: 'center',
  subtle: true,
  variant: 'primary',
};
