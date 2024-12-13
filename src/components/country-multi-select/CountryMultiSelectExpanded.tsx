import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';

import clsx from 'clsx';
import groupBy from 'lodash/groupBy';

import { Button } from 'src/components/button/Button';
import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Collapse } from 'src/components/collapse/Collapse';
import type { CountryMultiSelectExpandedOption } from 'src/components/country-multi-select/CountryMultiSelectExpandedOption';
import { _CountryMultiSelectExpandedOptionComponent } from 'src/components/country-multi-select/CountryMultiSelectExpandedOption';
import { Divider } from 'src/components/divider/Divider';
import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { Text } from 'src/components/text/Text';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { getFuzzySearch } from 'src/utils/getFuzzySearch';

import styles from './CountryMultiSelectExpanded.module.scss';

type CountryMultiSelectExpandedRegion<CountryCode extends string = string> = {
  countries: CountryMultiSelectExpandedOption<CountryCode>[];
  label: string;
};

export type CountryMultiSelectExpandedProps<
  CountryCode extends string = string,
> = BaseProps &
  HelpTextProps & {
    actions?: ReactNode;
    countries: CountryMultiSelectExpandedOption<CountryCode>[];
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default 380
     */
    maxHeight?: number;
    /**
     * Remove the top header part
     * @default false
     */
    noHeader?: boolean;
    onChange: (
      countries: CountryMultiSelectExpandedOption<CountryCode>[],
    ) => void;
    selectedCountries: CountryMultiSelectExpandedOption<CountryCode>[];
    /**
     * No search bar
     * @default false
     */
    withoutSearch?: boolean;
  };

export const CountryMultiSelectExpanded = <
  CountryCode extends string = string,
>({
  actions,
  className,
  countries,
  disabled = false,
  error = false,
  helpText,
  maxHeight = 380,
  noHeader = false,
  onChange,
  selectedCountries,
  style,
  withoutSearch = false,
}: CountryMultiSelectExpandedProps<CountryCode>) => {
  const id = useId();

  const [searchText, setSearchText] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const sortedCountries = useMemo(
    () => countries.sort((a, b) => a.label.localeCompare(b.label)),
    [countries],
  );

  const searchCountries = useCallback(
    (searchTerm: string) => {
      const { fuzzySearch } = getFuzzySearch({
        array: sortedCountries,
        options: {
          keys: ['label', 'code', 'group'],
          threshold: 0.1,
        },
      });

      return fuzzySearch.search(searchTerm);
    },
    [sortedCountries],
  );

  const shownCountries: CountryMultiSelectExpandedOption<CountryCode>[] =
    useMemo(() => {
      if (searchText === '') {
        return sortedCountries;
      }

      const results = searchCountries(searchText);
      return results.map(x => x.item);
    }, [sortedCountries, searchCountries, searchText]);

  const groups = useMemo(() => {
    const grouped: CountryMultiSelectExpandedRegion<CountryCode>[] =
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
      sortedCountries.filter(country => !country.disabled).length ===
      selectedCountries.length,
    [sortedCountries, selectedCountries.length],
  );

  useEffect(() => {
    // Expand all groups when searching
    if (searchText) {
      setExpandedGroups(groups.map(group => group.label));
    }
  }, [groups, searchText]);

  if (!sortedCountries.length) {
    return (
      <div className={clsx(className)}>
        <Text color="textColorSecondary">No countries</Text>
      </div>
    );
  }

  const numSelectableCountries = sortedCountries.filter(
    country => !country.disabled,
  ).length;

  const renderSelector = () => {
    if (!shownCountries.length) {
      return (
        <div className={styles.noCountriesWrapper}>
          <Text color="textColorSecondary">No countries</Text>
        </div>
      );
    }

    return (
      <div
        className={styles.selectionWrapper}
        style={{
          maxHeight: `${maxHeight}px`,
        }}
      >
        {!searchText && (
          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={allSelected}
              label="Select all"
              onChange={checked => {
                if (checked) {
                  onChange(
                    sortedCountries.filter(country => !country.disabled),
                  );
                } else {
                  onChange([]);
                }
              }}
            />
          </div>
        )}
        {groups.map(group => {
          const numSelectedInGroup = group.countries.filter(country =>
            selectedCountries.some(x => x.code === country.code),
          ).length;

          const numSelectableInGroup = group.countries.filter(
            country => !country.disabled,
          ).length;

          const groupSelected =
            !!numSelectableInGroup &&
            group.countries.every(
              country =>
                country.disabled ||
                selectedCountries.some(x => x.code === country.code),
            );

          const groupCollapsed = !expandedGroups.includes(group.label);

          return (
            <div key={group.label}>
              <div className={clsx(styles.groupWrapper, styles.hoverWrapper)}>
                <Checkbox
                  checked={groupSelected}
                  disabled={!numSelectableInGroup}
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
                    {numSelectedInGroup}/{numSelectableInGroup}
                  </Text>
                  <ChevronUpIcon
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
                  {group.countries.map(country => {
                    const isChecked = selectedCountries.some(
                      x => x.code === country.code,
                    );

                    const onChangeCountry = (checked: boolean) => {
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
                    };

                    return (
                      <_CountryMultiSelectExpandedOptionComponent
                        key={country.code}
                        country={country}
                        isChecked={isChecked}
                        onChange={onChangeCountry}
                      ></_CountryMultiSelectExpandedOptionComponent>
                    );
                  })}
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={clsx(styles.wrapper, className, disabled && styles.disabled)}
      style={style}
    >
      {!noHeader && (
        <div className={styles.header}>
          <Text type="bold-label">Countries and Regions</Text>
          <Text color="textColorSecondary" type="label">
            {selectedCountries.length} of {numSelectableCountries} selected
          </Text>
        </div>
      )}

      <HelpText error={error} helpText={helpText} withoutMargin />

      <div className={clsx(styles.componentWrapper, error && 'error')}>
        <div className={styles.componentHeaderWrapper}>
          {!withoutSearch && (
            <label className={styles.searchInput} htmlFor={id}>
              <SearchIcon size={24} />
              <input
                autoComplete="off"
                id={id}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search..."
                type="text"
                value={searchText}
              />
              {searchText && (
                <Button
                  icon={<RemoveCircleIcon size={24} />}
                  onClick={() => setSearchText('')}
                  variant="text"
                />
              )}
            </label>
          )}

          {actions && <div className={styles.headerActions}>{actions}</div>}
        </div>

        {(!!actions || !withoutSearch) && <Divider noMargin />}

        {renderSelector()}
      </div>
    </div>
  );
};
