import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  DarkModeWrapper,
  DarkModeWrapperProps
} from "../components/DarkModeWrapper";

import { Card } from "../components/Card";

const DarkModeWrapperMeta: Meta = {
  title: "Amino/DarkModeWrapper",
  component: DarkModeWrapper
};

export default DarkModeWrapperMeta;

const Template: Story<DarkModeWrapperProps> = args => (
  <DarkModeWrapper>
    <Card>This content is always in dark mode</Card>
  </DarkModeWrapper>
);

export const DarkMode = Template.bind({});
