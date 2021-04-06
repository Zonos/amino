import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Input, InputProps } from "../components/Input";

const InputMeta: Meta = {
  title: "Amino/Input",
  component: Input,
  decorators: [withDesign],
};

export default InputMeta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: "Example input",
};
BasicInput.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A61",
  },
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  label: "Example input",
  helpText: "This is the input's help text",
};

export const PrefixesAndSuffixes = Template.bind({});
PrefixesAndSuffixes.args = {
  label: "Example input",
  prefix: "Prefix",
  suffix: "Prefix",
};
