import type { ReactNode } from 'react';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

type RichCheckboxItemType = {
  checked: boolean;
  icon?: ReactNode;
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichCheckboxProps = BaseProps & {
  items: RichCheckboxItemType[];
  onClick: (newVal: string) => void;
};

/**
 * RichCheckbox component provides enhanced checkboxes with support for icons, labels, and subtitles.
 * Use it for selection interfaces that need visual richness beyond standard checkboxes.
 *
 * @example Basic usage
 * const [selectedOption, setSelectedOption] = useState('option1');
 *
 * <RichCheckbox
 *   items={[
 *     {
 *       checked: selectedOption === 'option1',
 *       label: "Option 1",
 *       value: "option1"
 *     },
 *     {
 *       checked: selectedOption === 'option2',
 *       label: "Option 2",
 *       value: "option2"
 *     }
 *   ]}
 *   onClick={(value) => setSelectedOption(value)}
 * />
 *
 * @example With subtitles
 * <RichCheckbox
 *   items={[
 *     {
 *       checked: selected === 'standard',
 *       label: "Standard Shipping",
 *       subtitle: "3-5 business days",
 *       value: "standard"
 *     },
 *     {
 *       checked: selected === 'express',
 *       label: "Express Shipping",
 *       subtitle: "1-2 business days",
 *       value: "express"
 *     }
 *   ]}
 *   onClick={(value) => setSelected(value)}
 * />
 *
 * @example With icons
 * <RichCheckbox
 *   items={[
 *     {
 *       checked: selected === 'visa',
 *       icon: <CreditCardIcon />,
 *       label: "Credit Card",
 *       value: "visa"
 *     },
 *     {
 *       checked: selected === 'paypal',
 *       icon: <PaypalIcon />,
 *       label: "PayPal",
 *       value: "paypal"
 *     }
 *   ]}
 *   onClick={(value) => setSelected(value)}
 * />
 *
 * @example Complete example with icons and subtitles
 * <RichCheckbox
 *   items={[
 *     {
 *       checked: selected === 'basic',
 *       icon: <BasicPlanIcon />,
 *       label: "Basic Plan",
 *       subtitle: "$9.99/month - For individuals",
 *       value: "basic"
 *     },
 *     {
 *       checked: selected === 'pro',
 *       icon: <ProPlanIcon />,
 *       label: "Pro Plan",
 *       subtitle: "$19.99/month - For professionals",
 *       value: "pro"
 *     },
 *     {
 *       checked: selected === 'enterprise',
 *       icon: <EnterprisePlanIcon />,
 *       label: "Enterprise Plan",
 *       subtitle: "$49.99/month - For teams",
 *       value: "enterprise"
 *     }
 *   ]}
 *   onClick={(value) => setSelected(value)}
 * />
 */
export const RichCheckbox = ({
  className,
  items,
  onClick,
  style,
}: RichCheckboxProps) => (
  <VStack
    className={cn(
      '[&_button[data-state="checked"]]:bg-blue-100 [&_button[data-state="checked"]]:border-blue-300',
      '[&_button[data-state="checked"]]:text-blue-600',
      '[&_svg]:text-gray-0 [&_svg]:w-3 [&_svg]:h-3',
      className,
    )}
    spacing={16}
    style={style}
  >
    {items.map(item => {
      const { checked, icon, label, subtitle, value } = item;
      return (
        <button
          key={value}
          className={cn(
            'relative appearance-none bg-raised p-4 pr-10 border border-amino rounded-amino-6',
            'text-left transition-all duration-150 ease-in-out flex flex-row items-center',
            'hover:bg-hover hover:border-gray-200',
            'focus:outline-none focus:border-blue-300',
          )}
          data-state={checked ? 'checked' : ''}
          onClick={e => onClick(e.currentTarget.value)}
          type="button"
          value={value}
        >
          <div
            className={cn(
              'items-center grid',
              icon && 'grid-cols-[30px_1fr] gap-6',
            )}
          >
            {icon && icon}
            <VStack spacing={0}>
              <Text
                className={cn(
                  'leading-6',
                  '[data-state="checked"]_&:text-blue-600',
                )}
                color="gray1000"
                type="label"
              >
                {label}
              </Text>
              {subtitle && (
                <Text
                  className={cn('[data-state="checked"]_&:text-blue-600')}
                  color="gray700"
                >
                  {subtitle}
                </Text>
              )}
            </VStack>
          </div>
          {checked && (
            <div className="absolute right-4 bg-blue-600 rounded-full p-1.25 flex items-center justify-center">
              <CheckmarkIcon />
            </div>
          )}
        </button>
      );
    })}
  </VStack>
);
