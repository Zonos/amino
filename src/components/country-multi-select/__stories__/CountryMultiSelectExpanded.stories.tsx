import { useMemo, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from 'src/components/badge/Badge';
import {
  type CountryMultiSelectExpandedOption,
  type CountryMultiSelectExpandedProps,
  CountryMultiSelectExpanded,
} from 'src/components/country-multi-select/CountryMultiSelectExpanded';
import { Toggle } from 'src/components/toggle/Toggle';
import { useCountryOptions } from 'src/utils/hooks/useCountryOptions';

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
  const countryOptions = useCountryOptions();

  const [value, setValue] = useState<CountryMultiSelectExpandedOption[]>([]);

  const countries = useMemo(
    () =>
      countryOptions.map<CountryMultiSelectExpandedOption>(x => ({
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
        overflow: 'auto',
        resize: 'both',
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
  const countryOptions = useCountryOptions();

  const [value, setValue] = useState<CountryMultiSelectExpandedOption[]>([]);
  const [toggle, setToggle] = useState<string>('1');

  const countries = useMemo(() => {
    const options = countryOptions.map<CountryMultiSelectExpandedOption>(x => ({
      code: x.code,
      disabled: x.region === 'Africa',
      group: x.region,
      icon: x.icon,
      label: x.displayName,
      rightDecorator: () => renderBadge(x.displayName),
    }));

    if (toggle === '1') {
      return options;
    }

    return options.filter(x => !x.disabled);
  }, [countryOptions, toggle]);

  return (
    <CountryMultiSelectExpanded
      style={{
        overflow: 'auto',
        resize: 'both',
        width: '632px',
      }}
      {...props}
      actions={
        <Toggle
          onChange={setToggle}
          options={[
            { label: 'Show disabled', value: '1' },
            { label: 'Hide disabled', value: '2' },
          ]}
          value={toggle}
        />
      }
      countries={countries}
      onChange={setValue}
      selectedCountries={value}
    />
  );
};
