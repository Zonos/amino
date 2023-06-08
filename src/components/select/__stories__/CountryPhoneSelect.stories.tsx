import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import {
  type CountryPhoneSelectProps,
  CountryPhoneSelect,
} from 'src/components/select/CountryPhoneSelect';
import { type IFlag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { ICountryOption } from 'src/types/ICountry';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryPhoneSelectMeta: Meta = {
  component: CountryPhoneSelect,
  decorators: [
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default CountryPhoneSelectMeta;

const CountryPhoneSelectTemplate: StoryFn<
  CountryPhoneSelectProps<ICountryOption>
> = ({
  phone: _phone,
  phoneCountry: _phoneCountry,
  ...props
}: CountryPhoneSelectProps<ICountryOption>) => {
  const { dashboardUrl } = getCountryUrls();
  const [phoneCountry, setPhoneCountry] = useState<ICountryOption | null>(
    _phoneCountry
  );
  const [phone, setPhone] = useState(_phone);
  const countryOptions = useCountryOptions({
    dashboardUrl,
  });
  return (
    <CountryPhoneSelect
      {...props}
      countryOptions={countryOptions}
      icon={
        <FlagIcon
          code={(phoneCountry?.code as IFlag) || 'Default'}
          iconScale="medium"
        />
      }
      phone={phone}
      phoneCountry={phoneCountry}
      setPhone={setPhone}
      setPhoneCountry={setPhoneCountry}
    />
  );
};

export const BasicCountryPhoneSelect = CountryPhoneSelectTemplate.bind({});

BasicCountryPhoneSelect.args = {
  phone: '12 123456',
  phoneCountry: {
    active: true,
    code: 'AF',
    code3: 'AFG',
    currencyCode: 'AFN',
    displayName: 'Afghanistan',
    fraudRisk: 10,
    icon: <FlagIcon code="AF" iconScale="small" />,
    label: 'Afghanistan',
    languageCode: 'fa',
    numericCode: '004',
    phoneCode: ['93'],
    region: 'Asia',
    upsCode: null,
    value: 'AF',
    zipRegex: null,
  },
};

BasicCountryPhoneSelect.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A135',
  },
};
