import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertContextProvider } from 'src/components/alert-dialog/AlertContext';

import { AlertConsumer } from './AlertConsumer.stories';

const AlertMeta: Meta = {
  component: AlertContextProvider,
};

export default AlertMeta;

const Template: Story = () => (
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
