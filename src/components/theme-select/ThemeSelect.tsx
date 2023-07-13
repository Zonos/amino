import styled from 'styled-components';

import { ThemeDarkIcon } from 'src/icons/custom/theme/ThemeDarkIcon';
import { ThemeLightIcon } from 'src/icons/custom/theme/ThemeLightIcon';
import { NightIcon } from 'src/icons/NightIcon';
import { SunnyIcon } from 'src/icons/SunnyIcon';
import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

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
            data-theme="day"
            isActive={aminoTheme === 'day'}
            onClick={() => setAminoTheme('day')}
            type="button"
          >
            <ThemeCard>
              <ThemeLightIcon />
              <Text type="bold-label">Light</Text>
            </ThemeCard>
          </ButtonStyled>

          <ButtonStyled
            data-theme="night"
            isActive={aminoTheme === 'night'}
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
        <SwitchContainer
          checked={checked}
          className={`${className} ${disabled ? 'disabled' : ''}`}
          onClick={() =>
            !disabled && setAminoTheme(aminoTheme === 'day' ? 'night' : 'day')
          }
        >
          <AminoSwitchWrapper checked={checked}>
            <AminoSwitch checked={checked} id="amino-theme-switch" />
            <SunnyIconStyled isActive={aminoTheme === 'day'} size={20} />
            <NightIconStyled isActive={aminoTheme === 'night'} size={20} />
          </AminoSwitchWrapper>
        </SwitchContainer>
      )}
    </>
  );
};
