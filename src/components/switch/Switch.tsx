import { type ReactNode, useId } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Switch.module.scss';

export type SwitchProps = BaseProps & {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  labelDescription?: string;
  labelIcon?: ReactNode;
  onChange: (checked: boolean) => void;
  subtitle?: string;
  switchIconLeft?: ReactNode;
  switchIconRight?: ReactNode;
};

export const Switch = ({
  checked,
  className,
  disabled,
  label,
  labelDescription,
  labelIcon,
  onChange,
  style,
  subtitle,
  switchIconLeft,
  switchIconRight,
}: SwitchProps) => {
  const id = useId();
  const hasIcons = Boolean(switchIconLeft || switchIconRight);

  const hasLabel = Boolean(label || labelIcon || labelDescription || subtitle);

  return (
    <label
      className={clsx(
        className,
        styles.switchContainer,
        globalStyles.focusableLabel,
        disabled && styles.disabled,
      )}
      htmlFor={id}
      style={style}
    >
      <input
        checked={checked}
        id={id}
        onChange={() => !disabled && onChange(!checked)}
        onKeyDown={e => e.key === 'Enter' && !disabled && onChange(!checked)}
        style={{ width: '0px' }}
        tabIndex={0}
        type="checkbox"
      />
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
            id={id}
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
            id={id}
          />
        </div>
      )}
      {hasLabel && (
        <div className={styles.infoWrapper}>
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
      )}
    </label>
  );
};
