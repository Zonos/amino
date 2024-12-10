import { useEffect } from 'react';

import 'src/styles/reset.css';
import 'src/styles/theme.css';
import 'src/styles/amino.css';
import { useGlobals } from '@storybook/preview-api';
import type { Decorator, Preview } from '@storybook/react';

import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import { usePrevious } from 'src/utils/hooks/usePrevious';

import './storybook.css';
import styles from './preview.module.scss';

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
        <div className={styles.sideBySideContainer}>
          <div className={styles.themeBlock} data-theme="day">
            <Story {...context} />
          </div>
          <div className={styles.themeBlock} data-theme="night">
            <Story {...context} />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.sideBySideContainer}>
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
      </div>
    );
  }

  return (
    <div
      className={styles.themeBlock}
      data-theme={inSideBySide ? storybookTheme : aminoTheme}
    >
      <Story {...context} />
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

  tags: ['autodocs'],
};

export default preview;
