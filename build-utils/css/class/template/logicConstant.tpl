import {
  ConstantCustomizedComment,
  ConstantKeyValuePairsType,
} from './types/LogicConstantType';

/** Flag to determine to apply jdocs generation rule from get{{CapitalizedFileName}}ConstantCustomizedComment function below */
export const hasJSDocsComment: boolean = true;

/**
 * Get jsdocs comment that need to be injected to each {{FileName}} constant with customized comment
 *
 * **NOTE**: only enable when `hasJSDocsComment` is on
 * */
export const get{{CapitalizedFileName}}ConstantCustomizedComment: ConstantCustomizedComment = ({
  key,
  value,
}) => {
  /** Put logic here to generate jsdocs string for each line in constant */
  return `${key}: ${value}`;
};

/**
 * Return key/value pairs after applying logic
 */
export const get{{CapitalizedFileName}}ConstantKeyValuePairs: ConstantKeyValuePairsType = () => {
  const contentArr: Record<string, string> = {};

  /** Put logic here to generate constant key value pairs */
  
  return contentArr;
};
