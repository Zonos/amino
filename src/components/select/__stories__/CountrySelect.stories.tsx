import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { getCountryUrls } from 'story-utils/getCountryUrls';

import {
  CountrySelect,
  type CountrySelectProps,
} from 'src/components/select/CountrySelect';
import {
  type CountryOption,
  useCountryOptions,
} from 'src/utils/hooks/useCountryOptions';

type RandomCountryCode = 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AT';

const CountrySelectMeta: Meta = {
  component: CountrySelect,
  decorators: [
    Component => (
      <div
        style={{
          width: 412,
        }}
      >
        <Component />
      </div>
    ),
  ],
};

export default CountrySelectMeta;

const CountrySelectTemplate: StoryFn<CountrySelectProps> = ({ ...props }) => {
  const [value, setValue] = useState<string | null>(null);
  const { dashboardUrl } = getCountryUrls();
  const countryOptions = useCountryOptions(dashboardUrl);
  const [typedValue, setTypedValue] = useState<RandomCountryCode | null>(null);
  const stronglyTypedCountries =
    countryOptions as CountryOption<RandomCountryCode>[];
  return (
    <>
      <CountrySelect
        {...props}
        countryOptions={countryOptions}
        onChange={option => setValue(option?.value || null)}
        value={value}
      />
      <br />
      {/* Check for correctly returning type for onChange and value when there is strongly typed `countryOptions` passed in */}
      <CountrySelect
        countryOptions={stronglyTypedCountries}
        onChange={option => setTypedValue(option?.value || null)}
        value={typedValue}
      />
    </>
  );
};

export const BasicCountrySelect = CountrySelectTemplate.bind({});

BasicCountrySelect.args = {};

BasicCountrySelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
