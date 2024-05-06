import cloneDeep from 'lodash/cloneDeep';
import { z } from 'zod';

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';
import { getCurrentStateUrl, setStateUrl } from 'src/utils/hooks/useStateUrl';

export const filterAmountTypes = [
  'equal',
  'between',
  'greater',
  'less',
] as const;
export type FilterAmountType = (typeof filterAmountTypes)[number];

export const filterAmountOptions: { label: string; value: FilterAmountType }[] =
  [
    { label: 'is equal to', value: 'equal' },
    { label: 'is between', value: 'between' },
    { label: 'is greater than', value: 'greater' },
    { label: 'is less than', value: 'less' },
  ];

export type FilterAmountState = {
  amountFilterType: FilterAmountType;
  amountTotalMax: number | null;
  amountTotalMin: number | null;
  isActive: boolean;
};

export const initialFilterAmountState: FilterAmountState = {
  amountFilterType: 'equal',
  amountTotalMax: 0,
  amountTotalMin: 0,
  isActive: false,
};

export type FilterAmountAction =
  | DeepReducerActions<FilterAmountState>
  | {
      type: 'reset';
    };

export const filterAmountReducer = (
  state: FilterAmountState,
  action: FilterAmountAction,
): FilterAmountState => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case 'reset':
      return initialFilterAmountState;
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

export const filterAmountReducerUrl =
  (prefixKey?: string) =>
  (state: FilterAmountState, action: FilterAmountAction): FilterAmountState => {
    const prefix = prefixKey ? `${prefixKey}Filter` : 'filter';

    const newState = filterAmountReducer(state, action);

    // Sync with URL
    if (newState.isActive) {
      setStateUrl({
        name: `${prefix}AmountType`,
        value: newState.amountFilterType,
      });
      setStateUrl({
        name: `${prefix}AmountMin`,
        value: newState.amountTotalMin,
      });
      setStateUrl({
        name: `${prefix}AmountMax`,
        value: newState.amountTotalMax,
      });
    } else {
      setStateUrl({
        name: `${prefix}AmountType`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}AmountMin`,
        value: null,
      });
      setStateUrl({
        name: `${prefix}AmountMax`,
        value: null,
      });
    }

    return newState;
  };

export const getInitialFilterAmountStateUrl = (
  prefixKey?: string,
): FilterAmountState => {
  const prefix = prefixKey ? `${prefixKey}Filter` : 'filter';

  const filterType = getCurrentStateUrl({
    name: `${prefix}AmountType`,
    schema: z.enum(filterAmountTypes),
  });

  const state: Omit<FilterAmountState, 'isActive'> = {
    amountFilterType: filterType || 'equal',
    amountTotalMax:
      getCurrentStateUrl({
        name: `${prefix}AmountMax`,
        schema: z.number(),
      }) || 0,
    amountTotalMin:
      getCurrentStateUrl({
        name: `${prefix}AmountMin`,
        schema: z.number(),
      }) || 0,
  };

  // If the type is set then let's assume active
  const isActive = !!filterType;

  return {
    ...state,
    isActive,
  };
};
