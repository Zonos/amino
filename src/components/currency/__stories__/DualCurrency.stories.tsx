import type { Meta, StoryObj } from '@storybook/react';

import { DualCurrency } from 'src/components/currency/DualCurrency';

const DualCurrencyMeta: Meta = {
  component: DualCurrency,
};

export default DualCurrencyMeta;

type DualCurrencyProps = Parameters<typeof DualCurrency>[number];

export const NegativeValue: StoryObj<DualCurrencyProps> = {
  args: {
    conversionRate: 1.23,
    foreignCode: 'CAD',
    localCode: 'USD',
    value: -40.23,
  },
};

export const PositiveValue: StoryObj<DualCurrencyProps> = {
  args: {
    conversionRate: 1.23,
    foreignCode: 'CAD',
    localCode: 'USD',
    value: 4.23,
  },
};

export const DifferentCurrencyFormatWithPositiveValue: StoryObj<DualCurrencyProps> =
  {
    args: {
      conversionRate: 20_300,
      foreignCode: 'VND',
      localCode: 'CAD',
      value: 128.23,
    },
  };

export const DifferentCurrencyFormatWithNegativeValue: StoryObj<DualCurrencyProps> =
  {
    args: {
      conversionRate: 20_300,
      foreignCode: 'VND',
      localCode: 'CAD',
      value: -128.23,
    },
  };

export const NoRate: StoryObj<DualCurrencyProps> = {
  args: {
    foreignCode: 'CRC',
    localCode: 'USD',
    value: 0,
  },
};

export const ForeignValue: StoryObj<DualCurrencyProps> = {
  args: {
    conversionRate: 1.456,
    foreignCode: 'CAD',
    localCode: 'USD',
    value: 100,
    valueIsForeign: true,
  },
};

export const ForeignValueHidden: StoryObj<DualCurrencyProps> = {
  args: {
    conversionRate: 1.456,
    foreignCode: 'CAD',
    hideForeign: true,
    localCode: 'USD',
    value: 100,
    valueIsForeign: true,
  },
};

export const LocalValueHidden: StoryObj<DualCurrencyProps> = {
  args: {
    conversionRate: 1.456,
    foreignCode: 'CAD',
    hideLocal: true,
    localCode: 'USD',
    value: 100,
    valueIsForeign: true,
  },
};
