import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';

import groupBy from 'lodash/groupBy';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
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
import { cn } from 'src/utils/cn';
import { getFuzzySearch } from 'src/utils/getFuzzySearch';
import { translateAminoText as translate } from 'src/utils/translations/__amino__/translateAminoText';
import { useCurrentLanguage } from 'src/utils/translations/AminoTranslationStore';

/**
 * Represents a group of countries within a geographical region.
 */
type CountryMultiSelectExpandedRegion<CountryCode extends string = string> = {
  /**
   * List of countries that belong to this region
   */
  countries: CountryMultiSelectExpandedOption<CountryCode>[];
  /**
   * Display name of the region
   */
  label: string;
};

export type CountryMultiSelectExpandedProps<
  CountryCode extends string = string,
> = BaseProps &
  HelpTextProps & {
    /**
     * Optional actions to display in the component header
     */
    actions?: ReactNode;
    /**
     * Keep all groups permanently expanded and hide collapse/expand controls
     * @default false
     */
    alwaysExpand?: boolean;
    /**
     * Array of country options to display in the select
     */
    countries: CountryMultiSelectExpandedOption<CountryCode>[];
    /**
     * Class name to apply to the country component. (where checkbox, flag icon and label are )
     * @default undefined
     */
    countryComponentClassName?: string;
    /**
     * Whether the component is in a disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Height of the component in pixels. If provided, height will be fixed.
     * @default undefined
     */
    height?: number;
    /**
     * Whether to hide the "Select all" checkbox
     * @default false
     */
    hideSelectAll?: boolean;
    /**
     * Maximum height of the country selection area in pixels
     * @default 380
     */
    maxHeight?: number;
    /**
     * Whether to hide the component header
     * @default false
     */
    noHeader?: boolean;
    /**
     * Handler called when selection changes
     * @param countries Array of country options that are selected
     */
    onChange: (
      countries: CountryMultiSelectExpandedOption<CountryCode>[],
    ) => void;
    /**
     * Array of country options that are currently selected
     */
    selectedCountries: CountryMultiSelectExpandedOption<CountryCode>[];
    /**
     * Whether to hide the search functionality
     * @default false
     */
    withoutSearch?: boolean;
  };

/**
 * An expanded view component for selecting multiple countries, organized by regions.
 * Features include search functionality, group selection, and individual country selection.
 *
 * @example Basic usage
 * ```tsx
 * const [selectedCountries, setSelectedCountries] = useState<CountryMultiSelectExpandedOption[]>([]);
 * const countries = [
 *   {
 *     code: 'US',
 *     group: 'North America',
 *     icon: <FlagIcon code="US" />,
 *     label: 'United States'
 *   },
 *   {
 *     code: 'CA',
 *     group: 'North America',
 *     icon: <FlagIcon code="CA" />,
 *     label: 'Canada'
 *   }
 * ];
 *
 * <CountryMultiSelectExpanded
 *   countries={countries}
 *   onChange={setSelectedCountries}
 *   selectedCountries={selectedCountries}
 * />
 * ```
 *
 * @example With disabled countries
 * ```tsx
 * const countries = [
 *   {
 *     code: 'US',
 *     group: 'North America',
 *     icon: <FlagIcon code="US" />,
 *     label: 'United States'
 *   },
 *   {
 *     code: 'CA',
 *     disabled: true,
 *     group: 'North America',
 *     icon: <FlagIcon code="CA" />,
 *     label: 'Canada'
 *   }
 * ];
 *
 * <CountryMultiSelectExpanded
 *   countries={countries}
 *   onChange={setSelectedCountries}
 *   selectedCountries={selectedCountries}
 * />
 * ```
 *
 * @example With custom actions
 * ```tsx
 * <CountryMultiSelectExpanded
 *   actions={
 *     <Button onClick={() => console.log('Custom action')} size="small">
 *       Custom Action
 *     </Button>
 *   }
 *   countries={countries}
 *   onChange={setSelectedCountries}
 *   selectedCountries={selectedCountries}
 * />
 * ```
 *
 * @example With error state
 * ```tsx
 * <CountryMultiSelectExpanded
 *   countries={countries}
 *   error={!selectedCountries.length}
 *   helpText={!selectedCountries.length ? 'At least one country is required' : undefined}
 *   onChange={setSelectedCountries}
 *   selectedCountries={selectedCountries}
 * />
 * ```
 */
export const CountryMultiSelectExpanded = <
  CountryCode extends string = string,
>({
  actions,
  alwaysExpand = false,
  className,
  countries,
  countryComponentClassName,
  disabled = false,
  error = false,
  height,
  helpText,
  hideSelectAll = false,
  maxHeight = 380,
  noHeader = false,
  onChange,
  selectedCountries,
  style: styleProps,
  withoutSearch = false,
}: CountryMultiSelectExpandedProps<CountryCode>) => {
  const id = useId();
  const languageCode = useCurrentLanguage();

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

  useEffect(() => {
    if (alwaysExpand) {
      setExpandedGroups(groups.map(group => group.label));
    }
  }, [groups, alwaysExpand]);

  if (!sortedCountries.length) {
    return (
      <div
        className={cn(className)}
        style={{
          height: height ? `${height}px` : undefined,
          maxHeight: `${maxHeight}px`,
        }}
      >
        <Text color="textColorSecondary">
          <Translate text="No countries" />
        </Text>
      </div>
    );
  }

  const numSelectableCountries = sortedCountries.filter(
    country => !country.disabled,
  ).length;

  const renderSelector = () => {
    if (!shownCountries.length) {
      return (
        <div
          className="p-amino-8"
          style={{
            height: height ? `${height}px` : undefined,
            maxHeight: `${maxHeight}px`,
          }}
        >
          <Text color="textColorSecondary">
            <Translate text="No countries" />
          </Text>
        </div>
      );
    }

    return (
      <div
        className="flex flex-col gap-amino-2 overflow-y-auto"
        style={{
          height: height ? `${height}px` : undefined,
          maxHeight: `${maxHeight}px`,
        }}
      >
        {!searchText && !hideSelectAll && (
          <div className="w-full p-amino-8 flex flex-col">
            <Checkbox
              checked={allSelected}
              label={translate({ languageCode, text: 'Select all' })}
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
              <div className="p-amino-8 w-full flex justify-between items-center gap-amino-8 rounded-amino-6 hover:bg-hover">
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

                {!alwaysExpand && (
                  <button
                    className="flex-grow cursor-pointer flex justify-end items-center gap-amino-8 focus:outline-none"
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
                      className={cn(
                        'transition-amino',
                        groupCollapsed && 'rotate-180',
                      )}
                      size={24}
                    />
                  </button>
                )}
              </div>

              <Collapse collapsed={groupCollapsed}>
                <div className="pl-amino-24 grid gap-amino-8 [grid-template-columns:repeat(auto-fit,minmax(min(50%,max(300px,33.333%)),1fr))]">
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
                        className={countryComponentClassName}
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
      className={cn(
        'flex flex-col gap-amino-12',
        disabled &&
          'opacity-amino-disabled cursor-not-allowed [&>*]:pointer-events-none',
        className,
      )}
      style={styleProps}
    >
      {!noHeader && (
        <div className="flex justify-between">
          <Text type="bold-label">
            <Translate text="Countries and Regions" />
          </Text>
          <Text color="textColorSecondary" type="label">
            <Translate
              text="[selectedCountries] of [numSelectableCountries] selected"
              variables={{
                numSelectableCountries: numSelectableCountries,
                selectedCountries: selectedCountries.length,
              }}
            />
          </Text>
        </div>
      )}

      <HelpText error={error} helpText={helpText} withoutMargin />

      <div
        className={cn(
          'border border-amino rounded-amino-12 p-amino-8 flex flex-col gap-amino-4',
          error && 'border-danger',
        )}
      >
        <div className="flex justify-between items-center gap-amino-8">
          {!withoutSearch && (
            <label
              className="p-amino-8 py-amino-4 flex items-center gap-amino-8 flex-grow"
              htmlFor={id}
            >
              <SearchIcon size={24} />
              <input
                autoComplete="off"
                className="flex-grow px-amino-4 bg-amino-input-background focus:outline-none"
                id={id}
                onChange={e => setSearchText(e.target.value)}
                placeholder={translate({
                  languageCode,
                  text: 'Search...',
                })}
                type="text"
                value={searchText}
              />
              {searchText && (
                <Button
                  className="w-amino-24 h-amino-24"
                  icon={<RemoveCircleIcon size={24} />}
                  onClick={() => setSearchText('')}
                  size="sm"
                  variant="text"
                />
              )}
            </label>
          )}

          {actions && <div className="py-amino-4">{actions}</div>}
        </div>

        {(!!actions || !withoutSearch) && <Divider noMargin />}

        {renderSelector()}
      </div>
    </div>
  );
};
