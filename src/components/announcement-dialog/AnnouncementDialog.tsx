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
  image?: ReactNode;
  imageWidth?: number;
  label?: string;
  onClose?: () => void;
  open?: boolean;
  themeOverride?: Theme;
  title?: ReactNode;
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
      announcementId,
      children,
      className,
      image,
      imageWidth,
      label,
      onClose,
      open,
      themeOverride,
      title,
      width,
      closeOnBlur,
      closeOnEsc,
      noBorder,
    },
    ref
  ) => {
    const [announcementSeen, setAnnouncementSeen] = useStorage<
      'seen' | '',
      string
    >({
      key: `announcement:${announcementId}`,
      defaultValue: '',
      type: 'local',
    });

    return (
      <BaseDialog
        className={className}
        data-theme={themeOverride}
        open={open || !announcementSeen}
        width={width}
        onClose={() => {
          if (onClose) {
            onClose();
          }
          setAnnouncementSeen('seen');
        }}
        closeOnBlur={closeOnBlur}
        closeOnEsc={closeOnEsc}
        noBorder={noBorder}
      >
        <StyledImage imageWidth={imageWidth}>{image}</StyledImage>
        <Content spacing={8}>
          <Text type="label" color="blue600">
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
