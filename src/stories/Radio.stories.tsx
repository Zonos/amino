import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Radio, RadioProps } from "../components/Radio";

export default {
  title: "Amino/Radio",
  component: Radio
} as Meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: "Example radio"
};
