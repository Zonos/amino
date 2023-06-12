import { type ReactNode, forwardRef } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types/Theme';
import { useStorage } from 'src/utils/hooks/useStorage';
import styled from 'styled-components';

import { BaseDialog } from '../dialog/_BaseDialog';
import { VStack } from '../stack/VStack';

const Content = styled(VStack)`
  padding: ${theme.space16} ${theme.space24};
  overflow-y: auto;
  flex-grow: 1;
`;

const StyledImage = styled.div<{ imageWidth?: number }>`
  width: ${props => `${props.imageWidth}px` || '100%'};
  height: auto;
  margin: ${props => (props.imageWidth ? '0 auto' : 'unset')};
  margin-bottom: ${theme.space16};
`;

export type AnnouncementDialogProps = {
  announcementId: string;
  children: ReactNode;
  className?: string;
  /** Close when clicking outside dialog (on the backdrop)
   * @default true
   */
  closeOnBlur?: boolean;
  /** Close on pressing 'escape' key
   * @default true
   */
  closeOnEsc?: boolean;
  image?: ReactNode;
  imageWidth?: number;
  label?: string;
  noBorder?: boolean;
  open?: boolean;
  themeOverride?: Theme;
  title?: ReactNode;
  width?: number;
  onClose?: () => void;
};

export const AnnouncementDialog = forwardRef<
  HTMLDivElement,
  AnnouncementDialogProps
>(
  (
    {
      announcementId,
      children,
      className,
      closeOnBlur,
      closeOnEsc,
      image,
      imageWidth,
      label,
      noBorder,
      onClose,
      open,
      themeOverride,
      title,
      width,
    },
    ref
  ) => {
    const [announcementSeen, setAnnouncementSeen] = useStorage<
      'seen' | '',
      string
    >({
      defaultValue: '',
      key: `announcement:${announcementId}`,
      type: 'local',
    });

    return (
      <BaseDialog
        className={className}
        closeOnBlur={closeOnBlur}
        closeOnEsc={closeOnEsc}
        data-theme={themeOverride}
        noBorder={noBorder}
        onClose={() => {
          if (onClose) {
            onClose();
          }
          setAnnouncementSeen('seen');
        }}
        open={open || !announcementSeen}
        width={width}
      >
        <StyledImage imageWidth={imageWidth}>{image}</StyledImage>
        <Content spacing={8}>
          <Text color="blue600" type="label">
            {label}
          </Text>
          <Text type="title">{title}</Text>
          <div ref={ref}>
            <Text color="gray800">{children}</Text>
          </div>
        </Content>
      </BaseDialog>
    );
  }
);
