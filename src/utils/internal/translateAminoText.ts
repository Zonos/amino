import {
  type ExtractVariables,
  handleTranslationVariables,
} from 'src/utils/translations/handleTranslationVariables';
import type { ISupportedLanguageCode } from 'src/utils/translations/supportedLanguages';

import chinese from './strings/chinese.json';
import danish from './strings/danish.json';
import dutch from './strings/dutch.json';
import french from './strings/french.json';
import german from './strings/german.json';
import indonesian from './strings/indonesian.json';
import italian from './strings/italian.json';
import japanese from './strings/japanese.json';
import korean from './strings/korean.json';
import norwegian from './strings/norwegian.json';
import polish from './strings/polish.json';
import portuguese from './strings/portuguese.json';
import russian from './strings/russian.json';
import spanish from './strings/spanish.json';
import swedish from './strings/swedish.json';
import turkish from './strings/turkish.json';
import vietnamese from './strings/vietnamese.json';

export type ITranslateText = keyof typeof spanish;

export const getTranslationString = (
  text: ITranslateText,
  languageCode?: ISupportedLanguageCode,
): string => {
  let translatedText: string;

  switch (languageCode) {
    case 'DA': {
      translatedText = danish[text];
      break;
    }
    case 'DE': {
      translatedText = german[text];
      break;
    }
    case 'EN': {
      translatedText = text;
      break;
    }
    case 'ES': {
      translatedText = spanish[text];
      break;
    }
    case 'FR': {
      translatedText = french[text];
      break;
    }
    case 'ID': {
      translatedText = indonesian[text];
      break;
    }
    case 'IT': {
      translatedText = italian[text];
      break;
    }
    case 'JA': {
      translatedText = japanese[text];
      break;
    }
    case 'KO': {
      translatedText = korean[text];
      break;
    }
    case 'NL': {
      translatedText = dutch[text];
      break;
    }
    case 'NO': {
      translatedText = norwegian[text];
      break;
    }
    case 'PL': {
      translatedText = polish[text];
      break;
    }
    case 'PT': {
      translatedText = portuguese[text];
      break;
    }
    case 'RU': {
      translatedText = russian[text];
      break;
    }
    case 'SV': {
      translatedText = swedish[text];
      break;
    }
    case 'TR': {
      translatedText = turkish[text];
      break;
    }
    case 'VI': {
      translatedText = vietnamese[text];
      break;
    }
    case 'ZH_CN': {
      translatedText = chinese[text];
      break;
    }
    default:
      translatedText = text;
  }

  return translatedText || text;
};

type StripContext<T extends string> =
  T extends `${infer Base} --context: ${string}` ? Base : T;

/**
 * Require variables argument to be an object with keys that match the variables in the string.
 * If no variables are present, variables argument is optional.
 */
export type ITranslateParams<T extends ITranslateText> = {
  languageCode?: ISupportedLanguageCode;
  text: T;
} & (ExtractVariables<T> extends never
  ? { variables?: never }
  : { variables: Record<ExtractVariables<T>, string | number> });

export const translate = <T extends ITranslateText>(
  params: ITranslateParams<T>,
): StripContext<T> => {
  const { languageCode, text, variables } = params;
  const translatedText = getTranslationString(text, languageCode);

  return handleTranslationVariables({
    text: translatedText as T,
    variables,
  }) as StripContext<T>;
};
