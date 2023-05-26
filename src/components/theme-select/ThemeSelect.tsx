import { ThemeDarkIcon } from 'src/icons/custom/theme/ThemeDarkIcon';
import { ThemeLightIcon } from 'src/icons/custom/theme/ThemeLightIcon';
import { NightIcon } from 'src/icons/NightIcon';
import { SunnyIcon } from 'src/icons/SunnyIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import styled from 'styled-components';

import { Card } from '../card/Card';
import { Select } from '../select/Select';
import { HStack } from '../stack/HStack';
import { Text } from '../text/Text';

// Card style
const ButtonStyled = styled.button<{ isActive: boolean }>`
  border: ${p => `2px solid ${p.isActive ? theme.blue400 : 'transparent'}`};
  color: ${p => (p.isActive ? theme.primary : theme.textColor)};
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

// Switch style
const AminoSwitch = styled.div<{ checked: boolean }>`
  background: ${theme.primary};
  height: 28px;
  width: 28px;
  border-radius: 50%;
  transition: ${theme.transition};
  position: absolute;
  top: 2px;
  left: ${p => (p.checked ? 'calc(100% - 30px)' : '2px')};
`;

const SunnyIconStyled = styled(SunnyIcon)<{ isActive: boolean }>`
  position: absolute;
  top: 6px;
  right: 5.8px;
  color: ${p => (p.isActive ? theme.gray0 : theme.gray1200)};
`;

const NightIconStyled = styled(NightIcon)<{ isActive: boolean }>`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${p => (p.isActive ? theme.gray0 : theme.gray1200)};
`;

const AminoSwitchWrapper = styled.div<{
  checked: boolean;
}>`
  margin-right: ${theme.space16};
  width: 62px;
  height: 32px;
  min-width: 24px;
  min-height: 16px;
  line-height: 16px;
  border-radius: 20px;
  background: ${theme.gray50};
  box-shadow: ${theme.v3ShadowInset};
  display: block;
  user-select: none;
  margin-right: ${theme.space16};
  position: relative;
`;

const SwitchContainer = styled.label<{
  checked: boolean;
}>`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  &.disabled {
    ${AminoSwitchWrapper} {
      background: ${p => (p.checked ? theme.gray300 : '')};
    }
    cursor: not-allowed;
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
  disabled?: boolean;
  type?: 'cards' | 'select' | 'toggle';
};

export const ThemeSelect = ({ disabled = false, type = 'select' }: Props) => {
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
        <HStack>
          <ButtonStyled
            onClick={() => setAminoTheme('day')}
            type="button"
            data-theme="day"
            isActive={aminoTheme === 'day'}
          >
            <ThemeCard>
              <ThemeLightIcon />
              <Text type="bold-label">Light</Text>
            </ThemeCard>
          </ButtonStyled>

          <ButtonStyled
            onClick={() => setAminoTheme('night')}
            type="button"
            data-theme="night"
            isActive={aminoTheme === 'night'}
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
          value={themes.filter(x => x.value === aminoTheme)}
          options={themes}
          icon={getIcon()}
          onChange={newTheme => setAminoTheme(newTheme?.value || 'day')}
          isDisabled={disabled}
          isClearable={false}
        />
      )}

      {type === 'toggle' && (
        <SwitchContainer
          className={disabled ? 'disabled' : ''}
          checked={checked}
          onClick={() =>
            !disabled && setAminoTheme(aminoTheme === 'day' ? 'night' : 'day')
          }
        >
          <AminoSwitchWrapper checked={checked}>
            <AminoSwitch checked={checked} id="amino-theme-switch" />
            <SunnyIconStyled size={20} isActive={aminoTheme === 'day'} />
            <NightIconStyled size={20} isActive={aminoTheme === 'night'} />
          </AminoSwitchWrapper>
        </SwitchContainer>
      )}
    </>
  );
};
