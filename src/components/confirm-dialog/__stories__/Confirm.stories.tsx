import type { Meta, StoryFn } from '@storybook/react';

import { ConfirmConsumer } from 'src/components/confirm-dialog/__stories__/ConfirmConsumer';
import { ConfirmContextProvider } from 'src/components/confirm-dialog/ConfirmContext';

const ConfirmMeta: Meta = {
  component: ConfirmContextProvider,
};

export default ConfirmMeta;

const Template: StoryFn = () => (
  <ConfirmContextProvider>
    <ConfirmConsumer />
  </ConfirmContextProvider>
);

export const Confirm = Template.bind({});
Confirm.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=357%3A6936&mode=dev',
  },
};
