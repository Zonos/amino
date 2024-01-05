type FormatCurrencyParams = {
  code: string;
  /**
   * Keep the currency symbol and separators. Defualt is to remove them.
   * @default false
   */
  keepDecorators?: boolean;
  /**
   * If you don't want thousands separators, set useGrouping to false.
   */
  options?: Intl.NumberFormatOptions;
  value: number;
};

export const formatCurrency = ({
  code,
  options,
  value,
}: FormatCurrencyParams): string => {
  // Pass undefined to use the user's locale (can be seen using navigator.language)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
  const formattedCurrency = new Intl.NumberFormat(navigator.language, {
    currency: code,
    style: 'currency',
    ...options,
  })
    .format(value)
    // Remove currency symbols because that's how we want to show it. There is no option to do this when using `style: 'currency'`
    .replace(/[^0-9.\-,]+/g, '');

  return formattedCurrency;
};

type DualCurrencyParams = {
  conversionRate?: number;
  /**
   * @default 'USD'
   */
  foreignCode?: string;
  /**
   * @default 'USD'
   */
  localCode?: string;
  value: number;
  /**
   * For when the value is already in the foreign currency, and the conversion needs to be reversed.
   * The rate can stay the same.
   * @default false
   */
  valueIsForeign?: boolean;
};

type DualCurrency = {
  foreign: {
    amount: number;
    code: string;
    value: string;
  } | null;
  local: {
    amount: number;
    code: string;
    value: string;
  } | null;
};

/**
 * Just returns values, presentation is up to implementation
 */
export const getDualCurrency = ({
  conversionRate,
  foreignCode = 'USD',
  localCode = 'USD',
  value,
  valueIsForeign = false,
}: DualCurrencyParams): DualCurrency => {
  const getLocalValue = () => {
    if (!conversionRate) {
      return valueIsForeign ? null : value;
    }

    return valueIsForeign ? value / conversionRate : value;
  };

  const getForeignValue = () => {
    if (!conversionRate) {
      return valueIsForeign ? value : null;
    }

    return valueIsForeign ? value : value * conversionRate;
  };

  const localValue = getLocalValue();
  const foreignValue = getForeignValue();

  const localCurrency =
    localValue !== null
      ? {
          amount: localValue,
          code: localCode,
          value: formatCurrency({
            code: localCode,
            value: localValue,
          }),
        }
      : null;

  const foreignCurrency =
    foreignValue !== null
      ? {
          amount: foreignValue,
          code: foreignCode,
          value: formatCurrency({
            code: foreignCode,
            value: foreignValue,
          }),
        }
      : null;

  return {
    foreign: foreignCurrency,
    local: localCurrency,
  };
};
