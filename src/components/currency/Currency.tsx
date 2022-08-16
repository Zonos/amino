import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledCurrency = styled.span`
  font-feature-settings: 'tnum' 1;

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
  }).format(Number(children));

  return (
    <StyledCurrency className={Number(children) < 0 ? 'negative' : ''}>
      {formattedCurrency}
    </StyledCurrency>
  );
};
