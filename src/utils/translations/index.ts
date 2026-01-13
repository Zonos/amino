// AMINO Translation Utilities
// These utilities can be used by consuming projects to build their own translation systems

export type { AminoTranslationStrings } from './AminoTranslationStore';
export { type ExtractTextKeys } from './extractTextKeys';
export {
  handleTranslateComponentText,
  type TranslateProps,
} from './handleTranslateComponentText';
export {
  type ExtractVariables,
  handleTranslationVariables,
} from './handleTranslationVariables';
export { translate, type TranslateParams } from './translate';
