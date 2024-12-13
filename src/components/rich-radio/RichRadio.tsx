import { type ReactNode, useEffect, useState } from 'react';
import ReactTooltip, { type TooltipProps } from 'react-tooltip';

import clsx from 'clsx';

import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RichRadio.module.scss';

export type RichRadioItemType<T extends string> = {
  disabled?: boolean;
  label: ReactNode;
  subtitle?: string;
  tooltip?: string;
  tooltipSetting?: Omit<TooltipProps, 'title' | 'children'>;
  value: T;
};

export type RichRadioProps<T extends string = string> = BaseProps & {
  activeIcon?: ReactNode;
  icon?: ReactNode;
  /**
   * @param itemHeight
   * @default 40
   */
  itemHeight?: 40 | 64;
  items: RichRadioItemType<T>[];
  onChange: (value: T) => void;
  renderCustomText?: (option: RichRadioItemType<T>) => ReactNode;
  value: T | null;
};

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
      className={clsx(className, styles.styledRadioGroup)}
      spacing={8}
      style={style}
    >
      {items.map(item => (
        <button
          key={item.value}
          className={clsx(
            styles.styledItem,
            itemHeight === 40 && styles.smallItem,
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
              className={styles.styledTooltip}
              effect="solid"
              {...item.tooltipSetting}
            />
          )}
          {renderCustomText ? (
            renderCustomText(item)
          ) : (
            <div>
              <Text className={styles.label} type="label">
                {item.label}
              </Text>
              {item.subtitle && (
                <Text className={styles.subtitle} color="gray900" type="body">
                  {item.subtitle}
                </Text>
              )}
            </div>
          )}
          {!!icon && (
            <div className={styles.styledIcon}>{icon || <CheckmarkIcon />}</div>
          )}
          {item.value === selectedValue && (
            <div className={styles.styledActiveIcon}>
              {activeIcon || <CheckmarkIcon />}
            </div>
          )}
        </button>
      ))}
    </VStack>
  );
};
