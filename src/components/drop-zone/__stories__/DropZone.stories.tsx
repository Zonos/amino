import { useContext, useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { DropZone as DropZoneComponent } from 'src/components/drop-zone/DropZone';
import {
  ToastContext,
  ToastContextProvider,
} from 'src/components/toast/ToastContext';

const DropZoneMeta: Meta = {
  component: DropZoneComponent,
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
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A72912&t=erzegCytT9AfSn9f-0',
    },
  },
};

export default DropZoneMeta;

const useNotify = () => useContext(ToastContext);

export const DropZone: StoryFn<typeof DropZoneComponent> = props => {
  const { notify } = useNotify();

  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState(false);

  const handleRemoveFile = (index: number) => {
    setFiles(previousFiles => {
      const newFiles = [...previousFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <DropZoneComponent
      {...props}
      dropzoneOptions={{
        maxFiles: 2,
        // 2 KB

        maxSize: 2 << 10,
        multiple: true,
        onDrop: (acceptedFiles, rejections) => {
          setError(!!rejections.length);
          rejections.forEach(rej => {
            const message = `${rej.file.name}: ${rej.errors[0]?.message}`;
            notify(message, { intent: 'error' });
          });
          setFiles(acceptedFiles);
        },
      }}
      error={error}
      helpText="Max file size: 2 KB"
      instructionText="Drop your files here"
      onRemoveFile={index => handleRemoveFile(index)}
      uploadedFiles={files.map(f => ({
        // get preview image from localfile or remote url
        imageUrl: URL.createObjectURL(f),
        name: f.name,
        size: `${f.size} bytes`,
      }))}
    />
  );
};
