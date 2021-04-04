import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Notice, NoticeProps } from "../components/Notice";

const NoticeStories: Meta = {
  title: "Amino/Notice",
  component: Notice
};

export default NoticeStories;

const Template: Story<NoticeProps> = args => <Notice {...args} />;

export const DefaultNotice = Template.bind({});
DefaultNotice.args = {
  children: "Example notice"
};

export const InfoNotice = Template.bind({});
InfoNotice.args = {
  intent: "info",
  children: "Example notice"
};

export const PrimaryNotice = Template.bind({});
PrimaryNotice.args = {
  intent: "primary",
  children: "Example notice"
};

export const WarningNotice = Template.bind({});
WarningNotice.args = {
  intent: "warning",
  children: "Example notice"
};

export const ErrorNotice = Template.bind({});
ErrorNotice.args = {
  intent: "error",
  children: "Example notice"
};

export const SuccessNotice = Template.bind({});
SuccessNotice.args = {
  intent: "success",
  children: "Example notice"
};
