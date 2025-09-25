// AMINO Translation Utilities
// These utilities can be used by consuming projects to build their own translation systems

export { AminoProvider, type AminoProviderProps } from '../AminoProvider';
export {
  AminoLanguageProvider,
  useAminoLanguage,
} from './AminoLanguageProvider';
export { type ExtractTextKeys } from './extractTextKeys';
export {
  type ExtractVariables,
  handleTranslationVariables,
} from './handleTranslationVariables';
