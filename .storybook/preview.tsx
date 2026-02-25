import { useEffect } from 'react';

import 'src/styles/amino.css';
import 'src/styles/reset.css';
import 'src/styles/theme.css';
import 'src/styles/tailwind.css';
import { useGlobals } from '@storybook/preview-api';
import type { Decorator, Preview } from '@storybook/react';

import { cn } from 'src/utils/cn';
import { useAminoTheme } from 'src/utils/hooks/useAminoTheme';
import { usePrevious } from 'src/utils/hooks/usePrevious';
import { setLanguage } from 'src/utils/translations/AminoTranslationStore';
import {
  type SupportedLanguageCode,
  supportedLanguages,
} from 'src/utils/translations/supportedLanguages';

import './storybook.css';

type StorybookTheme = 'day' | 'night' | 'side-by-side';

const withLanguage: Decorator = (Story, context) => {
  const [globals] = useGlobals();
  const languageCode: SupportedLanguageCode = globals.language || 'EN';

  useEffect(() => {
    void setLanguage(languageCode);
  }, [languageCode]);

  return <Story {...context} />;
};

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
        <div className="flex w-full h-full justify-around *:flex-1">
          <div
            className="w-full h-screen overflow-auto p-4 bg-(--amino-gray-0) text-(--amino-text-color)"
            data-theme="day"
          >
            <Story {...context} />
          </div>
          <div
            className="w-full h-screen overflow-auto p-4 bg-(--amino-gray-0) text-(--amino-text-color)"
            data-theme="night"
          >
            <Story {...context} />
          </div>
        </div>
      );
    }

    return (
      <div className="flex w-full h-full justify-around *:flex-1">
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
      className={cn(
        'w-full h-screen overflow-auto p-4 bg-(--amino-gray-0) text-(--amino-text-color)',
        context.viewMode === 'docs' && 'h-full min-h-[30vh]',
      )}
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

  decorators: [withLanguage, withTheme],

  globalTypes: {
    language: {
      defaultValue: 'EN',
      description: 'Language for amino components',
      toolbar: {
        defaultValue: 'EN',
        dynamicTitle: true,
        icon: 'globe',
        items: supportedLanguages.map(lang => ({
          title: `${lang.label} (${lang.translatedLabel})`,
          value: lang.code,
        })),
        onChange: (value: SupportedLanguageCode) => value,
      },
    },
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
