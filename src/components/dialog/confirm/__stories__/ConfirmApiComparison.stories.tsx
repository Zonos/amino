import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, screen, userEvent, within } from 'storybook/test';

import { ConfirmLegacyApi } from 'src/components/dialog/confirm/__stories__/ConfirmLegacyApi';
import { ConfirmNewApi } from 'src/components/dialog/confirm/__stories__/ConfirmNewApi';
import { ConfirmContextProvider } from 'src/components/dialog/confirm/ConfirmContext';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

const ApiComparisonMeta: Meta = {
  component: ConfirmContextProvider,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=357%3A6936&mode=dev',
    },
  },
  tags: ['tested'],
  title: 'API Comparison',
};

export default ApiComparisonMeta;

const ComparisonTemplate: StoryFn = () => (
  <ConfirmContextProvider>
    <VStack spacing={48}>
      <VStack spacing={16}>
        <Text type="header">Confirm Dialog API Comparison</Text>
        <Text color="gray800" type="body">
          Both APIs produce identical functionality. The new API is clearer and
          more maintainable.
        </Text>
      </VStack>
      <HStack alignment="start" spacing={48}>
        <div data-testid="legacy-api-container">
          <ConfirmLegacyApi />
        </div>
        <div data-testid="new-api-container">
          <ConfirmNewApi />
        </div>
      </HStack>
    </VStack>
  </ConfirmContextProvider>
);

export const ApiComparison = ComparisonTemplate.bind({});

// Simple story without tests to verify rendering
export const SimpleComparison: StoryFn = () => (
  <ConfirmContextProvider>
    <div style={{ padding: '20px' }}>
      <h2>Legacy API</h2>
      <ConfirmLegacyApi />
      <hr style={{ margin: '40px 0' }} />
      <h2>New API</h2>
      <ConfirmNewApi />
    </div>
  </ConfirmContextProvider>
);

export const TestedApiComparison: StoryObj<typeof ApiComparison> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // Wait for both containers to render
    const legacyApiContainer = await canvas.findByTestId(
      'legacy-api-container',
    );
    const newApiContainer = await canvas.findByTestId('new-api-container');

    // Get scoped containers for each API
    const legacyContainer = within(legacyApiContainer);
    const newContainer = within(newApiContainer);

    // Ensure the result elements exist before starting tests
    await canvas.findByTestId('legacy-info-result');
    await canvas.findByTestId('new-info-result');

    await step('Test Legacy API', async () => {
      await step('Info - Confirm', async () => {
        const infoButton = await legacyContainer.findByRole('button', {
          name: 'Info confirmation',
        });
        await userEvent.click(infoButton, { delay: 500 });
        const confirmButton = await screen.findByTestId(
          'amino--confirm-action',
        );
        await userEvent.click(confirmButton, { delay: 500 });
        expect(
          await canvas.findByTestId('legacy-info-result'),
        ).toHaveTextContent('confirmed ✓');
      });

      await step('Info - Cancel', async () => {
        const infoButton = await legacyContainer.findByRole('button', {
          name: 'Info confirmation',
        });
        await userEvent.click(infoButton, { delay: 500 });
        const cancelButton = await screen.findByTestId('amino--cancel');
        await userEvent.click(cancelButton, { delay: 500 });
        expect(
          await canvas.findByTestId('legacy-info-result'),
        ).toHaveTextContent('cancelled ✗');
      });

      await step('Danger - Confirm', async () => {
        const dangerButton = await legacyContainer.findByRole('button', {
          name: 'Danger confirmation',
        });
        await userEvent.click(dangerButton, { delay: 500 });
        const deleteButton = await screen.findByTestId('amino--delete');
        await userEvent.click(deleteButton, { delay: 500 });
        expect(
          await canvas.findByTestId('legacy-danger-result'),
        ).toHaveTextContent('deleted ✓');
      });

      await step('Warning - Cancel', async () => {
        const warningButton = await legacyContainer.findByRole('button', {
          name: 'Warning confirmation',
        });
        await userEvent.click(warningButton, { delay: 500 });
        const goBackButton = await screen.findByTestId('amino--go-back');
        await userEvent.click(goBackButton, { delay: 500 });
        expect(
          await canvas.findByTestId('legacy-warning-result'),
        ).toHaveTextContent('went back ✗');
      });
    });

    await step('Test New API', async () => {
      await step('Info - Confirm', async () => {
        const infoButton = await newContainer.findByRole('button', {
          name: 'Info confirmation',
        });
        await userEvent.click(infoButton, { delay: 500 });
        const confirmButton = await screen.findByTestId(
          'amino--confirm-action',
        );
        await userEvent.click(confirmButton, { delay: 500 });
        expect(await canvas.findByTestId('new-info-result')).toHaveTextContent(
          'confirmed ✓',
        );
      });

      await step('Info - Cancel', async () => {
        const infoButton = await newContainer.findByRole('button', {
          name: 'Info confirmation',
        });
        await userEvent.click(infoButton, { delay: 500 });
        const cancelButton = await screen.findByTestId('amino--cancel');
        await userEvent.click(cancelButton, { delay: 500 });
        expect(await canvas.findByTestId('new-info-result')).toHaveTextContent(
          'cancelled ✗',
        );
      });

      await step('Danger - Confirm', async () => {
        const dangerButton = await newContainer.findByRole('button', {
          name: 'Danger confirmation',
        });
        await userEvent.click(dangerButton, { delay: 500 });
        const deleteButton = await screen.findByTestId('amino--delete');
        await userEvent.click(deleteButton, { delay: 500 });
        expect(
          await canvas.findByTestId('new-danger-result'),
        ).toHaveTextContent('deleted ✓');
      });

      await step('Warning - Cancel', async () => {
        const warningButton = await newContainer.findByRole('button', {
          name: 'Warning confirmation',
        });
        await userEvent.click(warningButton, { delay: 500 });
        const goBackButton = await screen.findByTestId('amino--go-back');
        await userEvent.click(goBackButton, { delay: 500 });
        expect(
          await canvas.findByTestId('new-warning-result'),
        ).toHaveTextContent('went back ✗');
      });
    });

    await step('Verify identical behavior', async () => {
      // Both should show same results after testing
      const legacyWarning = canvas.getByTestId('legacy-warning-result');
      const newWarning = canvas.getByTestId('new-warning-result');

      expect(legacyWarning.textContent).toEqual(newWarning.textContent);
    });
  },
  render: ComparisonTemplate,
};
