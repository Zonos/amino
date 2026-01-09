// AMINO Translation Utilities
// These utilities can be used by consuming projects to build their own translation systems

export { AminoProvider, type AminoProviderProps } from '../AminoProvider';
export { type ExtractTextKeys } from './extractTextKeys';
export {
  handleTranslateComponentText,
  type TranslateProps,
} from './handleTranslateComponentText';
export {
  type ExtractVariables,
  handleTranslationVariables,
} from './handleTranslationVariables';
export { translate } from './translateAminoText';
