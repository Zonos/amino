import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Text } from '../text/Text';

const StyledCurrency = styled.span`
  font-feature-settings: 'tnum' 1;
  /** Make it not break line */
  white-space: nowrap;
  display: flex;
  gap: ${theme.space4};
`;

type Props = {
  amount: number;
  className?: string;
  code: string;
};

export const Currency = ({ amount, className, code }: Props) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
  const formattedCurrency = new Intl.NumberFormat(`en-US`, {
    style: 'currency',
    currency: code,
  })
    .format(amount)
    // Remove currency symbols because that's how we want to show it. There is no option to do this when usinge `style: 'currency'`
    .replace(/[^0-9.-]+/g, '');

  const isNegative = amount < 0;

  return (
    <StyledCurrency className={className}>
      <Text type="label" color={isNegative ? 'red600' : 'gray1300'}>
        {formattedCurrency}
      </Text>
      <Text color={isNegative ? 'red400' : 'gray700'}>
        {code.toUpperCase()}
      </Text>
    </StyledCurrency>
  );
};
