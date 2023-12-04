import clsx from 'clsx';

import { Currency } from 'src/components/currency/Currency';
import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './DualCurrency.module.scss';

type StyledProps = {
  isTabular: boolean;
  width?: string;
};

type Props = BaseProps & {
  conversionRate?: number;
  foreignCode: string;
  isTabular?: boolean;
  localeCode?: string;
  showForeign?: boolean;
  showLocale?: boolean;
  value: number;
} & Partial<StyledProps>;

export const DualCurrency = ({
  className,
  conversionRate,
  foreignCode = 'USD',
  isTabular = true,
  localeCode = 'USD',
  showForeign = true,
  showLocale = true,
  style,
  value,
  width,
}: Props) => {
  const renderLocaleCurrency = (currencyClassName?: string) => (
    <Currency amount={value} className={currencyClassName} code={localeCode} />
  );

  const convertedValue = conversionRate ? value * conversionRate : value;

  const renderForeignCurrency = (currencyClassName?: string) => (
    <Currency
      amount={convertedValue}
      className={currencyClassName}
      code={foreignCode}
    />
  );

  const showLocaleCurrency = localeCode && showLocale;
  const showForeignCurrency = foreignCode && showForeign && conversionRate;
  const isSameCode = localeCode === foreignCode;

  if (showForeignCurrency && showLocaleCurrency && !isSameCode) {
    return (
      <div
        className={clsx(styles.dualCurrencyWrapper, className)}
        style={{
          ...style,
          '--amino-dual-currency-display': isTabular ? 'grid' : 'flex',
          '--amino-dual-currency-font-variant-numberic': isTabular
            ? 'tabular-nums'
            : '',
          '--amino-dual-currency-grid-template-columns': isTabular
            ? '1.25fr 0fr 1.25fr'
            : '',
          '--amino-dual-currency-width': width?.toString() || '',
        }}
      >
        {renderLocaleCurrency()}
        <ArrowSwapIcon size={12} />
        {renderForeignCurrency()}
      </div>
    );
  }

  if (isSameCode || showLocaleCurrency) {
    return renderLocaleCurrency(className);
  }

  if (showForeignCurrency) {
    return renderForeignCurrency(className);
  }
  return null;
};
