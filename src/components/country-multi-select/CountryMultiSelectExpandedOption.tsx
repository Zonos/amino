import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import clsx from 'clsx';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { theme } from 'src/styles/constants/theme';

import styles from './CountryMultiSelectExpanded.module.scss';

export type CountryMultiSelectExpandedOption<
  CountryCode extends string = string,
> = {
  code: CountryCode;
  disabled?: boolean;
  /**
   * Key to group by
   */
  group: string;
  icon: ReactNode | (() => ReactNode);
  label: string;
  /**
   * Having this as a ReactNode breaks storybook (and only storybook, it works fine elsewhere) somehow. I have no idea, but it needs to be a function instead...
   * @returns
   */
  rightDecorator?: () => ReactNode;
  /**
   * Tooltip message to display when the country is disabled
   */
  tooltipOptions?: {
    /**
     * Placement of the tooltip
     * @default 'bottom'
     */
    placement?:
      | 'left'
      | 'right'
      | 'bottom'
      | 'top'
      | 'bottom-end'
      | 'bottom-start'
      | 'left-end'
      | 'left-start'
      | 'right-end'
      | 'right-start'
      | 'top-end'
      | 'top-start';
    title?: ReactNode;
  };
};

type Props<T extends string> = {
  className?: string;
  country: CountryMultiSelectExpandedOption<T>;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

export const _CountryMultiSelectExpandedOptionComponent = <T extends string>({
  className,
  country,
  isChecked,
  onChange,
}: Props<T>) => {
  const { inView, ref } = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });

  const renderIcon = () => {
    const icon =
      typeof country.icon === 'function' ? country.icon() : country.icon;

    return icon;
  };

  return (
    <Tooltip
      disabled={!country.tooltipOptions?.title}
      placement={country.tooltipOptions?.placement}
      title={country.tooltipOptions?.title}
    >
      <Checkbox
        key={country.code}
        checked={isChecked}
        className={clsx(
          styles.checkboxWrapper,
          styles.checkboxCountry,
          !country.disabled && styles.hoverWrapper,
        )}
        disabled={country.disabled}
        label={country.label}
        labelComponent={
          <div
            className={clsx(styles.checkboxLabelWrapper, className)}
            style={{
              marginLeft: 8,
              opacity: country.disabled ? theme.opacityDisabled : 1,
            }}
          >
            <div ref={ref}>
              {inView && renderIcon()}
              {country.label}
            </div>
            {country.rightDecorator?.()}
          </div>
        }
        onChange={onChange}
      />
    </Tooltip>
  );
};
