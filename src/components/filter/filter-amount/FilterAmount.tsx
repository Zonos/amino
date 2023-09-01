import { type Dispatch, useEffect, useState } from 'react';

import styled from 'styled-components';

import type {
  FilterAmountAction,
  FilterAmountState,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import {
  type BaseFilterProps,
  useFilter,
} from 'src/components/filter/useFilter';
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
`;

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

type FilterAmountProps = BaseFilterProps & {
  dispatch: Dispatch<FilterAmountAction>;
  filter: FilterAmountState;
};

const options: { label: string; value: FilterAmountType }[] = [
  { label: 'is equal to', value: 'equal' },
  { label: 'is between', value: 'between' },
  { label: 'is greater than', value: 'greater' },
  { label: 'is less than', value: 'less' },
];

export const FilterAmount = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: FilterAmountProps) => {
  const [editFilterBy, setEditFilterBy] = useState<FilterAmountType | null>(
    filter.amountFilterType,
  );
  const [editingAmount1, setEditingAmount1] = useState<number | null>(null);
  const [editingAmount2, setEditingAmount2] = useState<number | null>(null);
  const [newFilterText, setNewFilterText] = useState('');

  const dispatchAmountFilterType = (value: FilterAmountType | null) => {
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

  const handleApply = () => {
    dispatchAmountFilterType(editFilterBy);
    const amount1String = `${editingAmount1?.toFixed(2) || 0}` || '';
    const amount2String = `${editingAmount2?.toFixed(2) || 0}` || '';

    switch (editFilterBy) {
      case 'between':
        dispatchAmounts({ amount1: editingAmount1, amount2: editingAmount2 });
        setNewFilterText(`Between ${amount1String} and ${amount2String}`);
        break;
      case 'equal':
        dispatchAmounts({ amount1: editingAmount1, amount2: editingAmount1 });
        setNewFilterText(`Equal to ${amount1String}`);
        break;
      case 'greater':
        dispatchAmounts({ amount1: editingAmount1, amount2: null });
        setNewFilterText(`Greater than ${amount1String}`);
        break;
      case 'less':
        dispatchAmounts({ amount1: null, amount2: editingAmount1 });
        setNewFilterText(`Less than ${amount1String}`);
        break;
      default:
        // Handle default case if necessary
        break;
    }
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      dispatchAmountFilterType(null);
      dispatchAmounts({ amount1: null, amount2: null });
      setEditFilterBy(null);
      setEditingAmount1(null);
      setEditingAmount2(null);
    } else {
      dispatchAmountFilterType(editFilterBy);
      dispatchAmounts({ amount1: editingAmount1, amount2: editingAmount2 });
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
    dropdownTitle,
    filterExists: !!filter.amountTotalMin || !!filter.amountTotalMax,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    setFilterText(newFilterText);
  }, [setFilterText, newFilterText]);

  return renderWrapper(
    <>
      <Select
        isClearable={false}
        onChange={opt => setEditFilterBy(opt?.value || null)}
        options={options}
        size="md"
        value={options.filter(item => item.value === editFilterBy)}
      />

      <InputWrapper>
        <ArrowRightIcon color="blue600" size={24} />
        <Input
          onChange={e => setEditingAmount1(e.target.valueAsNumber)}
          type="number"
          value={editingAmount1 === null ? '' : String(editingAmount1)}
        />
        {editFilterBy === 'between' && (
          <>
            and
            <Input
              onChange={e => setEditingAmount2(e.target.valueAsNumber)}
              type="number"
              value={editingAmount2 === null ? '' : String(editingAmount2)}
            />
          </>
        )}
      </InputWrapper>
    </>,
  );
};
