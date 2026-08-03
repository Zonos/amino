import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  CountryMultiSelect,
  type CountryMultiSelectProps,
} from 'src/components/select/CountryMultiSelect';
import { Tooltip } from 'src/components/tooltip/Tooltip';
import { InfoIcon } from 'src/icons/InfoIcon';
import { getCountryUrls } from 'src/utils/getCountryUrls';
import type { CountryOption } from 'src/utils/hooks/useCountryOptions';
import { useCountryOptions } from 'src/utils/hooks/useCountryOptions';

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
  const dashboardUrl = getCountryUrls();
  const countryOptions = useCountryOptions({ dashboardUrl });
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

export const LabelWithTooltip: StoryFn<CountryMultiSelectProps> = () => {
  const [value, setValue] = useState<string[]>([]);
  const dashboardUrl = getCountryUrls();
  const countryOptions = useCountryOptions({ dashboardUrl });
  return (
    <CountryMultiSelect
      countryOptions={countryOptions}
      label={
        <span className="inline-flex items-center gap-1 align-middle">
          Ship-to countries
          <Tooltip title="Choose every destination country you want to enable at checkout.">
            <InfoIcon color="gray600" inlineBlock size={14} />
          </Tooltip>
        </span>
      }
      onChange={setValue}
      unavailableCountries={[{ code: 'DZ', message: '(restricted)' }]}
      value={value}
    />
  );
};
