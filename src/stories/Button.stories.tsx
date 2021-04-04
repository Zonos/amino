import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "../components/Button";

const ButtonMeta: Meta = {
  title: "Amino/Button",
  component: Button
};

export default ButtonMeta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Example button"
};

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  children: "Example button"
};

export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
  children: "Example button"
};
