import { forwardRef, type ReactNode } from 'react';

import { z } from 'zod';

import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import { useStorage } from 'src/utils/hooks/useStorage';

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
        style={style}
      >
        <div
          className="h-auto"
          style={{
            margin: imageWidth ? '0 auto' : 'unset',
            marginBottom: theme.space16,
            width: imageWidth ? `${imageWidth}px` : '100%',
          }}
        >
          {image}
        </div>
        <VStack
          className="py-amino-16 px-amino-24 flex-grow overflow-y-auto"
          spacing={8}
        >
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
