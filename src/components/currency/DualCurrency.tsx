import styled, { css } from 'styled-components';

import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import { theme } from 'src/styles/constants/theme';

import { Currency } from './Currency';

type StyledProps = {
  isTabular: boolean;
  width?: string;
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
  grid-column-gap: ${theme.space8};
  ${p =>
    p.width &&
    css`
      width: p.width;
    `};
`;

type Props = {
  className?: string;
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
      <DualCurrencyWrapper
        className={className}
        isTabular={isTabular}
        width={width?.toString()}
      >
        {renderLocaleCurrency()}
        <ArrowSwapIcon size={12} />
        {renderForeignCurrency()}
      </DualCurrencyWrapper>
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
