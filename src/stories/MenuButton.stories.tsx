import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MenuButton, MenuButtonProps } from "../components/Button";

export default {
  title: "Amino/MenuButton",
  component: MenuButton
} as Meta;

const Template: Story<MenuButtonProps> = args => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Example menu button",
  children: "Menu contents"
};
