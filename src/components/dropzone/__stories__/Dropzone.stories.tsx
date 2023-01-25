import { useContext, useState } from 'react';

import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import { Dropzone as DropZoneComponent } from 'src/components/dropzone/DropZone';
import {
  ToastContext,
  ToastContextProvider,
} from 'src/components/toast/ToastContext';

const DropZoneMeta: Meta = {
  component: DropZoneComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/WnKnmG7L3Q74hqPsw4rbEE/Amino-2.0?node-id=2612%3A72912&t=erzegCytT9AfSn9f-0',
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

export default DropZoneMeta;

const useNotify = () => useContext(ToastContext);

export const DropZone: ComponentStory<typeof DropZoneComponent> = props => {
  const notify = useNotify();

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
      instructionText="Drop your files here"
      helpText="Max file size: 25 MB"
      uploadedFiles={files.map(f => ({
        name: f.name,
        size: `${f.size} bytes`,
      }))}
      error={error}
      onRemoveFile={index => handleRemoveFile(index)}
      dropzoneOptions={{
        onDrop: (acceptedFiles, rejections) => {
          setError(!!rejections.length);
          rejections.forEach(rej => {
            const message = `${rej.file.name}: ${rej.errors[0]?.message}`;
            notify(message, { intent: 'error' });
          });
          setFiles(acceptedFiles);
        },
        multiple: true,
        // maxSize: 25 << 20,
        // eslint-disable-next-line no-bitwise
        maxSize: 2 << 10,
      }}
    />
  );
};
