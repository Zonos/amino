import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Button, ButtonProps } from "../components/Button";

const ButtonMeta: Meta = {
  title: "Amino/Button",
  component: Button,
  decorators: [withDesign],
};

export default ButtonMeta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Example button",
};
Default.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=3%3A58",
  },
};

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  children: "Example button",
};
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=3%3A58",
  },
};

export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
  children: "Example button",
};
Danger.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=3%3A58",
  },
};
