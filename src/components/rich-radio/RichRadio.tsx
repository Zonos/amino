import { type ReactNode, useEffect, useState } from 'react';
import ReactTooltip, { type TooltipProps } from 'react-tooltip';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type RichRadioItemType<T extends string> = {
  /**
   * Sets the radio option to a disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Text or React node to display as the primary content
   */
  label: ReactNode;
  /**
   * Optional secondary text to display below the label
   */
  subtitle?: string;
  /**
   * Text to display when hovering over the option
   */
  tooltip?: string;
  /**
   * Custom settings for the tooltip component
   */
  tooltipSetting?: Omit<TooltipProps, 'title' | 'children'>;
  /**
   * Unique identifier for this option
   */
  value: T;
};

export type RichRadioProps<T extends string = string> = BaseProps & {
  /**
   * Custom icon to show when an option is selected
   * @default <CheckmarkIcon />
   */
  activeIcon?: ReactNode;
  /**
   * Custom icon to display on all options
   */
  icon?: ReactNode;
  /**
   * Height of each radio option
   * @default 64
   */
  itemHeight?: 40 | 64;
  /**
   * Array of radio options to display
   */
  items: RichRadioItemType<T>[];
  /**
   * Function called when a radio option is selected
   */
  onChange: (value: T) => void;
  /**
   * Function that returns custom content for each option
   */
  renderCustomText?: (option: RichRadioItemType<T>) => ReactNode;
  /**
   * Currently selected value
   */
  value: T | null;
};

/**
 * RichRadio provides a styled radio button group with rich content options.
 * Each option can have a label, subtitle, tooltip, and custom styling.
 * Only one option can be selected at a time.
 *
 * @example Basic usage with label and subtitle
 * ```tsx
 * const [selected, setSelected] = useState<string | null>('option1');
 *
 * <RichRadio
 *   items={[
 *     { label: 'Option One', subtitle: 'Description for option one', value: 'option1' },
 *     { label: 'Option Two', subtitle: 'Description for option two', value: 'option2' },
 *     { label: 'Option Three', value: 'option3' }
 *   ]}
 *   onChange={setSelected}
 *   value={selected}
 * />
 * ```
 *
 * @example With tooltips
 * ```tsx
 * <RichRadio
 *   items={[
 *     {
 *       label: 'Option with tooltip',
 *       subtitle: 'Hover to see more information',
 *       tooltip: 'This is additional information about this option',
 *       tooltipSetting: { delayShow: 400 },
 *       value: 'option1'
 *     },
 *     {
 *       label: 'Another option',
 *       value: 'option2'
 *     }
 *   ]}
 *   onChange={handleChange}
 *   value={selected}
 * />
 * ```
 *
 * @example With custom icons
 * ```tsx
 * <RichRadio
 *   activeIcon={<CheckmarkIcon />}
 *   icon={<ChevronRightIcon />}
 *   items={radioOptions}
 *   onChange={handleChange}
 *   value={selected}
 * />
 * ```
 *
 * @example With custom rendering
 * ```tsx
 * <RichRadio
 *   items={optionsWithMetadata}
 *   onChange={handleChange}
 *   renderCustomText={(option) => (
 *     <div className="custom-option">
 *       <strong>{option.label}</strong>
 *       {option.subtitle && <div className="subtitle">{option.subtitle}</div>}
 *       {option.metadata && <div className="metadata">{option.metadata}</div>}
 *     </div>
 *   )}
 *   value={selected}
 * />
 * ```
 *
 * @example With compact size
 * ```tsx
 * <RichRadio
 *   itemHeight={40}
 *   items={radioOptions}
 *   onChange={handleChange}
 *   value={selected}
 * />
 * ```
 *
 * @example With disabled options
 * ```tsx
 * <RichRadio
 *   items={[
 *     { label: 'Available option', value: 'option1' },
 *     {
 *       label: 'Disabled option',
 *       subtitle: 'This option cannot be selected',
 *       value: 'option2',
 *       disabled: true
 *     }
 *   ]}
 *   onChange={handleChange}
 *   value={selected}
 * />
 * ```
 *
 * @example With type safety using generics
 * ```tsx
 * type PaymentMethod = 'credit' | 'debit' | 'paypal';
 *
 * const [paymentType, setPaymentType] = useState<PaymentMethod | null>('credit');
 *
 * const paymentOptions: RichRadioItemType<PaymentMethod>[] = [
 *   { label: 'Credit Card', value: 'credit' },
 *   { label: 'Debit Card', value: 'debit' },
 *   { label: 'PayPal', value: 'paypal' }
 * ];
 *
 * <RichRadio<PaymentMethod>
 *   items={paymentOptions}
 *   onChange={setPaymentType}
 *   value={paymentType}
 * />
 * ```
 */
export const RichRadio = <T extends string>({
  activeIcon,
  className,
  icon,
  itemHeight = 64,
  items,
  onChange,
  renderCustomText,
  style,
  value,
}: RichRadioProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (v: T) => {
    setSelectedValue(v);
    onChange(v);
  };

  return (
    <VStack
      className={cn(
        '[&_button[data-state="checked"]]:shadow-amino-select-active [&_button[data-state="checked"]]:text-blue-600',
        '[&_button[data-state="checked"]_.subtitle]:text-blue-600',
        '[&_svg]:text-gray-0 [&_svg]:w-4 [&_svg]:h-4',
        className,
      )}
      spacing={8}
      style={style}
    >
      {items.map(item => (
        <button
          key={item.value}
          className={cn(
            'group relative appearance-none bg-transparent p-4 pr-[calc(var(--amino-space-40)+10px)] border border-amino rounded-amino-8',
            'text-left transition-all duration-150 ease-in-out flex flex-row items-center h-16',
            'hover:bg-hover hover:border-gray-200',
            'hover:[&_.icon-wrapper]:bg-gray-600',
            'focus:outline-none focus:border-blue-400 focus:shadow-[0_0_0_1px] focus:shadow-blue-400',
            '[&>div]:flex [&>div]:flex-col [&>div]:flex-1',
            itemHeight === 40 && 'h-10',
          )}
          data-disabled={item.disabled}
          data-state={item.value === selectedValue ? 'checked' : ''}
          data-tip={item.tooltip}
          onClick={() => {
            handleChange(item.value);
          }}
          type="button"
        >
          {item.tooltip && (
            <ReactTooltip
              arrowColor="transparent"
              className="max-w-87.5 rounded-amino-10"
              effect="solid"
              {...item.tooltipSetting}
            />
          )}
          {renderCustomText ? (
            renderCustomText(item)
          ) : (
            <div>
              <Text
                className={cn(
                  'text-amino leading-6',
                  'group-data-[state=checked]:text-blue-600',
                )}
                type="label"
              >
                {item.label}
              </Text>
              {item.subtitle && (
                <Text className="subtitle" color="gray900" type="body">
                  {item.subtitle}
                </Text>
              )}
            </div>
          )}
          {!!icon && (
            <div className="icon-wrapper absolute right-4 bg-gray-400 rounded-full p-1.25 [&_svg]:text-gray-0">
              {icon || <CheckmarkIcon />}
            </div>
          )}
          {item.value === selectedValue && (
            <div className="absolute right-4 bg-blue-600 rounded-full p-0.5 flex items-center justify-center">
              {activeIcon || <CheckmarkIcon />}
            </div>
          )}
        </button>
      ))}
    </VStack>
  );
};
