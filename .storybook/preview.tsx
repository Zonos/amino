/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import 'src/styles/amino.css';
import 'src/styles/reset.css';
import 'src/styles/theme.css';
import { useGlobals } from '@storybook/addons';
import { type Decorator, type Preview } from '@storybook/react';
import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import { usePrevious } from 'src/utils/hooks/usePrevious';

import './storybook.css';

const ThemeBlock = styled.div<{
  left?: boolean;
}>`
  border-right: ${props =>
    props.left ? `1px solid ${theme.gray500}` : 'none'};
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${theme.space16};
  background: ${theme.gray0};
  color: ${theme.textColor};
`;

const SideBySideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  > * {
    flex: 1;
  }
`;

type StorybookTheme = 'day' | 'night' | 'side-by-side';

const withTheme: Decorator = (Story, context) => {
  // Inside side-by-side iframe
  const inSideBySide = window.location.href.includes('innerFrame=true');

  const [globals, updateGlobals] = useGlobals();

  const storybookTheme: StorybookTheme =
    context.parameters.theme || globals.theme;

  const { aminoTheme, setAminoTheme } = useAminoTheme({
    root: !inSideBySide,
  });
  const previousStorybookTheme = usePrevious(storybookTheme);

  const sameTheme = storybookTheme === aminoTheme;
  const storybookChanged = previousStorybookTheme !== storybookTheme;

  // Only set root once in the side by side iframe
  useEffect(() => {
    if (inSideBySide) {
      document.documentElement.dataset.theme = storybookTheme;
    }
  }, [inSideBySide, storybookTheme]);

  // Sync amino theme with storybook
  useEffect(() => {
    // Don't set from side-by-side iframe
    if (inSideBySide) {
      return;
    }

    if (
      previousStorybookTheme !== storybookTheme &&
      !sameTheme &&
      storybookTheme !== 'side-by-side'
    ) {
      setAminoTheme(storybookTheme);
    }
  }, [
    inSideBySide,
    previousStorybookTheme,
    sameTheme,
    setAminoTheme,
    storybookTheme,
  ]);

  // Sync storybook with amino
  useEffect(() => {
    // Don't set from side-by-side iframe
    if (inSideBySide) {
      return;
    }

    if (!storybookChanged && !sameTheme && storybookTheme !== 'side-by-side') {
      updateGlobals({ theme: aminoTheme });
    }
  }, [
    aminoTheme,
    inSideBySide,
    sameTheme,
    storybookChanged,
    storybookTheme,
    updateGlobals,
  ]);

  if (storybookTheme === 'side-by-side') {
    // Don't iframe this one because it reads local storage
    if (context.title === 'Amino/ThemeSelect') {
      return (
        <SideBySideContainer>
          <ThemeBlock data-theme="day">
            <Story {...context} />
          </ThemeBlock>
          <ThemeBlock data-theme="night">
            <Story {...context} />
          </ThemeBlock>
        </SideBySideContainer>
      );
    }

    return (
      <SideBySideContainer>
        <iframe
          height="100%"
          src={`/iframe.html?globals=theme:day&id=${context.id}&viewMode=story&innerFrame=true`}
          title="iframe-storybook-day"
        />
        <iframe
          height="100%"
          src={`/iframe.html?globals=theme:night&id=${context.id}&viewMode=story&innerFrame=true`}
          title="iframe-storybook-night"
        />
      </SideBySideContainer>
    );
  }

  return (
    <ThemeBlock data-theme={inSideBySide ? storybookTheme : aminoTheme}>
      <Story {...context} />
    </ThemeBlock>
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
