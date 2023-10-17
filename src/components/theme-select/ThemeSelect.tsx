import styled from 'styled-components';

import { Card } from 'src/components/card/Card';
import { Select } from 'src/components/select/Select';
import { HStack } from 'src/components/stack/HStack';
import { Switch } from 'src/components/switch/Switch';
import { Text } from 'src/components/text/Text';
import { ThemeDarkIcon } from 'src/icons/custom/theme/ThemeDarkIcon';
import { ThemeLightIcon } from 'src/icons/custom/theme/ThemeLightIcon';
import { NightIcon } from 'src/icons/NightIcon';
import { SunnyIcon } from 'src/icons/SunnyIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

// Card style
const ButtonStyled = styled.button<{ $isActive: boolean }>`
  border: ${p => `2px solid ${p.$isActive ? theme.blue400 : 'transparent'}`};
  color: ${p => (p.$isActive ? theme.primary : theme.textColor)};
  border-radius: ${theme.radius8};

  &:not([disabled]) {
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

const ThemeCard = styled(Card)`
  background: ${theme.gray0};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space16};

  svg {
    height: 64px;
    width: 110px;
    box-shadow: ${theme.v3ShadowLarge};
    margin-bottom: ${theme.space16};
  }
`;

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
  type?: 'cards' | 'select' | 'toggle';
};

export const ThemeSelect = ({
  className,
  disabled = false,
  type = 'select',
}: Props) => {
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

  const checked = aminoTheme === 'day';

  return (
    <>
      {type === 'cards' && (
        <HStack className={className}>
          <ButtonStyled
            $isActive={aminoTheme === 'day'}
            data-theme="day"
            onClick={() => setAminoTheme('day')}
            type="button"
          >
            <ThemeCard>
              <ThemeLightIcon />
              <Text type="bold-label">Light</Text>
            </ThemeCard>
          </ButtonStyled>

          <ButtonStyled
            $isActive={aminoTheme === 'night'}
            data-theme="night"
            onClick={() => setAminoTheme('night')}
            type="button"
          >
            <ThemeCard>
              <ThemeDarkIcon />
              <Text type="bold-label">Dark</Text>
            </ThemeCard>
          </ButtonStyled>
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
