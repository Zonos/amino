import { useMemo, useState } from 'react';

import type { Meta } from '@storybook/react';

import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import { CountryMultiSelectDropdown } from 'src/components/select/CountryMultiSelectDropdown';
import type { ICountryMultiSelectExpandedOption } from 'src/components/select/CountryMultiSelectExpanded';

const CountryMultiSelectMeta: Meta = {
  component: CountryMultiSelectDropdown,
};

export default CountryMultiSelectMeta;

const CountryMultiSelectTemplate = () => {
  const [value, setValue] = useState<ICountryMultiSelectExpandedOption[]>([]);
  const countryOptions = useCountryOptions({});

  const countries = useMemo(
    () =>
      countryOptions.map<ICountryMultiSelectExpandedOption>(x => ({
        code: x.code,
        icon: x.icon,
        label: x.displayName,
        region: x.region,
      })),
    [countryOptions],
  );

  return (
    <CountryMultiSelectDropdown
      countries={countries}
      isOpen
      onChange={setValue}
      selectedCountries={value}
    />
  );
};

export const Basic = CountryMultiSelectTemplate.bind({});
