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
  conversionRate: number | null;
  foreignCode: string | null;
  localCode: string;
  value: number;
};

type DualCurrency = {
  foreign: {
    code: string;
    value: string;
  } | null;
  local: {
    code: string;
    value: string;
  };
};

/**
 * Just returns values, presentation is up to implementation
 */
export const getDualCurrency = ({
  conversionRate,
  foreignCode,
  localCode,
  value,
}: DualCurrencyParams): DualCurrency => {
  const convertedValue = conversionRate ? value * conversionRate : value;

  const localCurrency = {
    code: localCode,
    value: formatCurrency({
      code: localCode,
      value,
    }),
  };

  const foreignCurrency = foreignCode
    ? {
        code: foreignCode,
        value: formatCurrency({
          code: foreignCode,
          value: convertedValue,
        }),
      }
    : null;

  return {
    foreign: foreignCurrency,
    local: localCurrency,
  };
};
