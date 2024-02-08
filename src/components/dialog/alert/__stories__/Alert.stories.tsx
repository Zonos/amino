import type { Meta, StoryFn } from '@storybook/react';

import { AlertConsumer } from 'src/components/dialog/alert/__stories__/AlertConsumer';
import { AlertContextProvider } from 'src/components/dialog/alert/AlertContext';

const AlertMeta: Meta = {
  component: AlertContextProvider,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=355%3A6877&mode=dev',
    },
  },
};

export default AlertMeta;

const Template: StoryFn = () => (
  <AlertContextProvider>
    <AlertConsumer />
  </AlertContextProvider>
);

export const Alert = Template.bind({});
