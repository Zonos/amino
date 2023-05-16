import { useContext, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import type puppeteer from 'puppeteer';
import {
  ToastContext,
  ToastContextProvider,
} from 'src/components/toast/ToastContext';
import { customSnapshotsDir } from 'src/utils/_snapshotsFolder';

import { FileUpload as FileUploadComponent } from '../FileUpload';

const FileUploadMeta: Meta = {
  component: FileUploadComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=72%3A819&t=erzegCytT9AfSn9f-0',
    },
    async puppeteerTest(page: puppeteer.Page) {
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
      });
    },
  },
  decorators: [
    Children => (
      <ToastContextProvider>
        <Children />
      </ToastContextProvider>
    ),
  ],
};

export default FileUploadMeta;

const useNotify = () => useContext(ToastContext);

export const FileUpload: StoryFn<typeof FileUploadComponent> = props => {
  const notify = useNotify();

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  return (
    <FileUploadComponent
      {...props}
      uploadedFile={
        file ? { name: file.name, size: `${file.size} bytes` } : null
      }
      error={error}
      onRemoveFile={() => setFile(null)}
      dropzoneOptions={{
        onDrop: (acceptedFiles, rejections) => {
          setError(!!rejections.length);
          rejections.forEach(rej => {
            const message = `${rej.file.name}: ${rej.errors[0]?.message}`;
            notify(message, { intent: 'error' });
          });
          setFile(acceptedFiles[0] || null);
        },
        // maxSize: 25 << 20,
        // eslint-disable-next-line no-bitwise
        maxSize: 2 << 10,
      }}
    />
  );
};
