import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Radio, RadioProps } from "../components/Radio";

const RadioMeta: Meta = {
  title: "Amino/Radio",
  component: Radio
};

export default RadioMeta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: "Example radio"
};
