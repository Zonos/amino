import { NightIcon } from 'src/icons/NightIcon';
import { SunnyIcon } from 'src/icons/SunnyIcon';
import type { ITheme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

import { Select } from './Select';

const themes: { label: string; value: ITheme }[] = [
  {
    label: 'Light',
    value: 'day',
  },
  {
    label: 'Dark',
    value: 'night',
  },
];

export const ThemeSelect = () => {
  const { aminoTheme, setAminoTheme } = useAminoTheme();

  const getIcon = () => {
    switch (aminoTheme) {
      case 'day':
        return <SunnyIcon />;
      case 'night':
        return <NightIcon />;
      default:
        return <SunnyIcon />;
    }
  };
  return (
    <>
      <Select
        value={themes.filter(x => x.value === aminoTheme)}
        options={themes}
        icon={getIcon()}
        onChange={theme => setAminoTheme(theme?.value || 'day')}
      />
      <p>Local storage value: {aminoTheme}</p>
    </>
  );
};
