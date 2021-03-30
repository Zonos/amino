import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, InputProps } from "../components/Input";

export default {
  title: "Amino/Input",
  component: Input
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: "Example input"
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: "Example input",
  helpText: "This is the input's help text"
};

export const PrefixesAndSuffixes = Template.bind({});
PrefixesAndSuffixes.args = {
  label: "Example input",
  prefix: "Prefix",
  suffix: "Prefix"
};
