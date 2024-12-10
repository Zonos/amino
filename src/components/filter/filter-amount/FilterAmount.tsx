import {
  type Dispatch,
  type KeyboardEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import {
  type FilterAmountAction,
  filterAmountOptions,
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

import styles from './FilterAmount.module.scss';

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

export type FilterAmountProps = BaseFilterProps & {
  dispatch: Dispatch<FilterAmountAction>;
  filter: FilterAmountState;
};

export const FilterAmount = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: FilterAmountProps) => {
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
        case 'between':
          setFilterText(`Between ${amountMinString} and ${amountMaxString}`);
          break;
        case 'equal':
          setFilterText(`Equal to ${amountMinString}`);
          break;
        case 'greater':
          setFilterText(`Greater than ${amountMinString}`);
          break;
        case 'less':
          setFilterText(`Less than ${amountMaxString}`);
          break;
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
            and
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
