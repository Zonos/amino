import { useReducer, useState } from 'react';

import type { Meta } from '@storybook/react';

import { FilterAmount } from 'src/components/filter/filter-amount/FilterAmount';
import {
  filterAmountReducer,
  initialFilterAmountState,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import { FilterDate } from 'src/components/filter/filter-date/FilterDate';
import {
  filterDateReducer,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import { FilterMultiSelect } from 'src/components/filter/filter-multi-select/FilterMultiSelect';
import { FilterSelect } from 'src/components/filter/filter-select/FilterSelect';
import { FilterText } from 'src/components/filter/filter-text/FilterText';
import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import type { ICountryOption } from 'src/types/ICountry';
import type { IOption } from 'src/types/IOption';

const meta: Meta = {
  title: 'Filters',
};

export default meta;

export const Text = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
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
      <pre>{JSON.stringify({ filter }, null, 2)}</pre>
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
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
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

export const CountrySelect = () => {
  const countries = useCountryOptions({});
  const [country, setCountry] = useState<ICountryOption<string> | null>(null);

  return (
    <>
      <pre>{JSON.stringify({ value: country?.value || null }, null, 2)}</pre>
      <FilterSelect
        dropdownTitle="Filter by country"
        label="Country Select filter"
        onChange={v => setCountry(v)}
        options={countries}
        value={country}
      />
    </>
  );
};

export const MultiSelect = () => {
  const [selectedValues, setSelectedValues] = useState<IOption<Option>[]>([]);

  return (
    <>
      <pre>{JSON.stringify({ selectedValues }, null, 2)}</pre>
      <FilterMultiSelect
        dropdownTitle="Filter by option"
        label="MultiSelect filter"
        onChange={v => setSelectedValues(v)}
        options={options}
        value={selectedValues}
      />
    </>
  );
};

export const Date = () => {
  const [filter, dispatch] = useReducer(
    filterDateReducer,
    initialFilterDateState,
  );

  return (
    <>
      <pre>{JSON.stringify({ filter }, null, 2)}</pre>
      <FilterDate
        dispatch={dispatch}
        dropdownTitle="Filter by date"
        filter={filter}
        label="Date filter"
      />
    </>
  );
};
