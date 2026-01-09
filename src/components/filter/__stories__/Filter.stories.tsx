import { useReducer } from 'react';

import type { Meta } from '@storybook/react';
import cloneDeep from 'lodash/cloneDeep';
import { z } from 'zod';

import { Button } from 'src/components/button/Button';
import {
  FilterAmount,
  type FilterAmountProps,
} from 'src/components/filter/filter-amount/FilterAmount';
import {
  filterAmountReducerUrl,
  getInitialFilterAmountStateUrl,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import {
  FilterDate,
  type FilterDateProps,
} from 'src/components/filter/filter-date/FilterDate';
import {
  filterDateReducerUrl,
  getInitialFilterDateStateUrl,
} from 'src/components/filter/filter-date/filterDateReducer';
import {
  FilterMultiSelect,
  type FilterMultiSelectProps,
} from 'src/components/filter/filter-multi-select/FilterMultiSelect';
import {
  FilterSelect,
  type FilterSelectProps,
} from 'src/components/filter/filter-select/FilterSelect';
import {
  FilterText,
  type FilterTextProps,
} from 'src/components/filter/filter-text/FilterText';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { getCountryUrls } from 'src/utils/getCountryUrls';
import { useCountryOptions } from 'src/utils/hooks/useCountryOptions';
import { useStateUrl } from 'src/utils/hooks/useStateUrl';

import styles from './Filter.stories.module.scss';

const meta: Meta = {
  title: 'Filters',
};

export default meta;

export const Text = ({
  dropdownTitle = 'Filter by text',
  isDisabled = false,
  label = 'Text filter',
}: FilterTextProps) => {
  const [value, setValue] = useStateUrl<string | null>({
    initialValue: null,
    name: 'filterText',
    schema: z.string().nullable(),
  });

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
      <FilterText
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setValue}
        value={value}
      />
    </>
  );
};

Text.args = {
  dropdownTitle: 'Filter by text',
  isDisabled: false,
  label: 'Text filter',
};

Text.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

export const Amount = ({
  dropdownTitle = 'Filter by amount',
  isDisabled = false,
  label = 'Amount filter',
}: FilterAmountProps) => {
  const [filter, dispatch] = useReducer(
    filterAmountReducerUrl(),
    getInitialFilterAmountStateUrl(),
  );

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ filter }, null, 2)}</pre>
      <FilterAmount
        dispatch={dispatch}
        dropdownTitle={dropdownTitle}
        filter={filter}
        isDisabled={isDisabled}
        label={label}
      />
    </>
  );
};

Amount.args = {
  dropdownTitle: 'Filter by amount',
  isDisabled: false,
  label: 'Amount filter',
};

Amount.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

const fruitOptions = ['ORANGE', 'APPLE', 'BANANA'] as const;
type FruitOption = (typeof fruitOptions)[number];

const options: SelectOption<FruitOption>[] = fruitOptions.map(o => ({
  label: o.toLowerCase(),
  value: o,
}));

export const Select = ({
  dropdownTitle = 'Filter by option',
  isDisabled = false,
  label = 'Select filter',
}: FilterSelectProps<FruitOption>) => {
  const [value, setValue] = useStateUrl<FruitOption | null>({
    initialValue: null,
    name: 'filterSelect',
    schema: z.enum(fruitOptions).nullable(),
  });

  const selectedOption = options.find(o => o.value === value) || null;

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ selectedOption }, null, 2)}</pre>
      <FilterSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setValue}
        options={options}
        value={value}
      />
    </>
  );
};

Select.args = {
  dropdownTitle: 'Filter by option',
  isDisabled: false,
  label: 'Select filter',
};

Select.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

export const CountrySelect = ({
  dropdownTitle = 'Filter by country',
  isDisabled = false,
  label = 'Country Select filter',
}: FilterSelectProps<string>) => {
  const dashboardUrl = getCountryUrls();
  const countries = useCountryOptions({ dashboardUrl });
  const [country, setCountry] = useStateUrl<string | null>({
    initialValue: null,
    name: 'filterCountry',
    schema: z.string().nullable(),
  });

  const countriesWithFlags = countries.flatMap(option => ({
    ...option,
    icon: <FlagIcon code={option.code as Flag} iconScale="small" />,
  }));

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ value: country }, null, 2)}</pre>
      <FilterSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setCountry}
        options={countriesWithFlags}
        selectProps={option => ({
          icon: (
            <FlagIcon
              code={option ? (option.value as Flag) : 'Default'}
              iconScale="medium"
            />
          ),
        })}
        value={country}
      />
    </>
  );
};

CountrySelect.args = {
  dropdownTitle: 'Filter by country',
  isDisabled: false,
  label: 'Country Select filter',
};

CountrySelect.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

export const MultiSelect = ({
  dropdownTitle = 'Filter by option',
  isDisabled = false,
  label = 'MultiSelect filter',
}: FilterMultiSelectProps<FruitOption>) => {
  const [value, setValue] = useStateUrl<FruitOption[]>({
    initialValue: [],
    name: 'filterSelect',
    schema: z.array(z.enum(fruitOptions)),
  });

  const selectedOptions =
    value?.flatMap(v => options.find(o => o.value === v) || []) || [];

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ selectedOptions }, null, 2)}</pre>
      <FilterMultiSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setValue}
        options={options}
        value={value || []}
      />
    </>
  );
};

MultiSelect.args = {
  dropdownTitle: 'Filter by option',
  isDisabled: false,
  label: 'MultiSelect filter',
};

MultiSelect.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

const optionsNumbers: SelectOption<number>[] = Array.from(
  { length: 100 },
  (_, i) => ({
    label: `Option ${i}`,
    value: i,
  }),
);

export const MultiSelectWithManyOptions = ({
  dropdownTitle = 'Filter by option',
  isDisabled = false,
  label = 'MultiSelect filter',
}: FilterMultiSelectProps<number>) => {
  const [value, setValue] = useStateUrl<number[]>({
    initialValue: [],
    name: 'filterSelect',
    schema: z.array(z.number()),
  });

  const selectedOptions =
    value?.flatMap(v => optionsNumbers.find(o => o.value === v) || []) || [];

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ selectedOptions }, null, 2)}</pre>
      <FilterMultiSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setValue}
        options={optionsNumbers}
        value={value || []}
      />
    </>
  );
};

MultiSelectWithManyOptions.args = {
  dropdownTitle: 'Filter by option',
  isDisabled: false,
  label: 'MultiSelect filter',
};

MultiSelectWithManyOptions.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

export const Date = ({
  dropdownTitle = 'Filter by date',
  isDisabled = false,
  label = 'Date filter',
}: FilterDateProps) => {
  const [filter, dispatch] = useReducer(
    filterDateReducerUrl(),
    getInitialFilterDateStateUrl(),
  );

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ filter }, null, 2)}</pre>
      <FilterDate
        dispatch={dispatch}
        dropdownTitle={dropdownTitle}
        filter={filter}
        isDisabled={isDisabled}
        label={label}
      />
    </>
  );
};

Date.args = {
  dropdownTitle: 'Filter by date',
  isDisabled: false,
  label: 'Date filter',
};

Date.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

const optionsLong: SelectOption<FruitOption>[] = [
  {
    label:
      'Orange - A lot of words like a really long product description maybe',
    value: 'ORANGE',
  },
  {
    label:
      'Apple - A lot of words like a really long product description maybe',
    value: 'APPLE',
  },
  {
    label:
      'Banana - A lot of words like a really long product description maybe',
    value: 'BANANA',
  },
];

export const TextTruncation = ({
  isDisabled = false,
}: FilterSelectProps<FruitOption>) => {
  const [value1, setValue1] = useStateUrl<FruitOption | null>({
    initialValue: null,
    name: 'filterSelect1',
    schema: z.enum(fruitOptions).nullable(),
  });
  const [value2, setValue2] = useStateUrl<FruitOption | null>({
    initialValue: null,
    name: 'filterSelect2',
    schema: z.enum(fruitOptions).nullable(),
  });
  const [value3, setValue3] = useStateUrl<FruitOption | null>({
    initialValue: null,
    name: 'filterSelect3',
    schema: z.enum(fruitOptions).nullable(),
  });

  return (
    <>
      <pre>{window.location.search}</pre>

      <div className={styles.filterBar}>
        <div className={styles.filterBarFilters}>
          <FilterSelect
            dropdownTitle="Filter by option"
            isDisabled={isDisabled}
            label="Select&nbsp;filter"
            onChange={v => setValue1(v)}
            options={optionsLong}
            value={value1}
          />
          <FilterSelect
            dropdownTitle="Filter by option"
            isDisabled={isDisabled}
            label="Select&nbsp;filter"
            onChange={v => setValue2(v)}
            options={optionsLong}
            value={value2}
          />
          <FilterSelect
            dropdownTitle="Filter by option"
            isDisabled={isDisabled}
            label="Select&nbsp;filter"
            onChange={v => setValue3(v)}
            options={optionsLong}
            value={value3}
          />
        </div>
        <Button
          icon={<RemoveIcon />}
          onClick={() => {
            setValue1(null);
            setValue2(null);
            setValue3(null);
          }}
          variant="subtle"
        >
          Clear filters
        </Button>
      </div>
    </>
  );
};

TextTruncation.args = {
  isDisabled: false,
};

TextTruncation.argTypes = {
  isDisabled: {
    control: 'boolean',
  },
};

const reducerSelect = (
  state: {
    state: string | null;
  },
  action:
    | {
        type: 'change';
        value: string | null;
      }
    | {
        type: 'clear';
      },
): {
  state: string | null;
} => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case 'change':
      return {
        ...newState,
        state: action.value,
      };
    case 'clear':
    default:
      return {
        ...newState,
        state: null,
      };
  }
};

/**
 * There was a problem where the reducer was causing infinite re-renders. This is due to the object value nature of reducers.
 */
export const SelectWithReducer = ({
  dropdownTitle = 'Filter by country',
  isDisabled = false,
  label = 'Country Select filter',
}: FilterSelectProps<string>) => {
  const dashboardUrl = getCountryUrls();
  const countries = useCountryOptions({ dashboardUrl });

  const [value, dispatch] = useReducer(reducerSelect, {
    state: null,
  });

  const countriesWithFlags = countries.flatMap(option => ({
    ...option,
    icon: <FlagIcon code={option.code as Flag} iconScale="small" />,
  }));

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
      <FilterSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={x =>
          dispatch({
            type: 'change',
            value: x,
          })
        }
        options={countriesWithFlags}
        selectProps={option => ({
          icon: (
            <FlagIcon
              code={option ? (option.value as Flag) : 'Default'}
              iconScale="medium"
            />
          ),
        })}
        value={value.state}
      />
    </>
  );
};

SelectWithReducer.args = {
  dropdownTitle: 'Filter by country',
  isDisabled: false,
  label: 'Country Select filter',
};

SelectWithReducer.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};

/**
 * initialize the Filter with a value
 * Properly display the initial value
 */
export const SelectWithInitialValue = ({
  dropdownTitle = 'Filter by option',
  isDisabled = false,
  label = 'Select filter',
}: FilterSelectProps<FruitOption>) => {
  const [value, setValue] = useStateUrl<FruitOption | null>({
    initialValue: 'ORANGE',
    name: 'filterSelect',
    schema: z.enum(fruitOptions).nullable(),
  });

  const selectedOption = options.find(o => o.value === value) || null;

  return (
    <>
      <pre>{window.location.search}</pre>
      <pre>{JSON.stringify({ selectedOption }, null, 2)}</pre>
      <FilterSelect
        dropdownTitle={dropdownTitle}
        isDisabled={isDisabled}
        label={label}
        onChange={setValue}
        options={options}
        value={value}
      />
    </>
  );
};

SelectWithInitialValue.args = {
  dropdownTitle: 'Filter by option',
  isDisabled: false,
  label: 'Select filter',
};

SelectWithInitialValue.argTypes = {
  dropdownTitle: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
};
