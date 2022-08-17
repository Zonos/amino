import React from 'react';

import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import { theme } from 'src/styles/constants/theme';
import styled, { css } from 'styled-components';

import { Currency } from './Currency';

type StyledProps = {
  width?: string;
  isTabular: boolean;
};

const tableCss = css<StyledProps>`
  font-variant-numeric: tabular-nums;
  display: grid;
  grid-template-columns: 1.25fr 0fr 1.25fr;
`;

const inlineCss = css`
  display: flex;
`;

const DualCurrencyWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-items: right;
  ${p => (p.isTabular ? tableCss : inlineCss)}
  grid-column-gap: ${theme.spaceQuarter};
  ${p =>
    p.width &&
    css`
      width: p.width;
    `};
`;

type Props = {
  conversionRate?: number;
  isTabular?: boolean;
  localeCode?: string;
  foreignCode: string;
  showForeign?: boolean;
  showLocale?: boolean;
  value: number;
} & Partial<StyledProps>;

export const DualCurrency = ({
  conversionRate,
  foreignCode = 'USD',
  isTabular = true,
  localeCode = 'USD',
  showForeign = true,
  showLocale = true,
  value,
  width,
}: Props) => {
  const renderLocaleCurrency = () => (
    <Currency code={localeCode.toLocaleLowerCase()}>{value}</Currency>
  );
  const renderForeignCurrency = () => (
    <Currency code={foreignCode.toLocaleLowerCase()}>
      {conversionRate ? value * conversionRate : value}
    </Currency>
  );

  const showLocaleCurrency = localeCode && showLocale;
  const showForeignCurrency = foreignCode && showForeign && conversionRate;
  const isSameCode = localeCode === foreignCode;

  if (showForeignCurrency && showLocaleCurrency && !isSameCode) {
    return (
      <DualCurrencyWrapper width={width?.toString()} isTabular={isTabular}>
        {renderLocaleCurrency()}
        <ArrowSwapIcon size={12} />
        {renderForeignCurrency()}
      </DualCurrencyWrapper>
    );
  }

  if (isSameCode || showLocaleCurrency) {
    return renderLocaleCurrency();
  }

  if (showForeignCurrency) {
    return renderForeignCurrency();
  }
  return null;
};
