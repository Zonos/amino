import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-webpack5';

import { Button } from 'src/components/button/Button';
import {
  LanguagePicker,
  type LanguagePickerProps,
} from 'src/components/language-picker/LanguagePicker';
import { VStack } from 'src/components/stack/VStack';

// Sample language data (matching zonos.com's supported languages)
const sampleLanguages = [
  { code: 'da', englishName: 'Danish', flag: '🇩🇰', nativeName: 'Dansk' },
  { code: 'de', englishName: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'el', englishName: 'Greek', flag: '🇬🇷', nativeName: 'Ελληνικά' },
  { code: 'en', englishName: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'es', englishName: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'fr', englishName: 'French', flag: '🇫🇷', nativeName: 'Français' },
  {
    code: 'id',
    englishName: 'Indonesian',
    flag: '🇮🇩',
    nativeName: 'Bahasa Indonesia',
  },
  { code: 'it', englishName: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'ja', englishName: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
  { code: 'ko', englishName: 'Korean', flag: '🇰🇷', nativeName: '한국어' },
  { code: 'nl', englishName: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands' },
  { code: 'no', englishName: 'Norwegian', flag: '🇳🇴', nativeName: 'Norsk' },
  { code: 'pl', englishName: 'Polish', flag: '🇵🇱', nativeName: 'Polski' },
  {
    code: 'pt',
    englishName: 'Portuguese',
    flag: '🇵🇹',
    nativeName: 'Português',
  },
  { code: 'ru', englishName: 'Russian', flag: '🇷🇺', nativeName: 'Русский' },
  { code: 'sv', englishName: 'Swedish', flag: '🇸🇪', nativeName: 'Svenska' },
  { code: 'tr', englishName: 'Turkish', flag: '🇹🇷', nativeName: 'Türkçe' },
  {
    code: 'vi',
    englishName: 'Vietnamese',
    flag: '🇻🇳',
    nativeName: 'Tiếng Việt',
  },
  { code: 'zh', englishName: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
];

const LanguagePickerMeta: Meta = {
  component: LanguagePicker,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/LanguagePicker',
};

export default LanguagePickerMeta;

const Template: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    args.currentLanguage,
  );

  return (
    <div style={{ padding: 24 }}>
      <LanguagePicker
        {...args}
        currentLanguage={selectedLanguage}
        onLanguageSelect={code => {
          setSelectedLanguage(code);
          // eslint-disable-next-line no-console
          console.log('Language selected:', code);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentLanguage: 'en',
  languages: sampleLanguages,
};

export const CustomTitle: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div style={{ padding: 24 }}>
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
    </div>
  );
};

export const CustomTrigger: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const currentLang = sampleLanguages.find(
    lang => lang.code === selectedLanguage,
  );

  return (
    <div style={{ padding: 24 }}>
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
    </div>
  );
};

export const FewLanguages: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const fewLanguages = sampleLanguages.slice(0, 4);

  return (
    <div style={{ padding: 24 }}>
      <LanguagePicker
        {...args}
        currentLanguage={selectedLanguage}
        languages={fewLanguages}
        onLanguageSelect={code => {
          setSelectedLanguage(code);
        }}
      />
    </div>
  );
};

export const NonEnglishDefault: StoryFn<LanguagePickerProps> = args => {
  const [selectedLanguage, setSelectedLanguage] = useState('ja');

  return (
    <div style={{ padding: 24 }}>
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
    </div>
  );
};
