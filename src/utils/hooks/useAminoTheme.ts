import type { ITheme } from 'src/types';

import { useStorage } from './useStorage';

export const useAminoTheme = () => {
  const [aminoTheme, setAminoTheme] = useStorage<ITheme, 'amino:theme'>({
    defaultValue: 'day',
    key: 'amino:theme',
    type: 'local',
  });
  return { aminoTheme, setAminoTheme };
};
