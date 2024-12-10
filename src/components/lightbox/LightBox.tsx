import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';

export type LightBoxProps = BaseDialogProps & {
  onClose: () => void;
};

export const LightBox = ({ children, ...props }: LightBoxProps) => (
  <BaseDialog {...props}>{children}</BaseDialog>
);
