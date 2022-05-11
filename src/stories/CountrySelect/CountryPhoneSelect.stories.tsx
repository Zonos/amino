import React, { useState } from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  CountryPhoneSelect,
  CountryPhoneSelectProps,
} from 'src/components/Select/CountryPhoneSelect';
import { FlagIcon, IFlag } from 'src/icons/FlagIcon/FlagIcon';
import { ICountryOption } from 'src/types/ICountry';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { getCountryUrls } from './getCountryUrls';
import { useCountryOptions } from './useCountryOptions';

const StyledWrapper = styled.div`
  width: 412px;
`;

const CountryPhoneSelectMeta: Meta = {
  title: 'Amino/CountryPhoneSelect',
  component: CountryPhoneSelect,
  decorators: [
    withDesign,
    Component => (
      <StyledWrapper>
        <Component />
      </StyledWrapper>
    ),
  ],
};

export default CountryPhoneSelectMeta;

const CountryPhoneSelectTemplate: Story<
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
  const { countryOptions } = useCountryOptions({
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
    code3: 'AFG',
    code: 'AF',
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
