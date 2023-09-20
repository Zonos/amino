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
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=355%3A6877&mode=dev',
  },
};
