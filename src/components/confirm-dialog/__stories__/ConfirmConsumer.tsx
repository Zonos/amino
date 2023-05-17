import { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { useConfirm } from 'src/components/confirm-dialog/useConfirm';
import { VStack } from 'src/components/stack/VStack';

export const ConfirmConsumer = () => {
  const [defaultConfirmOk, setDefaultConfirmOk] = useState(false);
  const [dangerConfirmOk, setDangerConfirmOk] = useState(false);
  const [warningConfirmOk, setWarningConfirmOk] = useState(false);

  const defaultConfirm = useConfirm();
  const dangerConfirm = useConfirm();
  const warningConfirm = useConfirm();

  return (
    <VStack>
      {/** Default Confirmation */}
      <Button
        intent="primary"
        onClick={() =>
          defaultConfirm({
            label: 'Are you sure?',
            subtitle:
              'This is the descriptive text about what the user is about to do',
            intent: 'primary',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setDefaultConfirmOk,
          })
        }
      >
        Trigger default confirmation
      </Button>
      <div className="default-confirmation">
        <b>Default confirmation:</b>{' '}
        {defaultConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Danger Confirmation */}
      <Button
        intent="danger"
        onClick={() =>
          dangerConfirm({
            label: 'Are you sure?',
            subtitle: 'This is the descriptive text about what just happened',
            intent: 'danger',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setDangerConfirmOk,
          })
        }
      >
        Trigger danger confirmation
      </Button>
      <div className="warning-confirmation">
        <b>Danger confirmation:</b>{' '}
        {dangerConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>

      {/** Warning Confirmation */}
      <Button
        intent="warning"
        onClick={() =>
          warningConfirm({
            label: 'Are you sure?',
            subtitle: 'This is the descriptive text about what just happened',
            intent: 'warning',
            dismissText: "Don't do action",
            confirmText: 'Do action',
            onConfirm: setWarningConfirmOk,
          })
        }
      >
        Trigger warning confirmation
      </Button>
      <div>
        <b>Warning confirmation:</b>{' '}
        {warningConfirmOk ? 'confirmed' : 'not confirmed'}
      </div>
    </VStack>
  );
};
