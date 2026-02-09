import type { ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { ExclamationMarkIcon } from 'src/icons/ExclamationMarkIcon';
import { InfoIcon } from 'src/icons/InfoIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { Color } from 'src/types/Color';
import type { Intent } from 'src/types/Intent';
import { cn } from 'src/utils/cn';

const bannerVariants = cva(
  'rounded-amino-12 p-amino-16 [&_.amino-button]:hover:brightness-110 [&_.amino-button]:focus:brightness-110',
  {
    defaultVariants: {
      intent: 'default',
    },
    variants: {
      intent: {
        default: 'bg-gray-50 text-gray-800 border border-gray-200',
        error: 'bg-red-50 text-red-800 border border-red-200',
        info: 'bg-blue-50 text-blue-800 border border-blue-200',
        success: 'bg-green-50 text-green-800 border border-green-200',
        warning: 'bg-orange-50 text-orange-800 border border-orange-200',
      },
    },
  },
);

export type BannerProps = BaseProps & {
  children?: ReactNode;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Exclude<Intent, 'danger' | 'secondary' | 'primary'>;
  onClose?: () => void;
  title?: ReactNode;
};

/**
 * Banner component displays prominent messages or notifications with different intents.
 * Use banners to communicate important information, status updates, or required actions.
 *
 * @example Basic banner
 * <Banner title="Information">
 *   This is a basic banner with important information.
 * </Banner>
 *
 * @example With different intents
 * <Banner intent="info" title="Information">
 *   This contains helpful information for the user.
 * </Banner>
 *
 * <Banner intent="success" title="Success">
 *   The operation was completed successfully.
 * </Banner>
 *
 * <Banner intent="warning" title="Warning">
 *   This action will have side effects.
 * </Banner>
 *
 * <Banner intent="error" title="Error">
 *   There was a problem completing the operation.
 * </Banner>
 *
 * @example With close button
 * <Banner
 *   intent="info"
 *   title="System Notification"
 *   onClose={() => setVisible(false)}
 * >
 *   The system will be undergoing maintenance in two hours.
 * </Banner>
 *
 * @example With header actions
 * <Banner
 *   intent="info"
 *   title="New feature available"
 *   headerActions={
 *     <Button variant="link" size="small">Learn more</Button>
 *   }
 * >
 *   Try out our new reporting dashboard.
 * </Banner>
 *
 * @example With footer actions
 * <Banner
 *   intent="warning"
 *   title="Update required"
 *   footerActions={
 *     <>
 *       <Button variant="standard" size="small">Remind me later</Button>
 *       <Button variant="primary" size="small">Update now</Button>
 *     </>
 *   }
 * >
 *   Your software needs to be updated to the latest version.
 * </Banner>
 *
 * @example With both title and content
 * <Banner intent="success" title="Order placed">
 *   <Text>Your order #12345 has been placed successfully.</Text>
 *   <Text>You will receive a confirmation email shortly.</Text>
 * </Banner>
 *
 * @example Content only (no title)
 * <Banner intent="info">
 *   This is a simple notification message without a title.
 * </Banner>
 */
export const Banner = ({
  children,
  className,
  footerActions,
  headerActions,
  intent,
  onClose,
  style,
  title,
}: BannerProps) => {
  const getIntentProps = (): {
    intentIcon: ReactNode;
    removeIconColor: Color;
  } => {
    switch (intent) {
      case 'info':
        return {
          intentIcon: <InfoIcon color="blue800" size={24} />,
          removeIconColor: 'blue800',
        };
      case 'success':
        return {
          intentIcon: <CheckCircleIcon color="green800" size={24} />,
          removeIconColor: 'green800',
        };
      case 'warning':
        return {
          intentIcon: <WarningIcon color="orange800" size={24} />,
          removeIconColor: 'orange800',
        };
      case 'error':
        return {
          intentIcon: <ExclamationMarkIcon color="red800" size={24} />,
          removeIconColor: 'red800',
        };
      case 'default':
      default:
        return {
          intentIcon: <InfoIcon color="gray800" size={24} />,
          removeIconColor: 'gray800',
        };
    }
  };
  const renderContent = () => {
    // Some banners are used with just a wall of text, which causes the icons to be centered vertically in said wall and look a little off. This should handle that edge case and move the icons to align at the top.
    const onlyContent = !!children && !title && !footerActions;
    const intentProps = getIntentProps();

    const renderTitle = () =>
      title && (
        <header className="flex items-center justify-between gap-amino-12">
          <Text color={intentProps.removeIconColor} type="label">
            {title}
          </Text>
          {headerActions && (
            <div className="flex items-center gap-amino-8">{headerActions}</div>
          )}
        </header>
      );

    const renderFooter = () =>
      footerActions && (
        <footer className="flex items-center gap-amino-12 mt-amino-8">
          <div className="flex items-center gap-amino-8">{footerActions}</div>
        </footer>
      );

    // A hack to make sure the header content (whatever the first non-null is) aligns in it's own row
    const [header, content, moreContent] = [
      renderTitle(),
      children,
      renderFooter(),
    ].filter(Boolean);

    return (
      <div
        className="grid"
        style={{
          alignItems: onlyContent ? 'start' : 'center',
          gridTemplateAreas: "'icon header close' '. content .'",
          gridTemplateColumns: `32px auto ${!onClose ? '0px' : '32px'}`,
        }}
      >
        <div className="[grid-area:icon] justify-self-start">
          {intentProps.intentIcon}
        </div>
        {onClose && (
          <div className="[grid-area:close] justify-self-end">
            <Button
              className="w-6"
              icon={
                <RemoveIcon color={intentProps.removeIconColor} size={20} />
              }
              onClick={onClose}
              variant="text"
            />
          </div>
        )}

        <div
          className="[grid-area:header] text-amino-base"
          style={{ color: intentProps.removeIconColor }}
        >
          {header}
        </div>

        {content && (
          <div className="[grid-area:content] mt-2 flex flex-col gap-amino-8 text-amino-base">
            {content}
            {moreContent}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(bannerVariants({ intent: intent || 'default' }), className)}
      style={style}
    >
      {renderContent()}
    </div>
  );
};
