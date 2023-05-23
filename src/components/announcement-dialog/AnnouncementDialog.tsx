import { type ReactNode, forwardRef } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types/Theme';
import styled from 'styled-components';

import { BaseDialog } from '../dialog/_BaseDialog';
import { VStack } from '../stack/VStack';

const Content = styled(VStack)`
  padding: ${theme.space16} ${theme.space24};
  overflow-y: auto;
  flex-grow: 1;
`;

type AnnouncementType = 'feature-update' | 'announcement';

export type AnnouncementDialogProps = {
  children: ReactNode;
  className?: string;
  image?: ReactNode;
  label?: ReactNode;
  onClose: () => void;
  open: boolean;
  themeOverride?: Theme;
  type: AnnouncementType;
  width?: number;
  /** Close when clicking outside dialog (on the backdrop)
   * @default true
   */
  closeOnBlur?: boolean;
  /** Close on pressing 'escape' key
   * @default true
   */
  closeOnEsc?: boolean;
  noBorder?: boolean;
};

export const AnnouncementDialog = forwardRef<
  HTMLDivElement,
  AnnouncementDialogProps
>(
  (
    {
      children,
      className,
      image,
      label,
      onClose,
      open,
      themeOverride,
      type,
      width,
      closeOnBlur,
      closeOnEsc,
      noBorder,
    },
    ref
  ) => {
    const getTypeLabel = () => {
      switch (type) {
        case 'feature-update':
          return 'Feature update';
        default:
          return 'Announcement';
      }
    };
    return (
      <BaseDialog
        className={className}
        data-theme={themeOverride}
        open={open}
        width={width}
        onClose={onClose}
        closeOnBlur={closeOnBlur}
        closeOnEsc={closeOnEsc}
        noBorder={noBorder}
      >
        {image}
        <Content spacing={8}>
          <Text type="label" color="blue600">
            {getTypeLabel()}
          </Text>
          <Text type="title">{label}</Text>
          <div ref={ref}>
            <Text color="gray800">{children}</Text>
          </div>
        </Content>
      </BaseDialog>
    );
  }
);
