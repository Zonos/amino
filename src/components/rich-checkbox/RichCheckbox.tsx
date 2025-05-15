import type { ReactNode } from 'react';

import clsx from 'clsx';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RichCheckbox.module.scss';

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
    className={clsx(className, styles.styledVStack)}
    spacing={16}
    style={style}
  >
    {items.map(item => {
      const { checked, icon, label, subtitle, value } = item;
      return (
        <button
          key={value}
          className={styles.styledRichCheckbox}
          data-state={checked ? 'checked' : ''}
          onClick={e => onClick(e.currentTarget.value)}
          type="button"
          value={value}
        >
          <div
            className={clsx(
              styles.styledItemContentDiv,
              !!icon && styles.hasIcon,
            )}
          >
            {icon && icon}
            <VStack spacing={0}>
              <Text className={styles.label} color="gray1000" type="label">
                {label}
              </Text>
              {subtitle && (
                <Text className={styles.subtitle} color="gray700">
                  {subtitle}
                </Text>
              )}
            </VStack>
          </div>
          {checked && (
            <div className={styles.styledIcon}>
              <CheckmarkIcon />
            </div>
          )}
        </button>
      );
    })}
  </VStack>
);
