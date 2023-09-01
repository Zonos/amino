import dayjs from 'dayjs';
import styled from 'styled-components';

import { ArrowRightIcon } from '@zonos/amino/icons/ArrowRightIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

import {
  type IDateFilterData,
  type IDateRangeType,
  filterDateRanges,
} from 'src/components/orders/all/OrderFilter/filterReducer';
import { IsAfter } from 'src/components/ui/filters/_DateControls/_IsAfter';
import { IsBeforeOrOn } from 'src/components/ui/filters/_DateControls/_IsBeforeOrOn';
import { IsBetween } from 'src/components/ui/filters/_DateControls/_IsBetween';
import { IsEqualTo } from 'src/components/ui/filters/_DateControls/_IsEqualTo';
import { IsInTheLast } from 'src/components/ui/filters/_DateControls/_IsInTheLast';
import { IsOnOrAfter } from 'src/components/ui/filters/_DateControls/_IsOnOrAfter';
import { Select } from 'src/components/ui/Select';

const ControlsValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space16};

  > svg {
    flex-shrink: 0;
  }
`;

export const DateControlsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: ${theme.space8};
  align-items: center;
`;

export const formatDate = (date: string) => dayjs(date).format('MM/DD/YYYY');

export const defaultDateFormat = `YYYY-MM-DD`;

const optionsDate = filterDateRanges.map(r => ({
  label: r,
  value: r,
}));

export type IDateControlProps = {
  value: IDateFilterData;
  onChange: (value: IDateFilterData) => void;
  onChangeFilterText: (text: string) => void;
};

type IDateControlsProps = {
  rangeType: IDateRangeType;
  value: IDateFilterData;
  onChange: (value: IDateFilterData) => void;
  onChangeFilterText: (text: string) => void;
  setRangeType: (range: IDateRangeType) => void;
};

export const DateControls = ({
  onChange,
  onChangeFilterText,
  rangeType,
  setRangeType,
  value,
}: IDateControlsProps) => {
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
          <IsBeforeOrOn
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

  return (
    <>
      <Select
        isClearable={false}
        onChange={item => {
          setRangeType(item?.value || 'is in the last');
        }}
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
