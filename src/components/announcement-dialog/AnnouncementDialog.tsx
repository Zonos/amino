import { type ReactNode, forwardRef } from 'react';

import styled from 'styled-components';
import { z } from 'zod';

import {
  type BaseDialogProps,
  BaseDialog,
} from 'src/components/dialog/BaseDialog';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { useStorage } from 'src/utils/hooks/useStorage';

const Content = styled(VStack)`
  padding: ${theme.space16} ${theme.space24};
  overflow-y: auto;
  flex-grow: 1;
`;

const StyledImage = styled.div<{ $imageWidth?: number }>`
  width: ${props => `${props.$imageWidth}px` || '100%'};
  height: auto;
  margin: ${props => (props.$imageWidth ? '0 auto' : 'unset')};
  margin-bottom: ${theme.space16};
`;

export type AnnouncementDialogProps = BaseDialogProps & {
  announcementId: string;
  image?: ReactNode;
  imageWidth?: number;
  label?: string;
  title?: ReactNode;
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
      title,
      ...props
    },
    ref,
  ) => {
    const { setValue: setAnnouncementSeen, value: announcementSeen } =
      useStorage<'seen' | '', string>({
        defaultValue: '',
        key: `announcement:${announcementId}`,
        schema: z.enum(['seen', '']),
        type: 'local',
      });

    return (
      <BaseDialog
        {...props}
        className={[className || '', 'announcement-dialog'].join(' ')}
        onClose={() => {
          if (onClose) {
            onClose();
          }
          setAnnouncementSeen('seen');
        }}
        open={open || !announcementSeen}
      >
        <StyledImage $imageWidth={imageWidth}>{image}</StyledImage>
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
  },
);
