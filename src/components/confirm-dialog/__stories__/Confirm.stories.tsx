import { Meta, Story } from '@storybook/react/types-6-0';
import { ConfirmContextProvider } from 'src/components/confirm-dialog/ConfirmContext';

import { ConfirmConsumer } from './ConfirmConsumer';

const ConfirmMeta: Meta = {
  component: ConfirmContextProvider,
};

export default ConfirmMeta;

const Template: Story = () => (
  <ConfirmContextProvider>
    <ConfirmConsumer />
  </ConfirmContextProvider>
);

export const Confirm = Template.bind({});
Confirm.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=151%3A53',
  },
};
