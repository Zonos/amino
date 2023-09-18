import cloneDeep from 'lodash/cloneDeep';

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

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
