import {
  type Dispatch,
  type KeyboardEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Translate } from 'src/components/__internal__/TranslateAminoText';
import {
  type FilterAmountAction,
  type FilterAmountState,
  initialFilterAmountState,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { getCurrentLanguage } from 'src/utils/translations';
import { translate } from 'src/utils/translations/__internal__/translateAminoText';

import styles from './FilterAmount.module.scss';

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

export type FilterAmountProps = BaseFilterProps & {
  dispatch: Dispatch<FilterAmountAction>;
  filter: FilterAmountState;
};

/**
 * FilterAmount provides a specialized filter interface for numeric amount values.
 * It allows users to filter by equal to, between, greater than, or less than specific amounts.
 * Integrates with the filter wrapper system for consistent behavior across filters.
 *
 * @example Basic usage with a reducer
 * ```tsx
 * const [filter, dispatch] = useReducer(filterAmountReducer, initialFilterAmountState);
 *
 * <FilterAmount
 *   dispatch={dispatch}
 *   dropdownTitle="Amount"
 *   filter={filter}
 *   label="Amount"
 * />
 * ```
 *
 * @example With specific initial filter value
 * ```tsx
 * const [filter, dispatch] = useReducer(filterAmountReducer, {
 *   ...initialFilterAmountState,
 *   amountFilterType: 'greater',
 *   amountTotalMin: 100
 * });
 *
 * <FilterAmount
 *   dispatch={dispatch}
 *   dropdownTitle="Price"
 *   filter={filter}
 *   label="Price"
 * />
 * ```
 *
 * @example As part of a filter group
 * ```tsx
 * <FilterWrapper>
 *   <FilterAmount
 *     dispatch={dispatch}
 *     dropdownTitle="Total"
 *     filter={filter}
 *     label="Total Amount"
 *   />
 *   <OtherFilters... />
 * </FilterWrapper>
 * ```
 */
export const FilterAmount = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: FilterAmountProps) => {
  const languageCode = getCurrentLanguage();
  const [filterType, setFilterType] = useState<FilterAmountType>(
    filter.amountFilterType,
  );
  const [editingAmountMin, setEditingAmountMin] = useState<string | null>(
    filter.amountTotalMin ? String(filter.amountTotalMin.toFixed(2)) : null,
  );
  const [editingAmountMax, setEditingAmountMax] = useState<string | null>(
    filter.amountTotalMax ? String(filter.amountTotalMax.toFixed(2)) : null,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const filterAmountOptions: SelectOption<FilterAmountType>[] = useMemo(
    () => [
      {
        label: translate({ languageCode, text: 'is equal to' }),
        value: 'equal',
      },
      {
        label: translate({ languageCode, text: 'is between' }),
        value: 'between',
      },
      {
        label: translate({ languageCode, text: 'is greater than' }),
        value: 'greater',
      },
      {
        label: translate({ languageCode, text: 'is less than' }),
        value: 'less',
      },
    ],
    [languageCode],
  );

  const dispatchAmounts = useCallback(
    (values: { amountMax: number | null; amountMin: number | null }) => {
      dispatch({
        name: 'amountTotalMin',
        type: 'change',
        value: values.amountMin,
      });
      dispatch({
        name: 'amountTotalMax',
        type: 'change',
        value: values.amountMax,
      });
    },
    [dispatch],
  );

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      const amountMinString = editingAmountMin
        ? `${parseFloat(editingAmountMin).toFixed(2)}`
        : '0';
      const amountMaxString = editingAmountMax
        ? `${parseFloat(editingAmountMax).toFixed(2)}`
        : '0';

      switch (filterType) {
        case 'between': {
          const betweenFilterText = translate({
            languageCode,
            text: 'Between [amountMinString] and [amountMaxString]',
            variables: { amountMaxString, amountMinString },
          });
          setFilterText(betweenFilterText);
          break;
        }
        case 'equal': {
          const equalFilterText = translate({
            languageCode,
            text: 'Equal to [amountMinString]',
            variables: { amountMinString },
          });
          setFilterText(equalFilterText);
          break;
        }
        case 'greater': {
          const greaterFilterText = translate({
            languageCode,
            text: 'Greater than [amountMinString]',
            variables: { amountMinString },
          });
          setFilterText(greaterFilterText);
          break;
        }
        case 'less': {
          const lessFilterText = translate({
            languageCode,
            text: 'Less than [amountMaxString]',
            variables: { amountMaxString },
          });
          setFilterText(lessFilterText);
          break;
        }
        default:
          break;
      }
    },
    [editingAmountMax, editingAmountMin, filterType],
  );

  const handleApply: FilterApplyCallback = useCallback(
    setFilterText => {
      dispatch({
        name: 'amountFilterType',
        type: 'change',
        value: filterType,
      });

      switch (filterType) {
        case 'between':
          dispatchAmounts({
            amountMax: editingAmountMax ? parseFloat(editingAmountMax) : null,
            amountMin: editingAmountMin ? parseFloat(editingAmountMin) : null,
          });
          break;
        case 'equal':
          dispatchAmounts({
            amountMax: editingAmountMin ? parseFloat(editingAmountMin) : null,
            amountMin: editingAmountMin ? parseFloat(editingAmountMin) : null,
          });
          break;
        case 'greater':
          dispatchAmounts({
            amountMax: null,
            amountMin: editingAmountMin ? parseFloat(editingAmountMin) : null,
          });
          break;
        case 'less':
          dispatchAmounts({
            amountMax: editingAmountMax ? parseFloat(editingAmountMax) : null,
            amountMin: null,
          });
          break;
        default:
          break;
      }

      dispatch({
        name: 'isActive',
        type: 'change',
        value: true,
      });
      handleApplyFilterText(setFilterText);
    },
    [
      dispatch,
      dispatchAmounts,
      editingAmountMax,
      editingAmountMin,
      filterType,
      handleApplyFilterText,
    ],
  );

  const handleRemove = () => {
    dispatch({
      name: 'isActive',
      type: 'change',
      value: false,
    });
    dispatch({
      name: 'amountFilterType',
      type: 'change',
      value: initialFilterAmountState.amountFilterType,
    });
    dispatchAmounts({ amountMax: null, amountMin: null });
    setFilterType(initialFilterAmountState.amountFilterType);
    setEditingAmountMin('0');
    setEditingAmountMax('0');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  const handleClose = () => {
    setFilterType(filter.amountFilterType);
    setEditingAmountMin(
      filter.amountTotalMin ? String(filter.amountTotalMin) : null,
    );
    setEditingAmountMax(
      filter.amountTotalMax ? String(filter.amountTotalMax) : null,
    );
  };

  const handleSetFirstValue = (value: string) => {
    switch (filterType) {
      case 'less':
        setEditingAmountMax(value);
        break;
      case 'equal':
      case 'between':
      case 'greater':
      default:
        setEditingAmountMin(value);
        break;
    }
  };

  const firstInputValue = useMemo(() => {
    switch (filterType) {
      case 'less':
        return editingAmountMax === null ? '' : String(editingAmountMax);
      case 'equal':
      case 'between':
      case 'greater':
      default:
        return editingAmountMin === null ? '' : String(editingAmountMin);
    }
  }, [editingAmountMax, editingAmountMin, filterType]);

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    isActive: filter.isActive,
    label,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
    onClose: handleClose,
    onRemove: handleRemove,
    setActive: active =>
      dispatch({
        name: 'isActive',
        type: 'change',
        value: active,
      }),
  });

  return renderWrapper(
    <>
      <Select
        isClearable={false}
        onChange={opt =>
          setFilterType(opt?.value || initialFilterAmountState.amountFilterType)
        }
        onKeyDown={handleKeyDown}
        onMenuClose={() => setMenuOpen(false)}
        onMenuOpen={() => setMenuOpen(true)}
        options={filterAmountOptions}
        size="md"
        value={filterAmountOptions.filter(item => item.value === filterType)}
      />

      <div className={styles.inputWrapper}>
        <ArrowRightIcon className="arrow-right" color="blue600" size={24} />
        <Input
          onChange={e => handleSetFirstValue(e.target.value)}
          size="md"
          type="number"
          value={firstInputValue}
        />
        {filterType === 'between' && (
          <>
            <Translate text="and --context: 'and' text falls between two numbers" />
            <Input
              onChange={e => setEditingAmountMax(e.target.value)}
              size="md"
              type="number"
              value={editingAmountMax === null ? '' : String(editingAmountMax)}
            />
          </>
        )}
      </div>
    </>,
  );
};
