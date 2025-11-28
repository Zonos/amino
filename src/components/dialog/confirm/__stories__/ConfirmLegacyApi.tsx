import { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { useConfirm } from 'src/components/dialog/confirm/useConfirm';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';

/**
 * @deprecated This demonstrates the legacy API with onConfirm(boolean).
 * Use ConfirmNewApi instead for new code.
 */
export const ConfirmLegacyApi = () => {
  const [infoResult, setInfoResult] = useState<string>('pending');
  const [dangerResult, setDangerResult] = useState<string>('pending');
  const [warningResult, setWarningResult] = useState<string>('pending');

  const confirm = useConfirm();

  return (
    <VStack spacing={32}>
      <VStack spacing={8}>
        <Text color="gray600" type="small-header">
          Legacy API (Deprecated)
        </Text>
        <Text color="gray800" type="body">
          Uses single <code>onConfirm(confirmed: boolean)</code> callback
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
                onConfirm: (confirmed: boolean) => {
                  setInfoResult(confirmed ? 'confirmed ✓' : 'cancelled ✗');
                },
                subtitle: 'This uses the legacy API with a boolean parameter',
              })
            }
            variant="primary"
          >
            Info confirmation
          </Button>
          <div data-testid="legacy-info-result">
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
                onConfirm: (confirmed: boolean) => {
                  setDangerResult(confirmed ? 'deleted ✓' : 'kept ✗');
                },
                subtitle:
                  'This action cannot be undone. Legacy API demonstration.',
              })
            }
            variant="danger"
          >
            Danger confirmation
          </Button>
          <div data-testid="legacy-danger-result">
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
                onConfirm: (confirmed: boolean) => {
                  setWarningResult(confirmed ? 'proceeded ✓' : 'went back ✗');
                },
                subtitle: 'This might have unexpected consequences.',
              })
            }
            variant="warning"
          >
            Warning confirmation
          </Button>
          <div data-testid="legacy-warning-result">
            <Text type="body">
              Result: <strong>{warningResult}</strong>
            </Text>
          </div>
        </HStack>
      </VStack>
    </VStack>
  );
};
