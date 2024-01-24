import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { useCountryOptions } from 'src/components/select/__stories__/useCountryOptions';
import {
  type CountryMultiSelectProps,
  CountryMultiSelect,
} from 'src/components/select/CountryMultiSelect';
import type { CountryOption } from 'src/types/Country';

type RandomCountryCode = 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AT';

const CountryMultiSelectMeta: Meta = {
  component: CountryMultiSelect,
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

export default CountryMultiSelectMeta;

const CountryMultiSelectTemplate: StoryFn<CountryMultiSelectProps> = (
  props: CountryMultiSelectProps,
) => {
  const [value, setValue] = useState<string[]>([]);
  const countryOptions = useCountryOptions({});
  const [typedValue, setTypedValue] = useState<RandomCountryCode[]>([]);
  const stronglyTypedCountries =
    countryOptions as CountryOption<RandomCountryCode>[];
  return (
    <>
      <CountryMultiSelect
        {...props}
        countryOptions={countryOptions}
        onChange={setValue}
        unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
        value={value}
      />
      <br />
      {/* Check for correctly returning type for onChange and value when there is strongly typed `countryOptions` passed in */}
      <CountryMultiSelect
        countryOptions={stronglyTypedCountries}
        onChange={setTypedValue}
        unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
        value={typedValue}
      />
    </>
  );
};

export const BasicCountryMultiSelect = CountryMultiSelectTemplate.bind({});

BasicCountryMultiSelect.args = {};

BasicCountryMultiSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
