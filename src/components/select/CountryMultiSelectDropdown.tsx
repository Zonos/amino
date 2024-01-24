import { useCallback, useMemo, useRef, useState } from 'react';

import { Button } from 'src/components/button/Button';
import { Input } from 'src/components/input/Input';
import {
  type CountryMultiSelectExpandedProps,
  type ICountryMultiSelectExpandedOption,
  CountryMultiSelectExpanded,
} from 'src/components/select/CountryMultiSelectExpanded';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { getFuzzySearch } from 'src/utils/getFuzzySearch';
import { useDropdown } from 'src/utils/hooks/useDropdown';

import styles from './CountryMultiSelectDropdown.module.scss';

export type CountryMultiSelectDropdownProps<
  TCountryCode extends string = string,
> = CountryMultiSelectExpandedProps<TCountryCode> & {
  isOpen?: boolean;
};

export const CountryMultiSelectDropdown = <
  TCountryCode extends string = string,
>({
  className,
  countries,
  isOpen = false,
  onChange,
  selectedCountries,
  style,
}: CountryMultiSelectDropdownProps<TCountryCode>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState('');

  const { floatingStyles, refs, setVisible, visibility, visible, wrapperRef } =
    useDropdown<HTMLDivElement, HTMLDivElement>({
      offsetCrossAxis: 0,
      offsetMainAxis: 5,
      startOpen: isOpen,
    });

  const searchCountries = useCallback(
    (searchTerm: string) => {
      const { fuzzySearch } = getFuzzySearch({
        array: countries,
        options: {
          keys: ['label', 'code'],
          threshold: 0.1,
        },
      });

      return fuzzySearch.search(searchTerm);
    },
    [countries],
  );

  const shownCountries: ICountryMultiSelectExpandedOption<TCountryCode>[] =
    useMemo(() => {
      if (searchText === '') {
        return countries;
      }

      const results = searchCountries(searchText);
      return results.map(x => x.item);
    }, [countries, searchCountries, searchText]);

  const renderSelected = () => {
    if (!selectedCountries.length) {
      return null;
    }

    return (
      <div className={styles.prefixContainer}>
        {selectedCountries.map(country => (
          <button
            key={country.code}
            className={styles.prefixTag}
            onClick={e => {
              e.stopPropagation();
              onChange(selectedCountries.filter(x => x.code !== country.code));
            }}
            type="button"
          >
            {country.icon}
            <p>{country.label}</p>
            <RemoveIcon size={20} />
          </button>
        ))}
      </div>
    );
  };

  const renderLabel = () => {
    if (!selectedCountries.length) {
      return 'Select countries';
    }

    return `Select countries (${selectedCountries.length} selected)`;
  };

  const handleToggle = () => {
    setVisible(!visible);
    if (document.activeElement !== inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <div ref={wrapperRef} className={className} style={style}>
      <div
        ref={refs.setReference}
        className={styles.triggerWrapper}
        onClick={handleToggle}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleToggle();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Input
          autoComplete="off"
          className={styles.styledInput}
          inputPrefix={renderSelected()}
          inputRef={inputRef}
          inputSuffix="dog"
          label={renderLabel()}
          onChange={e => setSearchText(e.target.value)}
          suffix={
            <div className={styles.suffixActions} tabIndex={-1}>
              {!!selectedCountries.length && (
                <Button
                  icon={<RemoveCircleIcon />}
                  onClick={() => onChange([])}
                  variant="text"
                />
              )}
              <div className="select-icon">
                <ChevronUpIcon size={20} />
                <ChevronDownIcon size={20} />
              </div>
            </div>
          }
          type="text"
          value={searchText}
        />
      </div>

      <div
        ref={refs.setFloating}
        className={styles.dropdownWrapper}
        style={{
          ...floatingStyles,
          visibility,
        }}
      >
        {visible && (
          <CountryMultiSelectExpanded
            countries={shownCountries}
            onChange={onChange}
            selectedCountries={selectedCountries}
          />
        )}
      </div>
    </div>
  );
};
