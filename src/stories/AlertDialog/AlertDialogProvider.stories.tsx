import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertContextProvider } from 'src/components/alert-dialog/AlertContext';
import { withDesign } from 'storybook-addon-designs';

import { AlertConsumer } from './AlertConsumer';

const AlertContextProviderMeta: Meta = {
  title: 'Amino/AlertContextProvider',
  component: AlertContextProvider,
  decorators: [withDesign],
};

export default AlertContextProviderMeta;

const Template: Story = () => (
  <AlertContextProvider>
    <AlertConsumer />
  </AlertContextProvider>
);

export const DefaultAlert = Template.bind({});
DefaultAlert.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=279%3A34',
  },
};
