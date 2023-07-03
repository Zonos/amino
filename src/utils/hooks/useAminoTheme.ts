import { useEffect } from 'react';

import type { Theme } from 'src/types';
import { themeSchema } from 'src/types/Theme';
import { getStorageItem } from 'src/utils/storage';

import { useStorage } from './useStorage';

type Params = {
  /** Whether to modify the HTML body */
  root: boolean;
};

export const useAminoTheme = (props?: Params) => {
  const isRoot = !!props?.root;

  // SWR cache is not initialized at first, so it would default to 'day' instead of the localStorage value.
  const getDefaultValue = () => {
    const storedValue = getStorageItem<Theme>({
      key: 'amino:theme',
      schema: themeSchema,
      type: 'local',
    });

    return storedValue ?? 'day';
  };

  const [aminoTheme, setAminoTheme] = useStorage<Theme, 'amino:theme'>({
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
