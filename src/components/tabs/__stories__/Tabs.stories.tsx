import { useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tabs, TabsProps } from 'src/components/tabs/Tabs';

const TabsMeta: Meta = {
  component: Tabs,
};

export default TabsMeta;

const Template: Story<TabsProps> = ({
  items,
  selected: _selected,
}: TabsProps) => {
  const [selected, setSelected] = useState(_selected);

  return (
    <Tabs items={items} selected={selected} onChange={t => setSelected(t)} />
  );
};

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  items: ['Tab 1', 'Tab 2', 'Tab 3'],
  selected: 0,
};
