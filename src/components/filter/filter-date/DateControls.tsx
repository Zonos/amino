import { type KeyboardEvent, useState } from 'react';

import styled from 'styled-components';

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
  filterDateRanges,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import { Select } from 'src/components/select/Select';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import { theme } from 'src/styles/constants/theme';

const ControlsValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space16};

  > svg {
    flex-shrink: 0;
  }
`;

const optionsDate = filterDateRanges.map(r => ({
  label: r,
  value: r,
}));

type DateControlProps = {
  rangeType: FilterDateRangeType;
  value: FilterDateData;
  onChange: (value: FilterDateData) => void;
  onChangeFilterText: (text: string) => void;
  setRangeType: (range: FilterDateRangeType) => void;
};

export const DateControl = ({
  onChange,
  onChangeFilterText,
  rangeType,
  setRangeType,
  value,
}: DateControlProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <ControlsValueWrapper>
        <ArrowRightIcon color="blue600" />
        {renderRangeControl()}
      </ControlsValueWrapper>
    </>
  );
};
