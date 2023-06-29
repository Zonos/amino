import { useEffect } from 'react';

import type { Theme } from 'src/types';

import { useStorage } from './useStorage';

type Params = {
  /** Whether to modify the HTML body */
  root: boolean;
};

export const useAminoTheme = (props?: Params) => {
  const isRoot = !!props?.root;
  const [aminoTheme, setAminoTheme] = useStorage<Theme, 'amino:theme'>({
    defaultValue: 'day',
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
