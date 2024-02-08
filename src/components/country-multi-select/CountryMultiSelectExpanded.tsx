import { type ReactNode, useCallback, useMemo, useState } from 'react';

import clsx from 'clsx';
import groupBy from 'lodash/groupBy';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Collapse } from 'src/components/collapse/Collapse';
import { Divider } from 'src/components/divider/Divider';
import { Text } from 'src/components/text/Text';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { getFuzzySearch } from 'src/utils/getFuzzySearch';

import styles from './CountryMultiSelectExpanded.module.scss';

export type ICountryMultiSelectExpandedOption<
  TCountryCode extends string = string,
> = {
  code: TCountryCode;
  disabled?: boolean;
  /**
   * Key to group by
   */
  group: string;
  icon: ReactNode;
  label: string;
  /**
   * Having this as a ReactNode breaks storybook (and only storybook, it works fine elsewhere) somehow. I have no idea, but it needs to be a function instead...
   * @returns
   */
  rightDecorator?: () => ReactNode;
};

type ICountryMultiSelectExpandedRegion<TCountryCode extends string = string> = {
  countries: ICountryMultiSelectExpandedOption<TCountryCode>[];
  label: string;
};

export type CountryMultiSelectExpandedProps<
  TCountryCode extends string = string,
> = BaseProps & {
  countries: ICountryMultiSelectExpandedOption<TCountryCode>[];
  /**
   * Remove the top header part
   * @default false
   */
  noHeader?: boolean;
  renderToggle?: ReactNode;
  selectedCountries: ICountryMultiSelectExpandedOption<TCountryCode>[];
  /**
   * No search bar
   * @default false
   */
  withoutSearch?: boolean;
  onChange: (
    countries: ICountryMultiSelectExpandedOption<TCountryCode>[],
  ) => void;
};

/**
 * Use the country flags with `flagType: 'amino'` otherwise the flags are slow to load when re-rendering
 */
export const CountryMultiSelectExpanded = <
  TCountryCode extends string = string,
>({
  className,
  countries,
  noHeader = false,
  onChange,
  renderToggle,
  selectedCountries,
  style,
  withoutSearch = false,
}: CountryMultiSelectExpandedProps<TCountryCode>) => {
  const [searchText, setSearchText] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const searchCountries = useCallback(
    (searchTerm: string) => {
      const { fuzzySearch } = getFuzzySearch({
        array: countries,
        options: {
          keys: ['label', 'code', 'group'],
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

  const groups = useMemo(() => {
    const grouped: ICountryMultiSelectExpandedRegion<TCountryCode>[] =
      Object.entries(groupBy(shownCountries, 'group')).map(
        ([group, groupCountries]) => ({
          countries: groupCountries,
          label: group,
        }),
      );

    return grouped.sort((a, b) => a.label.localeCompare(b.label));
  }, [shownCountries]);

  const allSelected = useMemo(
    () =>
      countries.filter(country => !country.disabled).length ===
      selectedCountries.length,
    [countries, selectedCountries.length],
  );

  if (!countries.length) {
    return (
      <div className={clsx(className)}>
        <Text color="textColorSecondary">No countries</Text>
      </div>
    );
  }

  const renderSelector = () => {
    if (!shownCountries.length) {
      return (
        <div className={styles.noCountriesWrapper}>
          <Text color="textColorSecondary">No countries</Text>
        </div>
      );
    }

    return (
      <div className={styles.selectionWrapper}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            checked={allSelected}
            label="Select all"
            onChange={checked => {
              if (checked) {
                onChange(countries.filter(country => !country.disabled));
              } else {
                onChange([]);
              }
            }}
          />
        </div>
        {groups.map(group => {
          const groupSelected = group.countries.every(
            country =>
              country.disabled ||
              selectedCountries.some(x => x.code === country.code),
          );

          const numSelectedInGroup = group.countries.filter(country =>
            selectedCountries.some(x => x.code === country.code),
          ).length;

          const groupCollapsed = !expandedGroups.includes(group.label);

          return (
            <div key={group.label} className={styles.checkboxWrapper}>
              <div className={styles.groupWrapper}>
                <Checkbox
                  checked={groupSelected}
                  label={group.label}
                  onChange={checked => {
                    if (checked) {
                      const newselectedCountries = [
                        ...selectedCountries,
                        ...group.countries.filter(country => !country.disabled),
                      ];

                      onChange(newselectedCountries);
                    } else {
                      const newselectedCountries = selectedCountries.filter(
                        country =>
                          !country.disabled &&
                          !group.countries.some(x => x.code === country.code),
                      );

                      onChange(newselectedCountries);
                    }
                  }}
                />

                <button
                  className={styles.collapseButton}
                  onClick={() => {
                    if (expandedGroups.includes(group.label)) {
                      setExpandedGroups(
                        expandedGroups.filter(x => x !== group.label),
                      );
                    } else {
                      setExpandedGroups([...expandedGroups, group.label]);
                    }
                  }}
                  type="button"
                >
                  <Text color="textColorSecondary">
                    {numSelectedInGroup}/{group.countries.length}
                  </Text>
                  <ChevronDownIcon
                    className={clsx(
                      styles.collapseIcon,
                      groupCollapsed && styles.collapsed,
                    )}
                    size={24}
                  />
                </button>
              </div>

              <Collapse collapsed={groupCollapsed}>
                <div className={styles.countriesWrapper}>
                  {group.countries.map(country => (
                    <Checkbox
                      key={country.code}
                      checked={selectedCountries.some(
                        x => x.code === country.code,
                      )}
                      className={clsx(
                        styles.checkboxWrapper,
                        styles.checkboxCountry,
                      )}
                      disabled={country.disabled}
                      icon={country.icon}
                      label={country.label}
                      labelComponent={
                        <div
                          className={styles.checkboxLabelWrapper}
                          style={{
                            opacity: country.disabled ? 0.5 : 1,
                          }}
                        >
                          <div>
                            {country.icon}
                            {country.label}
                          </div>
                          {country.rightDecorator?.()}
                        </div>
                      }
                      onChange={checked => {
                        if (checked) {
                          onChange([...selectedCountries, country]);
                        } else {
                          onChange(
                            selectedCountries.filter(
                              selectedCountry =>
                                selectedCountry.code !== country.code,
                            ),
                          );
                        }
                      }}
                    />
                  ))}
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={clsx(styles.wrapper, className)} style={style}>
      {!noHeader && (
        <div className={styles.header}>
          <Text type="bold-label">Countries and Regions</Text>
          <Text color="textColorSecondary" type="label">
            {selectedCountries.length} of {countries.length} selected
          </Text>
        </div>
      )}

      <div className={styles.componentWrapper}>
        <div className={styles.componentHeaderWrapper}>
          {!withoutSearch && (
            <label
              className={styles.searchInput}
              htmlFor="country-multi-select-search"
            >
              <SearchIcon size={24} />
              <input
                autoComplete="off"
                id="country-multi-select-search"
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search..."
                type="text"
                value={searchText}
              />
            </label>
          )}

          {renderToggle}
        </div>

        <Divider noMargin />

        {renderSelector()}
      </div>
    </div>
  );
};
