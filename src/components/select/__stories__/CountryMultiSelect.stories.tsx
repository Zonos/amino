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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=7597%3A129851&mode=dev',
    },
  },
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
