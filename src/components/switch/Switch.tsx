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

/**
 * Switch component provides a toggle control for binary options.
 * It allows users to turn options on or off with a single action.
 *
 * @example Basic usage
 * const [enabled, setEnabled] = useState(false);
 *
 * <Switch
 *   checked={enabled}
 *   onChange={setEnabled}
 * />
 *
 * @example With label
 * <Switch
 *   label="Notifications"
 *   checked={notificationsEnabled}
 *   onChange={setNotificationsEnabled}
 * />
 *
 * @example With label description
 * <Switch
 *   label="Dark mode"
 *   labelDescription="(Applies to all users)"
 *   checked={darkMode}
 *   onChange={setDarkMode}
 * />
 *
 * @example With subtitle
 * <Switch
 *   label="Auto-save"
 *   subtitle="Automatically save changes as you type"
 *   checked={autoSave}
 *   onChange={setAutoSave}
 * />
 *
 * @example Disabled state
 * <Switch
 *   label="Premium feature"
 *   checked={true}
 *   onChange={() => {}}
 *   disabled
 * />
 *
 * @example With label icon
 * <Switch
 *   label="Wi-Fi"
 *   labelIcon={<WifiIcon size={16} />}
 *   checked={wifiEnabled}
 *   onChange={setWifiEnabled}
 * />
 *
 * @example With switch icons
 * <Switch
 *   label="Sound"
 *   switchIconLeft={<SoundOffIcon size={12} />}
 *   switchIconRight={<SoundOnIcon size={12} />}
 *   checked={soundEnabled}
 *   onChange={setSoundEnabled}
 * />
 *
 * @example Complete example with all properties
 * <Switch
 *   label="Location services"
 *   labelDescription="(Optional)"
 *   labelIcon={<LocationIcon size={16} />}
 *   subtitle="Allow the app to access your current location"
 *   switchIconLeft={<CloseIcon size={12} />}
 *   switchIconRight={<CheckmarkIcon size={12} />}
 *   checked={locationEnabled}
 *   onChange={setLocationEnabled}
 * />
 */
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
