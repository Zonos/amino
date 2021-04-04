import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tabs, TabsProps } from "../components/Tabs";

const TabsMeta: Meta = {
  title: "Amino/Tabs",
  component: Tabs
};

export default TabsMeta;

const Template: Story<TabsProps> = args => <Tabs {...args} />;

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  items: ["Tab 1", "Tab 2", "Tab 3"],
  selected: 0
};
