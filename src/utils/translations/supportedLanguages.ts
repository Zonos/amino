type ISupportedLanguage = {
  code: string;
  label: string;
  translatedLabel: string;
};

export const supportedLanguages = [
  { code: 'DA', label: 'Danish', translatedLabel: 'dansk' },
  { code: 'DE', label: 'German', translatedLabel: 'Deutsche' },
  { code: 'EN', label: 'English', translatedLabel: 'English' },
  { code: 'ES', label: 'Spanish', translatedLabel: 'Español' },
  { code: 'FR', label: 'French', translatedLabel: 'Français' },
  { code: 'ID', label: 'Indonesian', translatedLabel: 'bahasa Indonesia' },
  { code: 'IT', label: 'Italian', translatedLabel: 'Italiano' },
  { code: 'JA', label: 'Japanese', translatedLabel: '日本語' },
  { code: 'KO', label: 'Korean', translatedLabel: '한국어' },
  { code: 'NL', label: 'Dutch', translatedLabel: 'Nederlands' },
  { code: 'NO', label: 'Norwegian', translatedLabel: 'norsk' },
  { code: 'PL', label: 'Polish', translatedLabel: 'Polskie' },
  { code: 'PT', label: 'Portuguese', translatedLabel: 'Português' },
  { code: 'RU', label: 'Russian', translatedLabel: 'русский' },
  { code: 'SV', label: 'Swedish', translatedLabel: 'svenska' },
  { code: 'TR', label: 'Turkish', translatedLabel: 'Türk' },
  { code: 'VI', label: 'Vietnamese', translatedLabel: 'Tiếng Việt' },
  { code: 'ZH_CN', label: 'Chinese', translatedLabel: '中文' },
] as const satisfies readonly ISupportedLanguage[];

export type ISupportedLanguageCode =
  (typeof supportedLanguages)[number]['code'];
