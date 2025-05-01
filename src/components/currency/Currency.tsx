import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { formatCurrency } from 'src/utils/formatCurrency';

import styles from './Currency.module.scss';

type Props = BaseProps & {
  amount: number;
  code: string;
};

/**
 * Currency component displays monetary values with properly formatted numbers and currency codes.
 * It automatically handles formatting based on the currency code and applies special styling for negative values.
 *
 * @example Basic usage
 * <Currency amount={1250} code="usd" />
 *
 * @example Different currencies
 * <Currency amount={1250} code="usd" /> // Displays as $12.50 USD
 * <Currency amount={1250} code="eur" /> // Displays as €12.50 EUR
 * <Currency amount={1250} code="gbp" /> // Displays as £12.50 GBP
 * <Currency amount={1250} code="jpy" /> // Displays as ¥1,250 JPY
 *
 * @example Negative amount (shows in red)
 * <Currency amount={-1250} code="usd" /> // Displays as -$12.50 USD in red
 *
 * @example Custom styling
 * <Currency
 *   amount={1250}
 *   code="usd"
 *   className="large-currency"
 *   style={{ fontSize: '20px' }}
 * />
 *
 * @example Zero amount
 * <Currency amount={0} code="usd" /> // Displays as $0.00 USD
 *
 * @example With fractional units
 * <Currency amount={125.45} code="usd" /> // Displays as $125.45 USD
 *
 * @example Large amounts
 * <Currency amount={1250000} code="usd" /> // Displays as $12,500.00 USD
 */
export const Currency = ({ amount, className, code, style }: Props) => {
  const formattedCurrency = formatCurrency({
    code,
    value: amount,
  });

  const isNegative = amount < 0;

  return (
    <span className={clsx(styles.styledCurrency, className)} style={style}>
      <Text color={isNegative ? 'red600' : 'gray1000'} type="label">
        {formattedCurrency}
      </Text>
      <Text color={isNegative ? 'red600' : 'gray700'}>
        {code.toUpperCase()}
      </Text>
    </span>
  );
};
