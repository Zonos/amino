import { useEffect } from 'react';

import { type Theme, themeSchema } from 'src/types/Theme';
import { useStorage } from 'src/utils/hooks/useStorage';

type Params = {
  /** Use with root to override a theme in localStorage */
  override?: Theme;
  /** Whether to modify the root HTML element */
  root?: boolean;
};

export const useAminoTheme = (params?: Params) => {
  const { override, root } = params ?? {};

  const { setValue: setAminoTheme, value: aminoTheme } = useStorage<
    Theme,
    'amino:theme'
  >({
    defaultValue: 'day',
    key: 'amino:theme',
    schema: themeSchema,
    type: 'local',
  });

  useEffect(() => {
    if (root) {
      document.documentElement.dataset.theme = override || aminoTheme;
    }
  }, [aminoTheme, override, root]);

  return { aminoTheme: override || aminoTheme, setAminoTheme };
};
