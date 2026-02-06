import { useEffect, useState } from 'react';

import { TranslateAminoText as Translate } from 'src/components/__amino__/TranslateAminoText';
import { Card } from 'src/components/card/Card';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { Switch } from 'src/components/switch/Switch';
import { Text } from 'src/components/text/Text';
import { ThemeDarkIcon } from 'src/icons/custom/theme/ThemeDarkIcon';
import { ThemeLightIcon } from 'src/icons/custom/theme/ThemeLightIcon';
import { NightIcon } from 'src/icons/NightIcon';
import { SunnyIcon } from 'src/icons/SunnyIcon';
import type { Theme } from 'src/types/Theme';
import { cn } from 'src/utils/cn';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

const themes: { label: string; value: Theme }[] = [
  {
    label: 'Light',
    value: 'day',
  },
  {
    label: 'Dark',
    value: 'night',
  },
];

export type Props = {
  className?: string;
  disabled?: boolean;
  /**
   * @default select
   */
  type?: 'cards' | 'select' | 'toggle';
};

/**
 * ThemeSelect allows users to switch between light and dark themes using cards, a select dropdown, or a toggle switch.
 * Integrates with the Amino theme system and updates the application theme accordingly. Supports disabling and multiple UI types.
 *
 * @example Basic usage (select)
 * ```tsx
 * <ThemeSelect />
 * ```
 *
 * @example Card style
 * ```tsx
 * <ThemeSelect type="cards" />
 * ```
 *
 * @example Toggle style, disabled
 * ```tsx
 * <ThemeSelect type="toggle" disabled />
 * ```
 */
export const ThemeSelect = ({
  className,
  disabled = false,
  type = 'select',
}: Props) => {
  const { aminoTheme, setAminoTheme } = useAminoTheme();
  const [checked, setChecked] = useState<boolean>(false);

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

  // This logic is necessary because on the server the theme is always 'day', which casuses SSR hydration mismatch issues
  useEffect(() => {
    // This code will only run on the client side
    setChecked(aminoTheme === 'day');
  }, [aminoTheme]);

  return (
    <>
      {type === 'cards' && (
        <HStack className={className}>
          <button
            className={cn(
              'rounded-amino8 border-2 border-solid border-transparent text-amino-text-color focus:outline-none active:outline-none',
              aminoTheme === 'day' && 'border-blue-400 text-amino-primary',
            )}
            data-theme="day"
            onClick={() => setAminoTheme('day')}
            type="button"
          >
            <Card className="flex flex-col items-center bg-gray-0 p-amino-16 [&_svg]:mb-amino-16 [&_svg]:h-16 [&_svg]:w-[110px] [&_svg]:shadow-v3-large">
              <ThemeLightIcon />
              <Text type="bold-label">
                <Translate text="Light" />
              </Text>
            </Card>
          </button>

          <button
            className={cn(
              'rounded-amino8 border-2 border-solid border-transparent text-amino-text-color focus:outline-none active:outline-none',
              aminoTheme === 'night' && 'border-blue-400 text-amino-primary',
            )}
            data-theme="night"
            onClick={() => setAminoTheme('night')}
            type="button"
          >
            <Card className="flex flex-col items-center bg-gray-0 p-amino-16 [&_svg]:mb-amino-16 [&_svg]:h-16 [&_svg]:w-[110px] [&_svg]:shadow-v3-large">
              <ThemeDarkIcon />
              <Text type="bold-label">
                <Translate text="Dark" />
              </Text>
            </Card>
          </button>
        </HStack>
      )}

      {type === 'select' && (
        <Select
          className={className}
          icon={getIcon()}
          isClearable={false}
          isDisabled={disabled}
          onChange={newTheme => setAminoTheme(newTheme?.value || 'day')}
          options={themes}
          value={themes.filter(x => x.value === aminoTheme)}
        />
      )}

      {type === 'toggle' && (
        <Switch
          aria-label="Light mode"
          checked={checked}
          className={className}
          disabled={disabled}
          onChange={() =>
            !disabled && setAminoTheme(aminoTheme === 'day' ? 'night' : 'day')
          }
          switchIconLeft={<NightIcon />}
          switchIconRight={<SunnyIcon />}
        />
      )}
    </>
  );
};
