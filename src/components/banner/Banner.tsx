import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { Text } from 'src/components/text/Text';
import { CheckCircleDuotoneIcon } from 'src/icons/CheckCircleDuotoneIcon';
import { InfoDuotoneIcon } from 'src/icons/InfoDuotoneIcon';
import { RemoveCircleDuotoneIcon } from 'src/icons/RemoveCircleDuotoneIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { WarningDuotoneIcon } from 'src/icons/WarningDuotoneIcon';
import type { Color, Intent } from 'src/types';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Banner.module.scss';

export type BannerProps = BaseProps & {
  children?: ReactNode;
  footerActions?: ReactNode;
  headerActions?: ReactNode;
  intent?: Exclude<Intent, 'danger' | 'secondary' | 'primary'>;
  title?: ReactNode;
  onClose?: () => void;
};

export const Banner = ({
  children,
  className,
  footerActions,
  headerActions,
  intent,
  onClose,
  title,
}: BannerProps) => {
  const getIntentProps = (): {
    intentIcon: ReactNode;
    removeIconColor: Color;
  } => {
    switch (intent) {
      case 'info':
        return {
          intentIcon: (
            <InfoDuotoneIcon
              color="blue800"
              secondaryColor="blue400"
              size={24}
            />
          ),
          removeIconColor: 'blue800',
        };
      case 'success':
        return {
          intentIcon: (
            <CheckCircleDuotoneIcon
              color="green800"
              secondaryColor="green400"
              size={24}
            />
          ),
          removeIconColor: 'green800',
        };
      case 'warning':
        return {
          intentIcon: (
            <WarningDuotoneIcon
              color="orange800"
              secondaryColor="orange400"
              size={24}
            />
          ),
          removeIconColor: 'orange800',
        };
      case 'error':
        return {
          intentIcon: (
            <RemoveCircleDuotoneIcon
              color="red800"
              secondaryColor="red400"
              size={24}
            />
          ),
          removeIconColor: 'red800',
        };
      case 'default':
      default:
        return {
          intentIcon: (
            <InfoDuotoneIcon
              color="gray800"
              secondaryColor="gray400"
              size={24}
            />
          ),
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
          '--container-align-items': onlyContent ? 'start' : 'center',
          '--container-grid-template-columns': `32px auto ${
            !onClose ? '0px' : '32px'
          }`,
        }}
      >
        <div className={styles.icon}>{intentProps.intentIcon}</div>
        {onClose && (
          <div className={styles.close}>
            <Button
              className={styles.closeButton}
              icon={
                <RemoveIcon color={intentProps.removeIconColor} size={20} />
              }
              onClick={onClose}
              variant="text"
            />
          </div>
        )}

        <div
          className={styles.header}
          style={{ '--header-color': intentProps.removeIconColor }}
        >
          {header}
        </div>

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
    <div className={clsx([styles.styledBanner, bannerClass, className])}>
      {renderContent()}
    </div>
  );
};
