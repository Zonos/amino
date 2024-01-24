import { type ReactNode, useMemo } from 'react';
import { type ListChildComponentProps, FixedSizeList } from 'react-window';

import clsx from 'clsx';
import groupBy from 'lodash/groupBy';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './CountryMultiSelectExpanded.module.scss';

const LIST_PADDING = 24;

type IVirtualContext<TCountryCode extends string = string> =
  CountryMultiSelectExpandedProps<TCountryCode> & {
    allSelected: boolean;
    flattenedItems: (
      | ICountryMultiSelectExpandedOption<TCountryCode>
      | ICountryMultiSelectExpandedRegion<TCountryCode>
      | null
    )[];
  };

const Row = <TCountryCode extends string = string>({
  data,
  index,
  style: baseStyle,
}: ListChildComponentProps<IVirtualContext<TCountryCode>>) => {
  const {
    allSelected,
    countries,
    flattenedItems: flattened,
    onChange,
    selectedCountries,
  } = data;

  const style = {
    ...baseStyle,
    height:
      typeof baseStyle.height === 'number'
        ? baseStyle.height - LIST_PADDING
        : `calc(${baseStyle.height} - ${LIST_PADDING}px)`,
    left:
      typeof baseStyle.left === 'number'
        ? baseStyle.left + LIST_PADDING
        : `calc(${baseStyle.left} + ${LIST_PADDING}px)`,
    top:
      typeof baseStyle.top === 'number'
        ? baseStyle.top + LIST_PADDING
        : `calc(${baseStyle.top} + ${LIST_PADDING}px)`,
    width:
      typeof baseStyle.width === 'number'
        ? baseStyle.width - LIST_PADDING
        : `calc(${baseStyle.width} - ${LIST_PADDING}px)`,
  };

  // Select all
  if (index === 0) {
    return (
      <Checkbox
        key="select-all"
        checked={allSelected}
        className={styles.checkbox}
        label="Select all"
        onChange={checked => {
          if (checked) {
            onChange(countries.filter(country => !country.disabled));
          } else {
            onChange([]);
          }
        }}
        style={style}
      />
    );
  }

  const entry = flattened[index];
  if (!entry) return null;

  // Region
  if ('countries' in entry) {
    const region = entry;

    if (!region.countries.length) return null;

    const regionSelected = region.countries.every(
      country =>
        country.disabled ||
        selectedCountries.some(x => x.code === country.code),
    );

    return (
      <Checkbox
        key={region.label}
        checked={regionSelected}
        className={styles.checkbox}
        label={region.label}
        onChange={checked => {
          if (checked) {
            const newselectedCountries = [
              ...selectedCountries,
              ...region.countries.filter(country => !country.disabled),
            ];

            onChange(newselectedCountries);
          } else {
            const newselectedCountries = selectedCountries.filter(
              country =>
                !country.disabled &&
                !region.countries.some(x => x.code === country.code),
            );

            onChange(newselectedCountries);
          }
        }}
        style={style}
      />
    );
  }

  // Country
  const country = entry;

  return (
    <Checkbox
      key={country.code}
      checked={selectedCountries.some(x => x.code === country.code)}
      className={clsx(styles.checkboxCountry, styles.checkbox)}
      disabled={country.disabled}
      icon={country.icon}
      label={country.label}
      labelComponent={
        <div
          className={styles.checkboxLabelWrapper}
          style={{
            opacity: country.disabled ? 0.5 : 1,
            paddingRight: LIST_PADDING * 2,
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
              selectedCountry => selectedCountry.code !== country.code,
            ),
          );
        }
      }}
      style={style}
    />
  );
};

export type ICountryMultiSelectExpandedOption<
  TCountryCode extends string = string,
> = {
  code: TCountryCode;
  disabled?: boolean;
  icon: ReactNode;
  label: string;
  region: string;
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
  selectedCountries: ICountryMultiSelectExpandedOption<TCountryCode>[];
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
  onChange,
  selectedCountries,
  style,
}: CountryMultiSelectExpandedProps<TCountryCode>) => {
  const flattenedItems = useMemo(() => {
    const regions: ICountryMultiSelectExpandedRegion<TCountryCode>[] =
      Object.entries(groupBy(countries, 'region')).map(
        ([region, regionCountries]) => ({
          countries: regionCountries,
          label: region,
        }),
      );

    // Need to flatten the regions array to pass to FixedSizeList
    // First item is the "Select all" checkbox
    const flattened = [
      null,
      ...regions.flatMap(region => [region, ...region.countries]),
    ];

    return flattened;
  }, [countries]);

  const allSelected = useMemo(
    () =>
      countries.filter(country => !country.disabled).length ===
      selectedCountries.length,
    [countries, selectedCountries.length],
  );

  if (!countries.length) {
    return (
      <div className={clsx(className, styles.virtualList)}>
        <Text color="textColorSecondary">No countries</Text>
      </div>
    );
  }

  return (
    <FixedSizeList<IVirtualContext<TCountryCode>>
      className={clsx(className, styles.virtualList)}
      height={360}
      itemCount={flattenedItems.length}
      itemData={{
        allSelected,
        countries,
        flattenedItems,
        onChange,
        selectedCountries,
      }}
      itemSize={40}
      overscanCount={10}
      style={style}
      width="100%"
    >
      {Row<TCountryCode>}
    </FixedSizeList>
  );
};
