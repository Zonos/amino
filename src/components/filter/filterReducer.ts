import cloneDeep from 'lodash/cloneDeep';

import { type IDeepReducerActions } from 'src/types';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';

export const filterDateRanges = [
  'is in the last',
  'is equal to',
  'is after',
  'is before',
  'is between',
  'is on or after',
  'is before or on',
] as const;
export type IDateRangeType = (typeof filterDateRanges)[number];
type IDateRangeQuery = {
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  time_zone: string;
};

export const dateUnits = ['days', 'months'] as const;
export type ILastRangeDateUnit = (typeof dateUnits)[number];
export type IDateFilterData = {
  dateBegin: string | null;
  dateEnd: string | null;
  lastCount: number;
  lastUnit: ILastRangeDateUnit;
};

export type IFilterTab = 'Pending' | 'Shipped' | 'Cancelled' | null;
export type IFilterAmountType = 'equal' | 'between' | 'greater' | 'less';
export type IFilter = {
  amountFilterType: IFilterAmountType | null;
  amountQuery: string | null;
  amountTotalMax: number | null;
  amountTotalMin: number | null;
  dateData: IDateFilterData;
  dateRangeQuery: IDateRangeQuery | null;
  dateRangeType: IDateRangeType;
  destinationCountry: string | null;
  serviceLevels: string[];
  serviceLevelsQuery: string | null;
  status: string | null;
};

type IFilterReducerState = {
  filter: IFilter;
};

type IResetFilterAction = {
  type: 'reset';
};

export const initialDateData: IDateFilterData = {
  dateBegin: null,
  dateEnd: null,
  lastCount: 5,
  lastUnit: 'days',
};

export const getInitialFilter = ({
  filter,
}: {
  filter: Partial<IFilter>;
}): IFilterReducerState => ({
  filter: {
    amountFilterType: filter.amountFilterType || null,
    amountQuery: filter.amountQuery || null,
    amountTotalMax: filter.amountTotalMax || null,
    amountTotalMin: filter.amountTotalMin || null,
    dateData: filter.dateData || initialDateData,
    dateRangeQuery: filter.dateRangeQuery || null,
    dateRangeType: filter.dateRangeType || 'is in the last',
    destinationCountry: filter.destinationCountry || null,
    serviceLevels: filter.serviceLevels || [],
    serviceLevelsQuery: filter.serviceLevelsQuery || null,
    status: filter.status || null,
  },
});

const getDateRangeQuery = (filter: IFilter) => {
  const inclusiveRanges: IDateRangeType[] = [
    'is on or after',
    'is before or on',
    'is between',
    'is in the last',
  ];
  return inclusiveRanges.includes(filter.dateRangeType)
    ? {
        gte: filter.dateData.dateBegin,
        lte: filter.dateData.dateEnd,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    : {
        gt: filter.dateData.dateBegin,
        lt: filter.dateData.dateEnd,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
};

const getAmountQuery = ({ amountTotalMax, amountTotalMin }: IFilter) => {
  if (amountTotalMax || amountTotalMin) {
    return `[${amountTotalMin || '*'} TO ${amountTotalMax || '*'}]`;
  }
  return null;
};

export const getFilterQueries = (filter: IFilter): Partial<IFilter> => ({
  amountQuery: getAmountQuery(filter),
  dateRangeQuery: getDateRangeQuery(filter),
  serviceLevelsQuery: filter.serviceLevels.map(x => `"${x}"`).join(' OR '),
});

export type IChangeFilterAction =
  | IDeepReducerActions<IFilter>
  | IResetFilterAction;

export const filterReducer = (
  state: IFilterReducerState,
  action: IChangeFilterAction,
): IFilterReducerState => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case 'change': {
      const { name, value } = action;
      const newFilter = changeDeepProperty({
        obj: newState.filter,
        propertyPath: name,
        value,
      });

      newState.filter = newFilter;
      newState.filter = {
        ...newState.filter,
        ...getFilterQueries(newState.filter),
      };

      return newState;
    }

    case 'reset': {
      const resetState = getInitialFilter({ filter: {} });
      resetState.filter = {
        ...resetState.filter,
        ...getFilterQueries(resetState.filter),
      };

      return resetState;
    }

    default:
      return newState;
  }
};
