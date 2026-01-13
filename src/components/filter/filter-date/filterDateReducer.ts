import cloneDeep from 'lodash/cloneDeep';
import { z } from 'zod';

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';
import { getCurrentStateUrl, setStateUrl } from 'src/utils/hooks/useStateUrl';

export type FilterDateType = 'equal' | 'between' | 'greater' | 'less';

// Exported for use in other components
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

// Exported for use in other components
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

export const filterDateReducerUrl =
  (prefixKey?: string) =>
  (state: FilterDateState, action: FilterDateAction): FilterDateState => {
    const prefix = prefixKey ? `${prefixKey}Filter` : 'filter';

    const newState = filterDateReducer(state, action);

    // Sync with URL
    if (newState.isActive) {
      setStateUrl({
        name: `${prefix}DateBegin`,
        value: newState.dateData.dateBegin,
      });
      setStateUrl({
        name: `${prefix}DateEnd`,
        value: newState.dateData.dateEnd,
      });
      setStateUrl({
        name: `${prefix}DateRangeType`,
        value: newState.dateRangeType,
      });
      if (newState.dateRangeType === 'is in the last') {
        setStateUrl({
          name: `${prefix}DateLastCount`,
          value: newState.dateData.lastCount,
        });
        setStateUrl({
          name: `${prefix}DateLastUnit`,
          value: newState.dateData.lastUnit,
        });
      }
    } else {
      setStateUrl({
        name: `${prefix}DateBegin`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}DateEnd`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}DateRangeType`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}DateLastCount`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}DateLastUnit`,
        value: null,
      });
    }

    return newState;
  };

export const getInitialFilterDateStateUrl = (
  prefixKey?: string,
): FilterDateState => {
  const prefix = prefixKey ? `${prefixKey}Filter` : 'filter';

  const dateRangeType = getCurrentStateUrl({
    name: `${prefix}DateRangeType`,
    schema: z.enum(filterDateRanges),
  });

  const state: Omit<FilterDateState, 'isActive'> = {
    dateData: {
      dateBegin:
        getCurrentStateUrl({
          name: `${prefix}DateBegin`,
          schema: z.string().date(),
        }) || null,
      dateEnd:
        getCurrentStateUrl({
          name: `${prefix}DateEnd`,
          schema: z.string().date(),
        }) || null,
      lastCount:
        getCurrentStateUrl({
          name: `${prefix}DateLastCount`,
          schema: z.number(),
        }) || 5,
      lastUnit:
        getCurrentStateUrl({
          name: `${prefix}DateLastUnit`,
          schema: z.enum(dateUnits),
        }) || 'days',
    },
    dateRangeType: dateRangeType || 'is in the last',
  };

  // If the date range type is set then let's assume active
  const isActive = !!dateRangeType;

  return {
    ...state,
    isActive,
  };
};
