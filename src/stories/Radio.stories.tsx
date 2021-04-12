import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Radio, RadioProps } from "../components/Radio";

const RadioMeta: Meta = {
  title: "Amino/Radio",
  component: Radio,
  decorators: [withDesign],
};

export default RadioMeta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: "Example radio",
};
BasicRadio.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A122",
  },
};
