import { type ReactNode, useId } from 'react';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type SwitchProps = BaseProps & {
  /**
   * Accessible label for screen readers when no visible label is provided.
   * Use this when the switch has icons but no text label.
   */
  'aria-label'?: string;
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
  'aria-label': ariaLabel,
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
      className={cn(
        'flex flex-row cursor-pointer',
        'focus-within:outline-none [&:has(input:focus-visible)]:shadow-[var(--amino-glow-blue)]',
        disabled && 'cursor-not-allowed',
        className,
      )}
      htmlFor={id}
      style={style}
    >
      <input
        aria-label={!hasLabel && ariaLabel ? ariaLabel : undefined}
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
          className={cn(
            'w-[62px] h-8 min-w-6 leading-4 rounded-[20px] block select-none relative',
            'bg-gray-50',
            checked && 'bg-primary',
            disabled && 'opacity-40',
          )}
        >
          <div
            className={cn(
              'bg-gray-200 dark:bg-gray-200',
              'shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.2)_inset,0px_1px_3px_0px_rgba(0,0,0,0.4)]',
              'h-7 w-7 rounded-full transition-all absolute top-[2px] left-[2px]',
              checked && 'left-[calc(100%-30px)]',
              disabled && 'opacity-95',
            )}
            id={id}
          />
          <div className="absolute top-1 left-auto right-1">
            {switchIconLeft}
          </div>
          <div className="absolute top-1 left-1 right-auto">
            {switchIconRight}
          </div>
        </div>
      ) : (
        <div
          className={cn(
            'w-8 h-4 min-w-8 min-h-4 leading-4 rounded-[20px] block select-none relative',
            'bg-gray-100 shadow-[var(--amino-v3-shadow-inset)]',
            checked && 'bg-primary',
            disabled && 'opacity-40',
          )}
        >
          <div
            className={cn(
              'bg-gray-0 dark:bg-gray-1000',
              'shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.08)_inset,0px_1px_3px_0px_rgba(0,0,0,0.2)]',
              'h-[14px] w-[14px] rounded-full transition-all absolute top-[1px] left-[1px]',
              checked && [
                'left-[calc(100%-15px)]',
                'shadow-[0px_-1px_1px_0px_rgba(68,94,238,0.08)_inset,0px_1px_3px_0px_rgba(0,0,0,0.2)]',
              ],
              disabled && 'opacity-95',
            )}
            id={id}
          />
        </div>
      )}
      {hasLabel && (
        <div className="ml-4">
          <div className="flex items-center leading-4">
            {labelIcon && (
              <div className={cn('mr-1', disabled && 'opacity-40')}>
                {labelIcon}
              </div>
            )}
            <Text
              className={cn('mb-0', disabled && 'text-gray-600')}
              type="input-label"
            >
              {label}
              {labelDescription && (
                <span className="ml-1 text-gray-600">{labelDescription}</span>
              )}
            </Text>
          </div>
          {subtitle && (
            <Text className={cn(disabled && 'text-gray-400')} type="subtitle">
              {subtitle}
            </Text>
          )}
        </div>
      )}
    </label>
  );
};
