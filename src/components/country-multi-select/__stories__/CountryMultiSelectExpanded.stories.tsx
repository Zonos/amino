import { useMemo, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from 'src/components/badge/Badge';
import {
  type CountryMultiSelectExpandedProps,
  type ICountryMultiSelectExpandedOption,
  CountryMultiSelectExpanded,
} from 'src/components/country-multi-select/CountryMultiSelectExpanded';
import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import { Toggle } from 'src/components/toggle/Toggle';

const renderBadge = (label: string) => {
  if (label.startsWith('A')) {
    return <Badge color="orange">Starts with A</Badge>;
  }

  if (label.startsWith('B')) {
    return <Badge color="purple">Starts with B</Badge>;
  }

  return null;
};

const Template = (props: CountryMultiSelectExpandedProps) => {
  const countryOptions = useCountryOptions({});

  const [value, setValue] = useState<ICountryMultiSelectExpandedOption[]>([]);

  const countries = useMemo(
    () =>
      countryOptions.map<ICountryMultiSelectExpandedOption>(x => ({
        code: x.code,
        disabled: x.displayName.startsWith('C'),
        group: x.region,
        icon: x.icon,
        label: x.displayName,
        rightDecorator: () => renderBadge(x.displayName),
      })),
    [countryOptions],
  );

  return (
    <CountryMultiSelectExpanded
      style={{
        width: '632px',
      }}
      {...props}
      countries={countries}
      onChange={setValue}
      selectedCountries={value}
    />
  );
};

const CountryMultiSelectMeta: Meta<typeof Template> = {
  component: CountryMultiSelectExpanded,
  render: Template,
};

export default CountryMultiSelectMeta;

export const Basic: StoryObj<CountryMultiSelectExpandedProps> = {};

export const WithToggle = (props: CountryMultiSelectExpandedProps) => {
  const countryOptions = useCountryOptions({});

  const [value, setValue] = useState<ICountryMultiSelectExpandedOption[]>([]);
  const [toggle, setToggle] = useState<string>('1');

  const countries = useMemo(() => {
    const options = countryOptions.map<ICountryMultiSelectExpandedOption>(
      x => ({
        code: x.code,
        disabled: x.displayName.startsWith('C'),
        group: x.region,
        icon: x.icon,
        label: x.displayName,
        rightDecorator: () => renderBadge(x.displayName),
      }),
    );

    if (toggle === '1') {
      return options;
    }

    return options.filter(x => !x.disabled);
  }, [countryOptions, toggle]);

  return (
    <CountryMultiSelectExpanded
      style={{
        width: '632px',
      }}
      {...props}
      countries={countries}
      onChange={setValue}
      renderToggle={
        <Toggle
          onChange={setToggle}
          options={[
            { label: 'Show disabled', value: '1' },
            { label: 'Hide disabled', value: '2' },
          ]}
          value={toggle}
        />
      }
      selectedCountries={value}
    />
  );
};

export const WidthAdjustable = (props: CountryMultiSelectExpandedProps) => {
  const countryOptions = useCountryOptions({});

  const [value, setValue] = useState<ICountryMultiSelectExpandedOption[]>([]);
  const [width, setWidth] = useState(632);

  const countries = useMemo(
    () =>
      countryOptions.map<ICountryMultiSelectExpandedOption>(x => ({
        code: x.code,
        disabled: x.displayName.startsWith('C'),
        group: x.region,
        icon: x.icon,
        label: x.displayName,
        rightDecorator: () => renderBadge(x.displayName),
      })),
    [countryOptions],
  );

  return (
    <div>
      <input
        max="1000"
        min="300"
        onChange={e => setWidth(parseInt(e.target.value, 10))}
        type="range"
        value={width}
      />
      <CountryMultiSelectExpanded
        style={{
          width: `${width}px`,
        }}
        {...props}
        countries={countries}
        onChange={setValue}
        selectedCountries={value}
      />
    </div>
  );
};
