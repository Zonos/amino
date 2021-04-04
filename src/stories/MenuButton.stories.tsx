import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { MenuButton, MenuButtonProps } from "../components/Button";

const MenuButtonMeta: Meta = {
  title: "Amino/MenuButton",
  component: MenuButton
};

export default MenuButtonMeta;

const Template: Story<MenuButtonProps> = args => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Example menu button",
  children: "Menu contents"
};
