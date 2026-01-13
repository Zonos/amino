import { type KeyboardEvent, useMemo, useState } from 'react';

import { IsAfter } from 'src/components/filter/filter-date/_DateControls/_IsAfter';
import { IsBefore } from 'src/components/filter/filter-date/_DateControls/_IsBefore';
import { IsBeforeOrOn } from 'src/components/filter/filter-date/_DateControls/_IsBeforeOrOn';
import { IsBetween } from 'src/components/filter/filter-date/_DateControls/_IsBetween';
import { IsEqualTo } from 'src/components/filter/filter-date/_DateControls/_IsEqualTo';
import { IsInTheLast } from 'src/components/filter/filter-date/_DateControls/_IsInTheLast';
import { IsOnOrAfter } from 'src/components/filter/filter-date/_DateControls/_IsOnOrAfter';
import {
  type FilterDateData,
  type FilterDateRangeType,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import { Select } from 'src/components/select/Select';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption } from 'src/types/SelectOption';
import { translateAminoText as translate } from 'src/utils/translations/__amino__/translateAminoText';
import { useCurrentLanguage } from 'src/utils/translations/AminoTranslationStore';

import styles from './DateControls.module.scss';

type DateControlProps = BaseProps & {
  onChange: (value: FilterDateData) => void;
  onChangeFilterText: (text: string) => void;
  rangeType: FilterDateRangeType;
  setRangeType: (range: FilterDateRangeType) => void;
  value: FilterDateData;
};

export const DateControls = ({
  onChange,
  onChangeFilterText,
  rangeType,
  setRangeType,
  value,
}: DateControlProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const languageCode = useCurrentLanguage();
  const optionsDate: SelectOption<FilterDateRangeType>[] = useMemo(
    () => [
      {
        label: translate({ languageCode, text: 'is in the last' }),
        value: 'is in the last',
      },
      {
        label: translate({ languageCode, text: 'is equal to' }),
        value: 'is equal to',
      },
      {
        label: translate({ languageCode, text: 'is after' }),
        value: 'is after',
      },
      {
        label: translate({ languageCode, text: 'is before' }),
        value: 'is before',
      },
      {
        label: translate({ languageCode, text: 'is between' }),
        value: 'is between',
      },
      {
        label: translate({ languageCode, text: 'is on or after' }),
        value: 'is on or after',
      },
      {
        label: translate({ languageCode, text: 'is before or on' }),
        value: 'is before or on',
      },
    ],
    [languageCode],
  );

  const renderRangeControl = () => {
    switch (rangeType) {
      case 'is in the last':
        return (
          <IsInTheLast
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is equal to':
        return (
          <IsEqualTo
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is after':
        return (
          <IsAfter
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is before':
        return (
          <IsBefore
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is between':
        return (
          <IsBetween
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is on or after':
        return (
          <IsOnOrAfter
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is before or on':
        return (
          <IsBeforeOrOn
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      default:
        return (
          <IsEqualTo
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  return (
    <>
      <Select
        isClearable={false}
        onChange={item => {
          setRangeType(item?.value || initialFilterDateState.dateRangeType);
        }}
        onKeyDown={handleKeyDown}
        onMenuClose={() => setMenuOpen(false)}
        onMenuOpen={() => setMenuOpen(true)}
        options={optionsDate}
        size="sm"
        value={optionsDate.filter(item => item.value === rangeType)}
      />
      <div className={styles.controlsValueWrapper}>
        <ArrowRightIcon color="blue600" />
        {renderRangeControl()}
      </div>
    </>
  );
};
