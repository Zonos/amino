import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Currency } from 'src/components/currency/Currency';

const CurrencyMeta: Meta = {
  component: Currency,
};

export default CurrencyMeta;

type CurrencyProps = Parameters<typeof Currency>[number];

const CurrencyTemplate: Story<CurrencyProps> = ({
  code,
  children,
}: CurrencyProps) => <Currency code={code}>{children}</Currency>;

export const NegativeValue = CurrencyTemplate.bind({});
NegativeValue.args = {
  code: 'AUD',
  children: -40.23,
};

export const PositiveValue = CurrencyTemplate.bind({});
PositiveValue.args = {
  code: 'CAD',
  children: 1000.23,
};

export const DifferentCurrencyFormatWithPositiveValue = CurrencyTemplate.bind(
  {}
);
DifferentCurrencyFormatWithPositiveValue.args = {
  code: 'VND',
  children: 2349000,
};

export const DifferentCurrencyFormatWithNegativeValue = CurrencyTemplate.bind(
  {}
);
DifferentCurrencyFormatWithNegativeValue.args = {
  code: 'VND',
  children: -2349000,
};
