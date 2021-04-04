import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Spinner, SpinnerProps } from "../components/Spinner";

const SpinnerMeta: Meta = {
  title: "Amino/Spinner",
  component: Spinner
};

export default SpinnerMeta;

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const BasicSpinner = Template.bind({});
BasicSpinner.args = {
  size: 32
};
