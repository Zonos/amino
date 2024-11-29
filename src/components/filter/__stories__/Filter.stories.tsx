import { useReducer } from 'react';

import type { Meta } from '@storybook/react';
import cloneDeep from 'lodash/cloneDeep';
import { getCountryUrls } from 'story-utils/getCountryUrls';
import { z } from 'zod';

import { Button } from 'src/components/button/Button';
import { FilterAmount } from 'src/components/filter/filter-amount/FilterAmount';
import {
  filterAmountReducerUrl,
  getInitialFilterAmountStateUrl,
} from 'src/components/filter/filter-amount/filterAmountReducer';
import { FilterDate } from 'src/components/filter/filter-date/FilterDate';
import {
  filterDateReducerUrl,
  getInitialFilterDateStateUrl,
} from 'src/components/filter/filter-date/filterDateReducer';
import { FilterMultiSelect } from 'src/components/filter/filter-multi-select/FilterMultiSelect';
import { FilterSelect } from 'src/components/filter/filter-select/FilterSelect';
import { FilterText } from 'src/components/filter/filter-text/FilterText';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import type { SelectOption } from 'src/types/SelectOption';
import { useCountryOptions } from 'src/utils/hooks/useCountryOptions';
import { useStateUrl } from 'src/utils/hooks/useStateUrl';

import styles from './Filter.stories.module.scss';

const meta: Meta = {
  title: 'Filters',
};

export default meta;

export const Text = () => {
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
    filterAmountReducerUrl(),
    getInitialFilterAmountStateUrl(),
  );

  return (
    <>
      <pre>{window.location.search}</pre>
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

const fruitOptions = ['ORANGE', 'APPLE', 'BANANA'] as const;
type FruitOption = (typeof fruitOptions)[number];

const options: SelectOption<FruitOption>[] = fruitOptions.map(o => ({
  label: o.toLowerCase(),
  value: o,
}));

export const Select = () => {
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
        dropdownTitle="Filter by option"
        label="Select filter"
        onChange={setValue}
        options={options}
        value={value}
      />
    </>
  );
};

export const CountrySelect = () => {
  const { dashboardUrl } = getCountryUrls();
  const countries = useCountryOptions(dashboardUrl);
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
        dropdownTitle="Filter by country"
        label="Country Select filter"
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

export const MultiSelect = () => {
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
        dropdownTitle="Filter by option"
        label="MultiSelect filter"
        onChange={setValue}
        options={options}
        value={value || []}
      />
    </>
  );
};

const optionsNumbers: SelectOption<number>[] = Array.from(
  { length: 100 },
  (_, i) => ({
    label: `Option ${i}`,
    value: i,
  }),
);

export const MultiSelectWithManyOptions = () => {
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
        dropdownTitle="Filter by option"
        label="MultiSelect filter"
        onChange={setValue}
        options={optionsNumbers}
        value={value || []}
      />
    </>
  );
};

export const Date = () => {
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
        dropdownTitle="Filter by date"
        filter={filter}
        label="Date filter"
      />
    </>
  );
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

export const TextTruncation = () => {
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
            label="Select&nbsp;filter"
            onChange={v => setValue1(v)}
            options={optionsLong}
            value={value1}
          />
          <FilterSelect
            dropdownTitle="Filter by option"
            label="Select&nbsp;filter"
            onChange={v => setValue2(v)}
            options={optionsLong}
            value={value2}
          />
          <FilterSelect
            dropdownTitle="Filter by option"
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
export const SelectWithReducer = () => {
  const { dashboardUrl } = getCountryUrls();
  const countries = useCountryOptions(dashboardUrl);

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
        dropdownTitle="Filter by country"
        label="Country Select filter"
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

/**
 * initialize the Filter with a value
 * Properly display the initial value
 */
export const SelectWithInitialValue = () => {
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
        dropdownTitle="Filter by option"
        label="Select filter"
        onChange={setValue}
        options={options}
        value={value}
      />
    </>
  );
};
