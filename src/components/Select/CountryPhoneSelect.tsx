import React, { ReactNode, useState } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import styled from 'styled-components';

import { Input } from 'components/Input';
import { ChevronDownIcon } from 'icons';
import {
  CountryIcon,
  ICountryCode,
  ICountryIconScale,
} from 'icons/country/CountryIcon';

import { CountrySelect } from './CountrySelect';
import { ICountryOption } from './ICountry';
import { IOption } from './StyledReactSelect';

export interface CountryPhoneSelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    Props<Option, IsMulti, Group>,
    'isMulti' | 'onChange' | 'value'
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: ICountryOption[];
  hasGroups?: boolean;
  icon?: ReactNode;
  iconScale?: ICountryIconScale;
  label?: string;
  phone: string;
  phoneCountry: ICountryOption | null;
  setPhone: (changed: string) => void;
  setPhoneCountry: (changed: ICountryOption | null) => void;
  styles?: StylesConfig<Option, IsMulti, Group>;
}

const OptionLabel = styled.div`
  display: flex;
`;

const PhoneCodeLabel = styled.div`
  margin-left: 4px;
  color: var(--amino-gray-d20);
`;

const StyledPrefix = styled.div`
  display: flex;
  align-items: center;

  svg {
    border-radius: 2px;
  }
`;

export const CountryPhoneSelect = ({
  countryOptions,
  iconScale = 'medium',
  label = 'Phone number',
  phone,
  phoneCountry,
  setPhone,
  setPhoneCountry,
  ...props
}: CountryPhoneSelectProps<ICountryOption>) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Input
        label={label}
        prefix={<div>pre</div>}
        onChange={e => setPhone(e.target.value)}
        value={phone}
      />
      <Input
        label={label}
        prefix={
          <StyledPrefix onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <CountryIcon
              code={(phoneCountry?.code as ICountryCode) || 'Default'}
              scale={iconScale}
            />
            <ChevronDownIcon size={19} />
          </StyledPrefix>
        }
        onChange={e => setPhone(e.target.value)}
        value={phone}
      />
      <CountrySelect
        {...props}
        components={{ Control: () => null }}
        countryOptions={countryOptions}
        formatOptionLabel={option => (
          <OptionLabel>
            {option.displayName}
            <PhoneCodeLabel>{option.phoneCode.join(', ')}</PhoneCodeLabel>
          </OptionLabel>
        )}
        menuIsOpen={menuIsOpen}
        onBlur={() => setMenuIsOpen(false)}
        onChange={setPhoneCountry}
        value={phoneCountry}
      />
    </div>
  );
};
