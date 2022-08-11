import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { ToastProps } from 'src/components/toast/Toast';
import { ToastContextProvider } from 'src/components/toast/ToastContext';
import { withDesign } from 'storybook-addon-designs';

import { ToastConsumer } from './ToastConsumer';

const ToastContextProviderMeta: Meta = {
  title: 'Amino/ToastContextProvider',
  component: ToastContextProvider,
  decorators: [withDesign],
};

export default ToastContextProviderMeta;

const Template: Story<ToastProps> = ({
  intent,
  children,
  toastKey,
}: ToastProps) => (
  <ToastContextProvider intent={intent} toastKey={toastKey}>
    {children}
    <ToastConsumer />
  </ToastContextProvider>
);

export const BasicToast = Template.bind({});
BasicToast.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A162',
  },
};
