import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { ToastContextProvider } from '../..';
import { ToastConsumer } from './ToastConsumer';

const ToastContextProviderMeta: Meta = {
  title: 'Amino/ToastContextProvider',
  component: ToastContextProvider,
  decorators: [withDesign],
};

export default ToastContextProviderMeta;

const Template: Story = () => (
  <ToastContextProvider>
    <ToastConsumer />
  </ToastContextProvider>
);

export const BasicToast = Template.bind({});
BasicToast.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A162',
  },
};
