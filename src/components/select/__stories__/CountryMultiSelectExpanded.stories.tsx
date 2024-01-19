import { useMemo, useState } from 'react';

import type { Meta } from '@storybook/react';

import { Badge } from 'src/components/badge/Badge';
import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import {
  type CountryMultiSelectExpandedProps,
  type ICountryMultiSelectExpandedOption,
  CountryMultiSelectExpanded,
} from 'src/components/select/CountryMultiSelectExpanded';

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
        // rightDecorator: 'dog',
        // rightDecorator: x.code === 'AF' ? <Badge>Cool</Badge> : undefined,
      })),
    [countryOptions],
  );

  console.log({ countries });

  return (
    <CountryMultiSelectExpanded
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

export const Basic = {};
