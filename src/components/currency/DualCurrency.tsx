import { Currency } from 'src/components/currency/Currency';
import { ArrowSwapIcon } from 'src/icons/ArrowSwapIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';
import { getDualCurrency } from 'src/utils/formatCurrency';

type Props = BaseProps & {
  conversionRate?: number;
  /**
   * @default 'USD'
   */
  foreignCode?: string;
  /**
   * @default false
   */
  hideForeign?: boolean;
  /**
   * @default false
   */
  hideLocal?: boolean;
  isTabular?: boolean;
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

/**
 * Can go both ways.
 */
export const DualCurrency = ({
  className,
  conversionRate,
  foreignCode = 'USD',
  hideForeign = false,
  hideLocal = false,
  isTabular = false,
  localCode = 'USD',
  style,
  value,
  valueIsForeign = false,
}: Props) => {
  const { foreign, local } = getDualCurrency({
    conversionRate,
    foreignCode,
    localCode,
    value,
    valueIsForeign,
  });

  const renderLocalCurrency = () => {
    if (!local) {
      return null;
    }

    return (
      <Currency amount={local.amount} className={className} code={localCode} />
    );
  };

  const renderForeignCurrency = () => {
    if (!foreign) {
      return null;
    }

    return (
      <Currency
        amount={foreign.amount}
        className={className}
        code={foreignCode}
      />
    );
  };

  if (local && foreign && !hideLocal && !hideForeign) {
    return (
      <div
        className={cn(
          'items-center justify-items-right gap-amino-8',
          className,
        )}
        style={{
          ...style,
          display: isTabular ? 'grid' : 'flex',
          fontVariantNumeric: isTabular ? 'tabular-nums' : undefined,
          gridTemplateColumns: isTabular ? '1.25fr 0fr 1.25fr' : undefined,
        }}
      >
        {renderLocalCurrency()}
        <ArrowSwapIcon color="gray800" size={12} />
        {renderForeignCurrency()}
      </div>
    );
  }

  if (local && !hideLocal) {
    return renderLocalCurrency();
  }

  if (foreign && !hideForeign) {
    return renderForeignCurrency();
  }

  return null;
};
