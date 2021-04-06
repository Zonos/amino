import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Notice, NoticeProps } from "../components/Notice";

const NoticeStories: Meta = {
  title: "Amino/Notice",
  component: Notice,
  decorators: [withDesign],
};

export default NoticeStories;

const Template: Story<NoticeProps> = (args) => <Notice {...args} />;

export const DefaultNotice = Template.bind({});
DefaultNotice.args = {
  children: "Example notice",
};
DefaultNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};

export const InfoNotice = Template.bind({});
InfoNotice.args = {
  intent: "info",
  children: "Example notice",
};
InfoNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};

export const PrimaryNotice = Template.bind({});
PrimaryNotice.args = {
  intent: "primary",
  children: "Example notice",
};
PrimaryNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};

export const WarningNotice = Template.bind({});
WarningNotice.args = {
  intent: "warning",
  children: "Example notice",
};
WarningNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};

export const ErrorNotice = Template.bind({});
ErrorNotice.args = {
  intent: "error",
  children: "Example notice",
};
ErrorNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};

export const SuccessNotice = Template.bind({});
SuccessNotice.args = {
  intent: "success",
  children: "Example notice",
};
SuccessNotice.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=4%3A97",
  },
};
