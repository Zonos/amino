import { type Dispatch, type KeyboardEvent, useState } from 'react';

import styled from 'styled-components';

import {
  type FilterAmountAction,
  type FilterAmountState,
  filterAmountOptions,
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
import { theme } from 'src/styles/constants/theme';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space8};

  svg {
    min-width: 24px;
  }

  & .ArrowRightIcon {
    margin-right: ${theme.space16};
  }
`;

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

type FilterAmountProps = BaseFilterProps & {
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
  const [editingAmount1, setEditingAmount1] = useState<number | null>(
    filter.amountTotalMin,
  );
  const [editingAmount2, setEditingAmount2] = useState<number | null>(
    filter.amountTotalMax,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatchAmountFilterType = (value: FilterAmountType) => {
    dispatch({
      name: 'amountFilterType',
      type: 'change',
      value,
    });
  };

  const dispatchAmounts = (values: {
    amount1: number | null;
    amount2: number | null;
  }) => {
    dispatch({
      name: 'amountTotalMin',
      type: 'change',
      value: values.amount1,
    });
    dispatch({
      name: 'amountTotalMax',
      type: 'change',
      value: values.amount2,
    });
  };

  const handleApply: FilterApplyCallback = setFilterText => {
    dispatchAmountFilterType(filterType);
    const amount1String = `${editingAmount1?.toFixed(2) || 0}` || '';
    const amount2String = `${editingAmount2?.toFixed(2) || 0}` || '';

    switch (filterType) {
      case 'between':
        dispatchAmounts({ amount1: editingAmount1, amount2: editingAmount2 });
        setFilterText(`Between ${amount1String} and ${amount2String}`);
        break;
      case 'equal':
        dispatchAmounts({ amount1: editingAmount1, amount2: editingAmount1 });
        setFilterText(`Equal to ${amount1String}`);
        break;
      case 'greater':
        dispatchAmounts({ amount1: editingAmount1, amount2: null });
        setFilterText(`Greater than ${amount1String}`);
        break;
      case 'less':
        dispatchAmounts({ amount1: null, amount2: editingAmount1 });
        setFilterText(`Less than ${amount1String}`);
        break;
      default:
        break;
    }

    dispatch({
      name: 'isActive',
      type: 'change',
      value: true,
    });
  };

  const handleRemove = () => {
    dispatch({
      name: 'isActive',
      type: 'change',
      value: false,
    });
    dispatchAmountFilterType(initialFilterAmountState.amountFilterType);
    dispatchAmounts({ amount1: null, amount2: null });
    setFilterType(initialFilterAmountState.amountFilterType);
    setEditingAmount1(0);
    setEditingAmount2(0);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    filterExists: filter.isActive,
    label,
    onApply: handleApply,
    onRemove: handleRemove,
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

      <InputWrapper>
        <ArrowRightIcon className="ArrowRightIcon" color="blue600" size={24} />
        <Input
          onChange={e => setEditingAmount1(e.target.valueAsNumber)}
          size="md"
          type="number"
          value={editingAmount1 === null ? '' : String(editingAmount1)}
        />
        {filterType === 'between' && (
          <>
            and
            <Input
              onChange={e => setEditingAmount2(e.target.valueAsNumber)}
              size="md"
              type="number"
              value={editingAmount2 === null ? '' : String(editingAmount2)}
            />
          </>
        )}
      </InputWrapper>
    </>,
  );
};
