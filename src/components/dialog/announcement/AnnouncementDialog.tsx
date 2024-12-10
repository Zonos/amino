import { forwardRef, type ReactNode } from 'react';

import { z } from 'zod';

import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { useStorage } from 'src/utils/hooks/useStorage';

import styles from './AnnouncementDialog.module.scss';

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
      style,
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
        style={{
          ...style,
          '--amino-announcement-dialog-image-margin': imageWidth
            ? '0 auto'
            : 'unset',
          '--amino-announcement-dialog-image-width': imageWidth
            ? `${imageWidth}px`
            : '100%',
        }}
      >
        <div className={styles.styledImage}>{image}</div>
        <VStack className={styles.content} spacing={8}>
          <Text color="blue600" type="label">
            {label}
          </Text>
          <Text type="title">{title}</Text>
          <div ref={ref}>
            <Text color="gray800">{children}</Text>
          </div>
        </VStack>
      </BaseDialog>
    );
  },
);
