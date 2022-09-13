import { convertPxToRem } from '../../utils/convertPxToRem';
import { convertRemToPx } from '../../utils/convertRemToPx';
import {
  ConstantCustomizedComment,
  ConstantKeyValuePairsType,
} from './types/LogicConstantType';

export const hasJSDocsComment: boolean = true;

/**
 * Get jsdocs comment that need to be injected to each space constant with customized comment
 *
 * **NOTE**: enable when `hasJSDocsComment` is on
 * */
export const getSpaceConstantCustomizedComment: ConstantCustomizedComment = ({
  key,
  value,
}) => {
  return `@info ${key}: ${value} (${convertRemToPx(parseFloat(value))})`;
};

/**
 * Return key/value pairs after applying logic
 */
export const getSpaceConstantKeyValuePairs: ConstantKeyValuePairsType = () => {
  const max = 80;
  const step = 4;
  const start = -80;
  const contentArr: Record<string, string> = {};

  for (let i = start; i <= max; i += step) {
    contentArr[`space-${i < 0 ? `negative-${Math.abs(i)}` : i}`] =
      convertPxToRem(i);
  }
  return contentArr;
};
