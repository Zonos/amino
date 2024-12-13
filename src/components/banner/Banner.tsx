import type { ReactNode } from 'react';

import clsx from 'clsx';

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

import styles from './Banner.module.scss';

export type BannerProps = BaseProps & {
  children?: ReactNode;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Exclude<Intent, 'danger' | 'secondary' | 'primary'>;
  onClose?: () => void;
  title?: ReactNode;
};

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
        <header className={styles.bannerHeader}>
          <Text color={intentProps.removeIconColor} type="label">
            {title}
          </Text>
          {headerActions && (
            <div className={styles.actionsWrapper}>{headerActions}</div>
          )}
        </header>
      );

    const renderFooter = () =>
      footerActions && (
        <footer className={styles.bannerFooter}>
          <div className={styles.actionsWrapper}>{footerActions}</div>
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
        className={styles.container}
        style={{
          '--amino-banner-container-align-items': onlyContent
            ? 'start'
            : 'center',
          '--amino-banner-container-grid-template-columns': `32px auto ${
            !onClose ? '0px' : '32px'
          }`,
          '--amino-banner-header-color': intentProps.removeIconColor,
        }}
      >
        <div className={styles.icon}>{intentProps.intentIcon}</div>
        {onClose && (
          <div className={styles.close}>
            <Button
              className={clsx(styles.closeButton)}
              icon={
                <RemoveIcon color={intentProps.removeIconColor} size={20} />
              }
              onClick={onClose}
              variant="text"
            />
          </div>
        )}

        <div className={styles.header}>{header}</div>

        {content && (
          <div className={styles.content}>
            {content}
            {moreContent}
          </div>
        )}
      </div>
    );
  };

  const bannerClass = intent ? styles[`${intent}Banner`] : styles.defaultBanner;
  return (
    <div
      className={clsx(styles.styledBanner, bannerClass, className)}
      style={style}
    >
      {renderContent()}
    </div>
  );
};
