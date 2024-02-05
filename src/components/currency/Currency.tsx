import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';
import { formatCurrency } from 'src/utils/formatCurrency';

import styles from './Currency.module.scss';

type Props = BaseProps & {
  amount: number;
  code: string;
};

export const Currency = ({ amount, className, code, style }: Props) => {
  const formattedCurrency = formatCurrency({
    code,
    value: amount,
  });

  const isNegative = amount < 0;

  return (
    <span className={clsx(styles.styledCurrency, className)} style={style}>
      <Text color={isNegative ? 'red600' : 'gray1200'} type="label">
        {formattedCurrency}
      </Text>
      <Text color={isNegative ? 'red600' : 'gray700'}>
        {code.toUpperCase()}
      </Text>
    </span>
  );
};
