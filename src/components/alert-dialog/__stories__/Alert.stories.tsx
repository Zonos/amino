import type { Meta, StoryFn } from '@storybook/react';

import { AlertConsumer } from 'src/components/alert-dialog/__stories__/AlertConsumer';
import { AlertContextProvider } from 'src/components/alert-dialog/AlertContext';

const AlertMeta: Meta = {
  component: AlertContextProvider,
};

export default AlertMeta;

const Template: StoryFn = () => (
  <AlertContextProvider>
    <AlertConsumer />
  </AlertContextProvider>
);

export const Alert = Template.bind({});
Alert.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=279%3A34',
  },
};
