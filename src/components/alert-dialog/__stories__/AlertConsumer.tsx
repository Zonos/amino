import { useAlert } from 'src/components/alert-dialog/useAlert';
import { LegacyButton } from 'src/components/button/LegacyButton';
import { VStack } from 'src/components/stack/VStack';

export const AlertConsumer = () => {
  const alert = useAlert();

  return (
    <VStack>
      {/* Info  alert */}
      <LegacyButton
        intent="primary"
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'primary',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'You look nice today',
          })
        }
      >
        Trigger default alert
      </LegacyButton>
      {/* Danger alert */}
      <LegacyButton
        intent="danger"
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'danger',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'There was an error or something',
          })
        }
      >
        Trigger danger alert
      </LegacyButton>
      {/* Warning alert */}
      <LegacyButton
        intent="warning"
        onClick={() =>
          alert({
            dismissText: "Don't do action",
            intent: 'warning',
            label: 'Heads up',
            onDismiss: () => {},
            subtitle: 'This is your final warning',
          })
        }
      >
        Trigger warning alert
      </LegacyButton>
    </VStack>
  );
};
