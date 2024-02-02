import type { Meta, StoryFn } from '@storybook/react';

import { ToastConsumer } from 'src/components/toast/__stories__/ToastConsumer';
import type { ToastProps } from 'src/components/toast/Toast';
import { ToastContextProvider } from 'src/components/toast/ToastContext';

const ToastMeta: Meta = {
  component: ToastContextProvider,
};

export default ToastMeta;

const Template: StoryFn<ToastProps> = () => (
  <ToastContextProvider>
    <ToastConsumer />
  </ToastContextProvider>
);

export const Toast = Template.bind({});
Toast.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2481%3A43468&mode=dev',
  },
};
