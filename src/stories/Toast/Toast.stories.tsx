import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ToastContextProvider } from "../..";
import { ToastConsumer } from "./ToastConsumer";

const ToastContextProviderMeta: Meta = {
  title: "Amino/ToastContextProvider",
  component: ToastContextProvider,
};

export default ToastContextProviderMeta;

const Template: Story = () => (
  <ToastContextProvider>
    <ToastConsumer />
  </ToastContextProvider>
);

export const BasicToast = Template.bind({});
