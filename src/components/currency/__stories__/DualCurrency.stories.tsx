import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { DualCurrency } from 'src/components/currency/DualCurrency';

const DualCurrencyMeta: Meta = {
  component: DualCurrency,
};

export default DualCurrencyMeta;

type DualCurrencyProps = Parameters<typeof DualCurrency>[number];

const DualCurrencyTemplate: Story<DualCurrencyProps> = ({
  conversionRate,
  foreignCode,
  localeCode,
  value,
}: DualCurrencyProps) => (
  <div
    style={{
      display: 'inline-block',
    }}
  >
    <DualCurrency
      conversionRate={conversionRate}
      foreignCode={foreignCode}
      localeCode={localeCode}
      value={value}
    />
  </div>
);

export const NegativeValue = DualCurrencyTemplate.bind({});
NegativeValue.args = {
  conversionRate: 1.23,
  foreignCode: 'CAD',
  localeCode: 'USD',
  isTabular: false,
  value: -40.23,
};

export const PoissitiveValue = DualCurrencyTemplate.bind({});
PoissitiveValue.args = {
  conversionRate: 1.23,
  foreignCode: 'CAD',
  localeCode: 'USD',
  isTabular: false,
  value: 4.23,
};

export const DifferentCurrencyFormatWithPositiveValue =
  DualCurrencyTemplate.bind({});
DifferentCurrencyFormatWithPositiveValue.args = {
  conversionRate: 20300,
  foreignCode: 'VND',
  localeCode: 'CAD',
  isTabular: false,
  value: 128.23,
};

export const DifferentCurrencyFormatWithNegativeValue =
  DualCurrencyTemplate.bind({});
DifferentCurrencyFormatWithNegativeValue.args = {
  conversionRate: 20300,
  foreignCode: 'VND',
  localeCode: 'CAD',
  isTabular: false,
  value: -128.23,
};
