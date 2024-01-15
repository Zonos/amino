import { type ReactNode, useCallback, useEffect, useState } from 'react';
import {
  type GroupBase,
  type MenuListProps,
  type Props,
  type SelectComponentsConfig,
  type StylesConfig,
  components as RScomponents,
} from 'react-select';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { CountryOption } from 'src/types/Country';
import type { SelectOption } from 'src/types/SelectOption';

import styles from './CountryPhoneSelect.module.scss';

type AdditionalProps = {
  setMenuIsOpen: (isOpen: boolean) => void;
};

const MenuList = <
  Option extends SelectOption,
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

export type CountryPhoneSelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = BaseProps & {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: CountryOption[];
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  phone: string;
  phoneCountry: CountryOption | null;
  styles?: StylesConfig<Option, IsMulti, Group>;
  setPhone: (changed: string) => void;
  setPhoneCountry: (changed: CountryOption | null) => void;
} & Omit<Props<Option, IsMulti, Group>, 'isMulti' | 'onChange' | 'value'> &
  HelpTextProps;

const formatOptionLabel = (option: CountryOption) => (
  <div className={styles.optionLabel}>
    {option.displayName}
    <div className={styles.phoneCodeLabel}>{option.phoneCode.join(', ')}</div>
  </div>
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
}: CountryPhoneSelectProps<CountryOption>) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const additionalProps: AdditionalProps = {
    setMenuIsOpen,
  };
  const valuePrefix = phoneCountry?.phoneCode
    ? `+${phoneCountry?.phoneCode}`
    : undefined;

  return (
    <>
      <div className={styles.styledInputWrapper}>
        <Input
          label={label}
          onChange={e => setPhone(e.target.value)}
          prefix={
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              className={styles.styledPrefix}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              role="button"
              tabIndex={0}
            >
              {icon}
              <ChevronDownIcon size={19} />
            </div>
          }
          value={phone}
          valuePrefix={valuePrefix}
        />
      </div>
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
