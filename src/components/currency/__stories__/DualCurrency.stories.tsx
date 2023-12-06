import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { DualCurrency } from 'src/components/currency/DualCurrency';

const DualCurrencyMeta: Meta = {
  component: DualCurrency,
};

export default DualCurrencyMeta;

type DualCurrencyProps = Parameters<typeof DualCurrency>[number];

const DualCurrencyTemplate: StoryFn<DualCurrencyProps> = ({
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
  isTabular: false,
  localeCode: 'USD',
  value: -40.23,
};

export const PositiveValue = DualCurrencyTemplate.bind({});
PositiveValue.args = {
  conversionRate: 1.23,
  foreignCode: 'CAD',
  isTabular: false,
  localeCode: 'USD',
  value: 4.23,
};

export const DifferentCurrencyFormatWithPositiveValue =
  DualCurrencyTemplate.bind({});
DifferentCurrencyFormatWithPositiveValue.args = {
  conversionRate: 20_300,
  foreignCode: 'VND',
  isTabular: false,
  localeCode: 'CAD',
  value: 128.23,
};

export const DifferentCurrencyFormatWithNegativeValue =
  DualCurrencyTemplate.bind({});
DifferentCurrencyFormatWithNegativeValue.args = {
  conversionRate: 20_300,
  foreignCode: 'VND',
  isTabular: false,
  localeCode: 'CAD',
  value: -128.23,
};
