import { type Dispatch, useEffect, useMemo, useState } from 'react';

import type { IFilter } from 'src/components/orders/all/OrderFilter/filterReducer';
import { CountrySelect } from 'src/components/ui/CountrySelect';
import {
  type IBaseBadgeFilterProps,
  useFilter,
} from 'src/components/ui/filters/useFilter';
import { useCountries } from 'src/hooks/useCountries';

type IBadgeFilterCountrySelectProps = {
  dispatch: Dispatch<string | null>;
  filter: IFilter;
} & IBaseBadgeFilterProps;

export const BadgeFilterCountrySelect = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: IBadgeFilterCountrySelectProps) => {
  const countries = useCountries();

  const [editingCountryCode, setEditingCountryCode] = useState<string | null>(
    filter.destinationCountry,
  );
  const editingCountryDisplayName = useMemo(
    () =>
      countries.find(x => x.code === editingCountryCode)?.displayName || null,
    [countries, editingCountryCode],
  );

  const handleApply = () => {
    dispatch(editingCountryDisplayName);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      setEditingCountryCode(null);
      dispatch(null);
    } else {
      dispatch(editingCountryDisplayName);
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
    dropdownTitle,
    filterExists: !!filter.destinationCountry,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    setFilterText(`is ${editingCountryDisplayName || ''}`);
  }, [setFilterText, editingCountryDisplayName]);

  return renderWrapper(
    <CountrySelect
      countryOptions={countries}
      label="Destination country"
      onChange={option => setEditingCountryCode(option?.code || null)}
      placeholder="Select destination country"
      value={editingCountryCode}
    />,
  );
};
