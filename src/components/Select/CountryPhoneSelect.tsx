import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import {
  components as RScomponents,
  GroupBase,
  MenuListProps,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { type HelpTextProps } from 'src/components/HelpText/HelpText';
import { Input } from 'src/components/Input/Input';
import { InputValuePrefix } from 'src/components/Input/InputType/FloatLabelInput';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ICountryOption } from 'src/types/ICountry';
import styled from 'styled-components';

import { Select } from './Select';
import { IOption } from './StyledReactSelect';

const OptionLabel = styled.div`
  display: flex;
`;

const PhoneCodeLabel = styled.div`
  margin-left: 4px;
  color: var(--amino-gray-d20);
`;

const StyledPrefix = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    border-radius: 2px;

    &:last-child {
      z-index: 1;
      position: absolute;
      top: -2px;
      left: 20px;
    }
  }
`;

const StyledInputWrapper = styled.div`
  [data-label]::before {
    left: 60px;
  }
  ${InputValuePrefix} {
    padding-left: 14px;
  }
`;

type AdditionalProps = {
  setMenuIsOpen: (isOpen: boolean) => void;
};

const MenuList = <
  Option extends IOption,
  IsMulti extends false,
  Group extends GroupBase<Option>
>(
  props: MenuListProps<Option, IsMulti, Group>
) => {
  const { selectProps } = props;
  const { setMenuIsOpen } = selectProps as typeof props['selectProps'] &
    AdditionalProps;
  const handleOutsideClick = useCallback(() => {
    setMenuIsOpen(false);
  }, [setMenuIsOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);
  return <RScomponents.MenuList {...props} />;
};

export interface CountryPhoneSelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | 'onChange' | 'value'>,
    HelpTextProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: ICountryOption[];
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  phone: string;
  phoneCountry: ICountryOption | null;
  setPhone: (changed: string) => void;
  setPhoneCountry: (changed: ICountryOption | null) => void;
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const CountryPhoneSelect = ({
  countryOptions,
  icon,
  label = 'Phone number',
  phone,
  phoneCountry,
  setPhone,
  setPhoneCountry,
  ...props
}: CountryPhoneSelectProps<ICountryOption>) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const additionalProps: AdditionalProps = {
    setMenuIsOpen,
  };
  const valuePrefix = phoneCountry?.phoneCode
    ? `+${phoneCountry?.phoneCode}`
    : undefined;
  return (
    <>
      <StyledInputWrapper>
        <Input
          label={label}
          prefix={
            <StyledPrefix onClick={() => setMenuIsOpen(!menuIsOpen)}>
              {icon}
              <ChevronDownIcon size={19} />
            </StyledPrefix>
          }
          onChange={e => setPhone(e.target.value)}
          valuePrefix={valuePrefix}
          value={phone}
        />
      </StyledInputWrapper>
      <Select
        {...props}
        components={{ Control: () => null, MenuList }}
        options={countryOptions}
        formatOptionLabel={option => (
          <OptionLabel>
            {option.displayName}
            <PhoneCodeLabel>{option.phoneCode.join(', ')}</PhoneCodeLabel>
          </OptionLabel>
        )}
        menuIsOpen={menuIsOpen}
        onBlur={() => setMenuIsOpen(false)}
        onChange={changed => {
          setPhoneCountry(changed);
          setMenuIsOpen(false);
        }}
        value={phoneCountry}
        {...additionalProps}
      />
    </>
  );
};
