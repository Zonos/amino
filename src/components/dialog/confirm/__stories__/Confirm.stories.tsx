import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from '@storybook/test';

import { ConfirmConsumer } from 'src/components/dialog/confirm/__stories__/ConfirmConsumer';
import { ConfirmContextProvider } from 'src/components/dialog/confirm/ConfirmContext';

const ConfirmMeta: Meta = {
  component: ConfirmContextProvider,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=357%3A6936&mode=dev',
    },
  },
  tags: ['tested'],
};

export default ConfirmMeta;

const Template: StoryFn = () => (
  <ConfirmContextProvider>
    <ConfirmConsumer />
  </ConfirmContextProvider>
);

export const Confirm = Template.bind({});

export const TestedConfirm: StoryObj<typeof Confirm> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Default confirmation', async () => {
      await step('Cancel', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger default confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--don-t-do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('default-confirmation')).toHaveTextContent(
          'Default confirmation: not confirmed',
        );
      });

      await step('Confirm', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger default confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('default-confirmation')).toHaveTextContent(
          'Default confirmation: confirmed',
        );
      });
    });

    await step('Danger confirmation', async () => {
      await step('Cancel', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger danger confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--don-t-do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('danger-confirmation')).toHaveTextContent(
          'Danger confirmation: not confirmed',
        );
      });

      await step('Confirm', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger danger confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('danger-confirmation')).toHaveTextContent(
          'Danger confirmation: confirmed',
        );
      });
    });

    await step('Warning confirmation', async () => {
      await step('Cancel', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger warning confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--don-t-do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('warning-confirmation')).toHaveTextContent(
          'Warning confirmation: not confirmed',
        );
      });

      await step('Confirm', async () => {
        await userEvent.click(
          canvas.getByRole('button', { name: 'Trigger warning confirmation' }),
          { delay: 500 },
        );
        await userEvent.click(screen.getByTestId('amino--do-action'), {
          delay: 500,
        });
        expect(canvas.getByTestId('warning-confirmation')).toHaveTextContent(
          'Warning confirmation: confirmed',
        );
      });
    });
  },
  render: Template,
};
