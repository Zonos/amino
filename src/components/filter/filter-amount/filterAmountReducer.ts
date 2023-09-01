import cloneDeep from 'lodash/cloneDeep';

import type { DeepReducerActions } from 'src/types/deep/DeepReducerActions';
import { changeDeepProperty } from 'src/utils/changeDeepProperty';

export type FilterAmountType = 'equal' | 'between' | 'greater' | 'less';

export type FilterAmountState = {
  amountFilterType: FilterAmountType | null;
  amountTotalMax: number | null;
  amountTotalMin: number | null;
};

export const initialFilterAmountState: FilterAmountState = {
  amountFilterType: null,
  amountTotalMax: null,
  amountTotalMin: null,
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
