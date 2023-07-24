/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react';

import 'src/styles/amino.css';
import 'src/styles/reset.css';
import 'src/styles/theme.css';
import { useGlobals } from '@storybook/addons';
import { type Decorator, type Preview } from '@storybook/react';
import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import type { Theme } from 'src/types';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';

const ThemeBlock = styled.div<{
  left?: boolean;
}>`
  border-right: ${props =>
    props.left ? `1px solid ${theme.gray500}` : 'none'};
  width: 100%;
  overflow: auto;
  padding: ${theme.space16};
  background: ${theme.gray0};
  color: ${theme.textColor};
`;

const SideBySideContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  > * {
    flex: 1;
  }
`;

type StorybookTheme = 'day' | 'night' | 'side-by-side';

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const withTheme: Decorator = (Story, context) => {
  const [globals, updateGlobals] = useGlobals();

  const storybookTheme: StorybookTheme =
    context.parameters.theme || globals.theme;

  const { aminoTheme, setAminoTheme } = useAminoTheme({ root: true });
  const previousStorybookTheme = usePrevious(storybookTheme);

  const sameTheme = storybookTheme === aminoTheme;
  const storybookChanged = previousStorybookTheme !== storybookTheme;

  // Sync amino theme with storybook
  useEffect(() => {
    if (previousStorybookTheme !== storybookTheme) {
      if (!sameTheme && storybookTheme !== 'side-by-side') {
        setAminoTheme(storybookTheme);
      }
    }
  }, [previousStorybookTheme, sameTheme, setAminoTheme, storybookTheme]);

  // Sync storybook with amino
  useEffect(() => {
    if (!storybookChanged && !sameTheme && storybookTheme !== 'side-by-side') {
      updateGlobals({ theme: aminoTheme });
    }
  }, [aminoTheme, sameTheme, storybookChanged, storybookTheme, updateGlobals]);

  if (storybookTheme === 'side-by-side') {
    return (
      <SideBySideContainer>
        <div data-theme="day">
          <ThemeBlock left>
            <Story {...context} />
          </ThemeBlock>
        </div>
        <div data-theme="night">
          <ThemeBlock>
            <Story {...context} />
          </ThemeBlock>
        </div>
      </SideBySideContainer>
    );
  }

  return (
    <div data-theme={aminoTheme}>
      <ThemeBlock>
        <Story {...context} />
      </ThemeBlock>
    </div>
  );
};

const preview: Preview = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      defaultValue: 'day',
      description: 'Global theme for components',
      toolbar: {
        defaultValue: 'day',
        dynamicTitle: true,
        icon: 'circlehollow',
        items: [
          { icon: 'circlehollow', title: 'Day', value: 'day' },
          { icon: 'circle', title: 'Night', value: 'night' },
          { icon: 'sidebar', title: 'Side by side', value: 'side-by-side' },
        ],
        onChange: (value: StorybookTheme) => value,
      },
    },
  },
  parameters: {
    // Display events in Actions panel
    actions: { argTypesRegex: /^on.*/ },
    backgrounds: {
      disable: true,
    },
    controls: { exclude: /^on.*/, expanded: true, sort: 'alpha' },
    layout: 'fullscreen',
  },
};

export default preview;
