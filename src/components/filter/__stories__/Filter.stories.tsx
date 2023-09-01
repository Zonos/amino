import { useReducer, useState } from 'react';

import type { Meta } from '@storybook/react';

import { FilterAmount } from 'src/components/filter/filter-amount/FilterAmount';
import {
  filterAmountReducer,
  initialFilterAmountState,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import { FilterSelect } from 'src/components/filter/filter-select/FilterSelect';
import { FilterText } from 'src/components/filter/filter-text/FilterText';
import type { IOption } from 'src/types/IOption';

const meta: Meta = {
  title: 'Filters',
};

export default meta;

export const Text = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <div>{JSON.stringify({ value }, null, 2)}</div>
      <FilterText
        dropdownTitle="Filter by text"
        label="Text filter"
        onChange={setValue}
        value={value}
      />
    </>
  );
};

export const Amount = () => {
  const [filter, dispatch] = useReducer(
    filterAmountReducer,
    initialFilterAmountState,
  );

  return (
    <>
      <div>{JSON.stringify({ filter }, null, 2)}</div>
      <FilterAmount
        dispatch={dispatch}
        dropdownTitle="Filter by amount"
        filter={filter}
        label="Amount filter"
      />
    </>
  );
};

type Option = 'Orange' | 'Apple' | 'Banana';

const options: IOption<Option>[] = [
  { label: 'Orange', value: 'Orange' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Banana', value: 'Banana' },
];

export const Select = () => {
  const [value, setValue] = useState<IOption<Option> | null>(null);

  return (
    <>
      <div>{JSON.stringify({ value }, null, 2)}</div>
      <FilterSelect
        dropdownTitle="Filter by option"
        label="Select filter"
        onChange={v => setValue(v)}
        options={options}
        value={value}
      />
    </>
  );
};
