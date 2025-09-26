import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'src/components/button/Button';
import {
  setLanguage,
  translate,
  useCurrentLanguage,
  useIsTranslationsLoading,
  useTranslate,
} from 'src/utils/translations';

const TestTranslationComponent = () => {
  const currentLanguage = useCurrentLanguage();
  const translateHook = useTranslate();
  const isLoading = useIsTranslationsLoading();

  const testText = 'Loading';

  return (
    <div style={{ padding: '20px' }}>
      <h2>Translation Test</h2>
      <p>
        <strong>Current Language:</strong> {currentLanguage}
      </p>
      <p>
        <strong>Is Loading:</strong> {isLoading ? 'Yes' : 'No'}
      </p>

      <div style={{ margin: '20px 0' }}>
        <h3>Test Text: "{testText}"</h3>
        <p>
          <strong>Hook Translation:</strong> "{translateHook(testText)}"
        </p>
        <p>
          <strong>Direct Translation:</strong> "{translate(testText)}"
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Button onClick={() => setLanguage('EN')}>English</Button>
        <Button onClick={() => setLanguage('ES')}>Spanish</Button>
        <Button onClick={() => setLanguage('FR')}>French</Button>
        <Button onClick={() => setLanguage('DE')}>German</Button>
        <Button onClick={() => setLanguage('ZH_CN')}>Chinese</Button>
      </div>
    </div>
  );
};

const meta: Meta<typeof TestTranslationComponent> = {
  component: TestTranslationComponent,
  parameters: {
    layout: 'centered',
  },
  title: 'Test/Translation Store',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
