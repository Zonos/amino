import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Currency } from 'src/components/currency/Currency';

const CurrencyMeta: Meta = {
  component: Currency,
};

export default CurrencyMeta;

type CurrencyProps = Parameters<typeof Currency>[number];

const CurrencyTemplate: StoryFn<CurrencyProps> = ({
  amount,
  code,
}: CurrencyProps) => <Currency amount={amount} code={code} />;

export const NegativeValue = CurrencyTemplate.bind({});
NegativeValue.args = {
  amount: -40.23,
  code: 'AUD',
};

export const PositiveValue = CurrencyTemplate.bind({});
PositiveValue.args = {
  amount: 1000.23,
  code: 'CAD',
};

export const DifferentCurrencyFormatWithPositiveValue = CurrencyTemplate.bind(
  {},
);
DifferentCurrencyFormatWithPositiveValue.args = {
  amount: 2349000,
  code: 'VND',
};

export const DifferentCurrencyFormatWithNegativeValue = CurrencyTemplate.bind(
  {},
);
DifferentCurrencyFormatWithNegativeValue.args = {
  amount: -2349000,
  code: 'VND',
};
