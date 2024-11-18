import { useContext, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { FileUpload as FileUploadComponent } from 'src/components/file-upload/FileUpload';
import {
  ToastContext,
  ToastContextProvider,
} from 'src/components/toast/ToastContext';

const FileUploadMeta: Meta = {
  component: FileUploadComponent,
  decorators: [
    Children => (
      <ToastContextProvider>
        <Children />
      </ToastContextProvider>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=72%3A819&t=erzegCytT9AfSn9f-0',
    },
  },
};

export default FileUploadMeta;

const useNotify = () => useContext(ToastContext);

export const FileUpload: StoryFn<typeof FileUploadComponent> = props => {
  const { notify } = useNotify();

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  return (
    <FileUploadComponent
      {...props}
      dropzoneOptions={{
        // maxSize: 25 << 20,
        // eslint-disable-next-line no-bitwise
        maxSize: 2 << 10,
        onDrop: (acceptedFiles, rejections) => {
          setError(!!rejections.length);
          rejections.forEach(rej => {
            const message = `${rej.file.name}: ${rej.errors[0]?.message}`;
            notify(message, { intent: 'error' });
          });
          setFile(acceptedFiles[0] || null);
        },
      }}
      error={error}
      onRemoveFile={() => setFile(null)}
      uploadedFile={
        file ? { name: file.name, size: `${file.size} bytes` } : null
      }
    />
  );
};
