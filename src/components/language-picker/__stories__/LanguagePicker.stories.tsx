import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  LanguagePicker,
  type LanguagePickerProps,
} from 'src/components/language-picker/LanguagePicker';
import { VStack } from 'src/components/stack/VStack';

// Sample language data (matching zonos.com's supported languages)
const sampleLanguages = [
  {
    code: 'da',
    englishName: 'Danish',
    flag: '🇩🇰',
    nativeName: 'Dansk',
    region: 'Europe',
  },
  {
    code: 'de',
    englishName: 'German',
    flag: '🇩🇪',
    nativeName: 'Deutsch',
    region: 'Europe',
  },
  {
    code: 'el',
    englishName: 'Greek',
    flag: '🇬🇷',
    nativeName: 'Ελληνικά',
    region: 'Europe',
  },
  {
    code: 'en',
    englishName: 'English',
    flag: '🇺🇸',
    nativeName: 'English',
    region: 'Americas',
  },
  {
    code: 'es',
    englishName: 'Spanish',
    flag: '🇪🇸',
    nativeName: 'Español',
    region: 'Americas',
  },
  {
    code: 'fr',
    englishName: 'French',
    flag: '🇫🇷',
    nativeName: 'Français',
    region: 'Europe',
  },
  {
    code: 'id',
    englishName: 'Indonesian',
    flag: '🇮🇩',
    nativeName: 'Bahasa Indonesia',
    region: 'Asia Pacific',
  },
  {
    code: 'it',
    englishName: 'Italian',
    flag: '🇮🇹',
    nativeName: 'Italiano',
    region: 'Europe',
  },
  {
    code: 'ja',
    englishName: 'Japanese',
    flag: '🇯🇵',
    nativeName: '日本語',
    region: 'Asia Pacific',
  },
  {
    code: 'ko',
    englishName: 'Korean',
    flag: '🇰🇷',
    nativeName: '한국어',
    region: 'Asia Pacific',
  },
  {
    code: 'nl',
    englishName: 'Dutch',
    flag: '🇳🇱',
    nativeName: 'Nederlands',
    region: 'Europe',
  },
  {
    code: 'no',
    englishName: 'Norwegian',
    flag: '🇳🇴',
    nativeName: 'Norsk',
    region: 'Europe',
  },
  {
    code: 'pl',
    englishName: 'Polish',
    flag: '🇵🇱',
    nativeName: 'Polski',
    region: 'Europe',
  },
  {
    code: 'pt',
    englishName: 'Portuguese',
    flag: '🇵🇹',
    nativeName: 'Português',
    region: 'Americas',
  },
  {
    code: 'ru',
    englishName: 'Russian',
    flag: '🇷🇺',
    nativeName: 'Русский',
    region: 'Europe',
  },
  {
    code: 'sv',
    englishName: 'Swedish',
    flag: '🇸🇪',
    nativeName: 'Svenska',
    region: 'Europe',
  },
  {
    code: 'tr',
    englishName: 'Turkish',
    flag: '🇹🇷',
    nativeName: 'Türkçe',
    region: 'Middle East & Africa',
  },
  {
    code: 'vi',
    englishName: 'Vietnamese',
    flag: '🇻🇳',
    nativeName: 'Tiếng Việt',
    region: 'Asia Pacific',
  },
  {
    code: 'zh',
    englishName: 'Chinese',
    flag: '🇨🇳',
    nativeName: '中文',
    region: 'Asia Pacific',
  },
];

const LanguagePickerMeta: Meta = {
  component: LanguagePicker,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/LanguagePicker',
};

export default LanguagePickerMeta;

const Template: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    args.currentLanguage,
  );

  return (
    <LanguagePicker
      {...args}
      currentLanguage={selectedLanguage}
      onLanguageSelect={code => {
        setSelectedLanguage(code);
        // eslint-disable-next-line no-console
        console.log('Language selected:', code);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currentLanguage: 'en',
  languages: sampleLanguages,
};

export const WithRegionTabs = Template.bind({});
WithRegionTabs.args = {
  currentLanguage: 'en',
  languages: sampleLanguages,
  showRegionTabs: true,
};

export const WithoutRegionTabs = Template.bind({});
WithoutRegionTabs.args = {
  currentLanguage: 'en',
  languages: sampleLanguages,
  showRegionTabs: false,
};

export const CustomTitle: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <LanguagePicker
      {...args}
      currentLanguage={selectedLanguage}
      description="Switch to your preferred language to see all content translated."
      languages={sampleLanguages}
      onLanguageSelect={code => {
        setSelectedLanguage(code);
      }}
      title="Select Language"
    />
  );
};

export const CustomTrigger: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const currentLang = sampleLanguages.find(
    lang => lang.code === selectedLanguage,
  );

  return (
    <LanguagePicker
      {...args}
      currentLanguage={selectedLanguage}
      languages={sampleLanguages}
      onLanguageSelect={code => {
        setSelectedLanguage(code);
      }}
      trigger={
        <Button>
          {currentLang?.flag} {currentLang?.nativeName}
        </Button>
      }
    />
  );
};

export const FewLanguages: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const fewLanguages = sampleLanguages.slice(0, 4);

  return (
    <LanguagePicker
      {...args}
      currentLanguage={selectedLanguage}
      languages={fewLanguages}
      onLanguageSelect={code => {
        setSelectedLanguage(code);
      }}
      showRegionTabs={false}
    />
  );
};

export const NonEnglishDefault: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('ja');

  return (
    <VStack>
      <p>Current language: {selectedLanguage}</p>
      <LanguagePicker
        {...args}
        currentLanguage={selectedLanguage}
        languages={sampleLanguages}
        onLanguageSelect={code => {
          setSelectedLanguage(code);
        }}
      />
    </VStack>
  );
};

export const CustomRegions: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const customRegions = ['West', 'East'] as const;
  const languagesWithCustomRegions = sampleLanguages.map((lang, i) => ({
    ...lang,
    region: i % 2 === 0 ? 'West' : 'East',
  }));

  return (
    <LanguagePicker
      {...args}
      currentLanguage={selectedLanguage}
      languages={languagesWithCustomRegions}
      onLanguageSelect={code => {
        setSelectedLanguage(code);
      }}
      regions={customRegions}
    />
  );
};
