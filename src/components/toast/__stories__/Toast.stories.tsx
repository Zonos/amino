import type { Meta, StoryFn } from '@storybook/react';

import { ToastConsumer } from 'src/components/toast/__stories__/ToastConsumer';
import type { ToastProps } from 'src/components/toast/Toast';
import { ToastContextProvider } from 'src/components/toast/ToastContext';

const ToastMeta: Meta = {
  component: ToastContextProvider,
};

export default ToastMeta;

const Template: StoryFn<ToastProps> = ({ children }: ToastProps) => (
  <ToastContextProvider>
    {children}
    <ToastConsumer />
  </ToastContextProvider>
);

export const Toast = Template.bind({});
Toast.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A162',
  },
};
