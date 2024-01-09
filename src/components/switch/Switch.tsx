import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Switch.module.scss';

export type SwitchProps = BaseProps & {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  labelDescription?: string;
  labelIcon?: ReactNode;
  subtitle?: string;
  switchIconLeft?: ReactNode;
  switchIconRight?: ReactNode;
  onChange: (checked: boolean) => void;
};

export const Switch = ({
  checked,
  className,
  disabled,
  label,
  labelDescription,
  labelIcon,
  onChange,
  subtitle,
  switchIconLeft,
  switchIconRight,
}: SwitchProps) => {
  const labelAsHtmlAttribute = label?.replace(/\s/g, '-').toLowerCase();
  const hasIcons = Boolean(switchIconLeft || switchIconRight);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <label
      className={clsx(
        className,
        styles.switchContainer,
        disabled && styles.disabled,
      )}
      htmlFor={labelAsHtmlAttribute}
      onClick={() => !disabled && onChange(!checked)}
    >
      {hasIcons ? (
        <div
          className={clsx(
            styles.aminoSwitchWrapper,
            styles.aminoSwitchWrapperWithIcons,
            checked && styles.checked,
          )}
        >
          <div
            className={clsx(
              styles.aminoSwitch,
              styles.aminoSwitchWithIcons,
              checked && styles.checked,
            )}
            id={labelAsHtmlAttribute}
          />
          <div className={clsx(styles.switchIcon, styles.left)}>
            {switchIconLeft}
          </div>
          <div className={styles.switchIcon}>{switchIconRight}</div>
        </div>
      ) : (
        <div
          className={clsx(styles.aminoSwitchWrapper, checked && styles.checked)}
        >
          <div
            className={clsx(styles.aminoSwitch, checked && styles.checked)}
            id={labelAsHtmlAttribute}
          />
        </div>
      )}
      <div>
        <div className={styles.labelWrapper}>
          {labelIcon}
          <Text className={styles.styledLabel} type="input-label">
            {label}
            {labelDescription && (
              <span className={styles.styledLabelDescription}>
                {labelDescription}
              </span>
            )}
          </Text>
        </div>
        {subtitle && (
          <Text className={styles.styledSubtitle} type="subtitle">
            {subtitle}
          </Text>
        )}
      </div>
    </label>
  );
};
