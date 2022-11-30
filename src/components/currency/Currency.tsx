import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCurrency = styled.span`
  font-feature-settings: 'tnum' 1;
  /** Make it not break line */
  white-space: nowrap;
  &.negative {
    color: ${theme.redL20};
  }
`;

type Props = {
  children: string | number;
  code: string;
};

export const Currency = ({ children, code }: Props) => {
  const formattedCurrency = new Intl.NumberFormat(`en-US`, {
    style: 'currency',
    currency: code,
  })
    .format(Number(children))
    /**
     * Since we have new format for currency (`$10 USD`, `$10 AUD`, `€10 EUR`)
     * Remove character in front of symbol. Ex: A$3.23 AUD=> $3.23 AUD */
    .replace(/^\w+/, '');

  return (
    <StyledCurrency className={Number(children) < 0 ? 'negative' : ''}>
      {formattedCurrency} {code.toUpperCase()}
    </StyledCurrency>
  );
};
