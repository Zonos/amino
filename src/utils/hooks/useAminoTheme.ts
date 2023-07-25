import { useEffect } from 'react';

import type { Theme } from 'src/types';
import { themeSchema } from 'src/types/Theme';
import { useStorage } from 'src/utils/hooks/useStorage';
import { getStorageItem } from 'src/utils/storage';

type Params = {
  /** Whether to modify the HTML body */
  root: boolean;
};

export const useAminoTheme = (props?: Params) => {
  const isRoot = !!props?.root;

  // SWR cache is not initialized at first, so it would default to 'day' instead of the localStorage value.
  const getDefaultValue = () => {
    if (typeof window === 'undefined') {
      return 'day';
    }

    const storedValue = getStorageItem<Theme>({
      key: 'amino:theme',
      schema: themeSchema,
      type: 'local',
    });

    return storedValue ?? 'day';
  };

  const { setValue: setAminoTheme, value: aminoTheme } = useStorage<
    Theme,
    'amino:theme'
  >({
    defaultValue: getDefaultValue(),
    key: 'amino:theme',
    type: 'local',
  });

  useEffect(() => {
    if (isRoot) {
      document.documentElement.dataset.theme = aminoTheme;
    }
  }, [aminoTheme, isRoot]);

  return { aminoTheme, setAminoTheme };
};
