import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Checkbox, CheckboxProps } from "../components/Checkbox";

export default {
  title: "Amino/Checkbox",
  component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  label: "Checkbox label"
};
