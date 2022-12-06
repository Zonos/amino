import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { ConfirmContextProvider } from 'src/components/confirm-dialog/ConfirmContext';

import { ConfirmConsumer } from './ConfirmConsumer';

const ToastContextProviderMeta: Meta = {
  title: 'Amino/ConfirmContextProvider',
  component: ConfirmContextProvider,
};

export default ToastContextProviderMeta;

const Template: Story = () => (
  <ConfirmContextProvider>
    <ConfirmConsumer />
  </ConfirmContextProvider>
);

export const DefaultConfirm = Template.bind({});
DefaultConfirm.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=151%3A53',
  },
};
