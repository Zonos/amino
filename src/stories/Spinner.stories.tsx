import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Spinner, SpinnerProps } from "../components/Spinner";

export default {
  title: "Amino/Spinner",
  component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {
  size: 32
};
