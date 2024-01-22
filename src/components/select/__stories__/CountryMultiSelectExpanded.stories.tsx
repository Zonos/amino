import { useMemo, useState } from 'react';

import type { Meta } from '@storybook/react';

import { Badge } from 'src/components/badge/Badge';
import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import {
  type CountryMultiSelectExpandedProps,
  type ICountryMultiSelectExpandedOption,
  CountryMultiSelectExpanded,
} from 'src/components/select/CountryMultiSelectExpanded';

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
  const [value, setValue] = useState<ICountryMultiSelectExpandedOption[]>([]);
  const countryOptions = useCountryOptions({});

  const countries = useMemo(
    () =>
      countryOptions.map<ICountryMultiSelectExpandedOption>(x => ({
        code: x.code,
        icon: x.icon,
        label: x.displayName,
        region: x.region,
        rightDecorator: () => renderBadge(x.displayName),
      })),
    [countryOptions],
  );

  return (
    <CountryMultiSelectExpanded
      {...props}
      countries={countries}
      onChange={setValue}
      selectedCountries={value}
      style={{
        width: '500px',
      }}
    />
  );
};

const CountryMultiSelectMeta: Meta<typeof Template> = {
  component: CountryMultiSelectExpanded,
  render: Template,
};

export default CountryMultiSelectMeta;

export const Basic = {};
