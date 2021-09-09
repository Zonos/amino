import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { AlertContextProvider } from '../..';
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
