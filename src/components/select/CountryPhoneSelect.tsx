import { type ReactNode, useCallback, useEffect, useState } from 'react';
import {
  type GroupBase,
  type MenuListProps,
  type Props,
  type SelectComponentsConfig,
  type StylesConfig,
  components as RScomponents,
} from 'react-select';

import styled from 'styled-components';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { Input } from 'src/components/input/Input';
import { InputValuePrefix } from 'src/components/input/input-type/_FloatLabelInput';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { theme } from 'src/styles/constants/theme';
import type { ICountryOption } from 'src/types/ICountry';
import type { IOption } from 'src/types/IOption';

import { Select } from './Select';

const OptionLabel = styled.div`
  display: flex;
`;

const PhoneCodeLabel = styled.div`
  margin-left: 4px;
  color: ${theme.gray700};
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
  Group extends GroupBase<Option>,
>(
  props: MenuListProps<Option, IsMulti, Group>,
) => {
  const { selectProps } = props;
  const { setMenuIsOpen } = selectProps as (typeof props)['selectProps'] &
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
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | 'onChange' | 'value'>,
    HelpTextProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: ICountryOption[];
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  phone: string;
  phoneCountry: ICountryOption | null;
  styles?: StylesConfig<Option, IsMulti, Group>;
  setPhone: (changed: string) => void;
  setPhoneCountry: (changed: ICountryOption | null) => void;
}

const formatOptionLabel = (option: ICountryOption) => (
  <OptionLabel>
    {option.displayName}
    <PhoneCodeLabel>{option.phoneCode.join(', ')}</PhoneCodeLabel>
  </OptionLabel>
);

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
          onChange={e => setPhone(e.target.value)}
          prefix={
            <StyledPrefix onClick={() => setMenuIsOpen(!menuIsOpen)}>
              {icon}
              <ChevronDownIcon size={19} />
            </StyledPrefix>
          }
          value={phone}
          valuePrefix={valuePrefix}
        />
      </StyledInputWrapper>
      <Select
        {...props}
        components={{ Control: () => null, MenuList }}
        formatOptionLabel={formatOptionLabel}
        menuIsOpen={menuIsOpen}
        onBlur={() => setMenuIsOpen(false)}
        onChange={changed => {
          setPhoneCountry(changed);
          setMenuIsOpen(false);
        }}
        options={countryOptions}
        value={phoneCountry}
        {...additionalProps}
      />
    </>
  );
};
