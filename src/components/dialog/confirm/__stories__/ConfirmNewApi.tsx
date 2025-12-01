import { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { useConfirm } from 'src/components/dialog/confirm/useConfirm';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

export const ConfirmNewApi = () => {
  const [infoResult, setInfoResult] = useState<string>('pending');
  const [dangerResult, setDangerResult] = useState<string>('pending');
  const [warningResult, setWarningResult] = useState<string>('pending');

  const confirm = useConfirm();

  return (
    <VStack spacing={32}>
      <VStack spacing={8}>
        <Text color="gray600" type="small-header">
          New API (Recommended)
        </Text>
        <Text color="gray800" type="body">
          Uses separate <code>onConfirm()</code> and <code>onDismiss()</code>{' '}
          callbacks
        </Text>
      </VStack>

      <VStack spacing={16}>
        {/** Info Confirmation */}
        <HStack spacing={16}>
          <Button
            onClick={() =>
              confirm({
                confirmText: 'Confirm action',
                dismissText: 'Cancel',
                intent: 'info',
                label: 'Info confirmation',
                onConfirm: () => {
                  setInfoResult('confirmed ✓');
                },
                onDismiss: () => {
                  setInfoResult('cancelled ✗');
                },
                subtitle:
                  'This uses the new API with separate onConfirm and onDismiss',
              })
            }
            variant="primary"
          >
            Info confirmation
          </Button>
          <div data-testid="new-info-result">
            <Text type="body">
              Result: <strong>{infoResult}</strong>
            </Text>
          </div>
        </HStack>

        {/** Danger Confirmation */}
        <HStack spacing={16}>
          <Button
            onClick={() =>
              confirm({
                confirmText: 'Delete',
                dismissText: 'Keep it',
                intent: 'danger',
                label: 'Delete this item?',
                onConfirm: () => {
                  setDangerResult('deleted ✓');
                },
                onDismiss: () => {
                  setDangerResult('kept ✗');
                },
                subtitle:
                  'This action cannot be undone. New API demonstration.',
              })
            }
            variant="danger"
          >
            Danger confirmation
          </Button>
          <div data-testid="new-danger-result">
            <Text type="body">
              Result: <strong>{dangerResult}</strong>
            </Text>
          </div>
        </HStack>

        {/** Warning Confirmation */}
        <HStack spacing={16}>
          <Button
            onClick={() =>
              confirm({
                confirmText: 'Proceed anyway',
                dismissText: 'Go back',
                intent: 'warning',
                label: 'Are you sure?',
                onConfirm: () => {
                  setWarningResult('proceeded ✓');
                },
                onDismiss: () => {
                  setWarningResult('went back ✗');
                },
                subtitle: 'This might have unexpected consequences.',
              })
            }
            variant="warning"
          >
            Warning confirmation
          </Button>
          <div data-testid="new-warning-result">
            <Text type="body">
              Result: <strong>{warningResult}</strong>
            </Text>
          </div>
        </HStack>
      </VStack>
    </VStack>
  );
};
