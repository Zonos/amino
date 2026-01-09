import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { TranslateAminoText } from 'src/components/__amino__/TranslateAminoText';
import { Flex } from 'src/components/flex/Flex';
import { LanguageSelector } from 'src/components/select/LanguageSelect';
import { Text } from 'src/components/text/Text';
import {
  setLanguage,
  useCurrentLanguage,
} from 'src/utils/translations/AminoTranslationStore';
import { supportedLanguageOptions } from 'src/utils/translations/supportedLanguages';

const LanguageSelectMeta: Meta = {
  component: LanguageSelector,
  decorators: [
    Component => (
      <div
        style={{
          width: 412,
        }}
      >
        <Component />
      </div>
    ),
  ],
};

export default LanguageSelectMeta;

const LanguageSelectTemplate: StoryFn = ({ ...props }) => {
  const currentLanguage = useCurrentLanguage();

  return (
    <Flex flexDirection="column" gap={16}>
      <LanguageSelector
        {...props}
        languageCode={currentLanguage}
        languageOptions={supportedLanguageOptions}
        setLanguageCode={setLanguage}
      />

      <Flex flexDirection="column" gap={8}>
        <Text fontWeight={600}>Translation Test:</Text>
        <Text>
          <TranslateAminoText text="Loading" />
        </Text>
        <Text>
          <TranslateAminoText text="Select a language" />
        </Text>
        <Text>
          <TranslateAminoText text="Hello" />
        </Text>
      </Flex>
    </Flex>
  );
};

export const BasicLanguageSelect = LanguageSelectTemplate.bind({});

BasicLanguageSelect.args = {};

BasicLanguageSelect.parameters = {
  docs: {
    description: {
      story:
        'Language selector connected to the Amino translation store. Changes here will affect all translated components.',
    },
  },
};

const AllLanguagesTemplate: StoryFn = ({ ...props }) => {
  const currentLanguage = useCurrentLanguage();

  return (
    <Flex flexDirection="column" gap={16}>
      <LanguageSelector
        {...props}
        languageCode={currentLanguage}
        languageOptions={supportedLanguageOptions}
        setLanguageCode={setLanguage}
      />

      <Flex flexDirection="column" gap={8}>
        <Text fontWeight={600}>Current Language: {currentLanguage}</Text>
        <Text>
          Sample translation: <TranslateAminoText text="Loading" />
        </Text>
      </Flex>
    </Flex>
  );
};

export const AllSupportedLanguages = AllLanguagesTemplate.bind({});

AllSupportedLanguages.args = {};

AllSupportedLanguages.parameters = {
  docs: {
    description: {
      story:
        'Language selector with all supported languages from the Amino translation system.',
    },
  },
};

const CustomLanguagesTemplate: StoryFn = ({ ...props }) => {
  const [selectedLang, setSelectedLang] = useState<'en-US' | 'es-MX' | 'fr-CA'>(
    'en-US',
  );

  const customLanguages = [
    { label: 'English (US)', value: 'en-US' },
    { label: 'Español (México)', value: 'es-MX' },
    { label: 'Français (Canada)', value: 'fr-CA' },
  ] as const;

  return (
    <Flex flexDirection="column" gap={16}>
      <LanguageSelector
        {...props}
        languageCode={selectedLang}
        languageOptions={customLanguages}
        setLanguageCode={setSelectedLang}
      />

      <Text>
        Selected: <strong>{selectedLang}</strong>
      </Text>
    </Flex>
  );
};

export const CustomLanguages = CustomLanguagesTemplate.bind({});

CustomLanguages.args = {};

CustomLanguages.parameters = {
  docs: {
    description: {
      story:
        'Example with custom language codes and labels. Shows how the component can work with any string-based language identifiers.',
    },
  },
};
