import cloneDeep from 'lodash/cloneDeep';

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';

export type FilterDateType = 'equal' | 'between' | 'greater' | 'less';

export const filterDateRanges = [
  'is in the last',
  'is equal to',
  'is after',
  'is before',
  'is between',
  'is on or after',
  'is before or on',
] as const;
export type FilterDateRangeType = (typeof filterDateRanges)[number];

export const dateUnits = ['days', 'months'] as const;
export type FilterDateLastRangeUnit = (typeof dateUnits)[number];

export type FilterDateData = {
  dateBegin: string | null;
  dateEnd: string | null;
  lastCount: number;
  lastUnit: FilterDateLastRangeUnit;
};

export type FilterDateState = {
  dateData: FilterDateData;
  dateRangeType: FilterDateRangeType;
  isActive: boolean;
};

export const initialFilterDateState: FilterDateState = {
  dateData: {
    dateBegin: null,
    dateEnd: null,
    lastCount: 5,
    lastUnit: 'days',
  },
  dateRangeType: 'is in the last',
  isActive: false,
};

export type FilterDateAction =
  | DeepReducerActions<FilterDateState>
  | {
      type: 'reset';
    };

export const filterDateReducer = (
  state: FilterDateState,
  action: FilterDateAction,
): FilterDateState => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case 'reset':
      return initialFilterDateState;
    case 'change': {
      const { name, value } = action;
      const newFilter = changeDeepProperty({
        obj: newState,
        propertyPath: name,
        value,
      });

      return newFilter;
    }
    default:
      return action;
  }
};
